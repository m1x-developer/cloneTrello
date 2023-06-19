// import { useEffect, useState } from 'react'
//
// export const useRequest = <Query, Result>({
// 	method,
// 	successCallback,
// 	failCallback,
// 	exceptionCallback,
// 	commonCallback,
// 	methodDependencies,
// }: {
// 	method: (query: Query) => Promise<Result>
// 	successCallback?: (data: Result) => void
// 	failCallback?: (error: Error) => void
// 	exceptionCallback?: (error: Error) => void
// 	commonCallback?: () => void
// 	methodDependencies?: any[]
// }): [() => void, Result | null, boolean, Error | null] => {
// 	const [data, setData] = useState<Result | null>(null)
// 	const [loading, setLoading] = useState<boolean>(false)
// 	const [error, setError] = useState<Error | null>(null)
//
// 	const runMethod = () => {
// 		setLoading(true)
// 		setError(null)
//
// 		method({} as Query)
// 			.then((result) => {
// 				setData(result)
// 				if (successCallback) successCallback(result)
// 			})
// 			.catch((error) => {
// 				setError(error)
// 				if (failCallback) failCallback(error)
// 			})
// 			.catch((error) => {
// 				if (exceptionCallback) exceptionCallback(error)
// 			})
// 			.finally(() => {
// 				setLoading(false)
// 				if (commonCallback) commonCallback()
// 			})
// 	}
//
// 	useEffect(() => {
// 		if (methodDependencies) {
// 			runMethod()
// 		}
// 	}, methodDependencies)
//
// 	return [runMethod, data, loading, error]
// }
//
// export default useRequest

import { useCallback, useState } from 'react'

export type RequestType<Payload = unknown, Result = unknown> = {
	method: (...args: any[]) => Promise<Result>
	successCallback?: (data: Result, model?: Payload) => void | Promise<void>
	failCallback?: (model?: Payload, data?: unknown) => void | Promise<void>
	exceptionCallback?: (error: unknown, model?: Payload) => void | Promise<void>
	commonCallback?: (model?: Payload) => void | Promise<void>
	methodDependencies?: unknown[]
}

export const useRequest = <Payload, Result>({
	method,
	successCallback,
	failCallback,
	exceptionCallback,
	commonCallback,
	methodDependencies,
}: RequestType<Payload, Result>): [
	(model: Payload) => Promise<void>,
	boolean,
	Result | undefined,
] => {
	const [isLoading, setIsLoading] = useState(false)
	const [successData, setSuccessData] = useState<Result>()

	const runMethod = useCallback(async (model?: Payload) => {
		try {
			setIsLoading(true)
			const result = await method(model)

			setSuccessData(result)
			await successCallback?.(result, model)
			await commonCallback?.(model)
		} catch (e) {
			if (exceptionCallback) {
				await exceptionCallback(e, model)
			} else {
				await failCallback?.(model, e)
			}
		} finally {
			setIsLoading(false)
		}
	}, methodDependencies || [])

	return [runMethod, isLoading, successData]
}

export default useRequest

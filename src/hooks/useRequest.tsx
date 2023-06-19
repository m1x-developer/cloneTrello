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
	Result,
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

	return [runMethod, isLoading, successData as Result]
}

export default useRequest

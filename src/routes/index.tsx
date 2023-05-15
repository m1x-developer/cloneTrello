import {useRoutes} from 'react-router-dom';
import {protectedRoutes} from './protected';
import {publicRoutes} from './public';


export const AppRoutes = () => {
    // TODO Временно , пока нет авторизации + сделать экран лоадинга
    const isAuth = true;

    // const commonRoutes = [
    //     {path: '/auth', element: 'LOGIN'},
    //     {path: '/registration/', element: 'Registration'},
    // ];

    const routes = isAuth ? protectedRoutes : publicRoutes;

    return useRoutes([...routes]);
};

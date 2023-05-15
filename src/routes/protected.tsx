import {Kanban} from "../features/Kanban/Kanban";
import {MainLayout} from "../components/MainLayout/MainLayout";

export const protectedRoutes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "kanban",
                element: <Kanban />,
            },
        ],
    },

];

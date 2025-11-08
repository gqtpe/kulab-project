import {createBrowserRouter} from "react-router";
import {RootLayout} from "../layouts/root-layout.tsx";
import {withAntd} from "../hoc/with-antd.tsx";
import {HomePage} from "@pages/home-page";
import SignUpPage from "@pages/sign-up/signup-page.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: withAntd(<RootLayout/>),
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/signup',
                element: <SignUpPage/>
            }
        ]
    },
]);

import {createBrowserRouter} from "react-router";
import {RootLayout} from "../layouts/root-layout.tsx";
import {withAntd} from "../hoc/with-antd.tsx";
import {HomePage} from "@pages/home-page";

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

            }
        ]
    },
]);

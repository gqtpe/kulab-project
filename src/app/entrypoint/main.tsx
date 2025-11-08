import {createRoot} from 'react-dom/client'
//react 19 export compatibility package for antd
import '@ant-design/v5-patch-for-react-19';
import {RouterProvider} from "react-router";
import {router} from "../router/router.tsx";
import {withProviders} from "@/app/providers";


const root = createRoot(document.getElementById('root')!)

const App = withProviders(() => <RouterProvider router={router} />)

root.render(<App />)
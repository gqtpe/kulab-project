import {createRoot} from 'react-dom/client'
//react 19 export compatibility package for antd
import '@ant-design/v5-patch-for-react-19';
import {RouterProvider} from "react-router";
import {router} from "../router/router.tsx";


const root = createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={router}/>)

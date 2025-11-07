import { HeaderC } from "@/widgets/header";
import {Button, Layout} from "antd";
import {Outlet} from "react-router";

const {Content, Footer} = Layout;

export const RootLayout = () => {
    return (
        <Layout className="">
            <HeaderC renderAccountBar={<Button type="primary"><b>Login</b></Button>}/>
            <Content className="flex justify-center items-center min-h-[calc(100vh-64px)]">
                <div className="content-wrapper w-full h-full">
                    <Outlet />
                </div>
            </Content>
            <Footer className="flex justify-center items-center">
                <div className="content-wrapper w-full text-center">
                    KU Lab ©{new Date().getFullYear()} Created by KULab
                </div>
            </Footer>
        </Layout>
    );
};

import {Layout} from "antd";
import {Outlet} from "react-router";
import {useLayoutEffect, useState} from "react";
import {SplashScreenPage} from "@pages/splash-screen-page";
const {Content, Footer} = Layout;
type Loading = 'fulfilled' | 'pending' | 'rejected' | 'idle';

export const RootLayout = () => {
    const [loading, setLoading] = useState<Loading>('pending')
    useLayoutEffect(() => {
        setTimeout(() => {
            setLoading('fulfilled')
        }, 500)
    }, [])
    if (loading === "pending") {
        return <SplashScreenPage/>
    }
    //todo: move to separate file and replace with SplashScreenPage
    return (
        <Layout className="">
            {/*<HeaderC renderAccountBar={<Button type="primary"><b>Login</b></Button>}/>*/}
            <Content className="w-full h-[100vh] flex justify-center items-center">
                <div className="content-wrapper w-full h-full">
                <Outlet/>
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

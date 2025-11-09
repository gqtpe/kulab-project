import {ConfigProvider, Layout, Spin} from 'antd';
import svg from '@shared/assets/logo.svg'

export const SplashScreenPage = () => {
    return (
        <Layout>

            {/* Оборачиваем Spin, чтобы сделать его белым */}
            <ConfigProvider theme={{token: {colorPrimary: '#FFFFFF'}}}>
                <Spin size="large"/>
            </ConfigProvider>

            <img src={svg} alt="logo.svg"/>

        </Layout>
    );
};
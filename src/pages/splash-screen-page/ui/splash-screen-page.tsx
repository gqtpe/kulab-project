import {Flex, Layout, Space} from 'antd';
import svg from '@shared/assets/logo.svg'
import {LoadingOutlined} from "@ant-design/icons";

export const SplashScreenPage = () => {
    return (
        <Layout className=" !bg-primary w-full h-full overflow-hidden">
            <Flex className="h-full" justify="center" align="center">
                <Space direction="vertical" align="center">
                <img src={svg} alt="logo.svg"/>
                    <LoadingOutlined style={{ color: 'white', fontSize: '2rem' }} />
                </Space>
            </Flex>
        </Layout>
    );
};
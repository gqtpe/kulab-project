import {ConfigProvider, theme} from "antd";
import type {ReactNode} from "react";

export const withAntd = (component: ReactNode) => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    motion: false,
                    colorPrimary: '#214765'
                }//todo: delete on prod
            }}
        >
            {component}
        </ConfigProvider>
    );
};
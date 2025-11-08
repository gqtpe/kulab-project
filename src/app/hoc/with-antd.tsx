import {ConfigProvider, theme} from "antd";
import type {ReactNode} from "react";

export const withAntd = (component: ReactNode) => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    motion: false,//todo: delete on prod
                    colorPrimary: '#52B69A',
                    fontSize: 14,
                    fontFamily:  'Open Sans, sans-serif',
                    //Header sizes
                    fontSizeHeading1: 42,
                    fontSizeHeading2: 32,
                    fontSizeHeading3: 28,
                    fontSizeHeading4: 22,
                    colorText: "#000000",
                },
                components: {
                    Typography: {

                    },
                    Input: {
                      padding: 12,
                    },
                },
                }
            }
        >
            {component}
        </ConfigProvider>
    );
};
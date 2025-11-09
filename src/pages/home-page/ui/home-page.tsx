import {Space, Typography} from "antd";
import type {FC} from "react";
import {Link} from "react-router";


export const HomePage: FC = () => (
    <div className="h-full">
        <Space direction="vertical" className="my-2">
            <Typography.Title level={1} code>Show Cases</Typography.Title>
            <Link className="ant-typography" to="/signup">Sign Up</Link>
            <Link className="ant-typography" to="/signin">Sign In</Link>
        </Space>
    </div>
);
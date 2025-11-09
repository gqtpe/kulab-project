import React from 'react';
import {Col, Row, Space, Typography} from 'antd';
import SigninForm from "@widgets/sign-in-form/signin-form.tsx";

const {Title} = Typography
const SigninPage: React.FC = () => {

    return (<Row justify="center" className="h-full" align="top">
            <Col xs={24} md={10}>
                <Space direction="vertical" className="w-full" size="small">
                    <Title level={4} style={{textAlign: 'center'}}>
                        Добро пожаловать в <span className="block text-primary">AgrooPulse</span>
                    </Title>
                    <SigninForm/>
                </Space>
            </Col>
        </Row>
    );
};

export default SigninPage;

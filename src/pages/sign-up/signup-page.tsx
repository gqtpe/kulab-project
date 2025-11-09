import React from 'react';
import {Col, Row, Space, Typography} from 'antd';
import SignupForm from "@widgets/sign-up-form/signup-form.tsx";


const {Title, Paragraph} = Typography
const SignupPage: React.FC = () => {
    return (
        <Row justify="center" className="h-full pt-8" align="top">
            <Col xs={24} md={10}>
                <Space direction="vertical" className="w-full" size="small">
                    <Title level={4} style={{textAlign: 'center'}}>
                        Добро пожаловать в <span className="block text-primary">AgrooPulse</span>
                    </Title>
                    <Paragraph className="!text-gray px-5">
                        Создайте аккаунт, чтобы получить доступ к AgroPulse и управлять своими полями и хозяйством.
                    </Paragraph>
                    <SignupForm/>
                </Space>
            </Col>
        </Row>
    );
};

export default SignupPage;

import React from 'react';
import {Button, Col, Form, Input, Row, Select, Space, Typography} from 'antd';
import {registrationFields} from './signup-page.model.ts';
import {useSignUpForm} from './useSignUpForm.ts';

const {Option, } = Select;
const {Title,Paragraph} = Typography
const SignupPage: React.FC = () => {
    const [form] = Form.useForm();
    const {handleSubmit} = useSignUpForm();

    return ( <Row justify="center" gutter={[48, 24]} className="h-full" align="top">
        <Col xs={24} md={10}>
            <Space direction="vertical" className="w-full" size="small">
            <Title level={4} style={{textAlign: 'center'}}>
                Добро пожаловать в <br/><span style={{color: '#4CAF50'}}>AgrooPulse</span>
            </Title>
            <Paragraph className="!text-gray px-5">
                Создайте аккаунт, чтобы получить доступ к AgroPulse и управлять своими полями  и хозяйством.
            </Paragraph>

            <Form form={form} className="w-full" layout="vertical" onFinish={handleSubmit}>
                {registrationFields.map((field) => (
                    <Form.Item
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        rules={field.rules}
                    >
                        {field.component === 'input' && (
                            <Input size="large" placeholder={field.placeholder}/>
                        )}
                        {field.component === 'password' && (
                            <Input.Password size="large" placeholder={field.placeholder}/>
                        )}
                        {field.component === 'select' && (
                            <Select placeholder={field.placeholder}>
                                <Option value="farmer">Фермер</Option>
                                <Option value="manager">Ассистент</Option>
                                <Option value="manager">Агроном</Option>
                            </Select>
                        )}
                    </Form.Item>
                ))}

                <Form.Item>
                    <Button type="primary" className="" size="large" htmlType="submit" block>
                        Продолжить
                    </Button>
                </Form.Item>
            </Form>
            </Space>
        </Col>
        </Row>
    );
};

export default SignupPage;

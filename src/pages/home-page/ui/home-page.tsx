import {Button, Col, Row, Space, Typography} from "antd";
import type {FC} from "react";
import {Link} from "react-router";
import logo2 from "@shared/assets/logo2.svg";
import messages from "@shared/assets/messages.png"; // Убедитесь, что это изображение с прозрачным фоном!

const {Title, Text} = Typography;

export const HomePage: FC = () => (
        <Row justify="center" className="w-full">
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                <Space
                    direction="vertical"
                    align="center"
                    size="middle"
                    className="w-full"
                >
                    <div
                        className="relative  flex justify-center items-center w-16 h-16 rounded-2xl bg-white shadow-logo">
                        <img src={logo2} alt="AgrooPulse Logo"/>
                    </div>


                    <img
                        src={messages}
                        alt="Декоративные сообщения чата"
                        className="w-full max-w-md "
                        style={{width: '100%',}}
                    />

                    <div className="p-6 md:p-8 rounded-2xl text-center bg-white w-full  shadow-md">
                        <Space direction="vertical" className="w-full" size="large">
                            <Title level={4} className="text-center !mb-0">
                                Цифровое управление сельским хозяйством с
                                <span style={{color: '#2F855A', fontWeight: 'bold'}}> AgrooPulse</span>
                            </Title>

                            {/* Описание */}
                            <Text type="secondary" className="text-center">
                                Используйте технологии и аналитику данных, чтобы повысить эффективность фермы и получить
                                максимальный урожай
                            </Text>

                            {/* Кнопки */}
                            <Link to="/signup">
                                <Button size="large" className="w-full" type="primary">
                                    Начать
                                </Button>
                            </Link>
                            <Link to="/signin">
                                <Button size="large" className="w-full" type="default">
                                    У меня есть Аккаунт
                                </Button>
                            </Link>
                        </Space>
                    </div>
                </Space>
            </Col>
        </Row>
);
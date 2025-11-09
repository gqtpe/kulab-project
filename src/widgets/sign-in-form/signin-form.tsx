import {Button, Form, Input, Select} from "antd";
import {signInFields} from "@widgets/sign-in-form/signin-page.model.ts";
const {Option,} = Select;
const SigninForm = () => {
    const [form] = Form.useForm();

    const handleSubmit = ()=>{

    }
    return (
        <Form form={form} className="w-full" layout="vertical" onFinish={handleSubmit}>
            {signInFields.map((field) => (
                <Form.Item
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    rules={field.rules}
                >
                    {field.component === 'select' && (
                        <Select placeholder={field.placeholder}>
                            <Option value="farmer">Фермер</Option>
                            <Option value="manager">Ассистент</Option>
                            <Option value="manager">Агроном</Option>
                        </Select>
                    )}
                    {field.component === 'input' && (
                        <Input size="large" placeholder={field.placeholder}/>
                    )}
                    {field.component === 'password' && (
                        <Input.Password size="large" placeholder={field.placeholder}/>
                    )}

                </Form.Item>
            ))}
            <Form.Item>
                <Button type="primary" className="" size="large" htmlType="submit" block>
                    Продолжить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SigninForm;
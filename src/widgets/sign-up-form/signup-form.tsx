import {Button, Form, Input, Select} from "antd";
import {signUpFields} from "@widgets/sign-up-form/signup-page.model.ts";
const {Option,} = Select;
const SignupForm = () => {
    const [form] = Form.useForm();

    const handleSubmit = ()=>{

    }
    return (
        <Form form={form} className="w-full" layout="vertical" onFinish={handleSubmit}>
            {signUpFields.map((field) => (
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
    );
};

export default SignupForm;
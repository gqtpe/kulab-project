// Интерфейс данных формы
import type {Rule} from "antd/es/form";

export interface SignUpFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}


export const signUpFields: Array<{
    name: keyof SignUpFormValues;
    label: string;
    placeholder: string;
    rules: Rule[];
    component: 'input' | 'password' | 'select';
}> = [
    {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Введите имя',
        rules: [{required: true, message: 'Введите имя'}],
        component: 'input',
    },
    {
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Введите фамилию',
        rules: [{required: true, message: 'Введите фамилию'}],
        component: 'input',
    },
    {
        name: 'email',
        label: 'Электронная почта',
        placeholder: 'Введите email',
        rules: [
            {required: true, message: 'Введите email'},
            {type: 'email', message: 'Неверный формат email'},
        ],
        component: 'input',
    },
    {
        name: 'password',
        label: 'Пароль',
        placeholder: 'Введите пароль (мин. 8 символов)',
        rules: [
            {required: true, message: 'Введите пароль'},
            {min: 8, message: 'Минимум 8 символов'},
        ],
        component: 'password',
    },
    {
        name: 'role',
        label: 'Роль',
        placeholder: 'Выберите роль',
        rules: [{required: true, message: 'Выберите роль'}],
        component: 'select',
    },
];

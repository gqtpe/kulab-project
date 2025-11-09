// Интерфейс данных формы
import type {Rule} from "antd/es/form";

export interface SignUpFormValues {
    email: string;
    password: string;
    role: string;
}


export const signInFields: Array<{
    name: keyof SignUpFormValues;
    label: string;
    placeholder: string;
    rules: Rule[];
    component: 'input' | 'password' | 'select';
}> = [
    {
        name: 'role',
        label: 'Роль',
        placeholder: 'Выберите роль',
        rules: [{required: true, message: 'Выберите роль'}],
        component: 'select',
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

];

import { useCallback } from 'react';
import { message } from 'antd';
import type { RegistrationFormValues, RegistrationResponse } from './signup-page.model.ts';

export const useSignUpForm = () => {
    const handleSubmit = useCallback(async (values: RegistrationFormValues) => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data: RegistrationResponse = await response.json();

            if (data.success) {
                message.success('Регистрация прошла успешно!');
            } else {
                message.error(data.message || 'Ошибка регистрации');
            }
        } catch {
            message.error('Ошибка при отправке данных');
        }
    }, []);

    return { handleSubmit };
};

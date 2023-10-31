import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().email('Неверный E-mail').required('E-mail обязателен'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .max(32, 'Пароль должен быть не более 32 символов')
    .required('Пароль обязателен')
})

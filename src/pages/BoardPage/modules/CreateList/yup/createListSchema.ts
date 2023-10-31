import * as yup from 'yup'

export const createListSchema = yup.object({
  boardName: yup.string().required('Поле обязательно'),
})

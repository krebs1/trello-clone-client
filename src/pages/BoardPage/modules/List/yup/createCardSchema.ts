import * as yup from 'yup'

export const createCardSchema = yup.object({
  cardName: yup.string().required('Поле обязательно'),
})

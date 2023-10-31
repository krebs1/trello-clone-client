import * as yup from 'yup'

export const createSchema = yup.object({
  name: yup.string().required('Название доски обязательно'),
})

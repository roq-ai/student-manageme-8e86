import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  credits: yup.number().integer().required(),
  school_id: yup.string().nullable().required(),
  teacher_id: yup.string().nullable().required(),
});

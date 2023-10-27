import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  subject: yup.string().required(),
  hire_date: yup.date().required(),
  termination_date: yup.date().nullable(),
  department: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  grade_level: yup.string().required(),
  enrollment_date: yup.date().required(),
  graduation_date: yup.date().nullable(),
  major: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});

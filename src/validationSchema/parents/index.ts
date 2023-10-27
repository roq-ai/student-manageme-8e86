import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  relationship: yup.string().required(),
  phone_number: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip_code: yup.string().required(),
  user_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { parentValidationSchema } from 'validationSchema/parents';
import { UserInterface } from 'interfaces/user';
import { StudentInterface } from 'interfaces/student';
import { ParentInterface } from 'interfaces/parent';

function ParentCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ParentInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.parent.create({ data: values as RoqTypes.parent });
      resetForm();
      router.push('/parents');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ParentInterface>({
    initialValues: {
      relationship: '',
      phone_number: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      user_id: (router.query.user_id as string) ?? null,
      student_id: (router.query.student_id as string) ?? null,
    },
    validationSchema: parentValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Parents',
              link: '/parents',
            },
            {
              label: 'Create Parent',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Parent
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.relationship}
            label={'Relationship'}
            props={{
              name: 'relationship',
              placeholder: 'Relationship',
              value: formik.values?.relationship,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.phone_number}
            label={'Phone Number'}
            props={{
              name: 'phone_number',
              placeholder: 'Phone Number',
              value: formik.values?.phone_number,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.address}
            label={'Address'}
            props={{
              name: 'address',
              placeholder: 'Address',
              value: formik.values?.address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.city}
            label={'City'}
            props={{
              name: 'city',
              placeholder: 'City',
              value: formik.values?.city,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.state}
            label={'State'}
            props={{
              name: 'state',
              placeholder: 'State',
              value: formik.values?.state,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.zip_code}
            label={'Zip Code'}
            props={{
              name: 'zip_code',
              placeholder: 'Zip Code',
              value: formik.values?.zip_code,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<StudentInterface>
            formik={formik}
            name={'student_id'}
            label={'Select Student'}
            placeholder={'Select Student'}
            fetcher={() => roqClient.student.findManyWithCount({})}
            labelField={'grade_level'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/parents')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'parent',
    operation: AccessOperationEnum.CREATE,
  }),
)(ParentCreatePage);

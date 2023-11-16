import { useFormik } from 'formik';

import { Button } from 'CommonStyle/Buttons/Button.styled';
import { RouterLink } from 'CommonStyle/RouterLink/RouterLink.styled';
import { Title } from 'CommonStyle/Title/Title.styled';

import { AuthForm } from 'components/forms/AuthForm.styled';
import { Input } from 'components/forms/Input.styled';
import { FormLabel } from 'components/forms/FormLabel.styled';
import { InputError } from 'components/forms/InputError.styled';
import SignLayout from 'components/SignLayout/SignLayout';

import { recoverySchema } from 'js/validation/schemas';

const ForgotPasswordPage = () => {
  const { values, touched, errors, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: recoverySchema,
  });
  return (
    <SignLayout>
      <AuthForm>
        <Title>Password recovery</Title>
        <FormLabel>
          Enter your email
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            $error={touched.email && errors.email}
          />
          {touched.email && errors.email && (
            <InputError>{errors.email}</InputError>
          )}
        </FormLabel>
        <Button type="submit">Send</Button>
        <RouterLink to="/signin">Sign in</RouterLink>
      </AuthForm>
    </SignLayout>
  );
};

export default ForgotPasswordPage;

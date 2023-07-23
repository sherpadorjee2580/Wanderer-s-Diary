import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.number()
    .min(10, 'Too Short!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
 
});

 const Login = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
       
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="phoneNumber" placeholder="Phone Number"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}<br></br><br></br>
          <Field name="password" type="Password" placeholder="Password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}<br></br><br></br>
         
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <p>Don't have an account? <Link href="/register">Sign up</Link></p>
  </div>
);
 export default Login;
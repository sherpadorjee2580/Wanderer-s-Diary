import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  middleName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  address: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const handleRegister=async(values)=>{
  const {password, ...formFields}=values
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formFields)
      };
       await fetch('http://localhost:4000/register',requestOptions)
}
 const register = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        address: '',
        password: ''
      }}
      
      signup={SignupSchema}
      onSubmit={values => {
        handleRegister(values)
        
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" type="text" placeholder="First Name" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
           <Field name="middleName" type="text" placeholder="Middle Name" />
          {errors.middleName && touched.middleName ? (
            <div>{errors.middleName}</div>
          ) : null}
          <Field name="lastName" type="text" placeholder='Last Name' />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <br></br><br></br>
          <Field name="email" type="email" placeholder="Email or Phone Number"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br></br><br></br>

          <Field name="password" type="text" placeholder='New Password' />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          
          <p>Date of Birth</p>
          <Field name="year" type="box" placeholder='Year' />
          {errors.year && touched.year ? (
            <div>{errors.year}</div>
          ) : null}
            <Field name="month" type="box" placeholder='Month' />
          {errors.month && touched.month ? (
            <div>{errors.month}</div>
          ) : null}
            <Field name="day" type="box" placeholder='Day' />
          {errors.day && touched.day ? (
            <div>{errors.day}</div>
          ) : null}
<br></br><br></br>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <p>Already have an account? <Link href="/Login">Log In</Link></p>
  </div>
);
export default register;
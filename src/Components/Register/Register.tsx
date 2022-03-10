import * as React from 'react'
// @ts-ignore
import style from './Register.module.css'
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {loginThunk, setRegisterUserDataAC} from "../../reducers/auth-reducer";
import {MyCheckbox, MyTextInput} from "../Formik/FormikForms";
import {useDispatch} from "react-redux";
const Register = () => {
    let dispatch = useDispatch()
    return (
        <div>
            return (

            <div className={style.registerPage }>

                <Formik
                    initialValues={{
                        name: '',
                        lastName:'',
                        email: '',
                        password: '',
                        confirmedPassword: ''

                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Required'),
                        lastName: Yup.string()
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .required('Required'),
                        confirmedPassword: Yup.string()
                            .required('Required')

                    })}
                    onSubmit={(values, { setSubmitting }) => {


                        let {name,lastName,email,password,confirmedPassword} = values

                        dispatch(setRegisterUserDataAC(name,lastName,email,password,confirmedPassword));


                    }}
                >
                    <Form>
                        <MyTextInput
                            label="name"
                            name="name"
                            type="text"
                            placeholder="type name..."
                        />

                        <MyTextInput
                            label="lastName"
                            name="lastName"
                            type="text"
                            placeholder="type last name..."
                        />
                        <MyTextInput
                            label="email"
                            name="email"
                            type="text"
                            placeholder="type email..."
                        />
                        <MyTextInput
                            label="password"
                            name="password"
                            type="password"
                            placeholder="type password..."
                        />
                        <MyTextInput
                            label="confirmedPassword"
                            name="confirmedPassword"
                            type="password"
                            placeholder="confirm password..."
                        />


                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
            )
        </div>
    )
}

export default Register
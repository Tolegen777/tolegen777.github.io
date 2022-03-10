import * as React from 'react'
// @ts-ignore
import style from './LogIntoPage.module.css'
import {useDispatch, useSelector} from "react-redux";

// @ts-ignore
import {loginThunk} from "../../reducers/auth-reducer.ts";
// @ts-ignore
import {getError, getIsError, getUserAuth} from "../../reducers/auth-selector.ts";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {Form, Formik} from "formik";
// @ts-ignore
import {MyCheckbox, MySelect, MyTextInput} from "../Formik/FormikForms.tsx";
import {useState} from "react";


type FormValues = {
    email: string;
    password: string;
}

type OtherProps = {
    message: string;
}


const LogIntoPage = (props) => {
    let isAuth = useSelector(getUserAuth);
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let someErrorMessage = useSelector(getError);
    let isError = useSelector(getIsError);

    let [isDisabled,setDisabled] = useState(false);





    if (isAuth) navigate('/home');
    return (

        <div className={style.register }>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe:false

                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    let {email,password,rememberMe} = values
                    dispatch(loginThunk(email,password,rememberMe));


                }}
            >

                <Form className={style.form}>
                    <div>
                        <MyTextInput
                            name="email"
                            type="text"
                            placeholder="type email..."
                        />
                    </div>

                    <div>
                        <MyTextInput

                            name="password"
                            type="password"
                            placeholder="type password..."
                        />
                    </div>
                    <MyCheckbox name="rememberMe">
                        <span className={style.rememberMe}> Remember me</span>
                    </MyCheckbox>

                    <button type="submit" className={style.formButton}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LogIntoPage
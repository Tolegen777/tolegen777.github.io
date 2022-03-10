import * as React from "react";
// @ts-ignore
import style from "./ContactContent.module.css"
// @ts-ignore
import {MyCheckbox, MyTextArea, MyTextInput} from "../Formik/FormikForms.tsx";
import * as Yup from "yup";
import {loginThunk} from "../../reducers/auth-reducer";
import {Form, Formik} from "formik";
// @ts-ignore
import {setMessageAC} from "../../reducers/contactContent-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import SupportInfo from "../SupportInfo/SupportInfo.tsx";
// @ts-ignore
import home from "../../assets/images/house.png"
// @ts-ignore
import phone from "../../assets/images/phone.png"
// @ts-ignore
import message from "../../assets/images/message.png"
import {useNavigate} from "react-router-dom";
// @ts-ignore
import {getUserAuth} from "../../reducers/auth-selector.ts";

type PropsType = {

}



const ContactContent:React.FC<PropsType> = (props) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let isAuth = useSelector(getUserAuth)

    let handleClick = () => {
       if (isAuth==false) {
           alert("You are not authorized!")
           navigate('/login')
       }
       else {
           alert("Your message successfully send!")
       }

    }
    return (
        <div className={style.contactContent}>
            <div className={style.mainText}>Get in touch</div>
            <div className={style.formsContentDiv}>

                <div className={style.forms}>
                    <Formik
                        initialValues={{
                            text: '',
                            name: '',
                            email: '',


                        }}
                        validationSchema={Yup.object({
                            text: Yup.string().
                            required('Required'),
                            name: Yup.string()
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),


                        })}
                        onSubmit={(values,{ resetForm } ) => {
                            let {text,name,email} = values
                            console.log(text,name,email)
                            dispatch(setMessageAC(text,name,email));
                            handleClick()
                            resetForm()
                            //dispatch(setMessageAC('','',''))


                        }}
                    >
                        <Form>
                            <div  className={style.formElements}>
                                <MyTextArea
                                    name="text"
                                    type="text"
                                    placeholder="Enter message..."
                                />
                            </div>

                            <div  className={style.formElements}>
                                <span>
                                    <MyTextInput

                                    name="name"
                                    type="text"
                                    placeholder="type name..."
                                />
                                </span>

                                    <MyTextInput

                                        name="email"
                                        type="email"
                                        placeholder="type email..."
                                    />

                            </div>




                            <button type="submit" className = {style.FormButton}>Send</button>
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className={style.infoContentDiv}>
                <div><SupportInfo iconUrl = {home} main = {"Buttonwood, California."} text = {"Rosemead, CA 91770"}/></div>
                <div><SupportInfo iconUrl = {phone} main = {"+1 253 565 2365"} text = {"Mon to Fri 9am to 6pm"}/></div>
                <div><SupportInfo iconUrl = {message} main = {"support@colorlib.com"} text = {"Send us your!"}/></div>



            </div>

        </div>

    )
}
export default ContactContent
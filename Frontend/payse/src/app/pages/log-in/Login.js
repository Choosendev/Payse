import Link from 'next/link';
import { useRouter } from 'next/router';
import React from "react";
import {
    LoginParent,
    LoginWrapper,
    Wrapper,
    FormHeader
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/Formbutton";
import Checkbox from "../../components/checkbox/Checkbox";
import signupimage from "../../assets/signupimage.svg";
import logo from "../../assets/logo.png";







const Login = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    }; 

    return (
        <LoginParent>
            <LoginWrapper>
                <Wrapper>

                <div><img src={signupimage} alt="signupimage"/></div>
                    <form>
                        <FormHeader>
                            <img src={logo} alt='logo'/>
                            <h3>Log in</h3>
                            <h4> Enter your credentials to access your account</h4>
                        </FormHeader>

                        <FormTextInput
                            labelName="Email address"
                            placeholder="youremail@gmail.com"
                            name="emailAddress"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                 

                 <Checkbox
                            id="checkbox"
                            label="Keep me Sign in."
                            value={checked}
                            onChange={onChange}
                        />
                        <FormButton
                             text="Log in"
                             color="#FF4BED"
                             borderColor="#FF4BED"
                            />
                        

                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#DA8450' }}>Sign up</Link></p>


                    </form>

                </Wrapper>

            </LoginWrapper>
        </LoginParent>

    );
};

export default Login;
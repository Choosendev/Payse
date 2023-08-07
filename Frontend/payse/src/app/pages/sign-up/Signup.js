import React, {useState} from "react";

import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/Formbutton";
import Checkbox from "../../components/checkbox/Checkbox";
import signupimage from "../../assets/signupimage.svg";
import logo from '../../assets/logo.png';






const Signup = () => {
  const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>
                <div><img src={signupimage} alt='signupimage'/></div>
                    <form>
                        <FormHeader>
                            <img src={logo} alt='logo'/>
                            <h3>Create account</h3>

                            
                        </FormHeader>
                        <FormTextInput
                            labelName="First Name"
                            placeholder="first name"
                            name="firstName"

                        />
                        <FormTextInput
                            labelName="Last Name"
                            placeholder="last name"
                            name="LastName"

                        />
                        <FormTextInput
                            labelName="Email"
                            placeholder="email address"
                            name="emailAddress"

                        />
                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                       
                        <FormTextInput
                            labelName="Repeat Password"
                            placeholder="repeat password"
                            name="password"

                        />
                         <Checkbox
                            id="checkbox"
                            label="Keep me Sign in."
                            value={checked}
                            onChange={onChange}
                        />
                       <FormButton
                             text="Create"
                             color="#FF4BED"
                             borderColor="#FF4BED"
                            />

                        <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#da8450' }}>Sign in</Link></p>

                    </form>
                    
                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;
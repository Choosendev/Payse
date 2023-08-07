
import React from "react";
import {
    VerificationParent,
    VerificationWrapper,
    Wrapper,
    FormHeader
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/Formbutton";
import Checkbox from "../../components/checkbox/Checkbox";
import signupimage from "../../assets/signupimage.svg";
import logo from "../../assets/logo.png";







const Verification = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <VerificationParent>
            <VerificationWrapper>
                <Wrapper>

                    <div><img src={signupimage} alt="signupimage" /></div>
                    <form>
                        <FormHeader>
                            <img src={logo} alt='logo'/>
                            <h3>Verification</h3>
                            <h4> Enter your credentials to access your account</h4>
                        </FormHeader>

                        <FormTextInput
                            labelName="Enter verification code sent to your email address"
                            placeholder="code"
                            name="emailAddress"

                        />

                        <Checkbox
                            id="checkbox"
                            label="Keep me Sign in."
                            value={checked}
                            onChange={onChange}
                        />
                        <FormButton
                            text="Continue"
                            color="#FF4BED"
                            borderColor="#FF4BED"
                        />


                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#DA8450' }}>Sign up</Link></p>


                    </form>

                </Wrapper>

            </VerificationWrapper>
        </VerificationParent>

    );
};

export default Verification;
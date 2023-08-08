import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';

export const SignupParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#fff;

     `;

export const SignupWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;

    `;


export const Wrapper = styled.div`
    width: 85vw;
    height: 80vh;
    display: flex;
    background:#1A1818;
    margin-left: 2rem;
   
    & h3 {
        margin-top:2rem;
        font-size:1.5rem;
        font-weight:450;
        line-height:0.1rem;
        color:#fff;
        margin-left:5rem;
    
        
    }
   
    & form {
        width: 60%;
        height: 80%;
        margin-left: 8rem;
        margin-top:3rem;
        color:#fff;
        
    }
    & h4 {
        margin-top:1rem;
        font-size:1rem;
        font-weight:450;
        line-height:1rem;
        color:#fff; 
    }
    
    & p {
        color:#fff;
        line-height:1.5rem;
    }
    `;


    export const FormHeader = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
      
    
    `;



     
   
   


  
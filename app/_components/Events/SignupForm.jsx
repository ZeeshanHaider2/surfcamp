"use client"
import TextInput from "../TextInput"
import { useState } from "react";
import axios from "axios";
import { allDataFilledIn } from "@/utils/validation.utils";

const SignupForm = ({headline, infoText, buttonLabel}) => {
    const [ formData , setFormData] = useState({
    
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
});
const [showConfirmation, setConfirmation] = useState(false);
const [errorMessage, setErrorMessage] = useState(false);

    const onChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
    };

    const onSubmit = async(e) => {
        e.preventDefault();
    const payload = {
        data: {...formData, isGeneralInterest:true}
 };
if (allDataFilledIn(formData)){
  try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
           payload
          );
          setConfirmation(true);
      }catch (err){
        setErrorMessage(
          err.response?.data?.error?.message || "something went wrong")
      }
      }else{
        setErrorMessage("please fill out all fields");
}

 }

  return  (
  <section className="signup-form">
    <div className="signup-form__info">
        <h3 className="signup-form__headline">
            {headline }
        </h3> 
        {infoText}
    </div>
    {showConfirmation ? <div className="signup-form__form">
      <h4>Thank you for signing up. We will get in touch with you soon!</h4>
    </div> :
    <form className="signup-form__form" onSubmit={onSubmit}>
        <div className="signup-form__name-container">
            <TextInput 
              inputName="firstName"
              value={formData.firstName}
              onChange={onChange}
              label ="First Name"
              />
            <TextInput 
              inputName="lastName"
              value={formData.lastName}
              onChange={onChange}
              label ="Last Name"
              />
              </div>
              <TextInput 
              inputName="email"
              value={formData.email}
              onChange={onChange}
              label ="Your email address"
              />
              <TextInput 
              inputName="phone"
              value={formData.phone}
              onChange={onChange}
              label ="Your telephone number"
              />
             <button className="btn btn--medium btn--turquoise" type="submit">
                {buttonLabel || "stay in touch"}
             </button>
             {errorMessage && (
             <p className="copy signup-form__error">{errorMessage}</p>
             )}
    </form>
}
  </section>
  )
}
export default SignupForm
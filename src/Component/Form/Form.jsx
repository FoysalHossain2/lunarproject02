import React from 'react'
import "./Form.css"
import Button from "../../Component/CommonComponent/Button"
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const Form = () => {
  return (
    <div className='formPart'>
        <div className="container">
            <div className='formDiv'>
              <div className="form__innerWrapper">
                <div className="left__part">
                  <h3 className="left-header">
                  <span className='lineBrake'>Let us discuss your</span> marketing strategy!
                  </h3>
                  <div className='liner'></div>
                  <div className="contactUS">
                    <ul>
                      <li><a href="#">Org.nr: 559264-1871</a></li>
                      <li><a href="#">Lunar Holding LDA</a></li>
                      <li><a href="#">info@lunarstrategy.com</a></li>
                      <li><a href="#">+467-20478390</a></li>
                    </ul>
                  </div>
                  <div className="formIcons">
                  <TiSocialFacebook className='socialIcon' />
                  <TiSocialTwitter className='socialIcon'/>
                  <TiSocialLinkedin className='socialIcon' />
                  <IoLogoInstagram className='socialIcon' />
                  </div>
                  <div className=' freConsultationBtn'>
                    <Button btnStyle="ConsultationBtn">Book a free consultation</Button>
                  </div>
                </div>   

                <div className='formRightPart'>
                  <h4 className='als__contact__us'>Or you can also contact us here</h4>
                  <div>
                  <input 
                  type="text" 
                  placeholder='Name' id='name' className='name' value=''/>  
                </div>          
                <div>
                  <input 
                  type="email" 
                  placeholder='Email' id='email' className='email' value=''/> 
                </div>           
                <div>
                  <input 
                  type="text" 
                  placeholder='Subject' id='text' className='subject' value=''/> 
                </div> 

                <div>
                  <textarea name="" id="" cols="50" rows="10"></textarea>          
                </div>   

                <div className='sendBtn'>
                  <Button btnStyle='sendBtn'>Send</Button>
                </div>                  
                </div> 
      

              </div>
            </div>
        </div>
    </div>
  )
}

export default Form
import React, { Component } from 'react';
import "./SignupStyle.css"

export default class SignUp extends Component {
  render() {
    return (
      <div>
         <div class="main-wrap">
           <div class="form-wrap">
               <h1>SIGN <span>UP</span></h1>
               <h6>Welcome to Ghura-ghuri</h6>
               

               <form class="form">
                   <input type="email" onchange="" name="email" id="email" placeholder="Email"/>
                    <br/>
                   <input type="password" name="pass" id="pass" placeholder="Password"/>
                    <br/>
                   <input type="password" name="cpass" id="cpass" placeholder="Confirm Password"/>
                    <br/>
                   <button type="submit" class="form-btn">SIGN UP</button>
               </form>
               {/* <span class="sign-up-with">Or sign up with</span> */}

               
               {/* <div class="social-logo">
                    <a href="#" title="Facebook">
                        <img src="../image/fb.png" alt="Facebook"/>
                    </a>
                    <a href="#" title="Google">
                        <img src="../image/google.png" alt="Google"/>
                    </a>
                    <a href="#" title="Twitter">
                        <img src="../image/twitter.png" alt="Twitter"/>
                    </a>
                    <a href="#" title="Twitter">
                        <img src="../image/linkedin.png" alt="linkedin"/>
                    </a>
               </div> */}
           </div>
       </div>
      </div>
    )
  }
}

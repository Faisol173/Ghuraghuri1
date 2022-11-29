import "./loginStyle.css"

export default function Login() {
  return (
    <div className="main-wrap">
       <div className="outer-wrap">
          <h1>GHURA-GHURI</h1>
            <h3>Log in</h3>
            <hr/>
            {/* <div class="social-login">
                <a href="#">
                    <img src="../image/fb.png" alt=""/>
                </a>
                <a href="#">
                    <img src="../image/google.png" alt=""/>
                </a>
                <a href="#">
                    <img src="../image/twitter.png" alt=""/>
                </a>
                <a href="#">
                    <img src="../image/linkedin.png" alt=""/>
                </a>
            
            </div> */}

            

            <form className="form">
                <label for="email">Email</label>
                <br/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <br/>
                <label for="password">Password</label>
                <br/>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <br/>
                <input type="checkbox" name="check" id="check"/>
                <span class="rm-me">Remember Me</span>
                <a href="#" class="fg-pa">Forgot Password?</a>
                <br/>
                <button type="submit" class="btn">Log in</button>
            </form>
            <div class="terms">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div> 
    </div>
  )
}

import logo from '../static/Logo.svg';
import '../static/index.css';
// import '../static/scripts.js';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const signInUser = () => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/dashboard');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    return (
        <div className="App">
            <div class="login-header" id="header">
                <img src={logo} class="logo" alt=""></img>
            </div>
            <div class="header sticky" id="anim-header">
                <div class="logo-contain">
                    <img src={logo} class="logo" alt=""></img>
                    <span class="name">sift</span>
                </div>
                <div class="button-contain">
                    <div class="log-in">Log In</div>
                    <div class="sign-up">Sign Up</div>
                </div>
            </div>
            <div class="login">
                <span class="landing-text">Back for more?<br></br><span class="landing-text-bold">You're in the right spot.</span></span>
                <div class="input-contain">
                    <input type='text' id='email' class="form-input" placeholder='Email'></input>
                    <input type='password' id='password' class="form-input" placeholder='Password'></input>
                </div>
                <div class="login-button-contain">
                    <button class="start-now" onClick={signInUser}>Sign In</button>
                </div>
            </div>
    
            <span class="bottom-text">sift</span>
        </div>
      );
}

export default Login;

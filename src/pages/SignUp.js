import { auth } from '../firebase';
import logo from '../static/Logo.svg';
import '../static/index.css';
// import '../static/scripts.js';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();

    const createUser = () => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: document.getElementById("name").value,
            }).then(() => {
                navigate('/dashboard');
            })
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
                <img src={logo} class='logo' alt=""></img>
            </div>
            <div class="header sticky" id="anim-header">
                <div class="logo-contain">
                    <img src={logo} class='logo' alt=""></img>
                    <span class="name">sift</span>
                </div>
                <div class="button-contain">
                    <div class="log-in">Log In</div>
                    <div class="sign-up">Sign Up</div>
                </div>
            </div>
            <div class="login">
                <span class="landing-text">Ready to get sifting?<br></br><span class="landing-text-bold">Let's get started.</span></span>
                <div class="input-contain">
                    <div class="input-division-contain">
                        <input type='text' id='name' class="form-input" placeholder='Name'></input>
                        <input type='text' id='email' class="form-input" placeholder='Email'></input>
                    </div>
                    <div class="input-division-contain">
                        <input type='password' id='password' class="form-input" placeholder='Password'></input>
                        <input type='password' id='confirmPassword' class="form-input" placeholder='Confirm Password'></input>
                    </div>
                </div>
                <div class="login-button-contain">
                    <button class="start-now" onClick={createUser}>Sign Up</button>
                </div>
            </div>

            <span class="bottom-text">sift</span>
        </div>
    );
}

export default SignUp;

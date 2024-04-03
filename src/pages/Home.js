import logo from '../static/Logo.svg';
import '../static/index.css';
// import '../static/scripts.js';

const Home = () => {
  return (
    <div className="App">
        <div class="header" id="header">
            <div class="logo-contain">
                <img src={logo} class="logo" alt=""></img>
                <span class="name">sift</span>
            </div>
            <div class="button-contain">
                <a href='/login' class="log-in">Log In</a>
                <a href='/signup' class="sign-up">Sign Up</a>
            </div>
        </div>
        <div class="header sticky" id="anim-header">
            <div class="logo-contain">
                <img src={logo} class="logo" alt=""></img>
                <span class="name">sift</span>
            </div>
            <div class="button-contain">
                <div class="log-in"></div>
                <div class="sign-up"></div>
            </div>
        </div>
        <div class="landing">
            <span class="landing-text">Music classification made<br></br><span class="landing-text-bold">simple.</span></span>
            <span class="landing-subtext">Find the song you're looking for, right when you need it</span>
            <div class="landing-button-contain">
                <div class="start-now">Start Now</div>
                <div class="learn-more">Learn More</div>
            </div>
        </div>

        <div class="process">
            <span class="landing-text">Take a look inside the<br></br><span class="landing-text-bold">process.</span></span>
            <div class="process-content-contain">
                <div class="process-card input">
                    <span class="material-symbols-rounded">input_circle</span>
                    <div class="process-card-content">
                        <span class="card-title">Input</span>
                        <p class="card-desc">Give us a couple of the songs you've had on repeat recently!</p>
                    </div>
                </div>
                <div class="process-card classify">
                    <span class="material-symbols-rounded">browse</span>
                    <div class="process-card-content">
                        <span class="card-title">Classify</span>
                        <p class="card-desc">Your favorite songs will be sorted based on their vibes.</p>
                    </div>
                </div>
                <div class="process-card explore">
                    <span class="material-symbols-rounded">explore</span>
                    <div class="process-card-content">
                        <span class="card-title">Explore</span>
                        <p class="card-desc">Add some new songs to your daily mix with song recommendations.</p>
                    </div>                
                </div>
            </div>
            <div class="start-now-process">Start Now</div>
        </div>

        <div class="creators">
            <span class="landing-text">Learn more about<br></br><span class="landing-text-bold">us.</span></span>
            <div class="creators-content-contain">
                <div class="creators-card-contain">
                    <span class="creators-card-title">Trevor</span>
                    <div class="creators-card trevor">
                    </div>
                </div>
                <div class="creators-card-contain">
                    <span class="creators-card-title">Sheryl</span>
                    <div class="creators-card sheryl">
                    </div>
                </div>
            </div>
        </div>

        <span class="bottom-text">sift</span>
    </div>
  );
}

export default Home;

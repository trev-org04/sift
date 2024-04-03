// import logo from '../static/Logo.svg';
import '../static/index.css';
// import '../static/scripts.js';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useStateValue } from "../StateProvider";

const Dashboard = () => {
    const [{ user }, dispatch] = useStateValue();

    const signOutUser = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error('Sign Out Error', error);
        });
    }

    console.log("USER >>>>>>>>>>");
    console.log(user);
    return (
        <div>
            <div>Welcome, {user?.displayName}</div>
            <button onClick={signOutUser}>Sign Out</button>
        </div>
    );
}

export default Dashboard;

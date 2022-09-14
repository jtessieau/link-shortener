import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
    return (
        <>
            <h1>Homepage</h1>

            <p>A simple JS app to create a local store of shortened link.</p>

            <p>
                Exemple:
                <code>
                    https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjl1_vp_ZT6AhUQ5hoKHUCcDu4QFnoECAYQAQ&url=https%3A%2F%2Furlz.fr%2F&usg=AOvVaw2MrPhye9xnJSRqXK5ELgC6
                </code>
                became
                <code> http://localhost/HoxFoBc3fd</code>
            </p>

            <Link to='/dashboard' id='start-now'>
                Start Now
            </Link>
        </>
    );
}

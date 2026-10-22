import { Photos } from "../../Photos.js";
import classes from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={classes.Footer}>
            <div className={classes.container}>
                <div className={classes.linksGrid}>
                    <div className={classes.column}>
                        <h3>SUPPLEMENT</h3>
                        <ul>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Formula</a></li>
                            <li><a href="#">Immunity</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#"><span>Buy</span></a></li>
                        </ul>
                    </div>

                    <div className={classes.column}>
                        <h3>LYMA LASER</h3>
                        <ul>
                            <li><a href="#">LYMA Laser</a></li>
                            <li><a href="#">Active Mist</a></li>
                            <li><a href="#">Priming Serum</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Results</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#"><span>Buy</span></a></li>
                        </ul>
                    </div>

                    <div className={classes.column}>
                        <h3>ABOUT</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Warranty</a></li>
                        </ul>
                    </div>

                    <div className={classes.column}>
                        <h3>ACCOUNT</h3>
                        <ul>
                            <li><a href="#">Activate</a></li>
                            <li><a href="#">My subscription</a></li>
                            <li><a href="#">Add extras</a></li>
                            <li><a href="#">My orders</a></li>
                            <li><a href="#">Account details</a></li>
                            <li><a href="#">Payment method</a></li>
                            <li><a href="#">Login details</a></li>
                        </ul>
                    </div>
                </div>

                <div className={classes.right_cont}>
                    <div className={classes.newsletter}>
                        <h3>NEWSLETTER</h3>
                        <p>Subscribe to our newsletter.</p>
                        <form className={classes.form}>
                            <input type="email" placeholder="LYMA Newsletter" />
                            <button>SIGN UP</button>
                        </form>
                    </div>

                    <div className={classes.bottomRight}>
                        <div className={classes.socials}>
                            <a href="#"><img src={Photos.y} /></a>
                            <a href="#"><img src={Photos.ink} /></a>
                            <a href="#"><img src={Photos.f} /></a>
                            <a href="#"><img src={Photos.i} /></a>
                            <a href="#"><img src={Photos.p} /></a>
                        </div>
                        <p className={classes.copyright}>© LYMA Life Ltd. 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

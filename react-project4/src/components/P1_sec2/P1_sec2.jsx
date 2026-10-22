import { Photos } from "../../Photos.js"
import classes from "./P1_sec2.module.scss"

export default function P1_sec2() {
    return (
        <>
            <section className={classes.P1_sec2}>
                <div className={classes.left}>
                    <div id="SUPPLEMENT">
                        <h1>Supplement.</h1>
                        <p>Nine powerful ingredients.</p>
                        <p>One ultimate formula.</p>
                        <div className={classes.buts}>
                            <button>DISCOVER</button>
                            <button>BUY</button>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div id="LASER">
                        <h1>Laser.</h1>
                        <p>Ultimate skin regeneration.</p>
                        <p>A new dawn for beauty.</p>
                        <div className={classes.buts}>
                            <button>DISCOVER</button>
                            <button>BUY</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
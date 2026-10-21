import { Photos } from "../../Photos.js"
import classes from"./Footer.module.scss"

export default function Footer() {
    return (
        <>
            <section className={classes.Footer}>
                <div>
                    <h1>Wellness innovation at its scientific best.</h1>
                    <div className={classes.buts}>
                        <button>SUPPLEMENT</button>
                        <button>LASER</button>
                    </div>
                </div>
            </section>
        </>
    )
}
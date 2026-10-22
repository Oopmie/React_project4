import { Photos } from "../../Photos.js"
import classes from"./P1_sec1.module.scss"

export default function P1_sec1() {
    return (
        <>
            <section className={classes.P1_sec1}>
                <div className={classes.container}>
                    <h1>THE FUTURE OF WELLNESS.</h1>
                    <p>The perfect balance of science, nature and technology. Prepare to look and feel your absolute best.</p>
                    <div className={classes.buts}>
                        <button>SUPPLEMENT</button>
                        <button>LASER</button>
                    </div>
                </div>
            </section>
        </>
    )
}
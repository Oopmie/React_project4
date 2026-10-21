import { Photos } from "../../Photos.js"
import classes from "./P1_sec3.module.scss"

export default function P1_sec3() {
    return (
        <>
            <section className={classes.P1_sec3}>
                <div>
                    <h1>THE QUEST FOR BETTER.</h1>
                    <img src={Photos.img3} alt="" />
                    <p>The perfect balance of science, nature and technology. Prepare to look and feel your absolute best.</p>
                </div>
            </section>
        </>
    )
}
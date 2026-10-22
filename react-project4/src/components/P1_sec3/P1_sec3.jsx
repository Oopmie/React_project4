import { Photos } from "../../Photos.js"
import classes from "./P1_sec3.module.scss"

export default function P1_sec3() {
    return (
        <>
            <section className={classes.P1_sec3}>
                <div>
                    <h1>THE QUEST FOR BETTER.</h1>
                    <img src={Photos.img3} alt="" />
                    <p>At LYMA, we’re always searching for the perfect balance of science, nature and technology. Every LYMA product has been designed to work together. We know that when we discover the best, you’ll discover yours.</p>
                </div>
            </section>
        </>
    )
}
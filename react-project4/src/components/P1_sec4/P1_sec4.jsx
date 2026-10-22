import classes from "./P1_sec4.module.scss"

export default function P1_sec4() {
    return (
        <>
            <section className={classes.P1_sec4}>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <h1>Wellness innovation at its scientific best.</h1>
                        <div className={classes.buts}>
                            <button><a href="#SUPPLEMENT">SUPPLEMENT</a></button>
                            <button><a href="#LASER">LASER</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
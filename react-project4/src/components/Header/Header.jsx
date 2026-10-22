import { Photos } from "../../Photos.js"
import "../Header/header.module.scss"
export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="#SUPPLEMENT">SUPPLEMENT</a></li>
                        <li><a href="#LASER">LASER</a></li>
                        <li>REVIEWS</li>
                        <li>JOURNAL</li>
                        <li>ABOUT</li>
                    </ul>
                    <div className="logo">
                        <img src={Photos.logo} alt="" />
                    </div>
                    <ul>
                        <li>HELP & SUPPORT</li>
                        <li>ACTIVATE</li>
                        <li>ACCOUNT</li>
                        <button>BUY</button>
                    </ul>
                </nav>
            </header>
        </>
    )
}
import Link from "next/link";
import Image from 'next/image';
import Logo from "../public/img/Logo_Ver0.1.png";


function WelcomePage() {
    return(
        <div className="welcome-bg">
            <Image 
                className="welcome-logo"
                src={Logo}
                alt="custom logo for this web site" 
                width={200}
                height={200}
            />
            <Link href="/list">
                <button className="enter-button">ENTER</button>
            </Link>
        </div>
    );
}

export default WelcomePage;
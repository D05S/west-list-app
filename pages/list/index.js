import Image from 'next/image'
import Logo from "../public/img/Logo_Ver0.1.png"

function ListPage() {
    return(
        <div>
            <Image 
                className="welcome-logo"
                src={Logo}
                alt="custom logo for this web site" 
                width={200}
                height={200}
            />
            <h3>Zde bude seznam písní</h3>
        </div>
    )
}

export default ListPage;
import Link from "next/link";


function ListTemplate (props){
    return(
        <div>
            <Link href={props.link}>
                <button className="song-button">{props.name}</button>
            </Link>
        </div>

    )
}


export default ListTemplate;
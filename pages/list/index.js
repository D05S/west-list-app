
import Image from 'next/image';
import Logo from '/public/img/Logo_Ver0.1.png';
import ListTemplate from './linktemplate';
import songs from "/api/data";


function listOfSongs(song){
    return <ListTemplate 
        name={song.name}
        link={song.link}
    />;
}


function ListPage() {

console.log(songs);

    return(
        <div className="list">
            <Image 
                className="secondary-logo"
                src={Logo}
                alt="custom logo for this web site" 
                width={60}
                height={60}
            /> 
            <div className='space'>
                {songs.map(listOfSongs)}
            </div>
            {/* <div className='bottom-position'>
                <p></p>
            </div> */}
        </div>
    )
}

export default ListPage;
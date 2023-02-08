import Image from 'next/image';
import Logo from '/public/img/Logo_Ver0.1.png';
import ListTemplate from '../../template/linktemplate';
import songs from "../api/data";

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
            <div className="space">
                {songs.map(listOfSongs)}
            </div>
            <div className='bar'>
                {/* Button trigger modal */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                New Song
                </button>

                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Přidej novou písničku</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="namesong" aria-describedby="title" placeholder='Název Songu'/>
                                    </div>
                                    <div class="mb-3">
                                       <input type="url" class="form-control" id="urlsong" placeholder='URL Songu'/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListPage;
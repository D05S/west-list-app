import Image from 'next/image';
import Logo from '/public/img/Logo_Ver0.1.png';
import ListTemplate from '../../template/linktemplate';
import addTest from '../api/test/add';
import { useState } from 'react';
import theWest from '../../models/thewestmodel';

function listOfSongs(addTest){
    return <ListTemplate 
        name={addTest.title}
        link={addTest.url}
    />;
}

function ListPage() {
    const [name, setName] = useState();
    const [url, setUrl] = useState();

    const [headingText, setHeading] = useState();
    const [secondText, setSecond] = useState();

    function handleChangeName(event){
        setName(event.target.value);
    };

     function handleChangeUrl(event){
         setUrl(event.target.value);
     };

    function handleClick(){
        setHeading(name);
        setSecond(url);

        const res = theWest.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
        console.log({name} | {url});
    };

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
                {addTest.map(listOfSongs)}
            </div>
            <div className='bar'>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                New Song
                </button>
            </div>
            {/* Modal start */}
            <div className="modal fade modal-fullscreen" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Přidej novou písničku</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleClick}>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">{headingText}</label>
                                    <input type="text" className="form-control" id="namesong" aria-describedby="title" placeholder='Název Songu' value={name} onChange={handleChangeName}/>
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">{secondText}</label>
                                    <input type="url" className="form-control" id="urlsong" placeholder='URL Songu' value={url} onChange={handleChangeUrl}/>
                                </div>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal end */}
        </div>
    )
}

export default ListPage;
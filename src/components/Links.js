import axios from 'axios';
import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Links = () => {
    const [shortLink,setShortLink] = useState("");
    const [link, setLink] = useState("");
    const [isShortLink,setIsShortLink] = useState(false);
    const [btnClass, setBtnClass] = useState("teal");
    const [copy, setCopy] = useState("Copy");

    const encodedParams = new URLSearchParams();
    encodedParams.set('url', `${link}`);

    const options = {
    method: 'POST',
    url: 'https://url-shortener-service.p.rapidapi.com/shorten',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '29facf0dd0msh5ef568fd39aaf1dp12d176jsnfc5b524359f6',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    data: encodedParams,
    };

    
    const shortenLink = async () => {

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setShortLink(response.data.result_url);
            setIsShortLink(true);
        } catch (error) {
            console.error(error);
        }


        // try{
        //     const res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${link}`);
        //     console.log(res.data.result.short_link);
        //     setShortLink(res.data.result.short_link);
        //     setIsShortLink(true);
        // }catch(err){
        //     console.log(err);
        // }   
    }



    const handleClick = (e) => {
        e.preventDefault();
        shortenLink(link);
        setBtnClass("teal");
        setCopy("Copy");
    }
    const copyText = () => { 
        
        setBtnClass("violet");
        setCopy("Copied");
    };

  return (
    <div className='link-section'>
        <div className='main-link'>
            <div className='input-area'>
                <input placeholder='Shorten a link here' className='link-input' 
                onChange={(e) => {
                    setLink(e.target.value); 
                    setIsShortLink(false);
                    setBtnClass("teal");
                    setCopy("Copy");
                    }}

                />
                <button className='button link-button' onClick={handleClick}>Shorten It!</button>
            </div>
            {!link && <p className='warning'>Please add a link</p>}
        </div>
        {isShortLink && <div className='short-link'>
            <div className='original'>
                <p>{link}</p>
            </div>
            <div className='shorten'>
                <a target='blank' href={`https://${shortLink}`} >{shortLink}</a>
                <CopyToClipboard text={shortLink}>
                    <button className={`button ${btnClass}  link-button`} onClick={copyText}>{copy}</button>
                </CopyToClipboard>
            </div>
        </div>}
        
    </div>
  )
}

export default Links
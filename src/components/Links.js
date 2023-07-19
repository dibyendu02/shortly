import axios from 'axios';
import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Links = () => {
    const [shortLink,setShortLink] = useState("");
    const [link, setLink] = useState("");
    const [isShortLink,setIsShortLink] = useState(false);
    const [btnClass, setBtnClass] = useState("teal");
    const [copy, setCopy] = useState("Copy");

    const shortenLink = async (link) => {
        try{
            const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);
            console.log(res.data.result.short_link);
            setShortLink(res.data.result.short_link);
            setIsShortLink(true);
        }catch(err){
            console.log(err);
        }   
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
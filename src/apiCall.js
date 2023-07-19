import axios from "axios";
const shortLink = async (link) => {
    try{
        const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
    }catch(err){

    }
}
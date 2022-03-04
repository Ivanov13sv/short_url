import axios from "axios";

export const getUrl = (input) =>{
    return axios(`https://api.shrtco.de/v2/shorten?url=${input}`).then(({data}) => data);
}
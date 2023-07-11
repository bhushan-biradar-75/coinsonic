import { IndeterminateCheckBox } from "@mui/icons-material";
import axios from "axios";
import { GET_COIN_INFO, GET_NEWS } from "../APIURL/Globalurl";
import { REACT_APP_RAPID_API_KEY, REACT_APP__RAPID_API_HOST } from "../Constant/Constant";

export const getCoin = () => {
    return axios.get(GET_COIN_INFO , {
        headers: {
            'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': REACT_APP__RAPID_API_HOST
          }
    })
};

export const getUpdatedNews = async () => {
    return await axios.get(GET_NEWS,{
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '1c9d0c0cdbmsh8816569b6f2b268p1a1869jsn6d9e1884690b',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
          }
    })
}
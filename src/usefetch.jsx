import { useState,useEffect } from "react";

const useFetch = (url) => {
        const [data,setData] = useState([]);
        useEffect(() => {
            const fetchApi = async() => {
                    const response = await fetch(url);
                    const result =  await response.json()
                    setData(result);
            }
            fetchApi();
        },[url])
        return {url,data}
}
export default useFetch
import React, { useContext } from "react";
import { Lname } from "./Search";
function Sresult(){
    const url = useContext(Lname);
    const img = `https://source.unsplash.com/400x300/?${url}`;
    console.log(img);
    return(
        <>
            {url === "" ? "" : <div>
                <img src={img} alt="search"/>
            </div>}
        </>
    )
}
export default Sresult;
import React, { createContext, useState } from "react";
import Sresult from "./Sresult";

const Lname = createContext();
function Search(){
    const [img, setImg] = useState('');
    return(<>
        <Lname.Provider value = {img}><div className="searchbar"><input type='text' placeholder="Search Anything" value={img} onChange={(event) => {setImg(event.target.value)}}/></div><Sresult/></Lname.Provider>
    </>);
}
export default Search;
export {Lname};
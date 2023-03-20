import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Compa(){
    const [num, setNum] = useState();
    const [name, setName] = useState('');
    useEffect(() => {
         async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(name => res.data.name);
            //console.log(res.data.name);
        }
        getData();
    });
    return (<>
        <h1>{name}</h1>
        <select value = {num} onChange={(event) => {
            setNum(num => event.target.value);
        }}>
        <option value='1'> 1 </option>
        <option value='25'> 25 </option>
        <option value='3'> 3 </option>
        <option value='4'> 4 </option>
        <option value='5'> 5 </option>

        </select>
    </>);
}
export default Compa;
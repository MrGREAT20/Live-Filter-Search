import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
function Services(){
    const {fname, lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);
    return(<>
        <h1>Hey, this is the {fname} services page</h1>
        <p>My current Location is {location.pathname}</p>
        {location.pathname === "/service/hi" ? (<button onClick={() => navigate("/")}>Home</button>) : ""}
    </>)
}
export default Services;
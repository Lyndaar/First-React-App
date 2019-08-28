import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Card = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(result=> setData(result.data));
    },[]);

    return(
        <div className= 'card'>
            {data.map(user => (
                <div className = "card-conatainer">
        
            <div> <img src ={`https://robohash.org/${user.username}`} alt = {`${user.username}'s Robot`}/></div>
            <div className= "username">{'Name:'}{user.username}</div>
            <div className= "username">{'Phone'}{user.phone}</div>
            <div className= "username">{'Company'}{user.company.name}</div>
        
            </div>
            ))}
        </div>
    ) 
         }  
         export default Card ;    

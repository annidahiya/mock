import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data,setData]=useState([]);

    const getData=async()=>{
        const res=await axios.get(`https://dog.ceo/api/breeds/list/all`);
        const value=res.data;
        const dataValue = Object.keys(value.message);
        setData(dataValue);
        console.log(dataValue)
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div className='cartContainer'>
        {data.map((el,i)=>(
            // <h3 className="cart" key={i}>{el}</h3>
            <Link className='link1' key={i} to={`/poppy/${el}`}><h3 className="cart">{el}</h3></Link>
        ))}
    </div>
  )
}

export default Home;
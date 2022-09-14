import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Poppy = () => {
    const [poppy,setPoppy]=useState('');
    const { breed_name } = useParams();

    const getPoppy=async()=>{
        try {
            const res=await fetch(`https://dog.ceo/api/breed/${breed_name}/images`);
            const data=await res.json();
            console.log(data)
            setPoppy(data);
        } catch (error) {
            console.log('err',error);
        }
    }
    useEffect(()=>{
        getPoppy();
    },[poppy]);
  return (
    <div>Poppy</div>
  )
}

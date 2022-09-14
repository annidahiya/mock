import './Search.css';
import React, { useEffect, useState } from 'react';

export const Search = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [item,setItem]=useState('');

    const getItem = async () => {
        try {
          const breedname = document.querySelector("#input").value;
          const res = await fetch(`https://dog.ceo/api/breed/${breedname}/images`);
          const data = await res.json();
          setItem(data.message[0]);
          setIsLoading(false);
          const search=document.getElementById('input');
          search.addEventListener('keypress',(event)=>{
            if(event.key=='Enter' && data.message){
                console.log("Data:", data.message);
              setItem(data.message[0]);
            }
        });
        } catch (err) {
          console.log("err:", err);
        }
      };
  return (
    <div className='searchPage'>
        <div>
            <div>
                <input type="text" placeholder='search for items...' id='input' onKeyPress={getItem}/>
            </div>
        </div>
        <div>
        {isLoading && (
        <div>
          <p style={{color:"red", fontSize:"20px"}}>Image is Loading...</p>
        </div>
      )}

      {!isLoading && (
        <div className="imageContainer">
            <img src={item} alt="pic" />
        </div>
      )}
        </div>
    </div>
  )
}

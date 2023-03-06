import React, { useContext } from "react";
import { DataContext } from "../DataContext"
import CompD from './CompD'

export default function CompC() {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>This is Component C</h2>
    
        <p style= {{color: userInfo.favColor}}> {userInfo.name}'s favorite movie is {userInfo.favMovie}</p> 
        <p> and their favorite food is {userInfo.favFood} </p>

      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "aqua",
            favFood: "Ribs"
          })
        }
      >
        Change to Aqua
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "pink",
            favMovie: "Yojimbo"
          })
        }
      >
        Change to Pink
      </button>
      <CompD />
    </div>
  )}
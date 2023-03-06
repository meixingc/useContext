import { useContext } from "react";
import { DataContext } from "../DataContext";

export default function CompD() {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>This is Component D</h2>
      
        <p>{userInfo.name}'s favorite food is </p>
        <p style={{ color: userInfo.favColor }}> {userInfo.favFood} </p>
   
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "brown",
            favMovie: "Airplane!"
          })
        }
      >
        Change to Brown
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favMovie: "Big Lebowski",
            name: "Mr Taubman"
          })
        }
      >
        Change Movie and Name
      </button>
      
      
 
      
    </div>
  )}
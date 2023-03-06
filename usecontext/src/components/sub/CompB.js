import React, { useContext } from "react";
import { DataContext } from "../DataContext";

export default function CompB() {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>This is Component B</h2>
      <p>
        <p>{userInfo.name}'s favorite color is </p>
        <p style={{ color: userInfo.favColor }}>{userInfo.favColor}</p>
      </p>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "orange"
          })
        }
      >
        Change to Orange
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "pink"
          })
        }
      >
        Change to Pink
      </button>
    </div>
  )
}

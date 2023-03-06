import CompB from "./CompB"
import { DataContext } from "../DataContext"
import { useContext } from "react"

export default function CompA() {

    const {userInfo, setUserInfo} = useContext(DataContext)

    return (
        <div>
            <h1> im comp a</h1>
            <p>
                <p>{userInfo.name}'s favorite color is </p>
                <p style={{color: userInfo.favColor}}>{userInfo.favColor}</p>
            </p>
            <button onClick={() => setUserInfo({...userInfo, favColor: 'green'})}>Change to green</button>
            <button onClick={() => setUserInfo({...userInfo, favColor: "blue"})}>Change back to Blue</button>
            
            <CompB />
        </div>
    )
}
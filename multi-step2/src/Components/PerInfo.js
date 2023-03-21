import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserInfo(props){
    const {CountThis, PageReload} = props
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);

    function handleName(e){
        setName(e.target.value)
        console.log(name)
        PageReload(false)
    }

    function handleEmail(e){
        setEmail(e.target.value)
        console.log(email)

    }

    function handlePhone(e){
        setPhone(e.target.value)
        console.log(phone)

    }
    return(
     <>
        <div>
            <h1 className="titles">Personal info</h1>
            <h3 className="subtitles">Please provide your name, email address, and phone number.</h3>
        </div>
        
        <div className="form">
            <label className="formLabel" htmlFor="name">Name</label><br/>
                <input id="name" onChange={handleName}  placeholder="e.g. Stephen King"/><br/>

            <label className="formLabel" htmlFor="email">Email Address</label><br/>
                <input id="email" onChange={handleEmail} placeholder="e.g. stephenking@lorem.com"/><br/>

            <label className="formLabel" htmlFor="number">Phone Number</label><br/>
                <input id="number" onChange={handlePhone} placeholder="e.g. +1 234 567 890"/><br/>

        </div>
    
            
        <Link to="/plans">
            <button className="nextStepBtn" onClick={(() => CountThis(2))}>Next Step</button>
        </Link>

     </>
    )
}
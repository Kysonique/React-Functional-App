import { NavLink } from "react-router-dom";
import "./AddOn.css"

export default function AddOns(props){
    const {CountThis, AddOne, AddTwo, Summarize} = props
    return(
        <>
        <div>
            <h1 className="titles">Pick add-ons</h1>
            <h3 className="subtitles">Add-ons help enhance your gaming experience.</h3>
        </div>    

        <div className="add-container">
            <div className="add-div" type="button" >
                <input className="check-btn" 
                id="Online service"
                value={AddOne}
                onClick={() => Summarize()} 
                type="checkbox"/>
                <div className="add-titles">
                    <p className="add-p1">Online service</p>
                    <p className="add-p2">Access to multiplayer games</p>
                </div>
                <p className="addPrice">${AddOne}</p>
            </div>

            <div className="add-div">
                <input className="check-btn" type="checkbox"/>
                <div className="add-titles">
                    <p className="add-p1">Larger storage</p>
                    <p className="add-p2">Extra 1TB of cloud save</p>
                </div>
                <p className="addPrice">${AddTwo}</p>
            </div>

            <div className="add-div">
                <input className="check-btn" type="checkbox"/>
                <div className="add-titles">
                    <p className="add-p1">Customizable profile</p>
                    <p className="add-p2">Custom theme on your profile</p>
                </div>
                <p className="addPrice">${AddTwo}</p>
            </div>
        </div>

            <NavLink to="/plans">
                <button onClick={() => CountThis(2)}className="prevStepBtn">Go Back</button>
            </NavLink>

            <NavLink to="/summary">
                <button onClick={() => CountThis(4)} className="nextStepBtn">Next Step</button>
            </NavLink>  
        </>
    )
}
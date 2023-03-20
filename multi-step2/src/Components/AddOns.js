import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AddOn.css"


export default function AddOns(props){
    const {CountThis, AddOne, AddTwo, PickAddOns} = props

    const [addedPlan, setAddedPlan] = useState([])


    function PlanArr(e){  
        setAddedPlan((prePlan) => prePlan + [e.target.id, e.target.value]);
        console.log(addedPlan)
    }

    function handleBackBtn(){
        setAddedPlan([]);
        CountThis(2);

    }
    useEffect(() => {
        PickAddOns(addedPlan)
        console.log(addedPlan)

    }, [addedPlan])

    return(
        <>
        <div>
            <h1 className="titles">Pick add-ons</h1>
            <h3 className="subtitles">Add-ons help enhance your gaming experience.</h3>
        </div>    

        <div className="add-container">
            <div className="add-div" type="button">
                <input className="check-btn" 
                id="Online service"
                value={AddOne}
                onClick={PlanArr}
                type="checkbox"
                />
                <div className="add-titles">
                    <p className="add-p1">Online service</p>
                    <p className="add-p2">Access to multiplayer games</p>
                </div>
                <p className="addPrice">${AddOne}</p>
            </div>

            <div className="add-div">
                <input className="check-btn" 
                id="Larger storage"
                value={AddTwo}
                onClick={PlanArr}
                type="checkbox"
                disabled={false}/>
                <div className="add-titles">
                    <p className="add-p1">Larger storage</p>
                    <p className="add-p2">Extra 1TB of cloud save</p>
                </div>
                <p className="addPrice">${AddTwo}</p>
            </div>

            <div className="add-div">
                <input className="check-btn"
                id="Customizable profile"
                value={AddTwo}
                onClick={PlanArr}
                type="checkbox"
                disabled={false}/>
                <div className="add-titles">
                    <p className="add-p1">Customizable profile</p>
                    <p className="add-p2">Custom theme on your profile</p>
                </div>
                <p className="addPrice">${AddTwo}</p>
            </div>
        </div>

            <NavLink to="/plans">
                <button onClick={() => handleBackBtn}className="prevStepBtn">Go Back</button>
            </NavLink>

            <NavLink to="/summary">
                <button onClick={() => CountThis(4)} className="nextStepBtn">Next Step</button>
            </NavLink>  
        </>
    )
}
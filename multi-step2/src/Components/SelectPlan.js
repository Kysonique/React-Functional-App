import { useEffect } from "react"
import { Link } from "react-router-dom"
import './selectPlan.css'

export default function SelectPlan(props){
    const {Duration, ChangeBtn, ArcadePrice, AdvPrice, ProPrice, CountThis, PickPrice, PickName, ThisPrice} = props


    function handleSubmitPlan(e){
        e.stopPropagation();
        PickName(e.target.id);
        PickPrice(e.target.value);
    }

    useEffect(() =>{
        console.log(ThisPrice)
    }, [ThisPrice])

    return(
        <>
        <div>
            <h1 className="titles">Select your plan</h1>
            <h3 className="subtitles">You have the option of monthly or yearly billing.</h3>
        </div>

        <div className="plan-div">
            <button id="Arcade" type="button" value={ArcadePrice} onClick={(e) => handleSubmitPlan(e) } className="pickPlan">
                <img alt="" className="arcadeIMG"/>
                <p className="planType" >Arcade</p>
                <p className="price" >${ArcadePrice}</p>
                <p className="monthsFree" >{(Duration? null: "2 months free")}</p>
            </button>

            <button id="Advanced"  type="button" value={AdvPrice} onClick={(e) => handleSubmitPlan(e) } className="pickPlan">
                <img alt=""className="advIMG" />
                <p className="planType">Advanced</p>
                <p className="price">${AdvPrice}</p>
                <p className="monthsFree">{(Duration? null: "2 months free")}</p>
            </button>

            <button id="Pro"  type="button" value={ProPrice} onClick={(e) => handleSubmitPlan(e) } className="pickPlan">
                <img alt="" className="proIMG" />
                <p className="planType">Pro</p>
                <p className="price">${ProPrice}</p>
                <p className="monthsFree">{(Duration? null: "2 months free")}</p>
            </button>
        </div>
        <button type="button" onClick={() => ChangeBtn()} className="toggle-btn">Monthly, Yearly</button>

            <Link to="/">
                <button onClick={() => CountThis(1)} className="prevStepBtn">Go Back</button>
            </Link>

            <Link to="/add-ons">
                <button onClick={() => CountThis(3)} className="nextStepBtn">Next Step</button>
            </Link>        
        </>
    )
}
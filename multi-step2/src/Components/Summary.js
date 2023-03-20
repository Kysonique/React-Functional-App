import { NavLink } from "react-router-dom";
import AddOns from "./AddOns";
import './Summary.css'

export default function Summary(props){
    const {CountThis, ThisName, ThisPrice, ThisAddOns, Duration} = props

    return(
        <>
            <div>
                <h1 className="titles">Finishing up</h1>
                <h3 className="subtitles">Double-check everything looks OK before confirming.</h3>
            </div>

            <div className="summary-container">
                <div className="total-info">
                    <div className="individual-div">
                        <div>
                            <p>{ThisName} ({(Duration? "Monthly" : "Yearly")})</p>
                            <NavLink to="/plans"><p id="change">Change</p></NavLink>
                        </div>
                        <p className="price-tag">${ThisPrice}</p>
                    </div>
                    <hr id="hr"/>

                    <div className="individual-div">
                        <p>{ThisAddOns}</p>
                        <p className="price-tag">${ThisAddOns}</p>
                    </div>

                    {/* {(ThisAddOns.map((ads) =>
                    <div className="individual-div">
                        <p>{ads.name}</p>
                        <p className="price-tag">${ads.price}</p>
                    </div>))} */}

                </div>

                <div className="individual-div">
                    <p>Total (per {(Duration? "Monthly" : "Yearly")})</p>
                    <p className="price-tag">${ThisPrice}</p>
                </div>
            </div>
            
          
            <NavLink to="/add-ons">
                <button onClick={() => CountThis(3)} className="prevStepBtn">Go Back</button>
            </NavLink>

            <NavLink to="/thanks">
                <button className="confirmBtn">Confirm</button>
            </NavLink>  
        </>
    )
}
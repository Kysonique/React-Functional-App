import { NavLink } from "react-router-dom";
import './Summary.css'

export default function Summary(props){
    const {CountThis} = props
    
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
                            <p>Arcade (Monthly)</p>
                            <NavLink to="/plans"><p id="change">Change</p></NavLink>
                        </div>
                        <p className="price-tag">$$</p>
                    </div>
                    <hr id="hr"/>

                    <div className="individual-div">
                        <p>Online service</p>
                        <p className="price-tag">$$</p>
                    </div>

                    <div className="individual-div">
                        <p>Larger storage</p>
                        <p className="price-tag">$$</p>
                    </div>
                </div>

                <div className="individual-div">
                    <p>Total (per month)</p>
                    <p className="price-tag">$$</p>
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
import { NavLink } from "react-router-dom"
import './NavBar.css'
import { useState } from "react";

export default function NavBar(props){
    const {ThisStep, CountThis} = props
   

    const ActiveState = {
        backgroundColor: "#BEE2FD",
        color: "#022959"
    }

    return(
        <div className='nav-bar'>
            <div className="link-container">
                    <NavLink className="nav-links" to="/">
                            <input type="button" className="number-btn" onClick={() => CountThis(1)} style={(ThisStep === 1 ? ActiveState : null)} value={1}/>
                        <div className="nav-titles" onClick={() => CountThis(1)}>
                            <p className="Title">STEP 1</p>
                            <p className="SubTitle">YOUR INFO</p>
                        </div>
                    </NavLink>
                
                    <NavLink className="nav-links" to="/plans">
                            <input type="button" className="number-btn" onClick={() => CountThis(2)} style={(ThisStep === 2 ? ActiveState : null)} value={2}/>
                        <div className="nav-titles"  onClick={() => CountThis(2)}>
                            <p className="Title">STEP 2</p>
                            <p className="SubTitle">SELECT PLAN</p>
                        </div>
                    </NavLink>      

                    <NavLink className="nav-links" to="/add-ons">
                            <input type="button" className="number-btn" onClick={() => CountThis(3)} style={(ThisStep === 3 ? ActiveState : null)} value={3}/>
                        <div className="nav-titles" typeof="button"  onClick={() => CountThis(3)}>
                            <p className="Title">STEP 3</p>
                            <p className="SubTitle">ADD ONS</p>
                        </div>
                    </NavLink>

                    <NavLink className="nav-links" to="/summary">
                            <input type="button" className="number-btn" onClick={() => CountThis(4)} style={(ThisStep === 4 ? ActiveState : null)} value={4}/>
                        <div className="nav-titles"  onClick={() => CountThis(4)}>
                            <p className="Title">STEP 4</p>
                            <p className="SubTitle">SUMMARY</p>
                        </div>
                    </NavLink>
                </div>  
        </div>
    )
}
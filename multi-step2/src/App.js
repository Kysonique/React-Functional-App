import './App.css';
import {Route, Routes} from 'react-router-dom'
import UserInfo from './Components/PerInfo';
import AddOns from './Components/AddOns';
import SelectPlan from './Components/SelectPlan'
import Summary from './Components/Summary'
import NavBar from './Components/NavBar';
import ThankYou from './Components/ThankYou';
import { useState } from 'react';
import { useToggle } from './Hooks/useToggle';


// const initialPage = {step: 1};
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {step: state.step + 1};
//     case 'decrement':
//       return {step: state.step -1};
//     default:
//       throw new Error();    
//   }
// }

export default function App() {

  const [step, setStep] = useState(1);
  const [toggleValue, setToggleValue] = useState(true);
  const {arcade, advanced, pro, one, two} = useToggle(toggleValue)
  const [plan, setPlan] = useState("")
  const [addOnArr, setAddOnArr] = useState([])
  const [planName, setPlanName] = useState("") 
  const [planPrice, setPlanPrice] = useState(0)



  function changeToggle(){
    if (toggleValue === true){
      setToggleValue(false);
      console.log(false)
    }else{
        setToggleValue(true)
        console.log(true)
      
    }
  }

  return (
    <div className='app-container'>

     <NavBar
     ThisStep={step}
     CountThis={setStep}/>

      <div className='route-div'>
        <Routes>
          <Route path="/" 
            element={<UserInfo 
            CountThis={setStep}/>}/>

          <Route path="/plans" 
            element={<SelectPlan  
            Duration={toggleValue} 
            ChangeBtn={() => changeToggle()}
            ArcadePrice={arcade}
            AdvPrice={advanced}
            ProPrice={pro}
            CountThis={setStep}
            PickPlan={setPlan}
            PickName={setPlanName}
            PickPrice={setPlanPrice}/>}/>

          <Route path="/add-ons" 
            element={<AddOns 
            CountThis={setStep}
            AddOne={one}
            AddTwo={two}
            PickAddOns={setAddOnArr}/> }/>

          <Route path="/summary" 
          element={<Summary 
          CountThis={setStep}
          Duration={toggleValue} 
          PlanType={plan}
          AddOnInfo={addOnArr}
          ThisName={planName}
          ThisPrice={planPrice}
          ThisAddOns={addOnArr}
          />} />

          <Route path="/thanks" element={<ThankYou CountThis={setStep}/>} />
        </Routes>
      </div>
    </div>
  );
}


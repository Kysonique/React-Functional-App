import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom'
import UserInfo from './Components/PerInfo';
import AddOns from './Components/AddOns';
import SelectPlan from './Components/SelectPlan'
import Summary from './Components/Summary'
import NavBar from './Components/NavBar';
import ThankYou from './Components/ThankYou';
import { useEffect, useState } from 'react';
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
  // const [plan, setPlan] = useState("")
  const [addOnIdArr, setAddOnIdArr] = useState([])
  const [addOnValArr, setAddOnValdArr] = useState([])
  const [planName, setPlanName] = useState("") 
  const [planPrice, setPlanPrice] = useState(0)
  const [reFresh, setReFresh] = useState(true)
  

  function changeToggle(){
    if (toggleValue === true){
      setToggleValue(false);
      console.log(false)
    }else{
        setToggleValue(true)
        console.log(true)
      
    }
  }

  useEffect(() => {
    console.log(reFresh)
  },[reFresh])

  return (
    <div className='app-container'>

     <NavBar
     ThisStep={step}
     CountThis={setStep}/>

      <div className='route-div'>
        <Routes>
          <Route path="/" 
            element={<UserInfo 
            CountThis={setStep}
            PageReload={setReFresh}/>}/>

          <Route path="/plans" 
            element={<SelectPlan  
            Duration={toggleValue} 
            ChangeBtn={() => changeToggle()}
            ArcadePrice={arcade}
            AdvPrice={advanced}
            ProPrice={pro}
            CountThis={setStep}
            
            PickName={setPlanName}
            PickPrice={setPlanPrice}
            ThisPrice={planPrice}/>}/>

          <Route path="/add-ons" 
            element={<AddOns 
            CountThis={setStep}
            AddOne={one}
            AddTwo={two}
            PickAddOns={setAddOnIdArr}
            PickAddPrice={setAddOnValdArr}/> }/>

          <Route path="/summary" 
          element={<Summary 
          CountThis={setStep}
          Duration={toggleValue} 
          ThisName={planName}
          ThisPrice={planPrice}
          ThisAddOns={addOnIdArr}
          ThisAddValue={addOnValArr}
          />} />

          <Route path="/thanks" element={<ThankYou CountThis={setStep}/>} />
        </Routes>
      </div>
    </div>
  );
}


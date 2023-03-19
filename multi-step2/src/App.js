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
  const [addedPlan, setAddedPlan] = useState([])

  function PlanArr(e){
    setAddedPlan((prePlan) => prePlan + e.target.id + e.target.value)
    console.log(e.target.id + e.target.value)
  }

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
            CountThis={setStep}/>}/>

          <Route path="/add-ons" 
            element={<AddOns 
            CountThis={setStep}
            AddOne={one}
            AddTwo={two}
            Summarize={() => PlanArr()}/> }/>

          <Route path="/summary" 
          element={<Summary 
          CountThis={setStep}
          TotalPlan={addedPlan}/>} />

          <Route path="/thanks" element={<ThankYou CountThis={setStep}/>} />
        </Routes>
      </div>
    </div>
  );
}


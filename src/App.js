import { useEffect, useState } from 'react';
import './App.css';
import formJSON from '../src/formElement.json'
import Elements from './components/Elements';



console.log(formJSON);

function App() {
const [element, SetElement]=useState(null);
const {fields, pageLabel}=element??{}

useEffect(()=>{
SetElement(formJSON[0])
},[])

  return (
    <section className="App-container">
      <h3>{pageLabel}</h3>
      <form>
      {fields? fields.map((field, i)=> <Elements key={i} />): null}


 
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Default checked radio
  </label>
</div>
<select className="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<button>Enviar</button>
      </form>
    </section>
  );
}

export default App;

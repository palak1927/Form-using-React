import { useState } from "react";
import './App.css'

function App() {
  const [name, setName] = useState("Abc");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");
  
  function NameHandler(event){
    setName(event.target.value);
  }
  function AgeHandler(event){
    setAge(event.target.value);
  }
  function CommentHandler(event){
    setComment(event.target.value);
  }
  function ShippingHandler(event){
    setShipping(event.target.value);
  }
  function PaymentHandler(event){
    setPayment(event.target.value);
  }
  return(<div>
    <input value={name} onChange={NameHandler}/>
    <p>Name:{name}</p>
    <input value={age} type='number' onChange={AgeHandler}/>
    <p>Age:{age}</p>
    <textarea value={comment}
    placeholder="Enter your comment" onChange={CommentHandler}/>
    <p>Comment:{comment}</p>
    <input type='radio' value="Pick Up" onChange={ShippingHandler}/>
    <label>Pick Up</label>
    <input type='radio' value="Delivery"  onChange={ShippingHandler}/>
    <label>Delivery</label>
    <p>Shipping:{shipping}</p>
    <select value={payment} onChange={PaymentHandler}>
      <option value="">Select the payment option</option>
      <option value="Visa">Visa</option>
      <option value="UPI">UPI</option>
      <option value="Master Card">Master Card</option>
      <option value="Gift Card">Gift Card</option>
    </select>
    <p>Payment Methods:{payment}</p>


  </div>);
}
 
export default App

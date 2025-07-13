/* onChange() -  Event handler use primarily with form elements 
                 e.g. <input> , <textarea> , <select> , <radio>
                 Triggers a function everytime the value of input changes
*/

import React , {useState} from 'react';

function MyComponent(){

    let [name,setName] = useState("default");
    let [quantity,setQuantity] = useState(0);
    let [payMent,setPayment] = useState("Choose a payment method");

    let [shipped,setShipment] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePayment = (event) =>{
        setPayment(event.target.value);
    }

    const handleShipment = (event) =>{
        setShipment(event.target.value);
    }

  
    return(
        <div>
             <input value={name} onChange={handleNameChange}></input>
             <p>{name}</p>

             <input
                value={quantity}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
             />
             <p>{quantity}</p>

             <select value={payMent} onChange={handlePayment}>
                <option disabled>Choose a payment method</option>
                <option value="visa">Visa</option>
                <option value="paytm">Paytm</option>
                <option value="mastercard">Master Card</option>
             </select>
             <p>your payment method is :{payMent}</p>

             <label>
                <input
                    type="radio"
                    name="deliveryMode"
                    value="Online"
                    checked={shipped === "Online"}
                    onChange={handleShipment}
                />
                Online
             </label>
             <label>
                <input
                    type="radio"
                    name="deliveryMode"
                    value="Offline"
                    checked={shipped === "Offline"}
                    onChange={handleShipment}
                />
                Offline
             </label>
             <p>delivery mode : {shipped}</p>

        </div>
       
    );
}

export default MyComponent;
import React, { useState } from "react";



export default function PhoneValidation() {
    const [phone, setPhone] = useState();

    function phoneValidate(phone) {
        fetch(`https://api.veriphone.io/v2/verify?phone=${phone}&key=9E2ABBC635534240938B1886027F3376`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if(data.phone_valid === true){
            } else{
                alert("zlé číslo")
            }
        })
        
    }

    return(
        <div>
            <input type="text" placeholder="Phone Number" onChange={(e) => setPhone(phone, e.target.value)}/>
            <p>Data: {phone} </p>
            <button className="m-2"
            onClick={phoneValidate}
            >Validate</button>
        </div>
    )
}
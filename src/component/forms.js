import React, { useState } from 'react';

const  Shakib = () => {

    const [userRegistration,setuserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const [recods, setRecods] = useState([]);

    const handleInput = (e)=>{
       const name = e.target.name;
       const value = e.target.value;
       console.log(name,value);

       setuserRegistration({...userRegistration, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newRecord = {...userRegistration, id: new Date().getTime().toString()}
         console.log(recods);
        setRecods([...recods, newRecord]);

        setuserRegistration({username:"", email:"",phone:"",password:""})
    }
    return(
        <>
           <form action="" onSubmit={handleSubmit}>
               <div>
                   <label htmlFor="username">FullName</label>
                   <input type="text" autoComplete="off"
                   value={userRegistration.username}
                   onChange={handleInput}
                   name="username" id="username"></input>
               </div>
               <div>
                   <label htmlFor="email">email</label>
                   <input type="text" autoComplete="off"
                   value={userRegistration.email}
                   onChange={handleInput}
                   name="email" id="email"></input>
               </div>
               <div>
                   <label htmlFor="phone">phone</label>
                   <input type="text" autoComplete="off"
                   value={userRegistration.phone}
                   onChange={handleInput}
                   name="phone" id="phone"></input>
               </div>
               <div>
                   <label htmlFor="password">password</label>
                   <input type="password" autoComplete="off"
                   value={userRegistration.password}
                   onChange={handleInput}
                   name="password" id="password"></input>
               </div>

               <button type="submit">Registration</button>
           </form>
           <div>
               {
                   recods.map((element)=>{
                       return(
                           <div className="showDataStyle">
                               <p>{element.username}</p>
                               <p>{element.email}</p>
                               <p>{element.phone}</p>
                               <p>{element.password}</p>
                           </div>
                       )
                   })
               }
           </div>
        </>

    )
}
export default Shakib;
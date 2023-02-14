import { useState } from "react";
import React from 'react';

const Contact = () => {
  const [data,setData] = useState({
    fullname : '',
    ph : "",
    email : "",
    massage : "",  
  });

  const inputEvent = (event) =>{
    const {name, value} = event.target;
     setData((preValue) => {
      return {...preValue,
         [name] : value}
     })
  }
  const onSubmit = () => {
    alert(`my name is ${data.fullname}. my ph No. is ${data.ph} . my Email address is${data.email} and my massage is ${data.massage}`);
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Page</h1>
      </div>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-6 mx-auto'>
            <div className="mb-3">
              <label 
              for="exampleFormControlInput1" 
              className="form-label">Fullname
              </label>
              <input 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1"
              name = "fullname"
              value = {data.fullname} 
              placeholder="Enter your name"
              onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label 
              for="exampleFormControlInput1" 
              className="form-label">Ph No.
              </label>
              <input 
              type="number" 
              className="form-control" 
              id="exampleFormControlInput1"
              name = "ph"
              value = {data.ph} 
              placeholder="Enter your Ph No."
              onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label 
              for="exampleFormControlInput1" 
              className="form-label">Email address
              </label>
              <input 
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1"
              name = "email"
              value = {data.email} 
              placeholder="Enter email"
              onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label 
              for="exampleFormControlTextarea1" 
              className="form-label">Massage
              </label>
              <textarea 
              className="form-control" 
              id="exampleFormControlTextare"
              name = "massage"
              value = {data.massage}
              rows="3"
              placeholder="Enter a Massage"
              onChange={inputEvent}
              >
              </textarea>
              <div className='my-5 text-center'>
              <button type="button" className="btn btn-info" onClick={onSubmit}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
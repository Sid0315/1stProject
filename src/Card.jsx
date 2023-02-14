import React from 'react';
import {NavLink} from 'react-router-dom'

const Card = (props) => {
  return (
    <>    
       <div className='col-mb-2 col-4 mx-auto'>
              <div className="card">
                <img src={props.img1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{props.title}</h5>
                  <p className="card-text">{props.cardtext}</p>
                  <NavLink to="/contact" className="btn btn-primary">{props.btnname}</NavLink>
                </div>
              </div>
              </div>        
    </>
  );
}
export default Card;
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./button.css"

const Part_2 = () => {
    return ( <div id='btn-part'>
    <NavLink to="/A
    " className="btn"><span className='letter'>A</span><p> Campaign structure</p></NavLink >
    <NavLink to="/B" className="btn"><span className='letter'>B</span><p> Learn Facebook basics</p></NavLink >
    <NavLink to="/C" className="btn"><span className='letter'>C</span><p> 3rd choice</p></NavLink >
    </div> );
}
 
export default Part_2;
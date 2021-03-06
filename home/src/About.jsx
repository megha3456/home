import React from 'react'
import web from '../src/images/about.svg';
import { NavLink } from 'react-router-dom';


const About = () => {
    return(
        <>
        <section id="header" className="d-flex align-items-center">
         <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto">
                     <div  className="row">
                     <div className="col-md-6 my-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                      <h1>Welcome to cutm <strong className="brand-name">ELMS</strong></h1>
                      <h2 className="my-4">
                      Employee Leave Application is developed primarily to handle information about the employees and
                      leave status. That serves as an instrument for better management. The key goal of this project is to 
                      create an effective web-enabled framework that would be able to simplify workplace knowledge management needs.
                      </h2>
                      
                     </div>
                     <div className = "mt-3">
                      <NavLink to = "/contact" className="btn-get-started">
                          Contact us</NavLink>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src = {web} className = "img-fluid animated" alt="home img"/>
                     </div>
                     
                     

                
                 </div>
                 </div>
                
             
            </div>
            
         </div>
        </section>
        </>
    )
}
export default About;
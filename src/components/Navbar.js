import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
   let bool=false;
  const darkMode=()=>{
    
    let dark =document.querySelector('#nav');
    let btn = document.querySelector('#btn');
    if(bool===true)
    {
      document.body.classList.remove("bg-light");
      document.body.classList.remove("text-dark");
       btn.classList.remove("bg-dark");
       btn.classList.add("bg-dark");
       dark.classList.remove("navbar-light");
       dark.classList.add("navbar-dark");
       dark.classList.add("bg-dark");
       document.body.classList.add("bg-dark");
       document.body.classList.add("text-light");
      bool=false;
      
      
    }
    else
    {
      document.body.classList.remove("text-light");
      document.body.classList.remove("bg-dark");
      btn.classList.remove('bg-dark');
      btn.classList.add("bg-light");
      dark.classList.remove("navbar-dark");
      dark.classList.remove("bg-dark");
      dark.classList.add("navbar-light");
      dark.classList.add("bg-light");
      document.body.classList.add("bg-light");
      document.body.classList.add("text-dark");
      bool=true;
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" id="nav">
  <div className="container-fluid ">
    <Link className="navbar-brand "  to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">About</Link>
        </li>
      </ul>
      <button type="button"  className=" btn btn-outline-light nav-item text-light mx-3 display-6" onClick={darkMode} id="btn">
          🌑
        </button>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title:PropTypes.string
}; 


// default props take default value from here
 

Navbar.defaultProps={
    title:'Set title here'
}
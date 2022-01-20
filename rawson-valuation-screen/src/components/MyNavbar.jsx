import React from 'react'

export default function MyNavbar() {
    return (
        <nav className="navbar navbar-expand-sm mx-0 px-0 bg-white">
           <div className="container justify-content-between">
           <div className="d-flex">
                <i className="navLogo bi bi-bar-chart-fill me-2 align-self-end"></i>
                <h4 className="align-self-center my-0 px-1">Valuations</h4>
            </div>
            <div className="d-flex justify-content-end" >
                <p className="align-self-center mx-2 my-0">Laurel Green</p>
                <button className="btn btn-light btn-sm">Logout</button>
            </div>
           </div>
            
           
            
        </nav>
    )
}

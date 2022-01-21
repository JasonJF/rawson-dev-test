import React from 'react'

export default function MyNavbar() {
    return (
        <nav className="navbar navbar-expand-sm mx-0 px-0 bg-white">
           <div className="container justify-content-between">
           <div className="d-flex">
               <div className="navLogo d-flex justify-content-center align-content-center"><i className="bi bi-bar-chart-fill"></i></div>
                <h5 className="navLogoText align-self-center my-0 px-3">Valuations</h5>
            </div>
            <div className="d-flex justify-content-end" >
                <p className="userName align-self-center mx-2 my-0">Laurel Green</p>
                <button className="logoutBtn btn btn-outline-light btn-sm ms-1">Logout</button>
            </div>
           </div>
            
           
            
        </nav>
    )
}

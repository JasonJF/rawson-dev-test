import React from 'react'

export default function MyNavbar() {
    return (
        <nav className="navbar navbar-expand-sm px-5 bg-white">
            <div className="d-flex">
                <i className="bi bi-bar-chart-fill text-warning px-1 align-self-end"></i>
                <h4 className="align-self-center my-0 px-1">Valuations</h4>
            </div>
            <div className="container-fluid justify-content-end" >
                <p className="align-self-center mx-2 my-0">Laurel Green</p>
                <button className="btn btn-light btn-sm">Logout</button>
            </div>
        </nav>
    )
}

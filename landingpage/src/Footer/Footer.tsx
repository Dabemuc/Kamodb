import React from 'react'
import './Footer.css'
import Logo from '../Kamodb-Logo.png'

export default function() {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src={Logo} alt="" width="100rem" height="25rem" />
            </a>
            <span className="mb-3 mb-md-0 text-muted">&ensp; 2023 </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#">Twitter</a></li>
            <li className="ms-3"><a className="text-muted" href="#">Instagram</a></li>
            <li className="ms-3"><a className="text-muted" href="#">Facebook</a></li>
            </ul>
        </footer>
    )
}
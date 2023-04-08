import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {





    return (
        <nav className={`navbar navbar-expand-lg navabar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} data-bs-theme={props.mode === 'light' ? 'light' : 'dark'}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title} </Link>
                {/* <a className="navbar-brand" href="/">{props.title} </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>

                </div>
                <div className="d-flex">
                    <button type="button" onClick={() => { props.changeMode('green') }} value='green' className="btn btn-success rounded mx-2">green</button>
                    <button type="button" onClick={() => { props.changeMode('blue') }} value='blue' className="btn btn-primary rounded mx-2">blue</button>
                    <button type="button" onClick={() => { props.changeMode('light') }} value='light' className="btn btn-light rounded mx-2">Light</button>
                </div>
                {/* disabled switch */}
                {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enbale {props.mode === 'dark' ? 'Light' : 'Dark'} Mode</label>
                </div> */}
            </div>
        </nav >

    )
}

Navbar.defaultProps = {
    title: "Search",
    aboutText: "textUtils about"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}


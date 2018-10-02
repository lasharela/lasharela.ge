import React from 'react'
import ProfileImage from '../assets/images/profile.jpg'
import {ABOUT} from '../config/content'
import { Link, Element , Events, animateScroll } from 'react-scroll'

export default (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">{ABOUT.name.firstName} {ABOUT.name.lastName}</span>
            <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={ProfileImage} alt="" />
            </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                {
                    props.sections.map((menuItem, index)=> (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link" to={menuItem.id} spy={true} smooth={true} duration={500}>
                                {menuItem.menuItemText}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

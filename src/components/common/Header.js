import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { useState, useRef } from "react";


export default function Header(props) {
    const active = { color: 'orange' };
    // const [EnableClick, setEnableClick] = useState(true);


    // const Btncall = () => {
    //     if (!EnableClick) return;
    //     setEnableClick(false);
    //     ().current.classList.add('on');


    let url = '';
    props.type === 'main'
        ? (url = process.env.PUBLIC_URL + '/img/logo.jpg')
        : (url = process.env.PUBLIC_URL + '/img/logo.jpg');



    return (
        <header className={props.type}>
            <div className="inner">
                <h1>
                    <a href="#">D STUDIO</a>
                    {/* <Link to='/'>
                        < img src={url} alt='logo' /> 
                    </Link> */}
                </h1>

                <ul id="gnb">
                    <li>
                        <NavLink to='/department' activeStyle={active}>
                            Department
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/community' activeStyle={active}>
                            Community
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' activeStyle={active}>
                            Gallery
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/location' activeStyle={active}>
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/member' activeStyle={active}>
                            Member
                        </NavLink>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faBars}
                />
                <ul className="gnbMo">
                    <li>
                        <NavLink to='/department' activeStyle={active}>
                            Department
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/community' activeStyle={active}>
                            Community
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' activeStyle={active}>
                            Gallery
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/location' activeStyle={active}>
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/member' activeStyle={active}>
                            Member
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )

}

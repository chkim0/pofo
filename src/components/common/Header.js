import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { useState, useRef } from "react";


export default function Header(props) {
    const active = { color: 'orange' };
    // const [EnableClick, setEnableClick] = useState(true);

    // usState 방법
    const [isShow, setIsShow] = useState(false);

    //  ref 방법
    const ref = useRef();


    // const Btncall = () => {
    //     if (!EnableClick) return;
    //     setEnableClick(false);
    //     ().current.classList.add('on');


    let url = '';
    props.type === 'main'
        ? (url = process.env.PUBLIC_URL + '/img/logo.jpg')
        : (url = process.env.PUBLIC_URL + '/img/logo.jpg');


    // usState event handler
    const menuHandler = (active) => {
        setIsShow(!active);
    }

    // ref event handler
    const menuHandler2 = () => {
        ref.current.classList.contains('on')
            ? ref.current.classList.remove('on')
            : ref.current.classList.add('on')
    }

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
                {/* 전체메뉴 버튼에 eventHandler 할당*/}
                <FontAwesomeIcon
                    onClick={() => menuHandler2()}
                    icon={faBars}
                    style={{ cursor: "pointer" }}
                />
                {/* className으로 애니메이션 및 css 할당으로 class 'on'을 동적으로 할당 */}
                <ul className={`gnbMo${isShow ? ' on' : ''}`} ref={ref}>
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

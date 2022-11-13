import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
//Menu컴포넌트를 화살표함수로 변경해서 forwardREf로 메서드의 인수로 전달


// forwardRef 다시 부모컴포넌트로 전달할수있음! 
const Menu = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    const active = { color: 'orange' };

    useEffect(() => {
        window.addEventListener('resize', () => {
            const wid = window.innerWidth;
            if (wid >= 1200) setOpen(false);
        })
    }, [])
    // 부모컴포넌트의 참조객체에 담길 객체를 리턴 (해당객체안에는 함수를 담아서 전달 )
    useImperativeHandle(ref, () => {
        return {
            toggle: () => setOpen(!Open)
        }
    })


    return (
        <AnimatePresence>
            {Open && (
                <motion.nav id="mobileMenu" initial={{ opacity: 0, x: -320 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, x: -320, transition: { duration: 0.5 } }}
                    onClick={() => setOpen(false)}>
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
                </motion.nav>
            )}
        </AnimatePresence>

    );
})

export default Menu;
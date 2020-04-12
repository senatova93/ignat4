import React from 'react';
import s from './navbar.module.css';


const Navbar  = () => {
    return  <nav className={s.nav}>
            <div className={s.item}>
           <a href="/monday"> Monday</a>
            </div>
        <div className={s.item}>
            <a href="/tuesday"> Tuesday</a>
        </div>
        <div className={s.item}>
            <a href="/wednesday"> Wednesday</a>
        </div>
        <div className={s.item}>
            <a href="/thursday"> Thursday</a>
        </div>
        <div className={s.item}>
            <a href ="/friday" > Friday</a>
        </div>
        <div className={s.item}>
            <a href="/saturday"> Saturday</a>
        </div>
        <div className={s.item}>
            <a href="/sunday"> Sunday</a>
        </div>

    </nav>

    }


export default Navbar;

import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {
    state = {
        isMenu: false
    }

    // onShowFiltersClick = () => {
    //     this.setState({isHidden: true})
    // }
    // onHideFiltersClick = () => {
    //     this.setState({isHidden: false})
    // }

    toggleMenu = ()=> {
        this.setState({
            isMenu: !this.state.isMenu
        })
    }

    render = () => {

        let classForMenu1 = this.state.isMenu ? s.menuIconActive + ' ' + s.menuIcon : s.menuIcon ;

        return (

            <nav className={s.nav}>

                <div className={classForMenu1}
                    onClick={this.toggleMenu}></div>

                {this.state.isMenu && <div>
                    <div className={s.item}>
                        <NavLink to= '/monday'> Monday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink  to = '/tuesday'> Tuesday</NavLink>
                    </div>
                    <div className={s.item}>
                        < NavLink to = "/wednesday"> Wednesday </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink  to ="/thursday"> Thursday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to = "/friday"> Friday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to = "/saturday"> Saturday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to ="/sunday"> Sunday </NavLink>
                    </div>
                </div>}

                {/*{!this.state.isHidden && <button className={s.cross} onClick={this.onShowFiltersClick}></button>}*/}
                {/*{this.state.isHidden && <button className={s.burger} onClick={this.onHideFiltersClick}></button>}*/}
            </nav>


        )

    }
}


export default Navbar;

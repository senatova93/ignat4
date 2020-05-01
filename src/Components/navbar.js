import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {
    state = {
        isHidden: false,
        filterValue: "nav",
        isMenu: false
    }

    onShowFiltersClick = () => {
        this.setState({isHidden: true})
    }
    onHideFiltersClick = () => {
        this.setState({isHidden: false})
    }

    toggleMenu = ()=> {
        this.setState({
            isMenu: !this.state.isMenu
        })
    }

    render = () => {
        let classForMenu = this.state.isMenu ? s.menuIcon : s.menuIconActive + ' ' + s.menuIcon;
        let classForMenu1 = this.state.isMenu ? s.menuIconActive + ' ' + s.menuIcon : s.menuIcon ;
        // let classForNav = this.state.filterValue === 'nav' ? 'nav':'navActive'
        return (

            <nav className={s.nav}>
                {/*<button onClick={this.onFilterActive}></button>*/}
                <div className={classForMenu1}
                    // className= {s.menuIcon + ' ' + s.menuIconActive}
                    onClick={this.toggleMenu}></div>

                {this.state.isMenu && <div>
                    <div className={s.item}>
                        <NavLink activeClassName = 'active' to= '/monday'> Monday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName = 'active' to = '/tuesday'> Tuesday</NavLink>
                    </div>
                    <div className={s.item}>
                        < NavLink activeClassName= 'active' to = "/wednesday"> Wednesday </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName= 'active' to ="/thursday"> Thursday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName= 'active' to = "/friday"> Friday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName= 'active' to = "/saturday"> Saturday</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName= 'active' to ="/sunday"> Sunday </NavLink>
                    </div>
                </div>}

                {/*{!this.state.isHidden && <button className={s.cross} onClick={this.onShowFiltersClick}></button>}*/}
                {/*{this.state.isHidden && <button className={s.burger} onClick={this.onHideFiltersClick}></button>}*/}
            </nav>


        )

    }
}


export default Navbar;

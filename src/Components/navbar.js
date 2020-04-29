import React from 'react';
import s from './navbar.module.css';


class Navbar extends React.Component {
    state = {
        isHidden: false
    }
    onShowFiltersClick = () => {this.setState({isHidden: true})}
    onHideFiltersClick = () => { this.setState({isHidden: false})}
    render = () => {
        return (

            <nav className={s.nav}>


                {!this.state.isHidden && <div>
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
                        <a href="/friday"> Friday</a>
                    </div>
                    <div className={s.item}>
                        <a href="/saturday"> Saturday</a>
                    </div>
                    <div className={s.item}>
                        <a href="/sunday"> Sunday</a>
                    </div>
                </div>}
                {!this.state.isHidden && <button onClick={this.onShowFiltersClick}> Hide menu</button>}
                {this.state.isHidden && <button onClick={this.onHideFiltersClick}> Show menu</button>}

            </nav>


        )

    }
}


export default Navbar;

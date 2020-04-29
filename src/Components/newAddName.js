import React from 'react';
import s from './monday.module.css'
class  newAddName extends React.Component {

  render = () => {

    return (
        <div className="Names">
            <div className= "name">
                <span> {this.props.title}</span>
            </div>
          </div>




    );
  }
}

export default newAddName;

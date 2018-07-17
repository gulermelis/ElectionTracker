import React, { Component } from 'react';
import PropTypes from 'prop-types';


class List extends Component {

    static propTypes = {
        secmenler: { PropTypes.array.isRequired,

        }
    }
     render(){
        return(
            <div>
                <ul className={"listArea"}>
                this.props.secmenler.map( secmenler =>{
                return(
                <li><span className={"name"}>{secmenler.name}</span></li>
                    <li><span className={"name"}>{secmenler.name}</span></li>




                )
            }
                </ul>
            </div>


        )
}


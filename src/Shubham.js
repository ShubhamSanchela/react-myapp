import React, { Component } from 'react';
import Army from './withArm'

class Shubham extends Component {
    render() {
        return (
            <div>
                <h2>Camp :{this.props.camp}</h2>
                <h1 
                onMouseOver={this.props.hochandlegunshots}>
                Shubham  {this.props.hocgunname}  
                Gunshots: { this.props.hocgunshots } 
                </h1>
            </div>
        )
    }
}
export default Army(Shubham, 10)
import React, { Component } from 'react';

class Scroll extends Component {
    state = {  }
    render() { 
    return (
        <div className="border border-primary overflow-auto" style ={{height :900}}>
        {this.props.children}
        </div>
        )
 }
}

export default Scroll ;
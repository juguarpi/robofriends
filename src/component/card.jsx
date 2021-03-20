import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card col-lg-2 col-md-3 col-sm-4">
                <img src={"https://robohash.org/"+this.props.card.name}  className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.name}</h5>
                    <p className="card-text">{this.props.card.email}</p>
                </div>
            </div>
         );
    }
}
 
export default Card;
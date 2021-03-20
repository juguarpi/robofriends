import React, { Component } from 'react';
import Card from './card';

class Cardlist extends Component {
    state = {  }
    render() { 
        return (
            <div className='row'>
            {this.props.cardlist.map(card => <Card key={card.name} card = {card}/>)}
            </div>
          );
    }
}
 
export default Cardlist;
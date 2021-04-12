import { event } from 'jquery';
import React, { Component } from 'react';

class Searchbar extends Component {
    state = { 
        searchbarvalue: 1
     }
    render() { 
        return (
            
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Search Card 1.5</span>
                </div>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange ={event => this.props.handleSearch(event)}/>
            </div>
         );
    }
}
 
export default Searchbar;

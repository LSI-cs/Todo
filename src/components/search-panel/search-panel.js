import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component{

    state ={
        filter: ''
    };

    onSearchFilter = (e) => {
           this.setState({
            filter: e.target.value
           }) ; 
        //   this.props.onSearchFilter(this.state.filter); 
             this.props.onSearchFilter(e.target.value ); 
        }
    
     

    render(){ 
      
    
        return(
        <form className='item-add-form d-flex'> 
                    <input type ="text"
                        id = "SearchPanel"
                        className="form-control"
                        onChange = {this.onSearchFilter}
                        placeholder= "What need to be done" 
                        value={this.state.filter}
                        />
        </form> 
    )

}
}
 
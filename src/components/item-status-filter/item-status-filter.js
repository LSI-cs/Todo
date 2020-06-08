import React,{Component} from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends Component{
 
    ChangeItemStatus = (e) => { 
          this.props.ChangeItemStatus(e.target.innerText);   
          console.log('ChangeClass',e.target.innerText);
          let btn = document.getElementsByName('BtnItemStatusFilter');
          btn.forEach(element => { 
            element.className="btn btn-outline-secondary"
            if(element.textContent===e.target.innerText)
            {
              element.className="btn btn-info";
            }
            
          });
       }
 
    render(){
        return(
            <div className="btn-group">
                <button type="button"
                  className="btn btn-info"
                  name='BtnItemStatusFilter'
                  onClick={this.ChangeItemStatus}
                  >All</button>
                <button type="button"
                  className="btn btn-outline-secondary"
                  name='BtnItemStatusFilter'
                  onClick={
                    this.ChangeItemStatus
                  }
                    >Active</button>
                <button type="button"
                  className="btn btn-outline-secondary"
                  name='BtnItemStatusFilter'
                  onClick={this.ChangeItemStatus}
                    >Done</button>
            </div>
        );

    }
}
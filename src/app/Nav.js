import React, { Component, useEffect } from 'react'
import { f2 } from './App';




class Nav extends Component {
    state = {
      list:[]
    }
    
    componentDidMount() {
      fetch('list.json')
        .then(function(result){
          return result.json();
        })
        .then(function(json)    {
          console.log(json);
          this.setState({list:json});
        }.bind(this));        
    }
    render() {      
      var listTag = [];
      for(var i=0; i<this.state.list.length; i++) {
        var li = this.state.list[i] ;
        listTag.push(
          <li key={li.id}>
            {/* <a> */}
          {/* <a href={li.id} data-id={li.id} data-title={li.title} onClick={function(e) {           
            e.preventDefault();           
            // console.log(e.target.dataset.id);
            // console.log(e.target.dataset.title);
            this.props.onClick(e.target.dataset.id); 
            this.props.onClick(e.target.dataset.title);
            f2(Number(e.target.dataset.id), Number(e.target.dataset.title))
          }.bind(this)}> */}
            <a href= {"?lat=" + li.lat + "&lon=" + li.lon +"&title=" + li.title}>              
            {/* title로 표시해주는 것 -> li.title*/}     
            {li.title} 
            </a>            
          </li>          
          );
      }
      return(
        <nav>
          {listTag}          
        </nav>
      );
    }
  }

  export default Nav;
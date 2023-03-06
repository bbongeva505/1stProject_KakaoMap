// import React, { Component } from 'react'
import React, { Component, useState, useEffect} from 'react';

import Nav from "./Nav";
import MySearchBar from './MySearchBar';
import SearchGithub from './Search1';
import Home from './Store';
import BlogList from './StoreList';
import AxiosApi from './AxiosEx';
import './App.css';

// class Nav extends Component {
//   state = {
//     list:[]
//   }
  
//   componentDidMount() {
//     fetch('list.json')
//       .then(function(result){
//         return result.json();
//       })
//       .then(function(json)    {
//         console.log(json);
//         this.setState({list:json});
//       }.bind(this));
//   }
//   render() {
//     var listTag = [];
//     for(var i=0; i<this.state.list.length; i++) {
//       var li = this.state.list[i] ;
//       listTag.push(<li key={li.id}>
//         <a href={li.id} data-id={li.id} onClick={function(e) {
//           e.preventDefault();
//           // console.log(e.target.dataset.id);
//           this.props.onClick(e.target.dataset.id);
//         }.bind(this)}>          
//           {li.title}
//           </a>
//         </li>);
//     }
//     return(
//       <nav>
//         {listTag}     
//       </nav>
//     );
//   }
// }



export function f2(a,b) {
  console.log(a+b);
     
}




// class Article extends Component {
//   render() {
//     return(
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>
//     );
//   }
// }

class App extends Component {
  state = {
    article:{title:'Welcome', desc:'Hello, React & Ajax'}
  }
  render() {
    return (
      // <div className='App'>
      <div id="container">
        <h1 class ="style-2">스타벅스 지도</h1>                   
        {/* <Nav>                 
        </Nav>    */}
        <SearchGithub></SearchGithub>  
        {/* <AxiosApi></AxiosApi> */}
        {/* <input type="text"></input> */}
        {/* <Article title={this.state.article.title} desc={this.state.article.desc}></Article> */}
      </div>     
  
    );
  }
}

// function App() {
//   return (
//   <div className="App">
//     <h1>WEB</h1>
//     <Nav>      
//     </Nav> 
//       <article>
//         <h2>Welcome</h2>
//         Hello, React &amp; Ajax
//       </article>
//     </div>
//   );
// }



export default App;
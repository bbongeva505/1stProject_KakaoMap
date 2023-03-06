import React, {useState, useEffect} from 'react';

import MySearchBar from './MySearchBar';
import Nav from "./Nav";
 

function Search() {

 

  let subject = '스타벅스 지점 검색';


 

  const [searchItems, setSearchItems] = useState([])

 

  useEffect(() => {

    

    console.log("useEffect in App.js called")

    console.log(

      fetch('list.json')

      .then((res)=>res.json())

      .then((productArray) => {

        console.log(productArray)
        

        const searchItems = productArray.map((product) => {
          
          return  product.id          
          
        })

        setSearchItems(searchItems)
      })
    )




  }, [])

  

  return (    

    <div className="search">


      {subject}
      {searchItems.length>0 ? <MySearchBar searchItems={searchItems} /> : "Loading.."}
      {/* <MySearchBar searchItems={["apple", "banana", "watermelon", "melon"]}/>  */}
      
    </div>   
    
  );

} 

export default Search;

 
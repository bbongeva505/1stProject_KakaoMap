import React, { useState } from 'react';
import axios from 'axios';


function SearchGithub() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");     

    const fetchData = () => {
        const url = `http://192.168.0.190:9999/gps/search?keyword=${keyword}`;
        axios.get(url)
        .then(function(response) {
            setData(response.data.list);
            console.log("성공");
            console.log(response);
         })
        .catch(function(error) {
            console.log("실패");
        })       
    
    }    

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const tableRows = data.map(
        (item, index) =>
            <tr key={index}>
                {/* <td>{item.id}</td>   */}
                <td><a href={"?lat=" + item.sgiLat + "&lon=" + item.sgiLon +"&title=" + item.sgiTitle}>{item.sgiTitle}</a></td>
            </tr>
    );


    return (
        <div>
        {/* <div>
            <h1>검색</h1>
        </div> */}
        <div className="App">
            <input type="text" onChange={handleChange} />
            <button onClick={fetchData} value={keyword} >매장 검색</button>
            <table><tbody>{tableRows}</tbody></table>
            {/* <button onClick={fetchData} value={""}> 리스트보기</button> */}
        </div>
        </div>
    );
}

export default SearchGithub;


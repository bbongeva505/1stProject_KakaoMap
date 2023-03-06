import React, { useState } from 'react';
import axios from 'axios';

function AxiosApi() {
    
    // photos, setPhotos 비구조화 할당
    let [photos, setPhotos] = useState([]);

    // 통신 메서드
    function searchApi() {
        const url = "http://localhost:9999/admin/store";
        axios.get(url)
        .then(function(response) {
            setPhotos(response.data.store);
            console.log("성공");
            console.log(response);
            console.log(photos[0].sbiBranchName);
        })
        .catch(function(error) {
            console.log("실패");
        })
    }  
    
        return (
            <div>
                <button onClick={searchApi}> 불러오기 </button>
                {photos.map(photos => {
                return (<div key={photos.sbiSeq}>
                    {photos.sbiBranchName}
                </div>)
            })}
            </div>
        )    
}
export default AxiosApi;
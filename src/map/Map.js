/*global kakao */
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Map.css';


export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨 
    }; 
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

const params = new URLSearchParams(window.location.search);
let name = params.get("lat")
let name1 = params.get("lon")
let title = params.get("title")
let storeNo = params.get("storeNo")



console.log(title);

if(name == null) {
    // navigator.geolocation.getCurrentPosition(function(position) {
        
        // var lat = position.coords.latitude, // 위도
        //     lon = position.coords.longitude; // 경도        
        var lat = 35.8683397,
            lon = 128.593975

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">나의 위치</div>'; // 인포윈도우에 표시될 내용입니다        

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);        
        // getDistanceFromLatLonInKm(lat, lon, lat1, lon1)
    // });

// function(nowposition) {
//     var lat = 128.593975,
//     var lon = 35.8683397
//     var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//     //         message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다        

//     //     // 마커와 인포윈도우를 표시합니다
//     //     displayMarker(locPosition, message);        
//     //     // getDistanceFromLatLonInKm(lat, lon, lat1, lon1)
// }


    let positions = null;
    function getTitle(){
        axios.get("http://haeji.mawani.kro.kr:9999/gps/list").then((response) => {
            console.log(response);
            positions = response.data.list;
            exec();
        });
        // const response = fetch('http://localhost:9999/gps/list');
        // return response.then((res) => {
        //     res.json()
        //     console.log(res);
        // });
    }    
    getTitle();
    async function exec(){
        var position = positions;
        console.log(position);
        try {
        //   position = await getTitle();
        console.log(position[0].sgiSeq);
        }
        catch(error){
        console.log(error);
        }
    
        console.log((position[0].sgiLat)) 
        
        var imageSrc = "http://drive.google.com/uc?export=view&id=1accfOroaClPiVLqsBZBVy4STovjn6PmI"; 
    
        for (var i = 0; i < position.length; i ++) {
    
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(75, 75); 
    
    // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(position[i].sgiLat, position[i].sgiLon), // 마커를 표시할 위치
        title : position[i].sgiTitle, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다        
        image : markerImage // 마커 이미지          
        }        
        )               

        // http://haeji.mawani.kro.kr:3000

        var tracker = '<div style="padding:6px;"><a href="http://haeji.mawani.kro.kr:3000/?lat='+ position[i].sgiLat + '&lon='+ position[i].sgiLon + '&title='+ position[i].sgiTitle + '&storeNo=' + position[i].sgiSbiSeq + '" style="color:blue" target="_self">'+ position[i].sgiTitle + '</a>'

        var infowindow = new kakao.maps.InfoWindow({
            position : new kakao.maps.LatLng(position[i].lat, position[i].lon), 
            content : tracker
        });

        infowindow.open(map, marker)
       
        } 
        
        marker.setMap(map)
        }      
    //   exec();        
    }





else {  
//     if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(function(position) {
        
//         var lat = position.coords.latitude, // 위도
//             lon = position.coords.longitude; // 경도

//             // var lat = 128.593975,
//             // lon = 35.8683397


//         var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//             message = '<div style="padding:5px;">나의 현재 위치</div>'; // 인포윈도우에 표시될 내용입니다        

//         // 마커와 인포윈도우를 표시합니다
//         displayMarker(locPosition, message);        
//         // getDistanceFromLatLonInKm(lat, lon, lat1, lon1)
//         var lat1 = name
//         var lon1 = name1

//     var locPosition1 = new kakao.maps.LatLng(lat1, lon1),
//     message1 = title;

//     displayMarker1(locPosition1, message1)

//     getDistanceFromLatLonInKm(lat, lon, lat1, lon1)
//     });   
// }
    // else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            var lat = 35.8683397, lon = 128.593975

            var locPosition = new kakao.maps.LatLng(lat, lon),    
                message = '현재위치'  

            displayMarker(locPosition, message);            
            // getDistanceFromLatLonInKm(lat, lon, lat1, lon1)

            var lat1 = name
            var lon1 = name1
    
        var locPosition1 = new kakao.maps.LatLng(lat1, lon1),
        message1 = title;
    
        displayMarker1(locPosition1, message1)
    
        getDistanceFromLatLonInKm(lat, lon, lat1, lon1)             
        }


        var e = document.getElementById("next")
        e.innerHTML = "<a href='http://haeji.mawani.kro.kr:3389/order/"+storeNo+"' target='_parent'	>다음으로</a>"
    
        const f = document.getElementById("mainMap")
        f.innerHTML = "<a href='http://haeji.mawani.kro.kr:3000/'>메인으로</a>"


// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
// if (navigator.geolocation) { 
   
//     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//     navigator.geolocation.getCurrentPosition(function(position) {
        
//         var lat = position.coords.latitude, // 위도
//             lon = position.coords.longitude; // 경도
        
//         var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//             message = '<div style="padding:5px;">나의 현재 위치</div>'; // 인포윈도우에 표시될 내용입니다        

//         // 마커와 인포윈도우를 표시합니다
//         displayMarker(locPosition, message);        
//         // getDistanceFromLatLonInKm(lat, lon, lat1, lon1)
//       });
    
// } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
//     var locPosition = new kakao.maps.LatLng(35.8683397, 128.593975),    
//         message = 'geolocation을 사용할수 없어요..'
        
//     displayMarker(locPosition, message);
// }

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition); 
  }


    function displayMarker1(locPosition, message) {
        

        var imageSrc = "http://drive.google.com/uc?export=view&id=1accfOroaClPiVLqsBZBVy4STovjn6PmI";
        
        var imageSize = new kakao.maps.Size(75, 75); 
        
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 




        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition,
            image : markerImage
        }); 
        
        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;
    
        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        
        // 인포윈도우를 마커위에 표시합니다 
        infowindow.open(map, marker);
        
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);   }
  };

  function getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2) {
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lng2-lng1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    console.log(d)    
    var e = document.getElementById("result")
    e.innerHTML = "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"
    + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"
    + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"
    + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"
    + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"
    +"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"
    
    
                 +"현재 위치에서&nbsp" + d.toFixed(2)*1000 + "m"
    return d;   
}

    

  return <div id="map" style={{ width: "60vw", height: "60vh" }}></div>;
}   

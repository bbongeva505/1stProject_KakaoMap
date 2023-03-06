import React, { useEffect, useState } from 'react';


const Home = () => {

    const [moives, setMovies] = useState([])

    useEffect(()=> {
        fetch('http://localhost:9999/admin/store', {
            method : "GET"   
        }).then(res=>res.json()).then(res=>{
            console.log(1, res);
            setMovies(res);
        });              
    }, []);

    return (
        <div>
           <td>{this.props.sbiSeq}</td>
        </div>
    );
};

export default Home;

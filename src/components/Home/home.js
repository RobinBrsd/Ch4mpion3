import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import './home.scss';

function Home(props) {
    const [redirect, setRedirect] = useState(false);
    const [nb, setNb] = useState("");

    useEffect(() => {
        console.log(props.chapter);
        switch(parseInt(props.chapter)){
            case 1: 
                setNb("I");
                break;
            case 2: 
                setNb("II");
                break;
            case 3: 
                setNb("III");
                break;
            default:
                setNb("I");
                break;
        }

    }, [props])

    if(redirect){
        return <Redirect to='/loader'/>;
    }

    return (
        <div className="home-container">
            <h1 onClick={() => setRedirect(true)}> La devinette de l'avare qui se noyait </h1>
            <h3> Chapter {nb} </h3>
        </div>
    )
}

export default Home;
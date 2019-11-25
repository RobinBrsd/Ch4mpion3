import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import loader from './refresh page.png';
import './loader.scss';

function Loader(props) {
    const [redirect, setRedirect] = useState(false);
    const [footerText, setFooterText] = useState("");
    const [story, setStory] = useState("");

    useEffect(() => {
        console.log(props.chapter);
        switch(parseInt(props.chapter)){
            case 1:
                setFooterText("La suite au prochain chargement ..."); 
                setStory("Un homme connu pour etre avare, est en train de se noyer près d'un quai quelque peu trop haut. Les passants, ne l'aimant pas vraiment, le laissaient se noyer sans intervenir... Toutefois, un homme lui dit : \"Monsieur, donnez-moi votre main, allez, monsieur, donnez-moi votre main !\" Mais l'avare ne fit rien.");
                break;
            case 2:
                setFooterText("La solution au prochain chargement ...");  
                setStory("Un autre homme s'avance lui aussi sur le quai et dit à l'avare : \"Prenez ma main, monsieur, allez, prenez ma main !\" L'avare, à la surprise générale, tend la main au deuxième homme. Pourquoi l'avare a t-il écouter le deuxième homme mais pas le premier ?");
                break;
            case 3: 
                setFooterText(""); 
                setStory("La solution : le premier homme avait demandé à l'avare de lui \"donner\" sa main, le deuxième lui a demandé de \"prendre\" la sienne. Un avare ne donne rien mais prend tout.");
                break;
            default:
                setRedirect(true);
                break;
        }

        const light = document.getElementById("light");

        document.addEventListener("mouseover", (e) => {
            var X = e.pageX;
            var Y = e.pageY;
            light.style.background = "radial-gradient(circle at " +X+ "px " +(Y)+ "px, transparent, #000 300px)";
        });

        document.addEventListener("mousemove", (e) => {
            var X = e.pageX;
            var Y = e.pageY;
            light.style.background = "radial-gradient(circle at " +X+ "px " +(Y)+ "px, transparent, #000 300px)";
        });

        document.addEventListener("scroll", (e) => {
            const scrollTop =
			(document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        
		    const scrollHeight =
			(document.documentElement && document.documentElement.scrollHeight) ||
            document.body.scrollHeight;

		    const clientHeight =
            document.documentElement.clientHeight || window.innerHeight;
        
            const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

            if(scrolledToBottom){
                let loader = document.getElementsByClassName("loader")[0];
                setTimeout(() => {
                    loader.style.display = "none";
                }, 200);

                if(props.chapter !== 3) {
                    setTimeout(() => {
                        setRedirect(true);
                    }, 3000)
                }
            }
        });

    }, [props])

    setTimeout(() => {
        setInterval(() => {
            window.scrollBy(0, 1.1);
        }, 26)
    }, 2000)

    if(redirect){
        return window.location.replace("http://localhost:3001/");
    }

    return (
        <div className="loader-container">
            <div id="light"></div>
            <p className="story"> {story} </p>
            <div className="footer">
                <p> {footerText} </p>
                <img src={loader} onClick={() => setRedirect(true)} alt="loader"/>
            </div>
            <div className="loader"> 
                <span> Loading </span>
                <span className="point-1">.</span>
                <span className="point-2">.</span>
                <span className="point-3">.</span>
            </div>
            <div className="hidder"></div>
        </div>
    )
}


export default Loader;
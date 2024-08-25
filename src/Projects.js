import Tile from "./Tile";
import './CSS/Projects.css';
import arr from './Project_info';
import { useState } from "react";


export default function Projects(props) {
    
    props.changePage(1);
    const [clicked, setClicked] = useState(-1);
    
    return (
        <div>
            <h1 className="projects_text">
            Here are a few of my projects.
            </h1>
            
            <h1 className="projects_text">



            P.S. Click on each tile to get more info :
            </h1>

            <div className="item_container">
            {arr.map((item) => (
                <Tile id = {item.id} name={item.name} image={item.image} info={item.info} clicked={clicked} setClicked={setClicked}/>
            ))}
            </div>
        </div>
    );
}
import './CSS/Tile.css';
import Content from './Content';


export default function Tile(props) {



    if (props.clicked===-1 || props.clicked===props.id) { 
        return (
        <button onClick={ () => {props.setClicked(props.id);}}>
            <Content click={0}  name={props.name} image={props.image} info={props.info}/>
        </button>);
    } else {
        return (<button onClick={ () => {props.setClicked(props.id);}}>
            <Content click={1} name={props.name} image={props.image} info={props.info}/>
        </button>);
    }
   
   

}

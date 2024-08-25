export default function Content(props) {

    if (props.click) {
        return (
        <div className="tile_close">
            
            <img src={props.image} alt=''></img>
            <h1>{props.name}</h1>

        </div>);
    } else {
        return (
            <div className="tile_open">
                <img src={props.image} alt=''></img>
                <h1>{props.name}</h1>
                <p>{props.info}</p>
            </div>
        );
    }

}
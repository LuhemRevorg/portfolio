import './CSS/Iconbar.css';
import file_icon from './assets/images/icons8-file-50.png';
import mongo_icon from './assets/images/icons8-mongo-db-48.png';
import django_icon from './assets/images/icons8-django-32.png';
import react_icon from './assets/images/icons8-react-30.png';
import figma_icon from './assets/images/icons8-figma-50.png';


function Iconbar() {
    return (
        <div className='icon_bar'>
            <div className='icon'>
                <div className='blue_line'></div>
                <img alt='' src={file_icon} className='icon_icon'></img>                
            </div>
            <div className='icon'>
                <img alt='' src={mongo_icon} className='icon_icon'></img>
            </div>
            <div className='icon'>
                <img alt='' src={django_icon} className='icon_icon'></img>
            </div>
            <div className='icon'>
                <img alt='' src={react_icon} className='icon_icon'></img>
            </div>
            <div className='icon'>
                <img alt='' src={figma_icon} className='icon_icon'></img>
            </div>   
            
        </div>
        
    );
}

export default Iconbar;
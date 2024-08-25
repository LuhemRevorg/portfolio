import './CSS/Topbar.css'
import close_icon from './assets/images/close.svg'
import run_icon from './assets/images/icons8-play-50.png'
import info_icon from './assets/images/icons8-info-24.png'
import braces_icon from './assets/images/icons8-curly-brackets-50.png'
import bug_icon from './assets/images/icons8-bug-24.png'
import options_icon from './assets/images/icons8-three-dots-30.png'

export default function Topbar(props) {
    var file_name = 'File Name';
    var file_icon;
    if (props.page === 0) {
        file_name = 'About Me';
        file_icon = info_icon;
    } else if (props.page === 1) {
        file_name = 'Projects';
        file_icon = braces_icon;
    }

    return (
        <div className='container_tb'>
            <div className='file_display'>
                <div>
                    <img alt='' src={file_icon} className='file_icon'></img>
                    <h1>{file_name}</h1>
                </div>
                <img alt='' src={close_icon} className='close_icon'></img>
            </div>
            <img className='run_icon' src={run_icon} alt=''></img>
            <img className='bug_icon' src={bug_icon} alt=''></img>
            <img className='options_icon' src={options_icon} alt=''></img>
        </div>
    );
}
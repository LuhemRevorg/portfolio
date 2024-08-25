import rate_icon from './assets/images/alternate_email_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import linekdin_icon from './assets/images/icons8-linkedin-50.png'

export default function ContactMe(props) {
    if (props.close) {
        return;
    } else {
        return (
            <div>
                <a href='https://www.linkedin.com/in/mehul-grover-b17132297' target='_blank' style={{ textDecoration: 'none' }}> 
                    <div className="navitem">
                        
                        <img alt='' src={linekdin_icon} className='social_icon'></img>
                        <div className='text'>
                            LinkedIn
                        </div>

                    </div>
                </a>
                
                <button onClick={async () => {
                    try {
                        await navigator.clipboard.writeText('mehulg8142@gmail.com');
                        return alert('Mail copied to Clipboard 😀');
                    } catch(err) {
                        return alert('Your Browser does not suport the copying function, here is the email: mehulg8142@gmail.com');
                    }
                }}>
                    
                    <div className="navitem">
                        
                        <img alt='' src={rate_icon} className='social_icon'></img>
                        <div className='text'>
                            Email
                        </div>

                    </div>

                    </button>

            </div>

        );
    }
};
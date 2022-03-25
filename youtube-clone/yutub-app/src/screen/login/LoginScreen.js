import React from 'react';
import './loginScreen.scss';

function LoginScreen(props) {
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
                <button>Login With Google</button>
                <p>A Youtube clone project made using Youtube-Api</p>

            </div>
        </div>
    );
}

export default LoginScreen;
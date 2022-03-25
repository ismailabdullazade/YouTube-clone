import React from 'react';
import './_video.scss';
import {AiFillEye} from 'react-icons/ai';


const Video =() => {
    return (
       <div className='video'>

           <div className='video__top'>
               <img src='	https://i.ytimg.com/vi/u0BmtehLtVQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLApjH8utnR5szTcej8TqghZtHDjbg' alt=''/>
               <span>05:43</span>
           </div>
           <div className='video__title'>
               Konuşanlar 58. Bölüm Shot
           </div>
           <div className='video__details'>
               <span><AiFillEye/> 5m Views •</span>
               <span>8 days ago</span>

           </div>
           <div className='video__channel'>
               <img src='	https://yt3.ggpht.com/ytc/AKedOLQz_HHPMX2D5ZznvAnuFhZexjnc7cmoNj9Pc0pEAg=s68-c-k-c0x00ffffff-no-rj' alt='' />
               Konuşanlar  
           </div>
       </div>
    );
}

export default Video;
import React, { useEffect, useState } from 'react';
import SpotifyGetCurrentlyPlaying from "./components/spotifygetrequest/SpotifyGetCurrentlyPlaying.js"
import ReactPlayer from 'react-player'
const CLIENT_ID = "c0c98f040ee7493c933e263b54319cb8"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URI_AFTER_LOGIN = "http://localhost:4000"
const SPACE_DELIMITER ="%20"
const SCOPES = ["user-read-currently-playing"]
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER)


const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) =>{
        const [key, value] = currentValue.split("=");
        accumulator[key] = value
        return accumulator;

    }, {});
    return paramsSplitUp;
};
function Home({onLogout}) {
    const [clips, setClips] = useState('/loading.mov')
    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(null));
    }
    useEffect(()=> {
        // console.log(window.location.hash)
        if (window.location.hash){
            const {access_token, expires_in, token_type,} = getReturnedParamsFromSpotifyAuth(window.location.hash);
            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);

            // console.log({access_token})

        }
    })
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialogue=true`
    }
    return(
        <div>

        <ReactPlayer className='vidplayer' url={clips} playing={true} muted={true}  loop={true} width='100%' height='100%'/>
        
        
        
        
        
        <div className='loginbg2' >
            <div className="glitch">
               <h3> Welcome To The Imaginarium</h3>
            </div>
            <div className='spotify'>
               <h2>Powered By</h2> <img src='/spotify.png'/>
            </div>
                
            
            <button className='newclip' onClick={handleLogin}>Login to Spotify!</button>
            <SpotifyGetCurrentlyPlaying> currently playing</SpotifyGetCurrentlyPlaying>
            <button className="newclip" onClick={handleLogoutClick}>Logout</button>
             {/* <button className="newclip" onClick={()=> setClips('/clip4.mov')}>CLips</button>
            <button className="newclip" onClick={()=> setClips('/clip69.mov')}>clips</button>
            <button className="newclip" onClick={()=> setClips('/clip1.mov')}>clips</button>
            <button className="newclip" onClick={()=> setClips('/clip2.mov')}>clips</button>
            <button className="newclip" onClick={()=> setClips('/clip3.mov')}>clips</button> */}
            <button className="newclip" onClick={()=> setClips('/groupmode.mov')}>GROUPMODE</button>
            <button className="newclip" onClick={()=> setClips('/grocery.mp4')}>GROCERY TRIP</button>
            <button className="newclip" onClick={()=> setClips('/damn.mov')}>DAMN NATURE U SCARY</button>
            <button className="newclip" onClick={()=> setClips('/me.mov')}>ME</button>
            <button className="newclip" onClick={()=> setClips('/omg.mp4')}>ANIME MATRIX</button>
            <button className="newclip" onClick={()=> setClips('/moshe.mov')}>GO MOSHE MODE BABY</button>
            <button className="newclip" onClick={()=> setClips('/deanmode.mov')}>GO DEAN MODE BABY</button>
            <button className="newclip" onClick={()=> setClips('/reallytrippy.mov')}>TRIPPY</button>
            <button className="newclip" onClick={()=> setClips('/pppppp.mov')}>LETS TURN UP</button>
            <button className="newclip" onClick={()=> setClips('/trippy.mov')}>SENSUAL</button>
        </div>
        </div>

        
    )
}

export default Home
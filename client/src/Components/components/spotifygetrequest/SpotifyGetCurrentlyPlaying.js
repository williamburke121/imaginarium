import React, {useEffect, useState} from "react"
import axios from "axios"

    
    const CURRENTLY_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing"






    const SpotifyGetCurrentlyPlaying = () => {
    const [token, setToken] = useState ("")
    const [data, setData] = useState({})
    useEffect (() =>{
        if(localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem('accessToken'))
        }
    }, []);
    const handleGetCurrentlyPlaying = () => {
        // axios.get(CURRENTLY_PLAYING_ENDPOINT, {
        //     headers: { 
        //         Authorization: "Bearer" + token,
            
        //     },
        // })
        // .then((response) =>{
        //     setData (response.data)
        // })
        // .catch((error) =>{
        //     console.log(error)
        // })
        console.log(token)
        fetch('https://api.spotify.com/v1/me/player/currently-playing',{
            headers: {Authorization : "Bearer "  + token}
        })
            .then((response) => response.json())
            .then(data =>{

                console.log(data)
                setData(data)
            })
    }
   
    // { 
    //     headers:{
    //         'Authorization': `Bearer ${token}`
    //     }}
    return (
        <>
    <button className= 'newclip'onClick= {handleGetCurrentlyPlaying}> Currently Playing</button>
    <div>
    {data?.item ? 
    <>
    <h1 className= 'glitch'>Now Playing: {data.item.name} by {data.item.artists[0].name}</h1>
    <img className='albumart' src={data.item.album.images[0].url} alt=''/>
    
    
    
    
   </>
    : null}
    </div>
    
    </>
    )
    
}

export default SpotifyGetCurrentlyPlaying;

import { useEffect, useState } from "react";
import { YOUTUBE_API_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const VideoContainer = () => {
  const [videos, setVideos] =useState([]);
 
  useEffect(()=>{
    getVideos();
 },[]);
 
const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API_VIDEOS);
    const json = await data.json();
    
    setVideos(json.items);
    
};
  return (
    <div className="flex flex-wrap scroll-m-6 h-screen overflow-y-auto no-scrollbar" onScroll={()=>{}}>
      {
        videos.map((video)=>( 
        <Link key={video.id} to={"/watch?v="+ video.id}><VideoCard  info={video}/></Link>
       ))
      }
     
    </div>
  )
}

export default VideoContainer
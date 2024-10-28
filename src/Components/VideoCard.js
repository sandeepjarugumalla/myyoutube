import { useSelector } from "react-redux";


const VideoCard = ({info}) => {
  const toggleMenu = useSelector(store=>store.app.isMenuOpen);
    
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return toggleMenu ? (
    <div className="p-2 m-2 w-80 shadow-lg">
       <img className="rounded-lg cursor-pointer" alt="thumbnail" src={thumbnails.medium.url}/>
       <ul>
          <li className="font-bold py-2 overflow-hidden">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
       </ul>
    </div>
  ) : (<div className="m-2 shadow-sm w-80">
    <img className="rounded-lg cursor-pointer" alt="thumbnail" src={thumbnails.standard.url}/>
    <ul>
       <li className="font-bold py-2 overflow-hidden">{title}</li>
       <li>{channelTitle}</li>
       <li>{statistics.viewCount} views</li>
    </ul>
 </div>)
}

export default VideoCard
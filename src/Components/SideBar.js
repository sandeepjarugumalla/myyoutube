import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    // Early retrun pattern 
    if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-sm w-2/12 text-lg py-3 scroll-m-6 h-screen overflow-y-auto no-scrollbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 ">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5 ">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
      
      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul>
            
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
     
      
    </div>
  )
}

export default SideBar;
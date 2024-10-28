import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    };

  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-sm">
        <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()} className="h-10 cursor-pointer" alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAACOjo7CwsItLS3c3Nw/Pz/6+vrGxsaSkpKZmZmIiIjy8vK+vr7w8PA4ODgfHx+3t7fi4uKY3kT7AAAAzklEQVR4nO3byQ3CQAxA0TGQDQhZ+i+WHCiAi2UU3uvga6Q52HJrAAAAAAAAAAAAAAAAAAAAAAA/4N7fKvX37MBHVHskF1b3HXIDn9V5h2du4lrdF2tuYOuqA6NLLmzDeK00DtmBAAAAAAB8dNOl0pQ+8p6rh/oxJxdW90X2du1VnXd45SZW50X2G7atui+25MLz/6UAAAAAAHyc/t5irx7qx55cuFQHxpIb+Ae3a9V5kb5dO/8N6fnvgAEAAAAAAAAAAAAAAAAAAAAAvvEGU4ASPASDdpgAAAAASUVORK5CYII="/>
       <a href="/"> <img className="h-10" alt="youtube-logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/></a>    
        </div>
        <div className="col-span-10 text-center">
            <input className="w-1/2 border border-gray-500 p-2 rounded-l-full" type="text" />
            <button className="border border-gray-500 p-2 rounded-r-full bg-gray-200">Search</button>
        </div>
        <div className="col-span-1">
        <img className="h-10" alt="user" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
      </div>
    </div>
  )
}

export default Head
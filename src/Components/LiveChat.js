import { useDispatch, useSelector } from "react-redux";
import ChatMesaage from "./ChatMesaage"
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages);
    useEffect(()=>{
       const colgarb= setInterval(()=>{
            //API Polling 
            
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(30),
            }))
        },1500);

        return()=> clearInterval(colgarb);
    },[])
  return (
    <>
    <div className=" w-full h-[600px] ml-3 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
     <div>
        {   // Dont use indexes as keys
        chatMessages.map((chat, index)=><ChatMesaage key={index} name={chat.name} message={chat.message}/>)
    }
    </div>
    </div>
    <form onSubmit={(e)=>{e.preventDefault()
        dispatch(addMessage({
            name:"Sandeep Kumar",
            message :liveMessage,
        }));
         setLiveMessage("");
    }} className="w-full p-2 ml-3  border border-black">
        <input className="w-96 px-2 border border-black"  
          value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value)
          }}
         type="text"/>
        <button className="px-4 mx-4 p-1 bg-black opacity-70 text-white">Send</button>
    </form>
    </>
  )
}

export default LiveChat
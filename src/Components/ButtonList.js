import Button from "./Button"

const ButtonList = () => {
    const list = ["All","Gaming", "Songs", "Entertainment","Live","Cricket","News","Cooking","Sports","Music","Podcasts","Dramedy","Dubbing"];
  return (
    <div className="flex pl-3">
       {
          list.map(button=><Button key={button} name={button}/>)
       }
    </div>
  )
}

export default ButtonList
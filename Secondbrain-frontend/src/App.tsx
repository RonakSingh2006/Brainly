import { Button } from "./components/Button"
import { Plus } from "./icons/Plus"
import { Share } from "./icons/Share"
import { Card } from "./components/Card"
import { AddContent } from "./components/AddContent"
import { useState } from "react"
import { SideBar } from "./components/SideBar"

function App() {

  const [open,setOpen] = useState(false);

  return (
    <>
      <AddContent open={open} onClose={()=>{setOpen(false)}}/>

      <SideBar/>

      <div className="bg-gray-100 ml-80 min-h-screen">
        <div className="flex justify-end gap-4 p-2">
          <Button startIcon={<Share/>} variant="primary" size="md" text="Share Brain" onClick={()=>console.log("hello")}/>
          <Button startIcon={<Plus/>} variant="secondry" size="md" text="Add Content" onClick={()=>setOpen(true)}/>
        </div>
        
        <div className="gap-2 flex flex-wrap mx-2 mt-5 items-start">
          <Card title="Pakistan" link="https://x.com/virendersehwag/status/1921236534935666812" type="tweet"/>
          <Card title="n8n" link="https://www.youtube.com/watch?v=NYCUMKUBcXM" type="youtube"/>
          <Card title="Pakistan" link="https://x.com/virendersehwag/status/1921236534935666812" type="tweet"/>
          <Card title="n8n" link="https://www.youtube.com/watch?v=NYCUMKUBcXM" type="youtube"/>
          <Card title="Pakistan" link="https://x.com/virendersehwag/status/1921236534935666812" type="tweet"/>
          <Card title="n8n" link="https://www.youtube.com/watch?v=NYCUMKUBcXM" type="youtube"/>
        </div>
      </div>
    </>
  )
}

export default App

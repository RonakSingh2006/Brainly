import { Button } from "../components/Button"
import { Plus } from "../icons/Plus"
import { Share } from "../icons/Share"
import { Card } from "../components/Card"
import { AddContent } from "../components/AddContent"
import { useState } from "react"
import { SideBar } from "../components/SideBar"
import { useContent } from "../hooks/useContent"

function DashBoard() {

  const [open,setOpen] = useState(false);

  const contents = useContent();

  return (
    <>
      <AddContent open={open} onClose={()=>{setOpen(false)}}/>

      <SideBar/>

      <div className="bg-gray-100 ml-72 min-h-screen">
        <div className="flex justify-end gap-4 p-2">
          <Button startIcon={<Share/>} variant="primary" size="md" text="Share Brain" onClick={()=>console.log("hello")}/>
          <Button startIcon={<Plus/>} variant="secondry" size="md" text="Add Content" onClick={()=>setOpen(true)}/>
        </div>
        
        <div className="gap-2 flex flex-wrap mx-2 mt-5 items-start">
          {contents.map( e => <Card title={e.title} link={e.link} type={e.type} key={e._id}/>)}
        </div>
      </div>
    </>
  )
}

export default DashBoard;

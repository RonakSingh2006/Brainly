import { Button } from "./components/ui/Button"
import { Plus } from "./icons/Plus"
import { Share } from "./icons/Share"

function App() {

  return (
    <>
      <Button startIcon={<Plus size="md"/>} variant="primary" size="md" text="Share Brain" onClick={()=>console.log("hello")}/>
      <Button startIcon={<Share size="md"/>} variant="secondry" size="md" text="Add Content" onClick={()=>console.log("hello")}/>
      
    </>
  )
}

export default App

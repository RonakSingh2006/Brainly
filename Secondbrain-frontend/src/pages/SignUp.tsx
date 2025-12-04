import { Button } from "../components/Button"
import { Input } from "../components/Input"

export function SignUp(){
  return <div className="h-screen w-screen flex justify-center items-center bg-gray-200">

    <div className="h-80 w-80 bg-white rounded-md flex flex-col items-center pt-10 gap-10">

      <div className="flex flex-col gap-2">
        <Input placeholder="Username"/>
        <Input placeholder="Password"/>
      </div>

    <Button text="SignUp" variant="secondry" onClick={()=>{}} className="w-72 justify-center"/>

    </div>

  </div>
}
export function Input({placeholder} : {placeholder:string}){
  return <div className="border text-xl my-4 rounded">
    <input type="text" placeholder={placeholder} className="p-2"/>
  </div>
}
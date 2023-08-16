import { Avatar } from "@chakra-ui/react"

const Message= ({name,isReceiver,createdOn,content}:{isReceiver:boolean;name:string,createdOn:string,content:string})=>{

  return(
      <div className={`flex gap-3 p-4 ${isReceiver && "justify-end"}`}>
        <div className={`${isReceiver && "order-2"}`}>
          <div className="relative">
            <div className="relative inline-block h-9 w-9 overflow-hidden rounded-full md:h-11 md:w-11">
              <Avatar />
            </div>
          </div>
        </div>  
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <div className="text-sm text-gray-500">{name}</div>
            <div className="text-xs text-gray-400">8:53 AM</div>
          </div>
          <div className={`w-fit overflow-hidden rounded-full ${isReceiver ?  "bg-sky-500 text-white":"bg-gray-100 text-black-700"} py-2 px-3 text-sm `}>
            <div>{content}</div>
          </div>
        </div>
      </div>
  )
}
export default Message

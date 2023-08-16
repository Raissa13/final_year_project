import { useRouter } from "next/router";
import { ReactElement } from "react";
import useClientSide from "../../clients/useClientSideClien";
import { useGetConversationQuery } from "../../generated/graphql";

const Layout = ({children}:{children: ReactElement | Array<ReactElement>;}) => {


  const {data,isLoading}=useGetConversationQuery(useClientSide())

  const router =useRouter()

  return (
    <div className="flex min-h-screen">
      <div className="w-[15%] h-screen overflow-auto border-r border-gray-300 px-2">
        {data?.Conversation.map((convo, index) => {
          return (
            <div
              onClick={() => router.push(`/chat/${convo.Id}`)}
              key={index}
              className="flex items-center justify-center mt-10 gap-2 py-2 cursor-pointer hover:bg-gray-300 rounded-lg"
            >
              {/* <Avatar /> */}
              <span className="text-center">{convo.Mentor.FirstName} - {convo.Student.FirstName}</span>
            </div>
          );
        })}
      </div>
      {children}
      </div>
  )
}

export default Layout
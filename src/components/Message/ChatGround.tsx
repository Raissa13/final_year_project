import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useClientSide from "../../clients/useClientSideClien";
import { useGetConversationQuery } from "../../generated/graphql";
import { ADMIN } from "../../utils/userRole";
import Avatar from "../Avatar";
import Message from "./SingleMessage";

export default function ChatGround() {
  const [isSender, setIsSender] = useState(true);
  const [isReceiver, setIsReceiver] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();

  const { data, isLoading } = useGetConversationQuery(useClientSide(), {
    conversationId: { _eq: router.query.chatId },
  });

  const right = data?.Conversation[0].Student.Id;

  console.log(data);

  return (
    <div className="flex-1 overflow-y-auto">
      {data?.Conversation[0].Messages.map((message, i) => (
        <Message
          key={i}
          content={message.Content}
          name={message.senderInfo.FirstName}
          createdOn={message.Created_at}
          isReceiver={
            session?.roleId === ADMIN
              ? message.SenderId === data.Conversation[0].Mentor.Id
              : session?.id === message.SenderId
          }
        />
      ))}
    </div>
  );
}

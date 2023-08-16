import { Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import useClientSide from "../../clients/useClientSideClien";
import {
  useAddMessageMutation,
  useGetConversationQuery,
} from "../../generated/graphql";

export default function MessageInput() {
  const [message, setMessage] = useState<string>();

  const router = useRouter();
  const { data: session } = useSession();

  const { data, refetch } = useGetConversationQuery(useClientSide(), {
    conversationId: { _eq: router.query.chatId },
  });

  const { mutate, isLoading } = useAddMessageMutation(useClientSide(), {
    onSuccess: () => {
      setMessage(undefined);
      refetch();
    },
  });

  const handleSendMessage = () => {
    mutate({
      object: {
        ConversationId: router.query.chatId,
        SenderId: session?.id,
        Content: message,
        ReceiverId:
          data?.Conversation[0].Mentor.Id === session?.userId
            ? data?.Conversation[0].Student.Id
            : data?.Conversation[0].Mentor.Id,
      },
    });
  };

  return (
    <div className="w-[65%] fixed bottom-0 py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4">
      <form className="flex items-center gap-2 lg:gap-4 w-full">
        <div className="relative w-full">
          <input
            id="message"
            type="text"
            autoComplete="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Enter a message"
            className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-neutral-100"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevent form submission on Enter key press
                handleSendMessage(); // Call the function to send the message
              }
            }}
          />
        </div>
        <Button
          type="button"
          onClick={handleSendMessage}
          backgroundColor={"blue.600"}
          className="rounded-full p-2  text-white cursor-pointer hover:bg-sky-600 transition"
          isLoading={isLoading}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ADMIN } from "../../utils/userRole";
import ChatGround from "./ChatGround";
import MessageInput from "./MessageBox";
import Header from "./Header";

export default function Message() {
  const { data } = useSession();

  return (
    <div className="h-full flex flex-col">
      <Header />
      <ChatGround />
      <>{data?.roleId !== ADMIN && <MessageInput />}</>
    </div>
  );
}

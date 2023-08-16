import { useState } from "react";
import Avatar from "../../src/components/Avatar";

import { users } from "../../src/utils/data/users";
import EmptyState from "../../src/components/Message/EmptyState";
import Message from "../../src/components/Message";
import { useGetConversationQuery } from "../../src/generated/graphql";
import useClientSide from "../../src/clients/useClientSideClien";
import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";

const DivBaby = () => {
  const [isMessage, setIsMessage] = useState(false);

  const router = useRouter();

  const { data, isLoading } = useGetConversationQuery(useClientSide(), {
    conversationId: { _eq: router.query.chatId as string },
  });

  return (
    <Layout>
      <div className="border-r w-[65%] border-gray-300">
        <Message />
      </div>
      <div className="w-[20%] border-l border-gray-300">
        <div className="space-y-5 text-center mt-10">
          <div>
            <Avatar />
            <span>Mentor: {data?.Conversation[0].Mentor.FirstName}</span>
          </div>
          <div>
            <Avatar />
            <span>{data?.Conversation[0].Student.FirstName}</span>
            <span>{data?.Conversation[0].Student.FirstName}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DivBaby;

import { useState } from "react";
import Avatar from "../../src/components/Avatar";

import { users } from "../../src/utils/data/users";
import EmptyState from "../../src/components/Message/EmptyState";
import Message from "../../src/components/Message";
import { useGetConversationQuery } from "../../src/generated/graphql";
import useClientSide from "../../src/clients/useClientSideClien";
import Layout from "../../src/components/Layout";

const DivBaby = () => {
  const [isMessage, setIsMessage] = useState(false);

  const { data, isLoading } = useGetConversationQuery(useClientSide());

  return (
    <Layout>
      <div className="border-r w-[65%] border-gray-300">
        <div className="flex items-center justify-center h-full">
          <EmptyState />
        </div>
      </div>
    </Layout>
  );
};

export default DivBaby;

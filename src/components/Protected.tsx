import { ReactElement } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface iProps {
  children: ReactElement;
}

const Protected: React.FC<iProps> = ({ children }: iProps) => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return <p>loading...</p>;
  }

  return <>{children}</>;
};

export default Protected;

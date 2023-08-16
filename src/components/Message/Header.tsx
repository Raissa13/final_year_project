import { Button } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Avatar from "../Avatar";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Avatar />
        <div className="flex flex-col">
          <div>{`${session?.name}`}</div>
          {/* <div className="text-sm font-light text-neutral-500">Active now</div> */}
        </div>
        <Button
          type="button"
          onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
          backgroundColor={"blue.600"}
          className="rounded-full p-2 justify-end  text-white cursor-pointer hover:bg-sky-600 transition"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

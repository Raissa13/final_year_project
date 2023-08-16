import { Button, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Select from "react-select";
import useClientSide from "../src/clients/useClientSideClien";
import useClientSideClien from "../src/clients/useClientSideClien";
import {
  useAddConversationMutation,
  useAddUserMutation,
  useGetUserByRoleQuery,
} from "../src/generated/graphql";
import generateRandomNumber from "../src/utils/generateNumber";
import { makeSelectOptions } from "../src/utils/makeSelectOption";
import { MENTOR, STUDENT } from "../src/utils/userRole";

export type SelectType = {
  label: string;
  value: any;
};
export default function Signup() {
  const router = useRouter();

  const { data, isLoading } = useGetUserByRoleQuery(useClientSide(), {
    roleId: MENTOR,
  });

  const [firstName, setFirsName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [userType, setUserType] = useState<string>("0");
  const [dob, setDOB] = useState<string>();
  const [mentor, setMentor] = useState<SelectType | null>(null);
  const [classM, setClass] = useState<SelectType | null>(null);
  const [combsM, setCombsM] = useState<SelectType | null>(null);

  const { mutate: addConversation, isLoading: addConvo } =
    useAddConversationMutation(useClientSide());

  const { mutate, isLoading: isSaving } = useAddUserMutation(useClientSide(), {
    onSuccess: (data) => {
      if (data.insert_User_one?.RoleId === STUDENT)
        addConversation({
          object: {
            StudentId: data.insert_User_one.Id,
            MentorId: mentor?.value,
          },
        });
    },
  });

  const handleSubmit = () => {
    console.log("console", {
      firstName,
      lastName,
      email,
      userType,
      dob,
      mentor,
      classM,
      combsM,
    });

    mutate({
      object: {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        RoleId: Number(userType),
        DOB: dob,
        Info: JSON.stringify({ class: classM?.value, comb: combsM?.value }),
        UserName:
          (firstName + "_" + lastName).replace(" ", "_").toLocaleLowerCase() +
          generateRandomNumber(1, 999),
      },
    });
  };

  const mentorOptions = data?.User
    ? data.User.map((user) => {
        return { value: user.Id, label: user.LastName };
      })
    : [];

  const classOptions = ["S4", "S5", "S6"];

  const combinationOptions = ["MEC", "MPC", "MPG", "MCB", "MEG", "PCB"];

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a user
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                onChange={(e) => setFirsName(e.target.value as string)}
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                onChange={(e) => setLastName(e.target.value as string)}
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value as string)}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md px-2  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="DOB"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth
            </label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                onChange={(e) => setDOB(e.target.value as string)}
                type="date"
                autoComplete="email"
                required
                className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="DOB"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User type
            </label>
            <div className="mt-2">
              <RadioGroup value={userType} onChange={setUserType}>
                <Stack direction="row">
                  <Radio value={"2"}>Mentor</Radio>
                  <Radio value={"3"}>Student</Radio>
                </Stack>
              </RadioGroup>
            </div>
          </div>

          {userType === "3" && (
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select student mentor
              </label>
              <Select
                options={mentorOptions}
                onChange={setMentor}
                value={mentor}
              />
            </div>
          )}

          {userType === "2" && (
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Class
              </label>
              <Select
                options={makeSelectOptions(classOptions)}
                onChange={setClass}
                value={classM}
              />

              <label
                htmlFor="class"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Combination
              </label>
              <Select
                options={makeSelectOptions(combinationOptions)}
                onChange={setCombsM}
                value={combsM}
              />
            </div>
          )}

          <div>
            <Button
              type="button"
              onClick={handleSubmit}
              isLoading={isSaving || addConvo}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </Button>
          </div>
        </form>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            onClick={() => router.push("/newLogin")}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Log in Here
          </a>
        </p> */}
      </div>
    </div>
  );
}

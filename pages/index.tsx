/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [userInfo, setUserInfo] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();

  const { data, status } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();
    if (!userInfo) setError("Please enter your unique user Tag");
    if (!userPassword) setError("Please enter your Password");
    else setLoading(true);

    const res = await signIn("credentials", {
      userTag: userInfo,
      password: userPassword,

      redirect: false,
    });
    setError(undefined);

    console.log(res);
    if (res?.error) {
      setError(res?.error);
      setLoading(false);
    }

    if (!res?.error) router.push("/chat");
  };

  console.log(data, status);

  if (status === "authenticated") router.push("/chat");

  console.log(userInfo);

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={({ target }) => setUserInfo(target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={userPassword}
                onChange={({ target }) => setUserPassword(target.value)}
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          {error && <h2 className="text-red-600 ">{error}</h2>}
          {error && (
            <h3>
              <a
                className="text-[#0070f3] hover:underline "
                onClick={() => router.push("/signup")}
              >
                if your are new to our app click here
              </a>
            </h3>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;

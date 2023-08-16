export const sendMail = async (values: unknown, token: string) => {
  const res = await fetch("/api/mail", {
    body: JSON.stringify({
      info: values,
    }),
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const result = await res.json();

  return result;
};

import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const key: string = process.env.SENDGRID_API_KEY as string;
  sgMail.setApiKey(key);
  const { firstname, lastname, country, feedback } = req.body.info;
  console.log({ firstname, lastname, country, feedback });
  try {
    const session = await getSession({ req });

    if (!session) return res.status(401).json({ message: "UNAUTHORIZED" });

    const message = {
      to: `izerelewis6@gmail.com`,
      from: {
        email: "izerelewis6@gmail.com",
        name: "IGA-APP",
      },
      templateId: process.env.TEMPLATE_ID as string,
      dynamic_template_data: {
        firstname,
        lastname,
        country,
        feedback,
      },
    };
    await sgMail
      .send(message)
      .then(() => {
        return res.status(200).json({ success: "true" });
      })
      .catch((error) => {
        console.log(error);

        return res.status(500).json({
          error: JSON.stringify(error),
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: JSON.stringify(error),
    });
  }
}

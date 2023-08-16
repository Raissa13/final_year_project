import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";
import { storage } from "../../src/config/firebase";
import fs from "fs";
interface request extends NextApiRequest {
  file: any;
}
import upload from "../../src/config/multer";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  /* ... */
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.single("file");

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);
apiRoute.post(async (req: request, res: NextApiResponse) => {
  const audioData = req.file;
  console.log(audioData);
  const storageRef = ref(storage, `${new Date().getTime()}-test`);
  const snapshot = await uploadBytes(
    storageRef,
    fs.readFileSync(audioData.path)
  );
  const downloadUrl = await getDownloadURL(snapshot.ref);
  fs.unlinkSync(audioData.path);
  res.status(200).json({ success: "true", url: downloadUrl });
});
export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

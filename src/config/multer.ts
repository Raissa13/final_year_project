import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "/tmp/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

export default upload;

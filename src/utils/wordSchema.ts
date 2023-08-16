import yup from "yup";

export const wordSchema = yup.object({
  content: yup.string().required("Content is required"),
  image: yup.string(),
  pronunciation: yup.string().required("Required"),
  meaning: yup.object({}).required("required"),
});

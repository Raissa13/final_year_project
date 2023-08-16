import { Upload } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { fileUpload } from "../utils/util";

const ImageUpload = ({
  setUrl,
}: {
  setUrl: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const [image, setImage] = useState();

  const handleUpload = async (e: any) => {
    const FileData = e.target.files[0];
    const url = await fileUpload(FileData, "file");
    console.log("url of the image", url);
    setImage(url);
    setUrl(url);
  };
  return (
    <div className="preview">
      <label className="flex w-fit cursor-pointer items-center rounded-xl font-semibold">
        <input type="file" id="trial" hidden onChange={handleUpload} />
        <Upload className="mr-2 h-5 w-5" weight="bold" /> Upload Image
      </label>
      <br />
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt="image"
          className="h-[15vh] rounded-xl w-full  object-contain"
        />
      )}
    </div>
  );
};

export default ImageUpload;

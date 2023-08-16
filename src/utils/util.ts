export const fileUpload = async (
  fileData: Record<string, any>,
  type: "file" | "sound"
) => {
  console.log(fileData);

  const formData = new FormData();

  type === "sound"
    ? formData.append("file", fileData.blob)
    : formData.append("file", fileData as Blob);
  console.log("formData", formData);

  const res = await fetch("/api/upload", { body: formData, method: "POST" });
  const info = await res.json();
  console.log("info", info);
  return info.url;
};




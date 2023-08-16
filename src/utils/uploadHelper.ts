export const upload = async (audioData: any) => {
  const formData = new FormData();
  formData.append("file", audioData.blob);
  console.log("formData", formData);

  const res = await fetch("/api/upload", { body: formData, method: "POST" });
  const info = await res.json();
  return info.url;
};

import axios from "axios";

interface userInfo {
  userTag: string;
  lastName: string;
  firstName: string;
  country: string;
  phoneNumber: string;
  dob: string;
}
export const addUserInfo = (userInfo: userInfo) =>
  axios.post("/api/graphql/register", userInfo);

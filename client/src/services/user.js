import api from "./api";

export const addUser = async (data) => {
  // console.log("from user.js", data);
  const response = await api.post(`/user/create`, data);

  console.log(response.data.newUser);
  return response.data.newUser;
};

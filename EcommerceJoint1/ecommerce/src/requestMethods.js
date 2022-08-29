import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});



const BASE_URLBank = "http://localhost:4009/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";


export const publicRequestBank = axios.create({
  baseURL: BASE_URLBank,
});

export const userRequestBank = axios.create({
  baseURL: BASE_URLBank,
  header: { token: `Fahim ${TOKEN}` },
});
import axios from "axios";

export async function shortenLink(URI) {
  const url = "/api";
  const header = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
  };
  const body = {
    url: URI,
  };

  try {
    const request = axios.post(url, header, body);
    console.log(request.data);
  } catch (error) {}
}

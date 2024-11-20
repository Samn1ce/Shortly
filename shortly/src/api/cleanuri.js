import axios from "axios";

export async function shortenLink(URI) {
  const url = "https://cleanuri.com/api/v1/shorten";
  const header = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = {
    url: URI,
  };

  try {
    const request = axios.post(url, header, body);
    console.log(request.data);
  } catch (error) {}
}

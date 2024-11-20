import axios from "axios";

export async function shortenLink(URI) {
  const url = "/api/v1/shorten";
  const header = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = new URLSearchParams({ url: URI });

  try {
    const response = await axios.post(url, body, { header });
    return response.data;
  } catch (error) {
    console.log(error);
    return { error, message: "Internal Server error" };
  }
}

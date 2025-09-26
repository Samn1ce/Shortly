import axios from "axios";

export async function shortenLink(URI) {
  const url = "/api/shorten"; // talk to your own Vercel API route
  try {
    const response = await axios.post(url, { url: URI });
    return response.data;
  } catch (error) {
    console.log(error);
    return { error, message: "Internal Server error" };
  }
}

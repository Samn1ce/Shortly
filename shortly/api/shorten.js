import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { url } = req.body; // take the url from the frontend

    const response = await axios.post(
      "https://cleanuri.com/api/v1/shorten",
      new URLSearchParams({ url }).toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    res.status(200).json(response.data); // send result back to frontend
  } catch (error) {
    res.status(500).json({ error: "Failed to shorten URL" });
  }
}

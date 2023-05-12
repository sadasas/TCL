import axios from "axios";

const uri = process.env.NEXT_PUBLIC_GENERATE_TOKEN_URI;

export async function getAccessToken() {
  const { data } = await axios.post(uri, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.access_token;
}

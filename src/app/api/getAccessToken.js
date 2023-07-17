import axios from "axios";

export async function getAccessToken() {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GENERATE_TOKEN_URI,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data.access_token;
  } catch (error) {
    console.log(error);
  }
}

import { hashedCode } from "./hash";

export const finalUrl = () => {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = hashedCode(ts, privateKey, publicKey);
  const baseUrl = "https://gateway.marvel.com/v1/public/characters";
  // return `${baseUrl}?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=10`;
  return `${baseUrl}?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=20`;
};

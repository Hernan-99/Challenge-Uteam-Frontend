import { hashedCode } from "./hash";

export const finalUrl = (publicKey, privateKey) => {
  const ts = new Date().getTime();
  const hash = hashedCode(ts, privateKey, publicKey);
  const baseUrl = "https://gateway.marvel.com/v1/public/characters";
  // return `${baseUrl}?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=10`;
  return `${baseUrl}?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=20`;
};
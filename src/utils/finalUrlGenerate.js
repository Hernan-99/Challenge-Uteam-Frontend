import { hashCode } from "./hash.js";

export const finalUrl = (privKey, pubKey) => {
  const ts = new Date().getTime();
  const hash = hashCode(ts, privKey, pubKey);
  const baseUrl = "https://gateway.marvel.com/v1/public/characters";

  return `${baseUrl}?apikey=${pubKey}&ts=${ts}&hash=${hash}&limit=20`;
};

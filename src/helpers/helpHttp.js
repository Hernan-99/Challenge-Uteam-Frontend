import { finalUrl } from "../utils/finalUrlGenerate";
let characters = [];

const helpHttp = () => {
  // CREATE
  const post = async (character) => {
    const path = character.thumbnailUrl.split(".").slice(0, -1).join(".");
    const extension = character.thumbnailUrl.split(".").pop() || "jpg";

    const newCharacter = {
      id: crypto.randomUUID(),
      name: character.name,
      description: character.description,
      thumbnail: {
        path,
        extension,
      },
    };

    characters.push(newCharacter);
    return newCharacter;
  };

  const getAll = async () => {
    try {
      const url = finalUrl();
      console.log(url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const json = await res.json();
      characters = json?.data?.results;
      return characters;
    } catch (err) {
      console.log(`Error: ${err.message}`);
      return [];
    }
  };

  // UPDATE
  const put = async (id, character) => {
    const index = characters.findIndex((el) => el.id === id);
    if (index === -1) return null;
    const updatedCharacter = {
      ...characters[index],
      name: character.name,
      description: character.description,
      thumbnail: {
        path: character.thumbnailUrl.split(".").slice(0, -1).join("."),
        extension: character.thumbnailUrl.split(".").pop() || "jpg",
      },
    };

    characters[index] = updatedCharacter;
    return updatedCharacter;
  };

  // DELETE
  const del = async (id) => {
    const initialLength = characters.length;
    characters = characters.filter((char) => char.id !== id);
    return initialLength !== characters.length;
  };

  return {
    post,
    getAll,
    put,
    del,
  };
};

export default helpHttp;

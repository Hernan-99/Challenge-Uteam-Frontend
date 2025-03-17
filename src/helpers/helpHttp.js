import { finalUrl } from "../utils/finalUrlGenerate";
let characters = [];
const helpHttp = () => {
  // CREATE
  const post = async (character) => {
    try {
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

      characters = [newCharacter, ...characters];
      return newCharacter;
    } catch (err) {
      //   console.log(`Error al crear el personajes: ${err.message}`);
      throw new Error(`Error: ${err.message}`);
    }
  };

  //READ ALL
  const getAll = async () => {
    try {
      const url = finalUrl();
      console.log(url);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error al obtener los datos: ${res.status}`);
      }
      const json = await res.json();
      characters = json?.data?.results;
      return characters;
    } catch (err) {
      // console.log(`Error al obtener los personajes: ${err.message}`);
      return {
        error: true,
        message: `Error: ${err.messages}`,
      };
    }
  };

  // UPDATE
  const put = async (id, character) => {
    try {
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
    } catch (err) {
      return {
        error: true,
        message: `Error al actualizar el personaje: ${err.message}`,
      };
    }
  };

  // DELETE
  const del = async (id) => {
    try {
      const initialLength = characters.length;
      characters = characters.filter((char) => char.id !== id);
      return initialLength !== characters.length;
    } catch {
      // console.log(err.message);
      return false;
    }
  };

  return {
    post,
    getAll,
    put,
    del,
  };
};

export default helpHttp;

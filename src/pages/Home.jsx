import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import { Loader } from "../components/Loader/Loader";
import helpHttp from "../helpers/helpHttp";
import { Message } from "../components/MessageError/Message";

const api = helpHttp();

const Home = () => {
  const [data, setData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const getData = async () => {
      try {
        const dataCharacters = await api.getAll();
        if (dataCharacters <= 0) throw new Error("No se encontraron datos.");
        setData(dataCharacters);
      } catch (err) {
        setError(err.message || "Error al obtener los datos.");
      }
      setLoading(false);
    };
    getData();
  }, []);

  const handleCreate = async (character) => {
    setError(null);
    setLoading(true);
    try {
      const createCharacter = await api.post(character);

      setData((prevdata) => {
        if (prevdata.some((char) => char.id === createCharacter.id)) {
          return prevdata;
        }
        return [createCharacter, ...prevdata];
      });
    } catch (err) {
      setError(err.message || "Error al crear el personaje.");
    }
    setLoading(false);
  };

  const handleUpdate = async (character) => {
    setLoading(true);
    setError(null);

    try {
      const updatedCharacter = await api.put(character.id, character);

      if (updatedCharacter) {
        setData((prevCharacters) =>
          prevCharacters.map((char) =>
            char.id === updatedCharacter.id ? updatedCharacter : char
          )
        );
        setDataToEdit(null);
      }
    } catch (err) {
      setError(err.message || "Error al actualizar el personaje.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    setError(null);
    setLoading(true);
    // console.log("Eliminando personaje con ID:", id);
    try {
      const deleteCharacter = await api.del(id);
      if (!deleteCharacter)
        throw new Error(`No se pudo eliminar el personaje con id: ${id}`);

      setData((prevdata) =>
        prevdata.filter((character) => character.id !== id)
      );
    } catch (err) {
      setError(err.message || "Error al eliminar el personaje.");
    }
    setLoading(false);
  };

  if (loading) return <Loader />;
  if (error) return <Message msj={`${error}`} bgColor="#dc3545" />;

  return (
    <>
      <Header
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      <MainLayout>
        {loading && <Loader />}
        {error && <Message msj={error} bgColor="#dc3545" />}
        {!loading && data.length > 0 ? (
          <CardList
            data={data}
            handleDelete={handleDelete}
            setDataToEdit={setDataToEdit}
          />
        ) : (
          !loading && (
            <Message
              msj={`No se encontraron personajes. ${error}`}
              bgColor="#dc3545"
            />
          )
        )}
      </MainLayout>
    </>
  );
};

export default Home;

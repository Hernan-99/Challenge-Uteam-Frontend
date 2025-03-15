import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import { Loader } from "../components/Loader/Loader";
import { Message } from "../components/MessageError/Message";
import helpHttp from "../helpers/helpHttp";

const api = helpHttp();

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const getData = async () => {
      const filterDuplicates = (newData, prevData) => {
        return newData.filter(
          (item) => !prevData.some((prevItem) => prevItem.id === item.id)
        );
      };

      try {
        const data = await api.getAll();
        if (data <= 0) throw new Error("No se encontraron datos.");
        setData((prevData) => {
          const newData = filterDuplicates(data, prevData);
          return [...prevData, ...newData];
        });

        setFilterData((prevData) => {
          const newData = filterDuplicates(data, prevData);
          return [...prevData, ...newData];
        });
      } catch (err) {
        setError(err.message || "Error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleResetSearch = () => {
    setSearch("");
    setFilterData(data);
    setIsSearched(false);
  };

  const handleCreate = async (character) => {
    setError(null);
    const createCharacter = await api.post(character);
    if (createCharacter) {
      setData((prevData) => {
        if (prevData.some((el) => el.id === createCharacter.id))
          return prevData;
        return [...prevData, createCharacter];
      });
      setFilterData((prevData) => [...prevData, createCharacter]);
    } else {
      setError("Error al crear el personaje.");
    }
  };

  const handleUpdate = async (character) => {
    setError(null);
    const updateCharacter = await api.put(dataToEdit.id, character);
    if (updateCharacter) {
      setData((prevData) =>
        prevData.map((char) =>
          char.id === dataToEdit.id ? updateCharacter : char
        )
      );
      setFilterData((prevData) =>
        prevData.map((char) =>
          char.id === dataToEdit.id ? updateCharacter : char
        )
      );
      setDataToEdit(null);
    } else {
      setError("Error al actualizar el personaje.");
    }
  };

  const handleDelete = async (id) => {
    const deleteCharacter = await api.del(id);

    if (deleteCharacter) {
      setData(data.filter((el) => el.id !== id));
      setFilterData(filterData.filter((el) => el.id !== id));
    } else {
      setError(`No se pudo eliminar el personaje con id: ${id}`);
    }
  };

  const handleSubmit = async (character) => {
    if (dataToEdit) {
      handleUpdate(character);
    } else {
      handleCreate(character);
    }
  };

  const handleSearch = () => {
    const filterCharacter = data.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filterCharacter);
    setIsSearched(true);

    if (filterCharacter.length === 0) {
      setError("No se encontraron personajes.");
    } else {
      setError(null);
    }
  };

  if (loading) return <Loader />;
  if (error) return <Message msj={`Error: ${error}`} bgColor="#dc3545" />;

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleResetSearch={handleResetSearch}
        isSearched={isSearched}
        onSubmit={handleSubmit}
        dataToEdit={dataToEdit}
      />

      <MainLayout>
        {loading && <Loader />}
        {error && <Message msj={error} bgColor="#dc3545" />}

        {!loading && filterData.length > 0 ? (
          <CardList
            dataCharacter={filterData}
            handleUpdate={setDataToEdit}
            handleDelete={handleDelete}
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

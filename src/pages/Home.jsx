import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import CardList from "../components/CardList";
import { finalUrl } from "../utils/finalUrlGenerate";
import Header from "../components/Header";
import { Loader } from "../components/Loader/Loader";
import { Message } from "../components/MessageError/Message";

const publicKey = "b8fcd5e1b0df371545657e344604431b";
const privateKey = "ad74c780d5aba598157e2c2035b2488a8743e859";

const Home = () => {
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const finalURL = finalUrl(publicKey, privateKey);
    setUrl(finalURL);
  }, []);
  console.log(url);

  const { data, loading, fetchError } = useFetch(url);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
    }
  }, [fetchError]);

  const handleSearch = (data) => {
    setSearch(data);
    setError(null);
  };
  const character = data?.data?.results || [];
  const filteredPersonajes = character.filter((personaje) => {
    const matchesId = search?.id
      ? personaje.id.toString().includes(search.id)
      : true;
    const matchesName = search?.name
      ? personaje.name.toLowerCase().includes(search.name.toLowerCase())
      : true;
    return matchesId && matchesName;
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <Message
        msj={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );

  return (
    <>
      <Header handleSearch={handleSearch} />

      <MainLayout>
        {loading && <p>cargando</p>}
        {error && <p>error</p>}

        {filteredPersonajes.length > 0 ? (
          <CardList data={filteredPersonajes} />
        ) : (
          !loading && (
            <Message msj={`No se encontraron personajes.`} bgColor="#dc3545" />
          )
        )}
      </MainLayout>
    </>
  );
};

export default Home;

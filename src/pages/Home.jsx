import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import CardList from "../components/CardList";
import { finalUrl } from "../utils/finalUrlGenerate";

const publicKey = "b8fcd5e1b0df371545657e344604431b";
const privateKey = "ad74c780d5aba598157e2c2035b2488a8743e859";

const Home = () => {
  const [url, setUrl] = useState("");
  // const [search, setSearch] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const finalURL = finalUrl(publicKey, privateKey);
    setUrl(finalURL);
  }, []);
  console.log(url);

  const { data, loading, error: fetchError } = useFetch(url);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
    }
  }, [fetchError]);

  const character = data?.data?.results || [];

  // if (loading) return <p>Cargando...</p>;
  // if (error) return <p>error</p>;

  return (
    <MainLayout>
      <h1>main</h1>
      {loading && <p>cargando</p>}
      {error && <p>error</p>}

      {character.length > 0 ? (
        <CardList data={character} />
      ) : (
        !loading && <p>No se encontraron personajes</p>
      )}
    </MainLayout>
  );
};

export default Home;

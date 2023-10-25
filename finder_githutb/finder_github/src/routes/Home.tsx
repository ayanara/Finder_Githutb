import Search from "../componentes/Search";

import { useState } from "react";
// Necessário para fazer a requisição do usuário

const Home = () => {
  const [ user, setUser ] = useState(null);
  // Necessário para salvar o estado do usuário, esse estado começa como null
  return (
   <Search />
  )
}

export default Home
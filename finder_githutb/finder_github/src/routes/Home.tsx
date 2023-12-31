import Search from "../componentes/Search";
import { UserProps } from "../types/user";

import { useState } from "react";
// Necessário para fazer a requisição do usuário

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  // Necessário para salvar o estado do usuário, esse estado começa como null

  const loadUser = async (userName: string) => {
    const res = await fetch(`http://api.github.com/users/${userName}`)
    const data = await res.json()

    const { avatar_url, login, location, followers, following, name, bio } = data

    const userDate: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      name,
      bio,
    };
    setUser(userDate);

  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <img src={user?.avatar_url} alt={user.name}/>}
      {user && <p>{user?.login}</p>}
      {user && <p>{user?.name}</p>}
      {user && <p>{user?.bio}</p>}
      {user && <p>{user?.followers}</p>}
      {user && <p>{user?.following}</p>}
      {user && <p>{user?.location}</p>}
    </div>
  )
}
export default Home;
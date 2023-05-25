import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Esse useEffect serve para assim que o componente for carregado, ele vai verificar se o usuário está logado, se não estiver, ele vai redirecionar para a página de login
  React.useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    } else {
      navigate("/login");
    }
  }, []);

  // Se o usuário não estiver logado, ele vai mostrar uma mensagem de loading até que o useEffect seja executado
  if (!user) {
    return <div>Loading...</div>;
  }

  // Se o usuário estiver logado, ele vai mostrar o conteúdo da página
  return children;
}

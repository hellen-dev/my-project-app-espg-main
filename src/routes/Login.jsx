import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {


  const [usuario, setUsuario] = useState({
    email: "",
    senha: "", // declaração de constantes
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //rotas
    try {
      const response = await fetch("http://localhost:5000/usuarios");
      const users = await response.json();

      const user = users.find((u) => u.email === usuario.email && u.senha === usuario.senha);
    
      //mensagem ao se logar
      if (user) {
        alert("Login realizado com SUCESSO!");

        const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        console.log(tokenUser);

        sessionStorage.setItem("token-user", tokenUser);
        sessionStorage.setItem("data-user", JSON.stringify(user));

        Navigate("/");
      } else {
        alert("Login ou senha incorretos!");

        setUsuario({
          email: "",
          senha: "",
        });

      }
    } catch (error) {
      console.log(error); //mensagem de erro 
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados de Acesso:</legend>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

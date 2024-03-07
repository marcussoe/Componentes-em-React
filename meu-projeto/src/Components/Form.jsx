import { useEffect, useState } from "react";
import { Input } from "./Input";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cacadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <Input
            handleOnInput={(e) => {
              setFormInfo({ name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;

import Login from "./Pages/Login/LoginPage";
import Home from "./Pages/Home/Home";

function App() {
  const usuarioLogadoString = localStorage.getItem("_usuario_logado");
  const usuarioLogado = JSON.parse(usuarioLogadoString);
  console.log(usuarioLogado);

  

  //HTML ABAIXO
  return (
    <>
      {/* <h1>App diz: ola, {usuarioLogado.name}, bem vindo!</h1> */}
      <Login />
      <Home />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./LoginPage.css";
import Icon from "../../UI/Icons/1144760.png";
import erro from "../../UI/Icons/erro.png";


function Login() {
  //obtendo dados do usuario
  const [user, setUser] = useState({});
  
  function handleCallbackResponse(response) {
    //imprime o id do email
    // console.log("Encoded JWT ID token: " + response.credential);

    //traduzir as informações pelo id com o decode
    var userObject = jwtDecode(response.credential);
    
    console.log(userObject);

    //verifica se usuario é da rural
    if(userObject.hd === "ufrrj.br")
    {
      //setar as informaçoes do usuario no objeto
      setUser(userObject);
      //esconder botao
      document.getElementById("signInDiv").hidden = true;
      //Guardar info do usuario
      localStorage.setItem("_usuario_logado", JSON.stringify(userObject));
      console.log("Usuario %s logado com sucesso", user.email);
    }
    else if(userObject.hd !=="ufrrj.br")
    {
      console.log("O email %s não pertence ao dominio da UFRRJ", userObject.email);
      setUser({});

    }

    console.log(user);

    
  }

  //funcao de logout
  function handleSignOut(event) {
    //limpar usuario
    setUser({});
    //reaparecer botao
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "853325995754-9pe7828a2ma28l8teelef548n3dljfj2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    //botao de login
    //se Não tiver usuario logado: mostrar botão de Login;
    //se tiver usuario logado: mostrar botão de Log out;
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div className="Login">
        {/* Se usuario nao tiver, logado, pede p conectar */}
        <div id="Login">
          {Object.keys(user).length === 0 && (
            <h3>
              {" "}
              <img id="icon" src={Icon} alt="Icon"></img> <br></br> Login
            </h3>
          )}
        </div>

        {/* carrega o botao */}
        <div id="signInDiv"></div>
        {/* Botao de Log Out */}
        {Object.keys(user).length !== 0 && (
          <button id="Desconect" onClick={(e) => handleSignOut(e)}>
            Desconectar sua Conta
          </button>
        )}
        {/* Email nao é da UFRRJ */}
        {Object.keys(user).length !== 0 && user.hd !== "ufrrj.br" && (
          <h1 className="loginResponse">
              <img id="errorIcon" src={erro} alt="PicImage"></img>{" "}
                <br></br> <h1>Usuario nao é Da rural</h1>
          </h1>
        )}

        {/* Usuario logado com sucesso */}
        {user && (
          <div>
            {Object.keys(user).length !== 0 && user.hd === "ufrrj.br"  && (
              <h1 className="loginResponse">
                <img src={user.picture} alt="PicImage"></img>{" "}
                <br></br> <h1>Ola, {user.hd}!</h1>
              </h1>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Login;

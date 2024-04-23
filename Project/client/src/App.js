import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";

function App() {
  //obtendo dados do usuario
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    //imprime o id do email 
    console.log("Encoded JWT ID token: " + response.credential);

    //traduzir as informações pelo id com o decode
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    //setar as informaçoes do usuario no objeto
    setUser(userObject);
    //esconder botao
    document.getElementById("signInDiv").hidden = true;
  }
  
  //funcao de logout
  function handleSignOut(event)
  {
    //limpar usuario
    setUser ({})
    //reaparecer botao
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => 
  {
    /* global google */
    google.accounts.id.initialize(
    {
      client_id:
        "853325995754-9pe7828a2ma28l8teelef548n3dljfj2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });


    //botao de login
    //se Não tiver usuario logado: mostrar botão de Login;
    //se tiver usuario logado: mostrar botão de Log out;
    google.accounts.id.renderButton(document.getElementById("signInDiv"), 
    {
      theme: "outline",
      size: "large",
    });
  }, []);

  //HTML ABAIXO
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {/* Botao de Log Out */}
      { Object.keys(user).length != 0 &&
        <button onClick = { (e) => handleSignOut(e)}>Desconectar sua Conta</button>
      }
      { user &&
        <div>
          { Object.keys(user).length != 0 &&
          <h3>Ola, {user.name}!</h3> && <img src = {user.picture}></img>
      }
          
          <h3>O</h3>

        </div>  
      }
    </div>
  );
}

export default App;

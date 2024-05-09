import { useParams } from "react-router-dom";
import "./AgendarHorario.css"

function AgendarHorario() {
  //obtendo dados do usuario

  // //Guardar info do usuario
  // localStorage.setItem("_usuario_logado", JSON.stringify(userObject));
  // console.log(userObject.name);
  const { nomeUsuario } = useParams();
  const { emailUsuario } = useParams();

  return (
    <>
      <div id="registro">
        {/* Se usuario nao tiver, logado, pede p conectar */}
        <div>
          <h3>
            <div id="title">Agendar Horário</div>
          </h3>

        </div>
        <p id="lowText">
          Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong>
        </p>
      </div>
      {console.log("email: %s \n nome: %s", emailUsuario, nomeUsuario)};
      
    </>
  );
}

export default AgendarHorario;

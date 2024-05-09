import { useParams } from "react-router-dom";

function AgendarHorario(){
  //obtendo dados do usuario

   
    // //Guardar info do usuario
    // localStorage.setItem("_usuario_logado", JSON.stringify(userObject));
    // console.log(userObject.name);
    const { nomeUsuario } = useParams();

  

  return (
    <>
      <div className="registro">
        {/* Se usuario nao tiver, logado, pede p conectar */}
        <div id="registro">
          
            <h3 id="reg">
              <div className="title">Agendar Horário, {nomeUsuario}</div>
            </h3>
          
        </div>

       


        
      <p className="lowText">Desenvolvido por<strong className="bold">: Alunos de C.COMP</strong></p>
      </div>
    </>
  );
}

export default AgendarHorario;

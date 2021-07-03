import "./EntradaNome.css"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EntradaNome = () => {

  const history = useHistory();

  const [name, setName] = useState('');


  const criaUser = (name) => {
    axios( {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        url: "http://localhost:3333/criaUsuario",
        data: JSON.stringify(
          { name }
        ),
    } ).then( ( response ) => console.log( response ) ).catch( ( e ) => console.log( e ) )
    .then(() =>  history.push('/postagens',{data:name}));
  };


  
  return (
    <div className="entrada">
     <h3>Projeto Avanade</h3>
      <form>
        <input onChange = {(e) => setName(e.target.value)} type="text" placeholder="Entre com seu nome" autocomplete="off"/>
      </form>
      <button onClick={() => criaUser(name)}>Entrar</button>
    </div>
  );
}
 
export default EntradaNome;
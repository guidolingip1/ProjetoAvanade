import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import { useState} from "react";
import './CriaPostagem.css';

const CriaPostagem = () => {

  const location = useLocation();

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  

  const criaPost = (title, body) => {
    axios( {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        url: "http://localhost:3333/criaPostagens",
        data: JSON.stringify(
          { 
            author: location.state.data,
            title,
            body,
            likes: 0,
            dislikes: 0,
            favorite: 0
          },
        ),
    } ).then( ( response ) => console.log( response ) ).catch( ( e ) => console.log( e ) );
  };

  const handleVoltarOnClick = () => history.push('/');

  return (
    <>
      <div className="criaPostagem">
        <form id='formTitulo'>
          <div className="title">
            <p>Titulo: </p>
            <input type="text" autocomplete="off" onChange = {(e) => setTitle(e.target.value)} name="titulo"/>
          </div>
          <div className="body">
            <p>Corpo: </p>
            <input type="text" autocomplete="off" onChange = {(e) => setBody(e.target.value)} name="corpo"/>
          </div>
          <div className="botoes">
            <button id='btn' type="button" onClick={() => criaPost(title, body)}>Postar</button>
            <button id='btn' onClick={handleVoltarOnClick}>Voltar</button>
          </div>
        </form>
      </div>
      <hr />
    </>
  );
}
 
export default CriaPostagem;
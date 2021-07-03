import { useState, useEffect } from "react";
import './ListaPostagens.css';
import axios from "axios";

const ListaPostagens = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      async function fetchData() {
      const req = await axios.get('http://localhost:3333/listaPostagens');

      setPosts(req.data);
    }
    fetchData();
  },[]);

  const dislikePost = () =>  alert('dislike clicked');
  const handleLike = () =>  alert('like clicked');
  const handleFavorite = () => alert('favorite clicked');

  return (
    <div className="lista-postagens">
      {posts.map((post) => (
        <div className="postagem-preview" key={post._id}>
          <div className="postagem">
            <div className="creator">
              <p id= "title">{`${post.title}`}</p>
              <p id="author">{`@${post.author}`}</p>
            </div>
            <div className="postagemCorpo">
              <p id="body">{`${post.body}`}</p>
            </div>
            <div className="botoesPostagem">
              <button onClick = {() => handleLike(post._id)}>{`Like 👍 ${post.likes}`}</button>
              <button onClick = {() => dislikePost()}>{`Dislike 👿 ${post.dislikes}`}</button>
              <button onClick = {() => handleFavorite()}>{`Amei 💗 ${post.favorite}`}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default ListaPostagens;
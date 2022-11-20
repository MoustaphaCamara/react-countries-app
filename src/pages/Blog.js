import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const getData = () => {
    // test--je mets en asynchrone car au bout de quelques temps la console m'error -> Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
    //edit ça marche pas revenir sur ce point lundi
    async function fetchData() {
      await axios
        .get("http://localhost:3004/articles")
        .then((res) => setBlogData(res.data));
    }
    fetchData();
  };
  useEffect(() => getData(), []);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      axios.post("http://localhost:3004/articles", {
        author,
        // => author : author,
        content,
        date: Date.now(),
        // => l'id s'auto incremente
      });
      setError(false);
      // reset les input
      setAuthor("");
      setContent("");
      // update data live
      getData();
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
      <p style={{ textAlign: "center", color: "gray" }}>
        20/11 - Cette page blog fonctionne uniquement en local. Ayant simulé un
        serveur back avec JSON-Server, celui-ci ne peut être simulé en live via
        netlify, ainsi tout le CRUD en place est indisponible sur cette version
        en ligne. Je travaille sur comment utiliser le back-end avec mon projet
        afin de vous présenter cette partie Blog fonctionnelle accessible
        directement depuis le navigateur.
        <br />
        Si vous avez récupéré ce projet en local, vous pouvez watch les réponses
        du json-server en utilisant la commande du terminal npm run server. Le
        détail du script est dans package.json (si vous souhaitez changer le
        port par exemple). Tout est indiqué dans le readme.
      </p>
    </div>
  );
};

export default Blog;

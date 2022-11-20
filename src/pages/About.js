import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />

      <div className="container">
        <h1>A propos</h1>
        <p>
          Cette petite application m'a servi à m'initier à React. L'utilisation
          de l'API restcountries (
          <span style={{ color: "#61dafb" }}>
            https://restcountries.com/v3.1/all
          </span>
          ) m'a permis de mettre en pratique différentes méthodes, en passant
          par la récupération de data json (avec axios). Ainsi j'ai pu utiliser
          avec les informations des pays les méthodes map, filter, slice,
          sort... afin de créer une navigation pratique dans ce registre de
          pays.
          <br />
          J'ai donc pu voir le fonctionnement de base d'un component, sa
          structure ainsi que celle d'un project en React, et les différentes
          utilisations des hooks & props.
          <br />
          La partie blog me sert pour apprendre le CRUD en React. En simulant un
          back avec json-server et en remplissant la data (cf db.json), ce blog
          permet de pratiquer les affichages conditionnels permis par react (ex
          boutons éditer/valider, affichage des dates d'édition de messages...)
          ainsi que l'utilisation des méthodes d'axios (get, put, delete dans ce
          projet).
          <br />
          Enfin, ce projet m'a introduit aux Hooks, j'ai pu mieux comprendre
          l'utilisation des useEffect & useStates, ainsi qu'au fonctionnement
          des props.
        </p>
      </div>
    </div>
  );
};

export default About;

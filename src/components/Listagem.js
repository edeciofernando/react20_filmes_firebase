import React, { useEffect, useState } from "react";

import { db } from "../conectafb";

import './Listagem.css';

const Listagem = () => {
  // // function para obter os filmes
  // const getFilmes = async () => {

  //     // obtém os dados da collection (tabela) filmes
  //     const filmes = await db.collection('filmes').get();

  //     filmes.forEach(filme => {
  //         console.log(filme.data());
  //         console.log(filme.id);
  //     })
  // }

  // cria um array vazio para conter a lista de filmes
  const [filmes, setFilmes] = useState([]);

  // function para listar os filmes a cada modificação na collection
  const getFilmes = async () => {
    // obtém os dados A CADA MODIFICAÇÃO da collection (tabela) filmes
    db.collection("filmes").orderBy('titulo').onSnapshot((dados) => {
      const docs = [];
      dados.forEach((filme) => {
        //console.log(filme.data());
        //console.log(filme.id);
        docs.push({ ...filme.data(), id: filme.id });
      });
      //console.log(docs);
      setFilmes(docs);
    });
  };

  // define o que será executado logo após o componente ser renderizado
  useEffect(() => {
    getFilmes();
  }, []);

  const excluiFilme = async (id, titulo) => {
      if (window.confirm(`Confirma a exclusão do filme "${titulo}"?`)) {
          await db.collection('filmes').doc(id).delete();
      };
  }

  return (
    <div className="container-fluid">
      {filmes.map((filme) => (
        <div className="card" key={filme.id}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
                <h4>{filme.titulo}</h4>
                <i className="far fa-trash-alt text-primary" onClick={() => excluiFilme(filme.id, filme.titulo)}></i>
            </div>
            <p>{filme.sinopse}</p>
            <a href={filme.link} target="_blank" rel="noopener noreferrer">
              Ver Trailer
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listagem;

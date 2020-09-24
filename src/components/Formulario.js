import React from "react";
import { useForm } from "react-hook-form";
import {db} from '../conectafb';


const Formulario = () => {

  const { register, handleSubmit, errors } = useForm();
  
  const gravaFilme = (data, e) => {
    // adiciona um novo "documento" (registro) na collection filmes
    db.collection('filmes').doc().set(data);
    // limpa os campos de formulário
    e.target.reset();
    alert('Ok! Filme Cadastrado com Sucesso!!');
  };    

    return (
    <form className="card card-body" onSubmit={handleSubmit(gravaFilme)}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-film text-primary"></i>
          </span>
        </div>
        <input type="text" 
               className="form-control" 
               placeholder="Título do Filme" 
               name="titulo"
               ref={register({ required: true })}
               />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-eye text-primary"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Link do trailer"
          name="link"
          ref={register({ required: true })}
        />
      </div>
      <div className="input-group mt-1">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-comments text-primary"></i>
          </span>
        </div>
        <textarea
          rows="2"
          className="form-control"
          placeholder="Sinopse do filme"
          name="sinopse"
          ref={register({ required: true })}
        ></textarea>
      </div>
      <div className={(errors.titulo || errors.link || errors.sinopse) && "alert alert-danger mt-1"}>
        {(errors.titulo || errors.link || errors.sinopse) && <span>Por favor, preencha os campos</span>}
      </div>  
      <button className="btn btn-success btn-block mt-1">
        Cadastrar
      </button>
    </form>
  );
};

export default Formulario;

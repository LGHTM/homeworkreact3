import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonForms: null,
    };
  }
  async componentDidMount() {
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon-form");
    const pokemonForms = await reponse.json();
    console.log(pokemonForms)
    this.setState({
      pokemonForms: pokemonForms.results,
    });
  }
  render() {
    if (this.state.pokemonForms === null) {
      return <p>...Loading...</p>;
    }
    return (
      <ul>
        {this.state.pokemonForms.map((type) => (
          <li key={type.id}>{type.name}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <PokemonForm/>,
  document.getElementById("root")
);

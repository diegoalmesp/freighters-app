import React from "react";
import SearchForm from "../../composites/SearchForm";
import FreightersList from "../../composites/FreightersList";

const Home: React.FC = () => {
  return (
    <section>
      <h1>Frighter Agents</h1>
      <h2>mundi.io</h2>

      <SearchForm />

      <FreightersList />
    </section>
  );
};

export default Home;

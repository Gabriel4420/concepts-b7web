import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Container } from "./components/Container";
import Button from "./components/Button";
import SwitchToggle from "./components/SwitchToggle";

// import { Container } from './styles';

const ThemeExercise: React.FC = () => {
  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Título da página</h1>
        </header>
        <section>
          <p className="my-5">conteúdo da pagina</p>
          <Button title="clique aqui" cta="clique aqui" />
          <SwitchToggle title="clique aqui" cta="mudar tema"/>
        </section>
      </Container>
    </ThemeProvider>
  );
};

export default ThemeExercise;

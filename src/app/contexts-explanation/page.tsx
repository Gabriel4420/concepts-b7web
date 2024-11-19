"use client";
type TitleProps = { text: string };
type SubtitleProps = { text: string };
type HeaderProps = { title: string; subtitle: string };

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <p>{text}</p>;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </header>
  );
};

const PageZ: React.FC = () => {
  const pageInfo = {
    title: "Título maroto",
    subtitulo: "Subtítulo muito legal e bem feito",
  };

  return (
    <>
      
      <div className="container mx-auto">
        <Header title={pageInfo.title} subtitle={pageInfo.subtitulo} />
      </div>
    </>
  );
};

export default PageZ;

import Header from "./components/Header";
import Projects from "./components/Projects";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Header />
      <div className="portfolio max-w-[60rem] mx-auto">
        <Title />
        <Projects />
      </div>
    </>
  );
}

export default App;

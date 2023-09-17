import { useEffect, useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [qstn, setQstn] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  }

  return (
    <>
      <main>
        <section className="container">
          <h1>Questions</h1>
          {qstn ?
            qstn.map((question) => {
              const { id } = question;
              return <SingleQuestion {...question} key={id} activeId={activeId} toggleQuestion={toggleQuestion} />
            })
            : <h3>There are no questions</h3>}
        </section>
      </main>
    </>
  );
};
export default App;

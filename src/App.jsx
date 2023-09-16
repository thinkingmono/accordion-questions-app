import { useEffect, useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [qstn, setQstn] = useState(questions);
  const isActive = (id) => {
    let state =  false;
    const newArray = [...qstn];
    newArray.map((question) => {
      if (id === question.id) {
        question.active = true;
        state = question.active;
      } else {
        question.active = false;
      }
    })
    // console.log(newArray);
    setQstn(newArray);
    return state;
  }

  useEffect(() => {
    const addIsActive = () => {
      qstn.map((question) => {
        question.active = false;
      })
    }
    addIsActive();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <h1>Questions</h1>
          {qstn ?
            qstn.map((question) => {
              const { id } = question;
              return <SingleQuestion {...question} key={id} isActive={isActive} />
            })
            : <h3>There are no questions</h3>}
        </div>
      </main>
    </>
  );
};
export default App;

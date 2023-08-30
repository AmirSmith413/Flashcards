import { Card, CardBody } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import SortCategory from "./SortCategory";

interface CardProps {
  results: [];
  id: number;
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  response_code: string[];
  name: string;
}

const Flashcard = () => {
  const [data, setData] = useState<CardProps[]>([]);

  const FetchData = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=15&type=multiple")
      .then((response) => setData(response.data.results));
  };
  useEffect(() => {
    FetchData();
  }, []);

  function decodeString(str: string) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }
  console.log(data);
  return (
    <>
      <Card>
        <CardBody>
          {data.map((helpme) => (
            <p key={helpme.id}>{helpme.difficulty}</p>
          ))}
          {data.map((helpme) => (
            <p key={helpme.id}>{helpme.question}</p>
          ))}
          {data.map((helpme) => (
            <button key={helpme.id} className="btn btn-primary">{helpme.correct_answer}</button>
          ))}
          {data.map((helpme) => (
            <button key={helpme.id} className="btn btn-primary">{helpme.incorrect_answers}</button>
          ))}
          {data.map((helpme) => (
            <button key={helpme.id} className="btn btn-primary">{helpme.correct_answer}</button>
          ))}
          {data.map((helpme) => (
            <button key={helpme.id} className="btn btn-primary">{helpme.correct_answer}</button>
          ))}
          
        </CardBody>
      </Card>
    
    </>
  );
};

export default Flashcard;

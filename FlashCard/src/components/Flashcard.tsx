import { Card, CardBody } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import SortCategory from "./SortCategory";

interface CardProps {
  
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
  const [results, setResults] = useState<CardProps[]>([]);

  const FetchData = () => {
    axios
      .get<CardProps[]>(
        "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
      )
      .then((response) => setResults(response.data));
  };
  useEffect(() => {
    FetchData();
  }, []);
  console.log(results);
  return (
    <div>
      <ul>
        {results.map((me) => (
          <li key={me.id}>{me.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Flashcard;

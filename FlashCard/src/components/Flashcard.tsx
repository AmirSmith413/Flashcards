import { Card, CardBody, FormControl, FormLabel, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";


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
  const [flip, setFlip] = useState(false)
  const [data, setData] = useState<CardProps[]>([]);
  const handleFlip = () => {
     (
      setFlip(!flip)
    )
  }

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
     <FormControl width={'200px'}>
      <FormLabel>Select Category</FormLabel>
      <Select>
        <option value={1}>Video Games</option>
        <option value={2}>Television</option>
        <option value={3}>General Knowledge</option>
        <option value={4}>Board Games</option>
        <option value={5}>Animals</option>
      </Select>
    </FormControl>
      <Grid templateColumns='repeat(auto-fit,minmax(200px,1fr))'
              gap={5}>
        {data.map(bleh => (
          <GridItem key={bleh.id} onClick={handleFlip}> 
            {!flip ? (
              <Text>{decodeString(bleh.question)}</Text>
            ) : (<Text>{decodeString(bleh.correct_answer)}</Text>
              
            )}
            </GridItem>
        ))}



        {/* <CardBody>
          {data.map((helpme) => (
            <p key={helpme.id}>{helpme.difficulty}</p>
          ))}
          {data.map((helpme) => (
            <p key={helpme.id}>{helpme.question}</p>
          ))}
          {data.map((helpme) => (
            <p key={helpme.id} >{helpme.correct_answer}</p>
          ))}
          {data.map((helpme) => (
            <p key={helpme.id} >{helpme.correct_answer}</p>
          ))}
          {data.map((helpme) => (
            <p key={helpme.id} >{helpme.correct_answer}</p>
          ))}
          {data.map((helpme) => (
            <p key={helpme.id} >{helpme.correct_answer}</p>
          ))}
          
        </CardBody> */}
      </Grid>
    
    </>
  );
};

export default Flashcard;

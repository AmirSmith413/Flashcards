import { Card, CardBody, FormControl, FormLabel, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "./Categories";


interface CardProps {
  results: [];
  id: number;
  category: string;
  correct_answer: string;
  question: string;
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
  return (
    <>
   <Categories selectedCategory={""} onCategoryChange={function (category: string): void {
        throw new Error("Function not implemented.");
      } }/>
      <Grid templateColumns='repeat(auto-fit,minmax(200px,1fr))'
              gap={5}>
        {data.map(bleh => (
          <GridItem key={bleh.id} onClick={handleFlip} className="card"> 
            {!flip ? (
              <Text>{decodeString(bleh.question)}</Text>
            ) : (<Text>{decodeString(bleh.correct_answer)}</Text>
              
            )}
            </GridItem>
        ))}



     
      </Grid>
    
    </>
  );
};

export default Flashcard;

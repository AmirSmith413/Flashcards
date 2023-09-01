import { Card, CardBody, FormControl, FormLabel, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";


interface CardProps {
  results: [];
  id: number;
  category: string;
  correct_answer: string;
  question: string;
  name: string;
  selectedCategory: number;
  onCategoryChange: (category: number) => void;
}

const Flashcard = ({selectedCategory,onCategoryChange}:CardProps) => {
  const sortCategory = [
    {id:15,name:'Video Games'},
    {id:27,name:'Animals'},
    {id:14,name:'Televison'},
    {id:16,name:'Board Games'},
    {id:12,name:'Music'},

  ]
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
     <FormControl mb={'200px'} width={'200px'}>
      <FormLabel>Select Category</FormLabel>
      <Select value={selectedCategory} onChange={(e) => onCategoryChange(Number(e.target.value))}>
        {sortCategory.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </FormControl>
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

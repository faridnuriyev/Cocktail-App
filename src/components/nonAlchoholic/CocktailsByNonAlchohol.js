import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import '../nonAlchoholic/nonAlchoholic.css'


function CocktailsByAlchohol() {
    const[alchoholic, setAlchoholic] = useState(null);
    useEffect(() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then(res => res.json())
      .then( result => setAlchoholic(result.drinks))
 
    },[])
    useEffect(() => {
      document.title = "Non-Alchoholic"
    })
       
  return (

  <Container className="my-5">
    <Row xs={1} md={2} lg={4} className="g-4">
    {alchoholic?.map(a => (
       <div key={a.idDrink} className="magazine_card my-2">
       <img src={a.strDrinkThumb} alt={a.strDrink} />
       <p className="magazine_title">{a.strDrink}</p>
       <p className="magazine_desc">ID: {a.idDrink}</p>
       <div className="splitter"></div>
       <div className="shadow" />
     </div>
    ))}
   
    </Row>
  </Container>

  );
}

export default CocktailsByAlchohol;

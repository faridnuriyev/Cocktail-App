import { useRef, useState } from "react";
import "../List/List.css";
import { Button, Card, Col, Container, Pagination, Row } from "react-bootstrap";
import CocktailService from "../../services/CocktailService";
import { useEffect } from "react";


function List ({cocktailShow}) {
  const isMounted = useRef(false)
  const cocktails = new CocktailService();

  const [cocktObj, setCocktObj] = useState({
      letter: "a",
      active: 0,
      cocktarr: []
  })
 

  // componentDidMount() {
  //   this.getCocktailList(0, "a");
  // }
  function getCocktailList(n, letter) {
    cocktails.getCocktailByLetter(letter).then((result) => {
      setCocktObj({
        active: n,
        cocktarr: result,
      });
    });
  }
useEffect(()=>{
  if(isMounted.current === false){
    getCocktailList(cocktObj.active,cocktObj.letter)
  }
  isMounted.current = true;
  // eslint-disable-next-line
},[cocktObj])

    let { active, cocktarr } = cocktObj;
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = [];
    for (let n = 0; n < abc.length; n++) {
      letters.push(
        <Pagination.Item
          key={n}
          onClick={() => {
            getCocktailList(n, abc[n].toLocaleLowerCase());
          }}
          active={n === active}
        >
          {abc[n]}
        </Pagination.Item>
      );
    }
    return (
      <Container className="py-5">
        <h2 style={{color: "#4800ff"}}>Cocktails By First Letter</h2>
        <Pagination className="pagi">{letters}</Pagination>
        <Row xs={1} md={2} lg={4} className="g-4">
          {cocktarr.map((c, idx) => (
            <Col key={idx}>
              <Card className="h-100" style={{background: "#2900ff21"}}>
                <Card.Img variant="top" src={c.img} alt={c.name} />
                <Card.Body>
                  <Card.Title>
                    {c.name} (
                    <i>
                      {c.cat} - {c.isAlc}
                    </i>
                    )
                  </Card.Title>
                  <Card.Text className="ellipsis2">
                    <b>Ingredients: </b> <i>{c.ings.join(", ")}</i>
                  </Card.Text>
                  <Card.Text>
                    {c.desc.slice(0, 100) + (c.desc.length < 100 ? "" : "...")}
                  </Card.Text>
                </Card.Body>
                <Button
                  className="button-85"
                  onClick={() => {
                    cocktailShow(c.id);
                  }}
                  variant="danger"
                  size="sm"
                >
                  Read more...
                </Button>
                
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }


export default List;

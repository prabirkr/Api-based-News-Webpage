import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row,Col,Card} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

function Topnews () {

  const [mydata,setData] = useState([]);

  const apiget = () => {
     fetch('https://inshortsapi.vercel.app/news?category=top')
     .then((response)=>response.json())
     .then((json)=>{
      console.log(json);
      setData(json.data)
     });
  };

  useEffect(()=>{
    apiget();
    const interval = setInterval(()=>{apiget();},500000);
    return ()=> clearInterval(interval);
  },[]);

  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {
          mydata.map(
            (value)=>{
              return(
              <>
                <Col className="container-fluid mt-4">
                <Card>
                    <Card.Img variant="top" src={value.imageUrl} width={'200px'} height={'200px'}/>
                     <Card.Body>
                       <Card.Title>{value.title}</Card.Title>
                         <Card.Text>
                            {value.content}
                           </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                       <small className="text-muted">Last updated on : {value.date}</small>
                     </Card.Footer>
                     </Card>
                </Col>
              </>
              );
            }
          )
        }
      </Row>
    </Container>
  );
}
export default Topnews;

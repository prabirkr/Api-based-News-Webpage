import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row,Col,Card,Table} from 'react-bootstrap'; import React, {useState, useEffect} from 'react';

function Trending() {
 const [mydata,setData] = useState([]);
  const apiget = () => {
     fetch('https://inshortsapi.vercel.app/news?category=trending')
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
{  mydata.map(
     (value)=>{
          return(    
             <>
              <Col className="container-fluid mt-4">   <Card>
                <Card.Img variant="top" src={value.imageUrl} width={'210px'} height={'210px'}/>
                 <Card.Body><Card.Title>{value.title}</Card.Title><Card.Text> {value.content} </Card.Text></Card.Body>
                 <Card.Footer><small className="text-muted">Last updated on : {value.date}</small></Card.Footer>
               </Card></Col>
            </>
); } ) }
</Row>
</Container>
);
}
export default Trending;



// import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container ,Row,Col,Card,Table} from 'react-bootstrap';
// import React, {useState, useEffect} from 'react';

// function Trending() {

// const [mydata,setData] = useState([]);

// const apiget = () => {
// fetch('https://inshorts.me/news/trending?offset=0&limit=21')
// .then((response)=>response.json())
// .then((json)=>{
// console.log(json);
// setData(json.data)
// });
// };

// useEffect(()=>{
// apiget();
// const interval = setInterval(()=>{apiget();},500000);
// return ()=> clearInterval(interval);
// },[]);

// return (
// <Container fluid>
// <Row xs={1} md={3} className="g-4">
// {
// mydata.map(
// (value)=>{
// return(
// <>
// <Col className="container-fluid mt-4">
    
// <Card>
//     <Card.Img variant="top" src={value.imageUrl} width={'400px'} height={'400px'}/>
//         <Card.Body>
//         <Card.Title>{value.title}</Card.Title>
//             <Card.Text>
//             {value.content}
//             </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//         <small className="text-muted">Last updated on : {value.date}</small>
//         </Card.Footer>
//         </Card>

// </Col>
// </>
// );
// }
// )

// }

// </Row>

// </Container>
// );
// }

// export default Trending;
import React from 'react'
import Card from 'react-bootstrap/Card'

export default function GitHubCard(){
  return (
   <div className="card">
     <Card style={{ width: "18rem"}}>
     <Card.Img variant="top" src='headshot.jpg' />
     <Card.Body>
         <Card.Title>Jeffrey Franklin</Card.Title>
         <Card.Text>
           Software Developer in Training! Thanks for visiting my page!
         </Card.Text>
     </Card.Body>
     </Card>
   </div>
 );
}
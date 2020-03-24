import React from 'react'
import { Card } from "react-bootstrap";

const chatRoom = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>chatroom</Card.Title>
                    <Card.Text>
                        This is where our chatrooms will go
    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}
export default chatRoom
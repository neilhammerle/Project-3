import React from 'react';
import Form from './container/Login';
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
    this.createRoom = this.createRoom.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'rockd',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(err => console.log('error on connecting', err))
  }


  getRooms = () => {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms', err))
  }


  subscribeToRoom = (roomId) => {
    this.setState({ messages: [] }) 
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message] 
          })
        }
      }
    })
      .then(room => {
        this.setState({
          roomId: room.id 
        })
        this.getRooms()  
      })
      .catch(err => console.log('Error on subscribing room', err))
  }


  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })

  }

  createRoom = (name) => {
    //console.log('Room Name: ', name)
    this.currentUser.createRoom({
      name
    })
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => console.log('Error in creating Room ', err))
  }

  render() {
    const { joinableRooms, joinedRooms } = this.state
    // console.log('message :', this.state.messages);
    return (
      <div className="app">
        <RoomList
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...joinableRooms, ...joinedRooms]}
        />
        <MessageList messages={this.state.messages} roomId={this.state.roomId} />
        <SendMessageForm disabled={!this.state.roomId} sendMessage={this.sendMessage} />
        <NewRoomForm createRoom={this.createRoom} />
      </div>
    );
  }
}

export default App
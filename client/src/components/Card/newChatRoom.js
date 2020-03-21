import React from 'react'

class newChatRoom extends React.Component {
    constructor (props) {
        super (props) 
        this.state ={
            newRoom: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


handleChange (e) {
    this.setState ({
        roomName: e.target.value
    })
};

handleSubmit(e) {
    e.preventDefault()
    this.props.newChatRoom(this.state.roomName)
    this.setState({
        newRoom: ''
    })
};

render () {
    return (
        <div className = "newRoom">
            <form onSubmit = {this.handleSubmit}>
                <input
                value = {this.state.roomName}
                onChange = {this.handleChange}
                type = "text"
                placeholder = "New chatroom name?" required />
                <button id = "new-room-btn" type = "submit"></button>
            </form>
        </div>
    )
};

};

export default newChatRoom
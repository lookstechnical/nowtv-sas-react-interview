import React, { Component } from 'react';
import './App.css';
import getChatLog from "./service";
import {MessageList} from "./Components/MessageList";
import styled from "styled-components";

const Wrapper = styled.div`
    padding:40px 10%;
`;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {list:[]}
  }

  componentWillMount() {
      getChatLog().then((messages) => {
          this.setState({'list': messages})
      });
  }


  render() {
    const {list} = this.state;
    return (
        <Wrapper>
          <MessageList list={list}/>
        </Wrapper>
    );
  }
}

export default App;

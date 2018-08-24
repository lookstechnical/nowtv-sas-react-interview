import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  height:100vh;
  margin:0px;
  padding:0px;
  width: 100%;
`;

const Email = styled.a`
    display:none
`;

const StyledItem = styled.li`
    display:flex;
    margin:0px;
    padding:0px;
    border-bottom: 1px solid #ccc;
    line-height:1rem;
    font-family: sans-serif;
    position:relative;
    height: auto;
    overflow:hidden;
    text-flow: auto;
    
    &:hover ${Email} {
        display: inline-block;
        color: #990000
        text-decoration: none;
    }
    
  
`;


const User = styled.div`
    padding: 16px;
`;

const Avatar = styled.div`
    min-width:100px;

    img {
        width:100%;
        max-width:100px;
    }
`;

const Message = styled.div`
    padding: 24px 16px;
  
    span {
        font-size:12px;
    }
`;

const Date = styled.span`
`

export const MessageListItem = ({item}) => (
    <StyledItem>
        <User>
            <Avatar>
                <img src={item.avatar} role="presentation"  />
            </Avatar>

        </User>
        <Message>
            <strong>{item.fullName} <Email href={`mailto:${item.email}`}> - {item.email}</Email></strong>
            <p>{item.message}</p>
            <Date>posted at : {item.timestamp}</Date>
        </Message>
    </StyledItem>
)

export const MessageList = (props) => (
    <StyledList>
        {props.list.map((item) => (
                <MessageListItem key={item.messageId} item={item} {...props}></MessageListItem>
            )
        )}
    </StyledList>
)

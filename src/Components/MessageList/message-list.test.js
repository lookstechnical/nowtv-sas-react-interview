import React from "react";
import {mount} from 'enzyme';
import {MessageList, MessageListItem} from "./index";
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

it("should render a list of message elements", () => {

    const list = [
        {
            "messageId": "1",
            "userId": "613651251",
            "fullName": "Robin Balmforth",
            "timestamp": "2017-02-23T14:57:20.629Z",
            "email": "robin@example.com",
            "message": "Hello, World!",
            "avatar": null
        },
        {
            "messageId": "2",
            "userId": "61365w1251",
            "fullName": "Peter Smith",
            "timestamp": "2011-02-23T14:57:20.629Z",
            "email": "peter@example.com",
            "message": "goodbye, World!",
            "avatar": 'test.png'
        }
    ]
    const wrapper = mount(<MessageList list={list}/>);

    const messages = wrapper.find(MessageListItem);
    expect(messages.length).toEqual(2);

    expect(messages.first().find('img').prop('src')).toEqual(null);
    expect(messages.at(1).find('img').prop('src')).toEqual('test.png');

})
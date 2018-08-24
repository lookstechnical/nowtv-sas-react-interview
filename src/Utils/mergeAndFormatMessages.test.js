import React from "react";
import mergeAndFormatMessages, {MessageIds} from "./mergeAndFormatMessages";


it("should add messageId attribute to the data from id", () => {

    const data = [{id: 25, name: "here"}];

    const result = MessageIds(data);

    expect(result[0].messageId).toEqual(25);
});

it("should convert arrays to corect format for display", () => {
    const members = [
        {
            "id": "1",
            "firstName": "Martin",
            "lastName": "Bradley",
            "email": "mbradley0@google.it",
            "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
            "ip": "166.124.172.160"
        },
        {
            "id": "2",
            "firstName": "Helen",
            "lastName": "Hawkins",
            "email": "hhawkins1@posterous.com",
            "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
            "ip": "179.239.189.173"
        }
    ]

    const messages = [
        {
            "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
            "userId": "1",
            "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "timestamp": "2017-02-09T04:27:38Z"
        },
        {
            "id": "b03569ae-ccbf-4975-8040-4daba638b407",
            "userId": "2",
            "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            "timestamp": "2016-11-09T05:04:58Z"
        },
        {
            "id": "b03569ae-ccbf-4975-8040-4daba638b407",
            "userId": "2",
            "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            "timestamp": "2017-11-09T04:27:38Z"
        }
    ]

    const test = mergeAndFormatMessages('userId', 'id', messages, members);

    const firstMessage = test[0];
    expect(typeof firstMessage.userId).toBe('string');
    expect(typeof firstMessage.fullName).toBe('string');
    expect(typeof firstMessage.timestamp).toBe('string');
    expect(typeof firstMessage.email).toBe('string');
    expect(typeof firstMessage.message).toBe('string');
    expect(firstMessage.timestamp).toEqual('9th Nov 2017, 04:27am');
    expect(firstMessage.fullName).toEqual('Helen Hawkins');
})
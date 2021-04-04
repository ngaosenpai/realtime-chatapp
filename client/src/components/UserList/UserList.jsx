import React from 'react';
import './UserList.scss'

import UserItem from '../UserItem/UserItem';

function UserList(props) {
    const test = [
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        },
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "test message hbjkjhhj dsadg asdgadb asjdga jasda ias dadi",
            time: "1m"
        }
    ]
    return (
        <div className="user-list">
            {test.map(item => <UserItem data={item}/>)}
        </div>
    );
}

export default UserList;
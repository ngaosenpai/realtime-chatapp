import React from 'react';
import './UserList.scss'

import UserItem from '../UserItem/UserItem';

function UserList(props) {
    const usersList = [
        {
            src: 'https://picsum.photos/200', 
            name: "test user", 
            msg: "aa",
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
    const { setShouldShowMenu } = props
    // console.log(usersList)
    return (
        <div 
            className="user-list" 
            style={{height: 'calc(100vh - 128px)'}}
            onClick={() => {
                if(setShouldShowMenu !== undefined)
                    return setShouldShowMenu(pre => !pre)
                else return undefined
            }} 
        >
            {
                usersList.map((item, i) => 
                    <UserItem 
                        key={i} 
                        id={i} 
                        data={item} 
                    />
                )
            }
        </div>
    );
}

export default UserList;
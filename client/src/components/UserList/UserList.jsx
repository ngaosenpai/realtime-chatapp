import React from 'react';
import './UserList.scss'

import UserItem from '../UserItem/UserItem';

function UserList(props) {
    const test = [
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
    // console.log(props)
    const { setShouldShowMenu } = props
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
                test.map((item, i) => 
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
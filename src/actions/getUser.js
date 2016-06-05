import {SET_USER} from '../constants';

let Users=[
    {
      id:1,
      name:"Martha",
      pic:"1.jpg"
    },
    {
      id:2,
      name:"Chang",
      pic:"2.jpg"
    },
    {
      id:3,
      name:"Raven",
      pic:"3.jpg"
    },
    {
      id:4,
      name:"Shiya",
      pic:"4.jpg"
    },
    {
      id:5,
      name:"Sophia",
      pic:"5.jpg"
    },
    {
      id:6,
      name:"John",
      pic:"6.jpg"
    },
    {
      id:7,
      name:"Sean",
      pic:"7.jpg"
    },
    {
      id:8,
      name:"Jacob",
      pic:"8.jpg"
    },
    {
      id:9,
      name:"chio",
      pic:"9.jpg"
    },
    {
      id:10,
      name:"xing",
      pic:"10.jpg"
    },
];

export function getInitialUserList(){
    return {
      type:SET_USER,
      payload:Users
    }
}
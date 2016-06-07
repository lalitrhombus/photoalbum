import { FEATCH_PHOTOS,FETCH_ALBUMS} from '../actions/index';

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

export default function(state = [], action) {
  // switch (action.type) {
  //   case FETCH_ALBUMS:{
  //     let UsersWithAlbums=Users;
  //     let data =[];
  //     data.length=Users.length;
  //     for(var i=0;i<=data.length;i++){
  //       console.log("jhvj");
  //       data[i] = action.payload.data.filter(function(album) {
  //           return album.userId == i+1; // if truthy then keep item
  //       }).map(function(album) {
  //           return {
  //             id: i+1,
  //             albums:album
  //           };
  //       }); 
  //     }
  //     console.log("jgfjf",data);
  //   }
  //   case FEATCH_PHOTOS:{
  //     console.log("getting photo ",state,action.payload);
  //   }
  // }
  return Users;
}

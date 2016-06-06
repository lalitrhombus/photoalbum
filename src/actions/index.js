import axios from 'axios';
const ROOT_URL = `http://jsonplaceholder.typicode.com/`;

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FEATCH_PHOTOS = 'FEATCH_PHOTOS';


export function featchAlbums(){
  const url = `${ROOT_URL}albums`;
  const request = axios.get(url);

  return {
    type: FETCH_ALBUMS,
    payload: request
  }
}


export function featchPhotos(){
  const url = `${ROOT_URL}photos`;
  const request = axios.get(url);

  return {
    type: FEATCH_PHOTOS,
    payload: request
  }
}
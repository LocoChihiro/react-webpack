import { polyfill } from 'es6-promise';
import originFetch from 'isomorphic-fetch';
polyfill();

const status_map:any = {};
const baseURL = 'https://dialogmanagement-dev.azurewebsites.net';

const fatch = (url: string, options: object, baseU?: string) => {
  if (status_map[url]) {
    return;
  }
  status_map[url] = true;
  const fatchUrl = baseU ? baseU + url : baseURL + url;
  return new Promise((resolve,reject)=>{
    originFetch(fatchUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    }).then(res => {
      res.json();
    }).then(res => {
      resolve(res);
    })
  })
  
}

export default fatch;
import fetch from 'isomorphic-unfetch'

export const fetchJSON = (url:string) => fetch(url).then(res => res.json())


async function getPhoto(name){
    let data = await axios.get(`https://api.unsplash.com/search/photos?query=${name}&client_id=3H26c7qgwQkEkYPTmhCa4zDxfPKbHBsMsORRS5_zNGA`)
   return data
}

export { getPhoto }
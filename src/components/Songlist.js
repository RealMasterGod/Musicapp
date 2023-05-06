import React, { useState, useEffect, useCallback } from 'react'
import axios  from 'axios'
import Label from './Label';
import Artist from './Artist';
import Album from './Album';
import Song from './Song';
import Remix from './Remix';
import Concert from './Concert';

export default function Songlist () {
  const [songs,setSongs] = useState([]);
  //const [varset, setVar] = useState();
  const [sendurl,setUrl] = useState("label");
  const [id,setId] = useState('');
  
  const getSongs = useCallback( () => {
    console.log(sendurl);
    console.log(id);
    axios.get(`http://localhost:80/backendmusiclib/select/${sendurl}${id}`).then((response) => {
      console.log(response.data);
      setSongs(response.data);
    });
  },[sendurl,id]);
  useEffect(() => {
    //console.log("working");
    
      getSongs();
      //console.log("are you there");
    //console.log("blahbblah");
  },[getSongs]);
  function changeId(value){
    let newId = "/" + value;
    console.log(newId);
   setId(newId);
  }
  /*const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert', input);
    console.log(input);
  }*/
  return (
    <div className="h-full flex flex-col items-center z-0 bg-black text-white">
        {/*<form onSubmit={handleSubmit}>
          <label>Label Name :</label>
          <input className="text-black" type="text" name="Lname" onChange={handleChange} />
          <button>Save</button>
         </form>*/}
         <br />
         <div className="grid grid-cols-6 gap-4">
         <button onClick={() => setUrl("artist")} className="w-32 rounded-xl bg-purple-900 hover:bg-purple-700 text-green-500">Artist</button>
         <button onClick={() => setUrl("album")} className="rounded-xl bg-purple-900 hover:bg-purple-700 text-green-500">Album</button>
         <button onClick={() => setUrl("song")} className="rounded-xl bg-purple-900 hover:bg-purple-700 text-green-500">Song</button>
         <button onClick={() => setUrl("remix")} className="rounded-xl bg-purple-900 hover:bg-purple-700 text-green-500">Remix</button>
         <button onClick={() => setUrl("concert")} className="rounded-xl bg-purple-900 hover:bg-purple-700 text-green-500">Concert</button>
         <button onClick={() => setUrl("label")} className="rounded-xl bg-purple-900 hover:bg-purple-700 text-green-500">Label</button>
         </div><br />
         {(sendurl === "label") && <Label songs={songs} /> }
         
         {(sendurl === "artist") && <Artist songs={songs} changeId={changeId} /> }

         {(sendurl === "album") && <Album songs={songs} changeId={changeId} /> }

         {(sendurl === "song") && <Song songs={songs} changeId={changeId} /> }

         {(sendurl === "remix") && <Remix songs={songs} changeId={changeId} /> }

         {(sendurl === "concert") && <Concert songs={songs} changeId={changeId} /> }
    </div>
  )
}

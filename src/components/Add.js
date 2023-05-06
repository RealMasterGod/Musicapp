import React, { useState, useEffect, useCallback } from 'react'
//import axios  from 'axios'
import Addlabel from './Addlabel';
import Addartist from './Addartist';
import Addalbum from './Addalbum';
import Addsong from './Addsong';
import Addremix from './Addremix';
import Addconcert from './Addconcert';

export default function Add () {
  //const [songs,setSongs] = useState([]);
  //const [varset, setVar] = useState();
  const [sendurl,setUrl] = useState("label");
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
         {(sendurl === "label") && <Addlabel /> }
         
         {(sendurl === "artist") && <Addartist  /> }

         {(sendurl === "album") && <Addalbum  /> }

         {(sendurl === "song") && <Addsong /> }

         {(sendurl === "remix") && <Addremix /> }

         {(sendurl === "concert") && <Addconcert /> }}
    </div>
  )
}

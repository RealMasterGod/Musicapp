import React from 'react'

export default function Remix(props) {
  let x = "";
   let y="";
  let z="";
    console.log(props);
    // const handleAlbum = (e) => {
    //     x = e.target.value;
    //     x = "alb/" + x;
    //     console.log(x);
    // }
    const handleArtist = (e) => {
      x = e.target.value;
	  if(x != '')
      x = "art:" + x + "/";
      console.log(x);
	}
	const handleRelease = (e) => {
		y = e.target.value;
		if(y != '')
		y = "rel:" + y+ "/";
		console.log(y);
	}
	const handleVenue = (e) => {
		z = e.target.value;
		if(z != '')
		z = "ven:" + z+ "/";
		console.log(z);
	}
	const handleSubmit = (e) => {
		const query = x+y+z;
		props.changeId(query);
		console.log(query);
	}
  return (
    <div>
	<table>
		<tr>
			<th><label>Artist Name :</label></th>
			<td> <input type="text" onChange={handleArtist} className="px-2 text-black font-bold rounded-xl w-60" /></td>
		</tr>
		<tr>
			<th><label>Venue</label></th>
			<td><input type="text" onChange={handleVenue} className="px-2 text-black font-bold rounded-xl w-60" /></td>
		</tr>
		<tr>
			<th><label>Date</label></th>
			<td><input type="text" placeholder="yy-mm-dd" onChange={handleRelease} className="px-2 text-black font-bold rounded-xl w-40" /></td>
		</tr>
		<tr>
			<td colspan="2"><button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={handleSubmit}>Search</button><br /></td>
		</tr>
	</table>
       
	   {/*<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Artist Name</button><br />
        <br />
        
        <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Venue</button><br />
        <br />
        
        <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Date</button><br />*/}
	   <br />
      <table className="border-separate border-spacing-4 inline-block border-green-500 border-2 rounded-2xl">
      <thead>
      <tr className="text-blue-400">
        <th>Artist</th>
        <th>Venue</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody className="text-rose-400">
      {
        props.songs.map((song, key) => 
          <tr key={key}>
            <td>{song.Aname}</td>
            <td>{song.Venue}</td>
            <td>{song.Date}</td>
          </tr>
        )
      }
    </tbody>
   </table></div>
  )
}
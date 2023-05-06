import React from 'react'

export default function Remix(props) {
  let x = "";
  let y="";
  let z="";
    console.log(props);
    const handleOriginal = (e) => {
       x = e.target.value;
	   if(x != '')
       x = "oart:" + x + "/";
        console.log(x);
    }
    const handleArtist = (e) => {
      y = e.target.value;
	  if(y != '')
      y = "art:" + y + "/";
      console.log(y);
	}
	const handleRelease = (e) => {
		z = e.target.value;
		if(z != '')
		z = "rel:" + z + "/";
		console.log(z);
	}
	const handleSubmit = (e) => {
		const query = x+y+z;
		props.changeId(query);
		console.log(query);
	}
// const handleDuration = (e) => {
//     x = e.target.value;
//     x = "dur/" + x;
//     console.log(x);
// }
  return (
    <div>
	<table>
		<tr>
			<th><label>Artist Name :</label></th>
			<td><input type="text" onChange={handleArtist} className="px-2 text-black font-bold rounded-xl w-60" /></td>
		</tr>
		<tr>
			<th><label>Original Artist Name :</label></th>
			<td><input type="text" onChange={handleOriginal} className="px-2 text-black font-bold rounded-xl w-60" /></td>
		</tr>
		<tr>
			<th><label>Release Date :</label></th>
			<td><input type="text" placeholder="yy-mm-dd" onChange={handleRelease} className="px-2 text-black font-bold rounded-xl w-40" /></td>
		</tr>
		<tr>
			<td colspan="2"><button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={handleSubmit}>Search</button><br /></td>
		</tr>
	</table>
	{/*<input type="text" onChange={handleArtist} className="px-2 text-black font-bold rounded-xl w-60" />
        <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Artist Name</button><br />
        <br />
        <input type="text" onChange={handleOriginal} className="px-2 text-black font-bold rounded-xl w-60" />
        <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Orginal Artist Name</button><br />
        <br />
        <input type="text" placeholder="yy-mm-dd" onChange={handleRelease} className="px-2 text-black font-bold rounded-xl w-40" />
	<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Release Date</button><br />*/}
        <br />
      <table className="border-separate border-spacing-4 inline-block border-green-500 border-2 rounded-2xl">
      <thead>
      <tr className="text-blue-400">
        <th>Title</th>
        <th>Artist</th>
        <th>Release Date</th>
        <th>Original Artist</th>
      </tr>
    </thead>
    <tbody className="text-rose-400">
      {
        props.songs.map((song, key) => 
          <tr key={key}>
            <td>{song.Sname}</td>
            <td>{song.Artist_name}</td>
            <td>{song.Release_date}</td>
            <td>{song.Original_artist}</td>
          </tr>
        )
      }
    </tbody>
   </table></div>
  )
}
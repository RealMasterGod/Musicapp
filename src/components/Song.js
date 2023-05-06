import React from 'react'

export default function Song(props) {
  let x = "";
  let y="";
  let z="";
  let w="";
    console.log(props);
    const handleAlbum = (e) => {
        x = e.target.value;
		if(x != '')
        x = "alb:" + x + "/";
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
	const handleDuration = (e) => {
		w = e.target.value;
		if(w != '')
		w = "dur:" + w + "/";
		console.log(w);
	}
	const handleSubmit = (e) => {
		const query = x+y+z+w;
		props.changeId(query);
		console.log(query);
	}
  return (
    <div>
	<table>
		<tr>
			<th><label>Album Name</label></th>
			<td><input type="text" onChange={handleAlbum} className="px-2 text-black font-bold rounded-xl w-60" /></td>
		</tr>
		<tr>
			<th><label>Artist Name</label></th>
			<td><input type="text" onChange={handleArtist} className="px-2 text-black font-bold rounded-xl w-60" /></td>
		</tr>
		<tr>
			<th><label>Release Date</label></th>
			<td><input type="text" placeholder="yy-mm-dd" onChange={handleRelease} className="px-2 text-black font-bold rounded-xl w-40" /></td>
		</tr>
		<tr>
			<th><label>Duration</label></th>
			<td> <input type="text" placeholder="min:sec" onChange={handleDuration} className="px-2 text-black font-bold rounded-xl w-40" /></td>
		</tr>
		<tr>
			<td colspan="2"><button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={handleSubmit}>Search</button><br /></td>
		</tr>
	</table>
        
		{/*<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Album</button><br />
        
        <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Artist Name</button><br />
        <br />
        
        <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Release Date</button><br />
		<br />*/}
       
        
        <br />
      <table className="border-separate border-spacing-4 inline-block border-green-500 border-2 rounded-2xl">
      <thead>
      <tr className="text-blue-400">
        <th>#</th>
        <th>Title</th>
        <th>Release Date</th>
        <th>Genre</th>
        <th>Lyricist</th>
        <th>Views_on_yt</th>
        <th>Duration</th>
        <th>Album</th>
        <th>Artist</th>
      </tr>
    </thead>
    <tbody className="text-rose-400">
      {
        props.songs.map((song, key) => 
          <tr key={key}>
            <td>{song.SongID}</td>
            <td>{song.Sname}</td>
            <td>{song.Release_date}</td>
            <td>{song.Genre}</td>
            <td>{song.Lyricist}</td>
            <td>{song.Views_on_yt}</td>
            <td>{song.Duration}</td>
            <td>{song.Title}</td>
            <td>{song.Aname}</td>
          </tr>
        )
      }
    </tbody>
   </table></div>
  )
}

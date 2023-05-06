import React from 'react'

export default function Album(props) {
  let x = "";
  let y="";
  let z="";
  let w="";
    console.log(props);
    const handleLabel = (e) => {
        x = e.target.value;
		if(x != '')
        x = "lab:" + x + "/";
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
	const handleRating = (e) => {
		w = e.target.value;
		if(w != '')
		w = "rat:" + w + "/";
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
		<th><label>Label Name : </label></th>
        <td><input type="text" onChange={handleLabel} className="px-2 text-black font-bold rounded-xl w-40" /></td>
		{/*<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Label Name</button>*/}
		</tr>
		<tr>
		<th><label>Artist Name : </label></th>
        <td><input type="text" onChange={handleArtist} className="px-2 text-black font-bold rounded-xl w-40" /></td>
        {/*<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Artist Name</button>*/}
		</tr>
		<tr>
		<th><label>Release Date : </label></th>
        <td><input type="text" placeholder="yy-mm-dd" onChange={handleRelease} className="px-2 text-black font-bold rounded-xl w-40" /></td>
        {/*<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={() => props.changeId(x)}>Search by Release Date</button>*/}
		</tr>
		<tr>
		<th><label>Rating : </label></th>
        <td><input type="text" placeholder="0-10" onChange={handleRating} className="px-2 text-black font-bold rounded-xl w-40" /><br /></td>
        </tr>
		<tr>
		<td colspan="2">
		<button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={handleSubmit}>Search</button>
        </td>
		</tr>
	</table><br />
      <table className="border-separate border-spacing-4 inline-block border-green-500 border-2 rounded-2xl">
      <thead>
      <tr className="text-blue-400">
        <th>#</th>
        <th>Title</th>
        <th>Release Date</th>
        <th>Rating</th>
        <th>Copies Sold</th>
        <th>Artist</th>
        <th>Label</th>
      </tr>
    </thead>
    <tbody className="text-rose-400">
      {
        props.songs.map((song, key) => 
          <tr key={key}>
            <td>{song.AlbumID}</td>
            <td>{song.Title}</td>
            <td>{song.Release_date}</td>
            <td>{song.Rating}</td>
            <td>{song.Copies_sold}</td>
            <td>{song.Aname}</td>
            <td>{song.Lname}</td>
          </tr>
        )
      }
    </tbody>
   </table></div>
  )
}

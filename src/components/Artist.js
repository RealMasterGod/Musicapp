import React from 'react'

export default function Artist(props) {
    
    let x = "";
    console.log(props);
    const handleChange = (e) => {
        x = e.target.value;
        x = "lab:" + x + "/";
        console.log(x);
    }
	const handleSubmit = (e) => {
		const query = x;
		props.changeId(query);
		console.log(query);
	}
  return (
    <div>
	<table>
	<tr>
	<th><label>Label Name : </label></th>
    <td><input type="text" name="label" onChange={handleChange} className="px-2 text-black font-bold rounded-xl w-40" /></td>
	</tr>
	<tr>
	<td colspan="3">
    <button className="ml-2 hover:bg-green-500 hover:text-black w-52 border-2 rounded-xl border-green-500" onClick={handleSubmit}>Search</button><br />
    </td>
	</tr>
	</table>
	<br /><table className="border-separate border-spacing-4 inline-block border-green-500 border-2 rounded-2xl">
    <thead>
      <tr className="text-blue-400">
        <th>#</th>
        <th>Name</th>
        <th>Years Active</th>
        <th>Birthdate</th>
        <th>Birthplace</th>
      </tr>
    </thead>
    <tbody className="text-rose-400">
      {
        props.songs.map((song, key) => 
          <tr key={key}>
            <td>{song.ArtistID}</td>
            <td>{song.Aname}</td>
            <td>{song.Years_active}</td>
            <td>{song.Bdate}</td>
            <td>{song.Birth_place}</td>
          </tr>
        )
      }
    </tbody>
   </table></div>
  )
}

import React from 'react';
import axios  from 'axios'
import { useState, useEffect, useCallback } from 'react'

export default function Addsong() {
  const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert/song', input);
    console.log(input);
  }
  
  return (
    <div>
		<h1>Add Song</h1>
		<form onSubmit={handleSubmit}>
			<table className="border-separate border-spacing-3">
				<tbody>
					<tr>
						<th>
							<label>Song Title: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Sname" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Release Date: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Rdate" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Genre: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Genre" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Lyricist: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Swriter" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Views on Youtube: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Voy" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Duration: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Duration" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Album Id: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Albid" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<td colSpan="2" align ="right">
							<button>Save</button>
						</td>
					</tr>
                </tbody>
            </table>
		</form>
	</div>
  )
}
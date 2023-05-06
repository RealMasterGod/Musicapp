import React from 'react';
import axios  from 'axios'
import { useState, useEffect, useCallback } from 'react'

export default function Addalbum() {
  const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert/album', input);
    console.log(input);
  }
  
  return (
    <div>
		<h1>Add Album</h1>
		<form onSubmit={handleSubmit}>
			<table className="border-separate border-spacing-3">
				<tbody>
					<tr>
						<th>
							<label>Album Title: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Atitle" onChange={handleChange} />
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
							<label>Rating: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Rating" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Copies Sold: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Csold" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Artist Id: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Aid" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Label Id: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Lid" onChange={handleChange} />
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
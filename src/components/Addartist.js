import React from 'react';
import axios  from 'axios'
import { useState, useEffect, useCallback } from 'react'

export default function Addartist() {
  const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert/artist', input);
    console.log(input);
  }
  
  return (
    <div>
		<h1>Add Artist</h1>
		<form onSubmit={handleSubmit}>
			<table className="border-separate border-spacing-3">
				<tbody>
					<tr>
						<th>
							<label>Artist Name: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Aname" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Years Active: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Yactive" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Birth Date: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Bdate" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Birth Place: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Bplace" onChange={handleChange} />
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
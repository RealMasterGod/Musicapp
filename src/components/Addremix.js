import React from 'react';
import axios  from 'axios'
import { useState, useEffect, useCallback } from 'react'

export default function Addremix() {
  const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert/remix', input);
    console.log(input);
  }
  
  return (
    <div>
		<h1>Add Remix</h1>
		<form onSubmit={handleSubmit}>
			<table className="border-separate border-spacing-3">
				<tbody>
					<tr>
						<th>
							<label>Song Id: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Sid" onChange={handleChange} />
						</td>
					</tr>
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
							<label>Release Date: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Rdate" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Original Artist Name: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Oname" onChange={handleChange} />
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
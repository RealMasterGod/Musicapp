import React from 'react';
import axios  from 'axios'
import { useState, useEffect, useCallback } from 'react'

export default function Addconcert() {
  const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert/concert', input);
    console.log(input);
  }
  
  return (
    <div>
		<h1>Add Concert</h1>
		<form onSubmit={handleSubmit}>
			<table className="border-separate border-spacing-3">
				<tbody>
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
							<label>Venue: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="venue" onChange={handleChange} />
						</td>
					</tr>
					<tr>
						<th>
							<label>Date: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="date" onChange={handleChange} />
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
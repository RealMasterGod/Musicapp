import React from 'react';
import axios  from 'axios'
import { useState, useEffect, useCallback } from 'react'

export default function Addlabel() {
  const [input,setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:80/backendmusiclib/insert/label', input);
    console.log(input);
  }
  
  return (
    <div>
		<h1>Add Label</h1>
		<form onSubmit={handleSubmit}>
			<table className="border-separate border-spacing-3">
				<tbody>
					<tr>
						<th>
							<label>Name: </label>
						</th>
						<td>
							<input className="text-slate-700" type="text" name="Lname" onChange={handleChange} />
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
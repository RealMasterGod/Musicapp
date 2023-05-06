import React from 'react';

export default function Label(props) {
  return (
    <div><table className="border-separate border-spacing-4 inline-block border-green-500 border-2 rounded-2xl">
    <thead>
      <tr className="text-blue-400">
        <th>#</th>
        <th>Label</th>
      </tr>
    </thead>
    <tbody className="text-rose-400">
      {
        props.songs.map((song, key) => 
          <tr key={key}>
            <td>{song.LabelID}</td>
            <td>{song.Lname}</td>
          </tr>
        )
      }
    </tbody>
   </table></div>
  )
}

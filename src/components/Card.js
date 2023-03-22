import React from 'react';

function Cards(){
    return(
        <>
        <div className="m-auto">
        <h1 className="text-center text-5xl py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-900">Popular Playlist</h1>
        </div>
        <div className="h-60 flex justify-between">
            <div className="border-2 border-rose-500 text-green-500">
              sbdigbiddbsogbhduuidk
            </div>
            <div className="border-2 border-rose-500 text-green-500">
              bdigbiddbsogbhduuidk</div>
            <div className="border-2 border-rose-500 text-green-500">
              bdigbiddbsogbhduuidk
            </div>
            <div className="border-2 border-rose-500 text-green-500">
              bdigbiddbsogbhduuidk
            </div>
            <div className="border-2 border-rose-500 text-green-500">
              bdigbiddbsogbhduuidk
            </div>
        </div>
        </>
    )
}
export default function Card() {
  return (
    <div className="grid bg-black h-screen ">
        <Cards />
    </div>
  )
}

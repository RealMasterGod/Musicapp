import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Filter() {
    const [value,setState] = useState(false);
    function filterForm() {
      console.log('im done');
      if(value == false) setState(true);
      else setState(false);
    }
    
  return (
   <React.Fragment>
     <div className=" flex justify-between h-52 bg-[url('https://cdn.wallpapersafari.com/81/23/w2C6fu.jpg')]">
      <div className="z-10 mr-96 mx-4 my-2 w-60 h-96">
		<Link to="/Songlist"><button onClick={() => filterForm()} className="z-0 py-2 h-10 w-20 border-2 border-double hover:bg-slate-800 font-bold border-green-500 rounded-xl text-white" type="button">Filter</button></Link> 
        <br />
		<Link to="/Add"><button onClick={() => filterForm()} className="z-0 py-2 h-10 w-20 border-2 border-double hover:bg-slate-800 font-bold border-green-500 rounded-xl text-white" type="button">Add</button></Link> 
		{/* {value ? (
          <div className="pb-2 overflow-y-auto grid justify-start bg-slate-900 h-full w-auto">
            <h1 className="py-3 px-4 text-green-500 ">Filter by</h1>
            <hr className="text-green-500 w-auto mx-2 auto-fit"></hr>
            <form className="px-4 flex flex-col justify-center w-auto text-gray-300"> 
              Artist<input type="text" />
              Year<input type="number" min="1900" max="2099"/>
              Album<input type="text" />
              Language<input type="text" />
              <fieldset>
                <legend>Genre</legend>
                Rock<input type="checkbox" id="rock" />
                Pop<input type="checkbox" id="pop" />
                Country<input type="checkbox" id="country" />
                Jazz<input type="checkbox" id="jazz" />
                EDM<input type="checkbox" id="edm" />
              </fieldset>
            </form>
          </div> 
          //) : (false)}*/}
      </div>
      <div className="mr-40 self-center">
        <h1 className="text-4xl text-4xl font-bold text-yellow-700">WHERE WORDS FAIL, MUSIC SPEAKS</h1>
        <p className="text-xl text-slate-300">Without music life would b flat</p>
      </div>
    </div>
   </React.Fragment>
   )
 }

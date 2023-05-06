import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navcustom1.css';
export default class Navcustom1 extends Component {
  render() {
    return (
      <nav className="bg-purple-900 px-4 py-3 flex justify-around">
        <img className="rounded-full h-12 w-12 " src="https://t3.ftcdn.net/jpg/03/88/58/96/360_F_388589675_2kqtzWkO6aiTx82XPKHrdKa4UF0s6HKz.jpg"/>
        <h1 className="font-sans py-1 px-1 mr-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 text-2xl ">Musico</h1>
        {/*<form className="pr-60 py-2">
          <input className="pl-2 w-72 rounded-3xl border-2 border-rose-500 placeholder-purple-500" type="search" placeholder="Type Song Name Here"/>
            <button className="rounded-2xl ml-2 w-20 text-amber-500 border-2 hover:bg-pink-300 hover:text-amber-700 border-pink-500" type="submit">Search</button>
        </form>*/}
        <ul className="list-none flex py-2 text-white space-x-2 justify-end">
          <li className="cursor-pointer"><Link to="/" >Home</Link></li>
          <li className="cursor-pointer"><Link to="/About" >About Us</Link></li>
          <li className="cursor-pointer"><Link to="/Contact" >Contact Us</Link></li>
        </ul>
      </nav>
    )
  }
}

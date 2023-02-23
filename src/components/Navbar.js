import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import { CgMenuGridR } from "react-icons/cg";

function Navbar() {
  return (
    <div className="navbar bg-orange-500 lg:px-20">
      <label htmlFor="admin-drawer-1" className="lg:hidden cursor-pointer">
        <CgMenuGridR className=" w-10 h-10 text-yellow-50" />
      </label>
      <div className="flex-1 justify-center lg:justify-start">
        <Link className="normal-case text-2xl font-bold text-yellow-50">
          Admin Panel
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

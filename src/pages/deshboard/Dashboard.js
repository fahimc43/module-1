import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IoDocumentsOutline, IoHome } from "react-icons/io5";

function Dashboard() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="admin-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#f5ecf2] p-4">
          {/* Dashboard content */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="admin-drawer-1" className="drawer-overlay"></label>
          <div className="p-4 w-80 bg-slate-100 text-base-content ">
            <div className="collapse-title text-lg font-medium">
              <div className=" flex flex-row items-center gap-2">
                <span>
                  <IoHome className=" w-6 h-6" />
                </span>{" "}
                <span>Dashboard</span>
              </div>
            </div>
            {/* Collapse Item 1 */}
            <div className="collapse collapse-arrow hover:bg-slate-300 rounded">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                <div className=" flex flex-row items-center gap-2">
                  <span>
                    <IoDocumentsOutline className=" w-6 h-6" />
                  </span>{" "}
                  <span>Slider</span>
                </div>
              </div>
              <div className="collapse-content">
                <div className=" grid grid-cols-1 gap-2">
                  <Link className=" hover:bg-slate-100 px-3 py-2 rounded-md">
                    Sidebar Item 1
                  </Link>
                  <Link className=" hover:bg-slate-100 px-3 py-2 rounded-md">
                    Sidebar Item 2
                  </Link>
                  <Link className=" hover:bg-slate-100 px-3 py-2 rounded-md">
                    Sidebar Item 3
                  </Link>
                </div>
              </div>
            </div>
            {/* Collapse Item 2 */}
            <div className="collapse collapse-arrow hover:bg-slate-300 rounded">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                <div className=" flex flex-row items-center gap-2">
                  <span>
                    <IoDocumentsOutline className=" w-6 h-6" />
                  </span>{" "}
                  <span>Product</span>
                </div>
              </div>
              <div className="collapse-content">
                <div className=" grid grid-cols-1 gap-2">
                  <Link
                    to="/create-product"
                    className=" hover:bg-slate-100 px-3 py-2 rounded-md"
                  >
                    Create Product
                  </Link>
                  <Link className=" hover:bg-slate-100 px-3 py-2 rounded-md">
                    Sidebar Item 2
                  </Link>
                  <Link className=" hover:bg-slate-100 px-3 py-2 rounded-md">
                    Sidebar Item 3
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";

function CreateProducts() {
  return (
    <div>
      <div>
        <h2 className=" text-3xl font-medium">Create Product</h2>
      </div>
      <div className=" w-full h-1 bg-slate-400"></div>
      <div className=" grid grid-cols-1 mx-auto w-5/6 mt-5">
        <div>
          <label className="label">
            <span className="label-text text-lg font-medium">
              Category Name
            </span>
          </label>
          <select className="select select-bordered w-full max-w-2xl">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text text-lg font-medium">
              Sub Category Name
            </span>
          </label>
          <select className="select select-bordered w-full max-w-2xl">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text text-lg font-medium">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-2xl"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-lg font-medium">
              Product Code (SKU)
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-2xl"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-lg font-medium">
              Product Description
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full max-w-2xl"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className=" my-5">
          <button className="btn w-full max-w-2xl">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreateProducts;

import React from "react";
import { useRouteError } from "react-router-dom";

function DisplayError() {
  const error = useRouteError();
  console.log({ error });
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen text-center space-y-6">
      <h1 className=" text-4xl font-montserrat font-bold">Oops!</h1>
      <p className=" text-lg font-montserrat font-medium">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>
          {" "}
          <span>{error?.statusText} </span> <span>{error?.status}</span>{" "}
        </i>
        <br />
        <i>{error?.error?.message}</i>
      </p>
    </div>
  );
}

export default DisplayError;

"use client";

const Error = ({ error: { message } }) => {
  console.log(typeof error);

  return (
    <main>
      <h1 className="error">An error occurred...</h1>
      <p>{message && message}</p>
    </main>
  );
};

export default Error;

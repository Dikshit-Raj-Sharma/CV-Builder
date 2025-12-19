import React from "react";

const GeneralInfo = ({
  data,
  isSubmitted,
  onInputChange,
  onSubmit,
  onEdit,
}) => {
  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={onSubmit}>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onInputChange}
          />
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onInputChange}
          />
          <label>Phone : </label>
          <input
            type="numeric"
            name="phone"
            value={data.phone}
            onChange={onInputChange}
          />
          <button type="submit">Submit Info</button>
        </form>
      ) : (
        <div>
            <h2>General Information</h2>
          <h2>Name : {data.name} </h2>
          <h2>Email : {data.email}</h2>
          <h2>Phone : {data.phone}</h2>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </>
  );
};

export default GeneralInfo;

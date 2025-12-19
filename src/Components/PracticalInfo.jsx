import React from "react";

const PracticalInfo = ({
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
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={data.company}
            onChange={onInputChange}
          />
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={data.position}
            onChange={onInputChange}
          />
          <label>Responsibilities:</label>
          <textarea
            type="text"
            name="responsibility"
            value={data.responsibility}
            onChange={onInputChange}
          />
          <label>Date From:</label>
          <input
            type="date"
            name="dateFrom"
            value={data.dateFrom}
            onChange={onInputChange}
          />
          <label>Date To:</label>
          <input
            type="date"
            name="dateTo"
            value={data.dateTo}
            onChange={onInputChange}
          />
          <button type="submit">Submit Info</button>
        </form>
      ) : (
        <div>
          <h2>Practical Information</h2>
          <h3>Company : {data.company} </h3>
          <h2>
            Position : <em>{data.position}</em>
          </h2>
          <h2>Responsibilities : {data.responsibility}</h2>
          <h2>{data.dateFrom} - {data.dateTo}</h2>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </>
  );
};

export default PracticalInfo;

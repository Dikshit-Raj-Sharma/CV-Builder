import React from "react";

const EducationInfo = ({
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
          <label>School : </label>
          <input
            type="text"
            name="school"
            value={data.school}
            onChange={onInputChange}
          />
          <label>Study : </label>
          <input
            type="text"
            name="study"
            value={data.study}
            onChange={onInputChange}
          />
          <label>Date : </label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={onInputChange}
          />
          <button type="submit">Submit Info</button>
        </form>
      ) : (
        <div>
          <h2>Educational Information</h2>
          <h2>School : {data.school} </h2>
          <h2>Study : {data.study}</h2>
          <h2>Date : {data.date}</h2>
          <button onClick={onEdit}>Edit</button>
        </div>
      )}
    </>
  );
};

export default EducationInfo;

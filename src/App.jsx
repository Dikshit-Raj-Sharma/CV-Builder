import { useState } from "react";
import GeneralInfo from "./Components/GeneralInfo.jsx";
import EducationInfo from "./Components/Education.jsx";
import PracticalInfo from "./Components/PracticalInfo.jsx";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [eduInfo, setEduInfo] = useState({
    school: "",
    study: "",
    date: "",
  });
  const [practicalInfo, setPracticalInfo] = useState({
    company: "",
    position: "",
    responsibility: "",
    dateFrom: "",
    dateTo: "",
  });
  const [isPracticalSubmitted, setIsPracticalSubmitted] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEduSubmitted, setIsEduSubmitted] = useState(false);
  function handleEduChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    setEduInfo({ ...eduInfo, [nam]: val });
  }
  function handleInputChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    setGeneralInfo({ ...generalInfo, [nam]: val });
  }
  function handlePracticalChange(e){
    let nam = e.target.name;
    let val = e.target.value;
    setPracticalInfo({ ...practicalInfo, [nam]: val });
  }
  return (
    <>
      <h1>CV Builder</h1>
      <hr />
      <GeneralInfo
        data={generalInfo}
        isSubmitted={isSubmitted}
        onInputChange={handleInputChange}
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
        }}
        onEdit={(e) => setIsSubmitted(false)}
      />
      <hr />
      <EducationInfo
        data={eduInfo}
        isSubmitted={isEduSubmitted}
        onInputChange={handleEduChange}
        onSubmit={(e) => {
          e.preventDefault();
          setIsEduSubmitted(true);
        }}
        onEdit={(e) => setIsEduSubmitted(false)}
      />
      <hr/>
      <PracticalInfo
        data={practicalInfo}
        isSubmitted={isPracticalSubmitted}
        onInputChange={handlePracticalChange}
        onSubmit={(e) => {
          e.preventDefault();
          setIsPracticalSubmitted(true);
        }}
        onEdit={(e) => setIsPracticalSubmitted(false)}
      />
    </>
  );
}

export default App;

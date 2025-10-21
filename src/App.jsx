import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";

export default function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  return (
    <div className="container">
      <GeneralInfo value={general} onChange={setGeneral} />
      <Education value={education} onChange={setEducation} />
      <PracticalExperience value={experience} onChange={setExperience} />
    </div>
  );
}

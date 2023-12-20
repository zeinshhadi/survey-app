import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddSurvey = () => {
  const authToken = localStorage.getItem("authorization");
  const authorization = "Bearer " + authToken;
  const navigate = useNavigate();
  const [title, setTitle] = useState({ title: "" });

  const handleChange = (e) => {
    setTitle({ [e.target.name]: e.target.value });
    console.log(title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title);

    try {
      const response = await axios.post("http://localhost:8000/survey", title, {
        headers: { Authorization: authorization },
      });
      console.log(response);
      const surveyId = response.data.survey._id;
      console.log("SurveyId:", surveyId);

      navigate(`/add-questions/${surveyId}`);
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  return (
    <div>
      <form>
        <label>Survey Title:</label>
        <input type="text" name="title" onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
};

export default AddSurvey;

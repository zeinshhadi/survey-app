import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const GetAllSurveys = () => {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authorization");
      const authorization = "Bearer " + authToken;

      try {
        const response = await axios.get("http://localhost:8000/survey", {
          headers: { Authorization: authorization },
        });

        setSurveys(response.data.surveys);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (surveyId) => {
    navigate(`${surveyId}/survey-questions`);
  };

  return (
    <div className="survey-wrapper flex">
      {surveys.map((survey) => (
        <div key={survey._id} className="surveyContainer flex space-around center">
          <div className="flex column start">
            <div className="info">{survey.title}</div>
            <div className="info">{survey.updatedAt}</div>

            <button
              type="submit"
              onClick={() => {
                handleSubmit(survey._id);
              }}>
              Enroll Survey
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllSurveys;

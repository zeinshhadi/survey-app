import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";
const AllQuestions = () => {
  const surveyId = useParams().surveyId;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authorization");
      const authorization = "Bearer " + authToken;

      try {
        const response = await axios.get(`http://localhost:8000/question/${surveyId}`, {
          headers: { Authorization: authorization },
        });

        console.log(response.data.questions);
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {questions.map((question) => {
        const { questionType, options } = question;

        if (questionType === "checkbox") {
          return (
            <div key={question._id} className="flex column start">
              {question.questionName}
              {options.map((option) => (
                <label key={option}>
                  <input type="checkbox" value={option} />
                  {option}
                </label>
              ))}
            </div>
          );
        }

        if (questionType === "text") {
          return (
            <div key={question._id} className="flex column center">
              {question.questionName}
              <textarea rows="4" cols="50" />
            </div>
          );
        }

        if (questionType === "radio") {
          return (
            <div key={question._id} className="flex column start">
              {question.questionName}
              {options.map((option) => (
                <label key={option}>
                  <input type="radio" name={`radio_${question._id}`} value={option} />
                  {option}
                </label>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};

export default AllQuestions;

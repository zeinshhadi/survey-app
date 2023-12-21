import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";

const AllQuestions = () => {
  const authToken = localStorage.getItem("authorization");
  const authorization = "Bearer " + authToken;
  const surveyId = useParams().surveyId;
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authorization");
      const authorization = "Bearer " + authToken;

      try {
        const response = await axios.get(`http://localhost:8000/question/${surveyId}`, {
          headers: { Authorization: authorization },
        });

        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (questionId, option, isChecked) => {
    setAnswers((prevAnswers) => {
      const selectedOptions = prevAnswers[questionId] || [];

      if (isChecked) {
        selectedOptions.push(option);
      } else {
        const index = selectedOptions.indexOf(option);
        if (index !== -1) {
          selectedOptions.splice(index, 1);
        }
      }

      return { ...prevAnswers, [questionId]: selectedOptions };
    });
  };

  const handleInputChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("from here", answers);

    try {
      const response = await axios.post(
        `http://localhost:8000/answer/`,
        { questionId: Object.keys(answers), userAnswers: Object.values(answers) },
        {
          headers: {
            Authorization: authorization,
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div>
      {questions.map((question) => {
        const { _id: questionId, questionType, questionName, options } = question;

        if (questionType === "checkbox") {
          return (
            <div key={questionId} className="flex column center">
              {questionName}
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) => handleCheckboxChange(questionId, option, e.target.checked)}
                  />
                  {option}
                </label>
              ))}
            </div>
          );
        }

        if (questionType === "text") {
          return (
            <div key={questionId} className="flex column center">
              {questionName}
              <textarea rows="4" cols="50" onChange={(e) => handleInputChange(questionId, e.target.value)} />
            </div>
          );
        }

        if (questionType === "radio") {
          return (
            <div key={questionId} className="flex column center">
              {questionName}
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`radio_${questionId}`}
                    value={option}
                    onChange={(e) => handleInputChange(questionId, e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          );
        }
      })}
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AllQuestions;

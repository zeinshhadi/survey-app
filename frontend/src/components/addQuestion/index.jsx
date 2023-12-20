import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const AddQuestion = () => {
  const surveyId = useParams().surveyId;

  const authToken = localStorage.getItem("authorization");
  const authorization = "Bearer " + authToken;
  const [questionName, setQuestionName] = useState("");
  const [questionType, setQuestionType] = useState("text");
  let [options, setOptions] = useState([]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("QuestionName:", questionName);
    console.log("Answer Type:", questionType);
    console.log("Options:", options);
    console.log(surveyId);
    if (questionType === "text") {
      options = [];
    }
    let questions = {
      questionName: questionName,
      surveyId: surveyId,
      questionType: questionType,
      options: options,
    };
    console.log(questions);
    try {
      const response = axios.post("http://localhost:8000/question", questions, {
        headers: { Authorization: authorization },
      });

      console.log(response);
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  return (
    <div>
      <form className="flex column center gap10" onSubmit={handleSubmit}>
        <label>Enter your questionName</label>
        <input
          type="text"
          name="questionName"
          placeholder="QuestionName"
          value={questionName}
          onChange={(e) => setQuestionName(e.target.value)}
        />

        <label>Select answer type</label>
        <select name="questionType" value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          <option value="text">Text Area</option>
          <option value="checkbox">Checkboxes</option>
          <option value="radio">Radio Buttons</option>
        </select>

        {questionType !== "text" && (
          <div>
            <label>Enter options</label>
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <button type="button" onClick={() => removeOption(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={addOption}>
              Add Option
            </button>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;

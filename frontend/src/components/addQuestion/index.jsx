import React, { useState } from "react";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answerType, setAnswerType] = useState("text");
  const [options, setOptions] = useState([]);

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

    console.log("Question:", question);
    console.log("Answer Type:", answerType);
    console.log("Options:", options);
  };

  return (
    <div>
      <form className="flex column center gap10" onSubmit={handleSubmit}>
        <label>Enter your question</label>
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label>Select answer type</label>
        <select name="answerType" value={answerType} onChange={(e) => setAnswerType(e.target.value)}>
          <option value="text">Text Area</option>
          <option value="checkbox">Checkboxes</option>
          <option value="radio">Radio Buttons</option>
        </select>

        {answerType !== "text" && (
          <div>
            <label>Enter options</label>
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
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

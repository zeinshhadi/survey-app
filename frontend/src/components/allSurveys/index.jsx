import React, { useEffect } from "react";
import axios from "axios";
const GetAllSurveys = () => {
  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authorization");
      const authorization = "Bearer " + authToken;

      try {
        const response = await axios.get("http://localhost:8000/survey", {
          headers: { Authorization: authorization },
        });

        console.log(response.data.surveys);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchData();
  }, []);
  return <div>hello</div>;
};

export default GetAllSurveys;

import axios from "axios";
import { api } from "./api";
import { useState, useEffect } from "react";

const getProjectData = async (guildId) => {
  const response = await axios.get(`${api}/project/guild/${guildId}`);
  return response.data.data;
};

const useGetProjectData = (guildId) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    if (guildId) {
      getProjectData(guildId).then((data) => setState(data));
    }
  }, [guildId]);
  return state;
};

export { getProjectData, useGetProjectData };

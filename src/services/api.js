import axios from "axios";

const api = {
  getSkins: () =>
    axios.get("https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json"),
};

export default api;

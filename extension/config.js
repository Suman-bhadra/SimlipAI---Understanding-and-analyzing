// TODO: Replace the line below with your Render deployment URL once deployed
// Example: const BASE_URL = "https://your-app-name.onrender.com";
const BASE_URL = "http://localhost:5000";

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BASE_URL };
}

if (typeof window !== "undefined") {
  window.BASE_URL = BASE_URL;
}

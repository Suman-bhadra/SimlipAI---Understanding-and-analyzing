// TODO: Replace the line below with your Render deployment URL once deployed
// Example: const BASE_URL = "https://your-app-name.onrender.com";
const BASE_URL = "https://simlipai-understanding-and-analyzing.onrender.com";

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BASE_URL };
}

if (typeof window !== "undefined") {
  window.BASE_URL = BASE_URL;
}

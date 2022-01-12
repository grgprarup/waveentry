module.exports = {
  baseUrl: process.env.WEB_URL || "http://localhost:3000",
  headless: process.env.HEADLESS === "true",
  slowMo: 10,
};

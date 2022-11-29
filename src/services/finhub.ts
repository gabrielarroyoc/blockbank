export const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "<API_key>"; // Replace this
const finnhubClient = new finnhub.DefaultApi();

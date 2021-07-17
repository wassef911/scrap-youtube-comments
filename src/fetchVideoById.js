var { google } = require("googleapis");
require("dotenv").config();

const fetchVideoById = async (link) => {
  const videoID = link.slice(link.indexOf("=") + 1, link.indexOf("&"));

  try {
    const service = google.youtube("v3");
    const res = await service.commentThreads.list({
      key: process.env.API_KEY,
      part: ["replies,snippet"],
      order: "relevance",
      textFormat: "plainText",
      videoId: videoID,
    });
    return res.data.items;
  } catch (err) {
    console.log(err);
  }
};

module.exports = fetchVideoById;

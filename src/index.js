const fs = require("fs");
const fetchVideoById = require("./fetchVideoById");
const { AsyncLoop } = require("./utils");

(async () => {
  try {
    const comData = await AsyncLoop(
      require("./in/videosList.json"),
      fetchVideoById
    );

    comData.map((singleVideo, idx) => {
      fs.writeFileSync(
        "./src/out/video" + idx + ".json",
        JSON.stringify(singleVideo, null, 2)
      );
    });
  } catch (err) {
    console.log(err);
  }
})();

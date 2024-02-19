const cron = require("node-cron");
const styleguideController = require("./controllers/styleguideController");

const runCronJob = () => {
  cron.schedule("*/1 * * * *", async () => {
    try {
      await styleguideController.logMessage();
    } catch (error) {
      console.error("Error executing cron job:", error);
    }
  });
};

module.exports = runCronJob;

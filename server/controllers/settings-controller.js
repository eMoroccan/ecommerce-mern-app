const Settings = require("./../models/settings-schema");

const createSettings = async (req, res) => {
    try {
        let settings = await Settings.findById("INCHANGEABLE2023");
        let settingsCreate = {status: "error", error: "The settings already exists"};
        if (!settings) {
            settings = await Settings.create({sitename: "SiteName", niche: "Niche", description: "", favicon: "", currency: "$", _id: "INCHANGEABLE2023"});
            settingsCreate = settings;
        }

        res.status(200).json(settingsCreate);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while making this order, please try again in a few minutes"});
    }
}
const generalUpdate = async (req, res) => {
    try {
        const {sitename, niche, description} = req.body;
        const settings = await Settings.findById("INCHANGEABLE2023");
        if (!settings) {
          return res.status(404).json({status: error, error: "Website settings not created yet."})
        }
        settings.sitename = sitename;
        settings.niche = niche;
        settings.description = description;

        await settings.save();

        res.status(200).json({status: "ok"});
    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while making this order, please try again in a few minutes"});
    }
}
const faviconUpdate = async (req, res) => {
  try {
      const {favicon} = req.body;
      const settings = await Settings.findById("INCHANGEABLE2023");
      if (!settings) {
        return res.status(404).json({status: "error", error: "Website settings not created yet."})
      }
      settings.favicon = favicon;

      await settings.save();

      res.status(200).json({status: "ok"});
      } catch(error) {
          console.log(error.message);
          res.status(500).json({status: "error", error: "There was an error while making this order, please try again in a few minutes"});
      }
}
const getSettings = async (req, res) => {
  try {
      const {favicon} = req.body;
      const settings = await Settings.findById("INCHANGEABLE2023");
      if (!settings) {
        return res.status(404).json({status: "error", error: "Website settings not created yet."})
      }

      res.status(200).json(settings);
      } catch(error) {
          console.log(error.message);
          res.status(500).json({status: "error", error: "There was an error while making this order, please try again in a few minutes"});
      }
}

module.exports = {
    createSettings,
    generalUpdate,
    faviconUpdate,
    getSettings
};

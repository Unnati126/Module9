const axios = require("axios");

// GET random joke based on type (query param)
exports.getActivityByType = async (req, res) => {
  const { type } = req.query;

  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/${type}/random`);
    res.json(response.data[0]); 
  } catch (error) {
    res.status(500).json({ message: "Error fetching joke", error });
  }
};

// GET joke by key (ID) (route param)
exports.getActivityByKey = async (req, res) => {
  const { key } = req.params;

  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/${key}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching joke by ID", error });
  }
};
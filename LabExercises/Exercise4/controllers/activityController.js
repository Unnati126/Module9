const axios = require("axios");

exports.getActivityByType = async (req, res) => {
    const { type } = req.query;

    try {
        const response = await axios.get(`https://www.boredapi.com/api/activity`, {
      params: { type }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activity", error });
  }
};

exports.getActivityByKey = async (req, res) => {
  const { key } = req.params;
  
  try {
    const response = await axios.get(`https://www.boredapi.com/api/activity`, {
      params: { key }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activity by key", error });
  }
};
const { calculateGains } = require('../services/solanaService');

exports.getWalletGains = async (req, res, next) => {
  try {
    const { address } = req.params;

    // Validate the wallet address
    if (!address || address.length < 32) {
      return res.status(400).json({ success: false, message: 'Invalid wallet address' });
    }

    // Fetch and calculate gains
    const results = await calculateGains(address);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};

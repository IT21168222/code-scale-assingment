import User from "../schema/User.js";


export const addToWatchlist = async (req, res) => {
  const userId = req.user.id; 
  const { movieId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user.watchlist.includes(movieId)) {
      user.watchlist.push(movieId);
      await user.save();
    }
    res.status(200).json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getWatchlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId).populate('watchlist');
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFromWatchlist = async (req, res) => {
  const userId = req.user.id;
  const { movieId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const index = user.watchlist.indexOf(movieId);
    if (index > -1) {
      user.watchlist.splice(index, 1);
      await user.save();
    }

    res.status(200).json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
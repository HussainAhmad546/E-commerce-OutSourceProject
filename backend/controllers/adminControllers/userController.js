const User = require("../../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      deletedUserId: deletedUser._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting user",
      error,
    });
  }
};

const userStatusUpdate = async (req, res) => {
  const { userId } = req.params;
  try {
    const { message } = req.body;
    let status = "";

    if (message === "active") {
      status = "active";
    } else if (message === "block") {
      status = "blocked";
    }
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { status: status },
      { new: true }
    );
    const responseMessage =
      status === "active"
        ? "User Unblocked successfully"
        : "User Blocked successfully";
    return res.status(200).json({
      success: true,
      message: responseMessage,
      user: updatedUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { getAllUsers, deleteUser, userStatusUpdate };

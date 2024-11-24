import { User } from "../models/userModel";

export const register = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (!fullname || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password === confirmPassword) {
      return res.status(400).json({ message: "Password doesn't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ messgae: "Username already exist" });
    }
    await User.creat({
      fullName,
      username,
      password,
      profilePhoto,
      gender,
    });
  } catch (error) {}
};

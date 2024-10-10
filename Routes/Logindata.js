const express = require('express');
const router = express.Router();
const userSchema = require('./../Schema/userSchema.js');
const bcrypt = require('bcrypt');

router.post('/logindata', async (req, res) => {
  const { name, password } = req.body;
  console.log(name);

  try {
    const existingUser = await userSchema.findOne({ email: name });

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found', op: false });
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, existingUser.password);


    if (isMatch) {
      console.log(true);
      console.log(existingUser.name);
      
      return res.status(200).json({ message: existingUser, op: true });
    } else {
      return res.status(401).json({ message: 'Invalid password', op: false });
    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const usersModel = require('../Model/UsersModel')
const validations = require('../Middleware/Validations')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');


exports.registerUser = async ({ email, password, name, loginType}) => {

  // 1. Validate required fields
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }

  // 2. Check email
  const existingEmail = await usersModel.findOne({ email });
  if (existingEmail) {
    throw new Error('Email already registered');
  }
 
  // 3. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Create user
  const newUser = await usersModel.create({
    email,
    password: hashedPassword,
    name: name,
    loginType: loginType
  });

  return newUser;
};



exports.loginUser = async ({ email, password }) => {
  // 1. Check if email exists
  const user = await validations.isEmailRegistered(email);
  if (!user) throw new Error('Invalid email or user does not exist.');

  // 2. Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password.');

  // 3. Return user 
  return user; 
};

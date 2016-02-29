'use strict'

// Users are the people that make up the community. They author new problems, belong to groups, and suggest solutions.

// Require dependencies
const mongoose = require('mongoose')

// Define the schema
const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true },
    lowercase: true,
  },

  inviter_user_id: {
    type: mongoose.Schema.ObjectId,
    index: true,
    ref: 'users',
  },

  joined: {
    type: Date,
    required: true,
    default: new Date(),
    index: true,
  },

  name: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
}, {
  versionKey: false, // disables __v field for editing subarrays
})

// // Virtuals
// User's authored problems
// User's followed problems
// User's suggested solutions


// Export model
module.exports = mongoose.model('users', UsersSchema)

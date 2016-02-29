'use strict'

// Problems are the name of a particular problem that a group faces. They are authored by users,

// Require dependencies
const mongoose = require('mongoose')

// Define the schema
const ProblemsSchema = new mongoose.Schema({
  author_user_id: {
    type: mongoose.Schema.ObjectId,
    index: true,
    ref: 'users',
  },

  created: {
    type: Date,
    required: true,
    default: new Date(),
    index: true,
  },

  description: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },

  title: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
})

// Problem methods:
/*
Follow a problem (optional explanation ('Why do you think this problem is important?'))
Suggest a solution
Mark a problem as resolved (optional explanation: 'Why do you think this problem is resolved?')
Mark a problem as unimportant (optional explanantion: 'Why do you think this problem is unimportant?')
*/

// Export model
module.exports = mongoose.model('problems', ProblemsSchema)

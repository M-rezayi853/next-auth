import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'guest',
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default: 'https://i.stack.imgur.com/34AD2.jpg',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.models.User || mongoose.model('User', userSchema)

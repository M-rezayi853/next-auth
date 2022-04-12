import bcrypt from 'bcrypt'

import User from '../../models/userModel'

export default async function handler(req, res) {
  const body = req.body

  const userExist = await User.findOne({ email: body.email })

  if (userExist) {
    res.status(200).json({ message: 'Already registered' })
    return
  }

  const salt = await bcrypt.genSalt(10)
  const hashpass = await bcrypt.hash(body.password, salt)
  const user = new User({ email: body.email, password: hashpass })
  await user.save()

  res.status(200).json({ message: 'Registered successfully' })
}

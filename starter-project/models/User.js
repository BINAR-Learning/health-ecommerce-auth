/**
 *  FILE INI PERLU DILENGKAPI
 *
 * User Model dengan Password Hashing
 *
 * Tugas:
 * 1. Import mongoose dan bcryptjs
 * 2. Define userSchema dengan fields yang diminta
 * 3. Tambahkan pre-save hook untuk hash password
 * 4. Tambahkan instance method comparePassword
 */

// TODO: Import dependencies
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// TODO: Define userSchema
/*
Fields:
- name: String, required
- email: String, required, unique, lowercase, trim
- password: String, required, minlength 8, select false
- role: String, enum ['user', 'admin'], default 'user'
- isActive: Boolean, default true
Tambahkan timestamps
*/

// TODO: Pre-save hook
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// TODO: Instance method comparePassword
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// TODO: Export model
// module.exports = mongoose.model('User', userSchema);

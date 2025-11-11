# Starter Project - Secure Health API

## Deskripsi

Starter project untuk latihan Authentication & Security dalam konteks **Health E-Commerce API**.

**Catatan Penting:** Project ini **melanjutkan dari Modul 3** (Express API) dengan menambahkan:

- JWT authentication untuk user login
- Password hashing untuk secure storage
- RBAC untuk protect admin routes
- Security middleware (Helmet, rate limiting)

Structure server sudah ada dari Modul 3, sekarang kamu tambahkan auth layer!

Lengkapi implementasi JWT auth, password hashing, RBAC, dan security best practices.

## Tugas

### 1. Lengkapi `models/User.js`

Buat User schema dengan:

- Fields: name, email (unique), password (select: false), role (enum: user/admin)
- Pre-save hook untuk hash password dengan bcrypt
- Instance method `comparePassword(candidatePassword)`
- Timestamps

### 2. Lengkapi `middleware/auth.js`

Implement JWT middleware:

- `authenticateToken(req, res, next)` - Verify JWT dari Authorization header
- Extract token dari "Bearer TOKEN" format
- Verify dengan jwt.verify()
- Attach decoded user ke req.user
- Handle expired dan invalid tokens

### 3. Lengkapi `middleware/authorize.js`

Implement RBAC:

- `authorizeRole(...allowedRoles)` - Check user role
- Return 403 kalau role not allowed
- Support multiple roles

### 4. Lengkapi `middleware/validate.js`

Input validation rules:

- `registerValidation` - email, password (min 8, strength check), name
- `loginValidation` - email, password
- Use express-validator

### 5. Lengkapi `controllers/authController.js`

Auth functions:

- `register(req, res)` - Create user, return token
- `login(req, res)` - Verify credentials, return token
- `getProfile(req, res)` - Get current user info
- `updatePassword(req, res)` - Change password

### 6. Lengkapi `routes/authRoutes.js`

Routes:

- POST `/register` - dengan validation
- POST `/login` - dengan rate limiting
- GET `/profile` - protected (require auth)
- PUT `/password` - protected

### 7. Lengkapi `server.js`

Setup secure server:

- Helmet untuk security headers
- CORS dengan whitelist
- Rate limiting
- Error handler yang nggak expose details

## Testing

Use Postman:

1. Register new user
2. Login dan copy token
3. Access protected routes dengan token
4. Test different roles (user vs admin)
5. Try invalid tokens
6. Test rate limiting (login 6x cepat)

**Selamat mengerjakan! **

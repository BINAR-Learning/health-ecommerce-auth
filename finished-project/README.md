# Finished Project - Secure Health API

## Deskripsi

Complete implementation Secure Health E-Commerce API dengan JWT authentication, RBAC, dan OWASP mitigations.

**Integrasi dengan Modul Sebelumnya:**

- **Dari Modul 3:** Express server structure, routing patterns, error handling
- **Dari Modul 2:** MongoDB connection, User model (enhanced dengan password hashing)
- **Tambahan Modul 4:** JWT auth, RBAC, security middleware, input validation

Project ini adalah **evolution** dari API di Modul 3, sekarang dengan complete security!

## Fitur Lengkap

- JWT authentication (register, login, verify)
- Password hashing dengan bcrypt (salt rounds 10)
- RBAC dengan User dan Admin roles
- Protected routes dengan auth middleware
- Input validation dengan express-validator
- Security headers dengan Helmet
- Rate limiting (5 login attempts per 15 min)
- MongoDB injection prevention
- XSS protection dengan sanitization
- CORS configured
- Error handling yang secure

## Pembelajaran Kunci

### Security Features Implemented:

1. **Authentication:**

   - JWT token generation dan verification
   - Secure password storage (never plain text!)
   - Token expiration handling

2. **Authorization:**

   - Role-based access control
   - Different permissions untuk user vs admin
   - Protected endpoints

3. **Input Security:**

   - Validation dengan express-validator
   - Sanitization untuk prevent injection
   - Type checking

4. **Request Security:**

   - Rate limiting untuk prevent brute force
   - Helmet security headers
   - CORS whitelist

5. **Error Security:**
   - Generic error messages (no details exposed)
   - Proper status codes
   - Logging untuk debugging (not exposing)

## Testing

Use Postman collection atau curl:

```bash
# 1. Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Aiman","email":"aiman@example.com","password":"Aiman123!","role":"user"}'

# 2. Login (get token)
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aiman@example.com","password":"Aiman123!"}'

# 3. Get Profile (use token)
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Selamat belajar! **

_Disusun oleh Pusbang Talenta Digital_

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

## API Documentation

Project ini menyediakan **2 cara test API**:

### 1. Swagger UI (Recommended untuk Beginners)

**Cara menggunakan:**

1. Start server:

   ```bash
   npm run dev
   ```

2. Buka browser: **http://localhost:3000/api-docs**

3. Lihat dokumentasi lengkap semua endpoints:

   - Endpoint path & method
   - Request body schema
   - Response examples
   - Status codes

4. **Test langsung dari browser:**

   - Click endpoint → "Try it out"
   - Isi data request
   - Click "Execute"
   - Lihat response

5. **Untuk protected endpoints:**
   - Register/Login dulu untuk dapat token
   - Click tombol **"Authorize"** (pojok kanan atas)
   - Masukkan: `Bearer YOUR_TOKEN` (spasi setelah Bearer!)
   - Click "Authorize" → Close
   - Sekarang bisa test protected endpoints!

**Tips Swagger:**

- Green lock icon = endpoint butuh authentication
- Click endpoint untuk expand details
- "Try it out" untuk interactive testing
- Response langsung muncul di browser

### 2. Postman Collection (untuk Advanced Testing)

**Import collection:**

1. File ada di parent folder: `../Secure-Health-API-Auth.postman_collection.json`
2. Buka Postman → Import → pilih file tersebut
3. Collection muncul dengan 9 pre-configured requests

**Setup environment:**

1. Di Postman, buka collection Variables
2. Set `baseUrl` = `http://localhost:3000`
3. Variable `authToken` akan auto-filled setelah login

**Test flow:**

1. Run "Register User" → token auto-saved
2. Run "Get Profile" → otomatis pakai token dari step 1
3. Run "Update Password" → authenticated otomatis
4. Test error cases (invalid password, unauthorized, dll)

**Keuntungan Postman:**

- Token management otomatis
- Test scripts untuk validation
- Bisa save multiple environments
- Export/import untuk team sharing

### 3. Manual Testing (curl/terminal)

Atau test manual dengan curl:

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

---

## Testing Flow Recommendations

**Untuk beginners:**

1. Mulai dengan Swagger UI untuk explore API
2. Lihat schema & examples
3. Test interactive di browser

**Untuk development:**

1. Import Postman collection
2. Setup environment variables
3. Run tests berurutan
4. Save responses untuk debugging

**Untuk CI/CD:**

1. Export Postman tests
2. Run dengan Newman (Postman CLI)
3. Automate dalam pipeline

**Selamat belajar! **

_Disusun oleh Pusbang Talenta Digital_

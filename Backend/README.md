# User Registration Endpoint Documentation

## Endpoint

`POST /api/users/register`

## Description
Registers a new user in the system. The endpoint expects user details in the request body and returns a JWT token and user information upon successful registration.

## Request Body
The following fields are required in the JSON body:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 8 chars, required)"
}
```

### Example Request
```
POST /api/users/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "yourpassword123"
}
```

## Responses

### Success (201 Created)
```
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
    // ...other user fields
  }
}
```

### Validation Error (400 Bad Request)
```
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    // ...other errors
  ]
}

or

{
  "error": "Invalid fullname format. Please provide fullname as an object with firstname field"
}
```

## Status Codes
- `201 Created`: User registered successfully
- `400 Bad Request`: Validation failed or missing/invalid data

# User Login Endpoint Documentation

## Endpoint

`POST /api/users/login`

## Description
Authenticates a user with email and password. Returns a JWT token and user information upon successful login.

## Request Body
The following fields are required in the JSON body:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 8 chars, required)"
}
```

### Example Request
```
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "yourpassword123"
}
```

## Responses

### Success (200 OK)
```
{
  "token": "<jwt_token>",
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
    // ...other user fields
  }
}
```

### Validation Error (400 Bad Request)
```
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    // ...other errors
  ]
}
```

### Authentication Error (401 Unauthorized)
```
{
  "error": "Invalid email or password"
}
```

## Status Codes
- `200 OK`: Login successful
- `400 Bad Request`: Validation failed or missing/invalid data
- `401 Unauthorized`: Invalid email or password

# User Profile Endpoint Documentation

## Endpoint

`GET /api/users/profile`

## Description
Returns the authenticated user's profile information. Requires a valid JWT token in the `Authorization` header or `token` cookie.

## Request Headers

- `Authorization: Bearer <jwt_token>` (or send token as a cookie named `token`)

## Responses

### Success (200 OK)
```
{
  "_id": "<user_id>",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
  // ...other user fields
}
```

### Authentication Error (401 Unauthorized)
```
{
  "error": "Authentication token is missing"
}
```
or
```
{
  "error": "Unauthorized"
}
```
or
```
{
  "error": "User not found"
}
```

## Status Codes
- `200 OK`: Profile fetched successfully
- `401 Unauthorized`: Missing or invalid token, or user not found

# User Logout Endpoint Documentation

## Endpoint

`GET /api/users/logout`

## Description
Logs out the authenticated user by blacklisting the current JWT token and clearing the authentication cookie. Requires a valid JWT token.

## Request Headers

- `Authorization: Bearer <jwt_token>` (or send token as a cookie named `token`)

## Responses

### Success (200 OK)
```
{
  "message": "Logged out successfully"
}
```

### Authentication Error (401 Unauthorized)
```
{
  "error": "Authentication token is missing"
}
```
or
```
{
  "error": "Unauthorized"
}
```
or
```
{
  "error": "User not found"
}
```

## Status Codes
- `200 OK`: Logout successful
- `401 Unauthorized`: Missing or invalid token, or user not found

# Captain Registration Endpoint Documentation

## Endpoint

`POST /api/captains/register`

## Description
Registers a new captain in the system. The endpoint expects captain and vehicle details in the request body and returns a JWT token and captain information upon successful registration.

## Request Body
The following fields are required in the JSON body:

```
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "plate": "string (min 3 chars, required)",
    "color": "string (min 3 chars, required)",
    "capacity": "number (min 1, required)",
    "type": "string (car, bike, auto, or van, required)"
  }
}
```

### Example Request
```
POST /api/captains/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "Test@123",
  "vehicle": {
    "plate": "KA01TE1234",
    "color": "Grey",
    "capacity": 4,
    "type": "car"
  }
}
```

## Responses

### Success (201 Created)
```
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "plate": "KA01TE1234",
      "color": "Grey",
      "capacity": 4,
      "type": "car"
    }
    // ...other captain fields
  }
}
```

### Validation Error (400 Bad Request)
```
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    // ...other errors
  ]
}
```
or
```
{
  "message": "Captain already exists"
}
```

## Status Codes
- `201 Created`: Captain registered successfully
- `400 Bad Request`: Validation failed or missing/invalid data

# Captain Login Endpoint Documentation

## Endpoint

`POST /api/captains/login`

## Description
Authenticates a captain with email and password. Returns a JWT token and captain information upon successful login.

## Request Body
The following fields are required in the JSON body:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example Request
```
POST /api/captains/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Test@123"
}
```

## Responses

### Success (200 OK)
```
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "plate": "KA01TE1234",
      "color": "Grey",
      "capacity": 4,
      "type": "car"
    }
    // ...other captain fields
  }
}
```

### Validation Error (400 Bad Request)
```
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    // ...other errors
  ]
}
```

### Authentication Error (400 Bad Request)
```
{
  "message": "Invalid email or password"
}
```

## Status Codes
- `200 OK`: Login successful
- `400 Bad Request`: Validation failed or invalid credentials

# Captain Profile Endpoint Documentation

## Endpoint

`GET /api/captains/profile`

## Description
Returns the authenticated captain's profile information. Requires a valid JWT token in the `Authorization` header or `token` cookie.

## Request Headers

- `Authorization: Bearer <jwt_token>` (or send token as a cookie named `token`)

## Responses

### Success (200 OK)
```
{
  "captain": {
    "_id": "<captain_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "plate": "KA01TE1234",
      "color": "Grey",
      "capacity": 4,
      "type": "car"
    }
    // ...other captain fields
  }
}
```

### Authentication Error (401 Unauthorized)
```
{
  "error": "Unauthorized"
}
```
or
```
{
  "error": "Captain not found"
}
```

## Status Codes
- `200 OK`: Profile fetched successfully
- `401 Unauthorized`: Missing or invalid token, or captain not found

# Captain Logout Endpoint Documentation

## Endpoint

`GET /api/captains/logout`

## Description
Logs out the authenticated captain by blacklisting the current JWT token and clearing the authentication cookie. Requires a valid JWT token.

## Request Headers

- `Authorization: Bearer <jwt_token>` (or send token as a cookie named `token`)

## Responses

### Success (200 OK)
```
{
  "message": "Logout successfully"
}
```

### Authentication Error (401 Unauthorized)
```
{
  "error": "Unauthorized"
}
```

## Status Codes
- `200 OK`: Logout successful
- `401 Unauthorized`: Missing or invalid token, or captain not found

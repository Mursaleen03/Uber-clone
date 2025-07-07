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

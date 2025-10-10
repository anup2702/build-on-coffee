export const authenticationAndAuthorizationQuiz = {
  questions: {
    beginner: [
      {
        question: "What is authentication?",
        options: [
          "Verifying a user's identity",
          "Granting a user permissions",
          "Encrypting data at rest",
          "Validating API responses",
        ],
        answer: "Verifying a user's identity",
      },
      {
        question: "What is authorization?",
        options: [
          "Granting access to resources based on permissions",
          "Verifying a user's identity",
          "Logging user activity",
          "Resetting a user's password",
        ],
        answer: "Granting access to resources based on permissions",
      },
      {
        question: "Which of the following is a factor in multi-factor authentication (MFA)?",
        options: [
          "Something you know (password)",
          "Something you have (token)",
          "Something you are (biometrics)",
          "All of the above",
        ],
        answer: "All of the above",
      },
      {
        question: "What does SSO stand for?",
        options: [
          "Single Sign-On",
          "Secure Session Object",
          "Server Side Operation",
          "Single Secure Operation",
        ],
        answer: "Single Sign-On",
      },
      {
        question: "What is the main purpose of JWT (JSON Web Token)?",
        options: [
          "To securely transmit claims between parties",
          "To encrypt database records",
          "To manage server logs",
          "To compress HTTP responses",
        ],
        answer: "To securely transmit claims between parties",
      },
      {
        question: "Which HTTP header typically carries a bearer token?",
        options: ["Authorization", "Authentication", "Cookie", "X-Token"],
        answer: "Authorization",
      },
      {
        question: "Which is an example of role-based access control (RBAC)?",
        options: [
          "Users with role 'admin' can delete posts",
          "Users can only access data they created",
          "Access based on time of day",
          "Access based on device location",
        ],
        answer: "Users with role 'admin' can delete posts",
      },
      {
        question: "What is a session?",
        options: [
          "A server-side record of a user's authenticated state",
          "A client-side cookie with UI settings",
          "An SSL certificate",
          "A database backup file",
        ],
        answer: "A server-side record of a user's authenticated state",
      },
      {
        question: "Which is commonly used to store session IDs on the client?",
        options: ["Cookie", "Local file", "Database", "Query string only"],
        answer: "Cookie",
      },
      {
        question: "Which is safer for tokens in browsers?",
        options: [
          "HttpOnly secure cookies",
          "LocalStorage",
          "SessionStorage",
          "Inline script variables",
        ],
        answer: "HttpOnly secure cookies",
      },
    ],
    intermediate: [
      {
        question: "What is the 'aud' claim in a JWT used for?",
        options: [
          "Specifies the intended audience of the token",
          "Specifies the token issuer",
          "Specifies the subject (user ID)",
          "Specifies token expiration",
        ],
        answer: "Specifies the intended audience of the token",
      },
      {
        question: "Which algorithm is commonly used to sign JWTs?",
        options: ["HS256", "MD5", "SHA1", "RSA-MD4"],
        answer: "HS256",
      },
      {
        question: "Which OAuth 2.0 grant type is best for single-page applications (SPA) today?",
        options: [
          "Authorization Code with PKCE",
          "Implicit",
          "Resource Owner Password Credentials",
          "Client Credentials",
        ],
        answer: "Authorization Code with PKCE",
      },
      {
        question: "What does PKCE protect against?",
        options: [
          "Authorization code interception attacks",
          "SQL injection",
          "XSS",
          "DNS spoofing",
        ],
        answer: "Authorization code interception attacks",
      },
      {
        question: "What is the primary difference between RBAC and ABAC?",
        options: [
          "RBAC uses roles; ABAC uses attributes and policies",
          "RBAC uses attributes; ABAC uses roles",
          "RBAC is for APIs; ABAC is for UIs",
          "No difference",
        ],
        answer: "RBAC uses roles; ABAC uses attributes and policies",
      },
      {
        question: "Which cookie flags help mitigate session hijacking?",
        options: [
          "Secure and HttpOnly",
          "SameSite=None only",
          "Domain and Path",
          "Max-Age only",
        ],
        answer: "Secure and HttpOnly",
      },
      {
        question: "What is token rotation?",
        options: [
          "Replacing refresh tokens on each use to reduce replay risk",
          "Changing passwords monthly",
          "Rotating database credentials",
          "Switching hashing algorithms",
        ],
        answer: "Replacing refresh tokens on each use to reduce replay risk",
      },
      {
        question: "Where should password hashing be performed?",
        options: [
          "Server-side using a strong hashing algorithm (e.g., bcrypt/argon2)",
          "Client-side using SHA1",
          "In the database",
          "In localStorage",
        ],
        answer:
          "Server-side using a strong hashing algorithm (e.g., bcrypt/argon2)",
      },
      {
        question: "Which claim should NOT be trusted blindly from a JWT?",
        options: ["role", "exp", "iss", "aud"],
        answer: "role",
      },
      {
        question: "What is least privilege?",
        options: [
          "Giving only the minimal permissions needed",
          "Granting admin by default",
          "Allowing all users to read everything",
          "Blocking all external access",
        ],
        answer: "Giving only the minimal permissions needed",
      },
    ],
    advanced: [
      {
        question: "Which is a recommended password hashing strategy?",
        options: [
          "Argon2id with proper memory/cpu parameters",
          "SHA-256 without salt",
          "MD5 with a static salt",
          "Base64 encoding",
        ],
        answer: "Argon2id with proper memory/cpu parameters",
      },
      {
        question: "Which attack does 'SameSite=Lax' mainly help mitigate for cookies?",
        options: ["CSRF", "XSS", "SQL injection", "SSRF"],
        answer: "CSRF",
      },
      {
        question: "What should you validate when accepting a JWT from a client?",
        options: [
          "Signature, expiration, issuer, audience",
          "Only the signature",
          "Only the expiration",
          "Nothing if it's HTTPS",
        ],
        answer: "Signature, expiration, issuer, audience",
      },
      {
        question: "Which OAuth 2.1 concept simplifies best practices for modern apps?",
        options: [
          "Dropping implicit flow and requiring PKCE",
          "Recommending password grant",
          "Using unsigned tokens",
          "Sending tokens via URL fragments",
        ],
        answer: "Dropping implicit flow and requiring PKCE",
      },
      {
        question: "What is the primary risk of storing access tokens in localStorage?",
        options: [
          "Exposure via XSS",
          "Tokens expiring too quickly",
          "Inability to send with requests",
          "CSRF by default",
        ],
        answer: "Exposure via XSS",
      },
      {
        question: "What is an authorization policy engine example?",
        options: ["Open Policy Agent (OPA)", "Redis", "Webpack", "Nginx"],
        answer: "Open Policy Agent (OPA)",
      },
      {
        question: "What is step-up authentication?",
        options: [
          "Requiring stronger auth for sensitive actions",
          "Logging users out periodically",
          "Auto-upgrading passwords",
          "Reissuing longer-lived tokens",
        ],
        answer: "Requiring stronger auth for sensitive actions",
      },
      {
        question: "Which statement about refresh tokens is TRUE?",
        options: [
          "They should be bound to a client and rotated on use",
          "They should never expire",
          "They are sent on every API request",
          "They must be stored in localStorage",
        ],
        answer: "They should be bound to a client and rotated on use",
      },
      {
        question: "What is JTI in a JWT?",
        options: [
          "A unique token identifier used for revocation/rotation tracking",
          "The token issuer",
          "The token subject",
          "The token signature",
        ],
        answer:
          "A unique token identifier used for revocation/rotation tracking",
      },
      {
        question: "Which best practice applies to API authorization?",
        options: [
          "Use fine-grained scopes and validate on each request",
          "Cache authorization decisions forever",
          "Embed passwords in tokens for convenience",
          "Trust client-provided roles without verification",
        ],
        answer: "Use fine-grained scopes and validate on each request",
      },
    ],
  },
};

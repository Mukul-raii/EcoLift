export class DatabaseError extends Error {
  constructor(
    message: string,
    public originalError?: unknown,
  ) {
    super(message)
    this.name = 'Database Error'
  }
}

export class AuthenticationError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number,
  ) {
    super(message)
    this.name = 'Authentication Error'
  }
}

export class ServerError extends Error {
  constructor(
    message: string,
    public originalError?: unknown,
  ) {
    super(message)
    this.name = 'Internal Server Error'
  }
}
export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'Validation Error'
  }
}

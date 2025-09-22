import { Response } from 'express'

type ApiResponse<T = any> = {
  success: boolean
  code: number
  message: string
  error: string | null
  data: T | null
}

export const responseHandler = <T>(
  res: Response,
  {
    success,
    code,
    message,
    error = null,
    data = null,
  }: {
    success: boolean
    code: number
    message: string
    error?: string | null
    data?: T | null
  },
): Response => {
  const payload: ApiResponse<T> = {
    success,
    code,
    message,
    error,
    data,
  }
  return res.status(code).json(payload)
}

export const successResponse = <T>(
  res: Response,
  code = 200,
  message: any,
  data: T,
): Response => {
  return responseHandler(res, {
    success: true,
    code,
    message,
    data,
  })
}

export const errorResponse = <T>(
  res: Response,
  code = 500,
  message = 'Error',
  error: any,
): Response => {
  return responseHandler(res, {
    success: false,
    code,
    message,
    error,
  })
}

export const logger = (message: string, data?: any) => {
  if (data) {
    console.log(`[${new Date().toISOString()}] ${message}`, data)
  } else {
    console.log(`[${new Date().toISOString()}] ${message}`)
  }
}

export const errorLogger = (message: string, error?: any) => {
  if (error) {
    console.error(
      `[${new Date().toISOString()}] ERROR: ${message}`,
      error instanceof Error ? error.stack : error,
    )
  } else {
    console.error(`[${new Date().toISOString()}] ERROR: ${message}`)
  }
}

import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-this'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}

export function generateToken(): string {
  return jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET)
    return true
  } catch {
    return false
  }
}

export function getTokenFromRequest(req: Request): string | null {
  const authHeader = req.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  return authHeader.substring(7)
}

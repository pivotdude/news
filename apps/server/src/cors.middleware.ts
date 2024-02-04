import { NextFunction, Request, Response } from 'express'

export class CorsMiddleware {
  resolve(): any {
    return (req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', '*')
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', '*')
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
        res.sendStatus(200)
      } else {
        next()
      }
    }
  }
}
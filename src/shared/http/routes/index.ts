import { Request, Response, Router } from 'express'

const  routes = Router();


routes.get('/', (req: Request, res: Response) => {
  return res.send({message: "Hello Dev"})
});

export default routes;

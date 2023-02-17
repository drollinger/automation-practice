import { HandlerContext } from "$fresh/server.ts";

export const handler = (req: Request, _ctx: HandlerContext): Response => {
  console.log(req.body);
  return new Response();
};

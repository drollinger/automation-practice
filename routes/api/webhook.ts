import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(req: Request, _ctx: HandlerContext): Response {
    console.log(req.body);
    return new Response();
  },
};
//export const handler: Handlers = {
//  GET(_req: Request, _ctx: HandlerContext) {
//    return new Response("Hello World");
//  },
//};

import { createCookieSessionStorage } from "remix";

export let unencryptedSession = createCookieSessionStorage({
  cookie: {
    path: "/",
    sameSite: "lax",
  },
});

type ReqHeaders = ReturnType< typeof getUnencryptedSession>
export let getUnencryptedSession = (request: Request): ReqHeaders|null => await unencryptedSession.getSession(request.headers.get("Cookie") ?? null);

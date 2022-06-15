import { createCookieSessionStorage } from "remix";

export let unencryptedSession = createCookieSessionStorage({
  cookie: {
    path: "/",
    sameSite: "lax",
  },
});

type SessionData = ReturnType< typeof getUnencryptedSession>
export let getUnencryptedSession = (request: Request): SessionData | null => await unencryptedSession.getSession(request.headers.get("Cookie") ?? null);

interface GlobalSettings {
  
}
import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

import type { User } from "~/models/user.server";

/**
  *  * This base hook is used in other hooks to quickly search for specific data
  * across all loader data using useMatches.
  * @param {string} id The route id
  * @param {string} return The data type to return
  * @returns {JSON|undefined} The router data or undefined if not found
  */
    export function useMatchesData(
       id: string,
       options: {
        return?: "pathname" | "params" | "data" | "handle" | undefined
       }
    ): Record<string, unknown> | undefined {
        const matchingRoutes = useMatches();

        switch (options.return) {
            case "pathname": 
              return route()?.pathname 
            case "params":
                return route()?.params
            case "data":
                return route()?.data
            case "handle":
                return route()?.handle
            default:
                return route()?.data 
        };

        const route = useMemo(
            () => matchingRoutes.find((route) => route.id === id),
                [matchingRoutes, id]
                );
            return route;
            }


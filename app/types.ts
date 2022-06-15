import { useMatches } from "remix";

type MatchesFunction = typeof useMatches;
interface PageHandler {
    scripts: boolean
};

export { 
    MatchesFunction,
    PageHandler
}
import React, {} from "react";
import type {} from "react";
import {} from "remix";
import type {} from "remix";

interface Settings {
    theme?: any
    country?: any
};

enum Options {
    theme = "theme",
    country = "country"
};

type SettingsContextType = [
    Settings | null,
    React.Dispatch<React.SetStateAction<Settings | null>>
];

const options = Object.values(Options);
const SettingsContext = React.createContext<SettingsContextType|null>(null);

async function getSettings() {
    let context = await React.useContext<SettingsContextType | null>();
    return context;
}
import { PreferencesContext } from "@/contexts";
import { useContext } from "react";

export const usePreferences = () => useContext(PreferencesContext);
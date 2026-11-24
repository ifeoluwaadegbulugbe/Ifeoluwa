import { Bricolage_Grotesque, Caveat, DM_Sans, Instrument_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";

// Fonts used by the projects themselves, loaded only where a type specimen shows them.
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700"], preload: false, display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["500"], preload: false, display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], preload: false, display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["500"], preload: false, display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["500"], preload: false, display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], preload: false, display: "swap" });

export const specimenFamily: Record<string, string> = {
  "Bricolage Grotesque": bricolage.style.fontFamily,
  "DM Sans": dmSans.style.fontFamily,
  "Plus Jakarta Sans": jakarta.style.fontFamily,
  Inter: inter.style.fontFamily,
  Caveat: caveat.style.fontFamily,
  "Instrument Sans": instrument.style.fontFamily,
};

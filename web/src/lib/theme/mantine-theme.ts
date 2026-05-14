import { createTheme } from "@mantine/core";

export const appTheme = createTheme({
  primaryColor: "amber",
  primaryShade: 5,
  cursorType: "pointer",
  fontFamily: "Space Grotesk, sans-serif",
  headings: {
    fontFamily: "Sora, Space Grotesk, sans-serif",
  },
  defaultRadius: "md",
  colors: {
    amber: [
      "#fff4e1",
      "#ffe3b8",
      "#ffd08a",
      "#ffbc58",
      "#ffaa2d",
      "#ff9914",
      "#db7a04",
      "#ad5d00",
      "#7d4200",
      "#4f2800",
    ],
  },
  other: {
    shellBg: "#111214",
    shellPanel: "#17181c",
    shellPanelAlt: "#1f2127",
    shellStroke: "rgba(255,255,255,0.06)",
    shellMuted: "#8d919b",
  },
});

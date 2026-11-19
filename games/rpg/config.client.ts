import { provideClientGlobalConfig, provideClientModules, Presets, withMobile } from "@rpgjs/client";
import { provideMain } from "../modules/main";
import { provideTiledMap } from "@rpgjs/tiledmap/client";

// Show the on-screen joystick + buttons on touch devices (phones, tablets,
// iPadOS which reports a desktop user agent), keep the keyboard on desktop.
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0);

export default {
  providers: [
    provideTiledMap({
      basePath: "map",
    }),
    provideClientGlobalConfig(),
    provideMain(),
    provideClientModules([
      {
        spritesheets: [
          {
            id: 'hero',
            image: 'spritesheets/hero.png',
            ...Presets.RMSpritesheet(3, 4)
          },
          {
            id: 'female',
            image: 'spritesheets/female.png',
             ...Presets.RMSpritesheet(3, 4)
          }
        ]
      },
      // Virtual joystick (left) + Action (talk / confirm) and Back (menu / cancel) buttons
      withMobile({
        enabled: isTouchDevice,
        layout: { joystickSide: "left", margin: 24, gap: 16 },
        buttons: { action: true, back: true, dash: false, heavy: false },
      }),
    ])
  ],
};

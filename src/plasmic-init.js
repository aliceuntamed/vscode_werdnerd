"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLASMIC = void 0;
// src/plasmic-init.ts
var loader_react_1 = require("@plasmicapp/loader-react");
// Import only components you want to use in Plasmic
var WerdCard_1 = require("./components/werd/WerdCard");
var Tag_1 = require("./components/ui/Tag");
var PrismaticButton_1 = require("./components/ui/PrismaticButton");
// Initialize Plasmic
exports.PLASMIC = (0, loader_react_1.initPlasmicLoader)({
  projects: [
    {
      id: "5GdHG679kkZ9CoaMFhCkfF", // ID of a project you are using
      token:
        "evP6lvK7AFFD4Ny6TRZJfjaFwhSxXn3pDyM85xbgrIjqWAi6pSRYdgnOpCGni9wVz9Xy0EVHNe37iP7LA",
    },
  ],
});

// REGISTER COMPONENTS

// Core components you want in Plasmic

exports.PLASMIC.registerComponent(WerdCard_1.WerdCard, {
  name: "WerdCard",
});
exports.PLASMIC.registerComponent(Tag_1.Tag, {
  name: "Tag",
});
exports.PLASMIC.registerComponent(PrismaticButton_1.default, {
  name: "PrismaticButton",
});

PLASMIC.registerComponent(WordVaultTagCloud, {
  name: "WordVaultTagCloud",
});
PLASMIC.registerComponent(BoggleTile, {
  name: "BoggleTile",
});
PLASMIC.registerComponent(WordleTile, {
  name: "WordleTile",
});
PLASMIC.registerComponent(PaletteBlock, {
  name: "PaletteBlock",
});

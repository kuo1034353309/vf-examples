"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.textChoice]: {
        type: IVFTemplate_1.AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/TextChoice/0.0.6.js",
        name: "TextChoice",
    },
    [store_1.Ids.up]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png",
        name: store_1.Ids.up.toString()
    },
    [store_1.Ids.move]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png",
        name: store_1.Ids.move.toString()
    },
    [store_1.Ids.down]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png",
        name: store_1.Ids.down.toString()
    }
};
exports.default = assets;

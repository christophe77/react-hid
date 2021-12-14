"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useEvent(event, handler, passive) {
    if (passive === void 0) { passive = false; }
    (0, react_1.useEffect)(function () {
        document.addEventListener(event, handler, passive);
        return function cleanup() {
            document.removeEventListener(event, handler);
        };
    });
}
exports.default = useEvent;

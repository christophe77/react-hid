"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useEvent_1 = __importDefault(require("./useEvent"));
var defaultProps = {
    onKeyDetect: undefined,
};
function HidHoc(props) {
    var onScanSuccess = props.onScanSuccess, children = props.children, onKeyDetect = props.onKeyDetect;
    var _a = (0, react_1.useState)(''), tempBarcode = _a[0], setTempBarcode = _a[1];
    function handleScanEnded() {
        onScanSuccess(tempBarcode);
        setTempBarcode('');
    }
    var handleKeyPress = function (e) {
        if (onKeyDetect) {
            onKeyDetect(e.key);
        }
        else if (e.key === 'Enter') {
            handleScanEnded();
        }
        else if (e.key === 'Shift' ||
            e.key === 'Control' ||
            e.key === 'Alt' ||
            e.key === 'AltGraph' ||
            e.key === 'Graph') {
            // On ne fait rien
        }
        else {
            setTempBarcode(tempBarcode + e.key);
        }
    };
    (0, useEvent_1.default)('keydown', handleKeyPress);
    return react_1.default.createElement("div", { id: "scanner" }, children);
}
HidHoc.defaultProps = defaultProps;
exports.default = HidHoc;

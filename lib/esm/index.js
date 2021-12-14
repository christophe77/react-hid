import React, { useState } from 'react';
import useEvent from './useEvent';
var defaultProps = {
    onKeyDetect: undefined,
};
function HidHoc(props) {
    var onScanSuccess = props.onScanSuccess, children = props.children, onKeyDetect = props.onKeyDetect;
    var _a = useState(''), tempBarcode = _a[0], setTempBarcode = _a[1];
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
    useEvent('keydown', handleKeyPress);
    return React.createElement("div", { id: "scanner" }, children);
}
HidHoc.defaultProps = defaultProps;
export default HidHoc;

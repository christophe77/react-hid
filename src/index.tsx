import React, { ReactNode, useState } from 'react';
import useEvent from './useEvent';

type HidHocProps = {
  onKeyDetect?: (key: string) => void | undefined;
  onScanSuccess: (code: string) => void;
  children: ReactNode;
};
const defaultProps: any = {
  onKeyDetect: undefined,
};

function HidHoc(props: HidHocProps): JSX.Element {
  const { onScanSuccess, children, onKeyDetect } = props;
  const [tempBarcode, setTempBarcode] = useState('');
  function handleScanEnded(): void {
    onScanSuccess(tempBarcode);
    setTempBarcode('');
  }

  const handleKeyPress = (e: KeyboardEvent): any => {
    if (onKeyDetect) {
      onKeyDetect(e.key);
    } else if (e.key === 'Enter') {
      handleScanEnded();
    } else if (
      e.key === 'Shift' ||
      e.key === 'Control' ||
      e.key === 'Alt' ||
      e.key === 'AltGraph' ||
      e.key === 'Graph'
    ) {
      // On ne fait rien
    } else {
      setTempBarcode(tempBarcode + e.key);
    }
  };

  useEvent('keydown', handleKeyPress);

  return <div id="scanner">{children}</div>;
}
HidHoc.defaultProps = defaultProps;
export default HidHoc;

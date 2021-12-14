import { ReactNode } from 'react';
declare type HidHocProps = {
    onKeyDetect?: (key: string) => void | undefined;
    onScanSuccess: (code: string) => void;
    children: ReactNode;
};
declare function HidHoc(props: HidHocProps): JSX.Element;
declare namespace HidHoc {
    var defaultProps: any;
}
export default HidHoc;

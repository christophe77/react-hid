# React HID

High order component for capturing entries from HID devices.<br/>

## Install

    yarn add react-hid

or <br />

    npm install --save react-hid

then import the package in your app : <br />

    import HidHoc from 'react-hid';

## Usage

_retrieve all key stroke before Enter key_<br/>

    <HidHoc
        onScanSuccess={(input) => {
          console.log(input);
        }}
      >
      <App />
    </HidHoc>

_retrieve all key stroke real time_<br/>

    <HidHoc
        onKeyDetect={(key) => {
          console.log(key);
        }}
      >
      <App />
    </HidHoc>

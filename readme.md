# React HID

React hooks for capturing entries from HID devices.<br/>

## Install

    yarn add react-hid

or <br />

    npm install --save react-hid

then import the package in your app : <br />

    import HidHoc from 'react-hid';

## Usage

_retrieve all key strokes before an action key is pressed_<br/>

    import { useHidWithActionKey } from 'react-hid';

    const handleKeys = (keys: string) => {
      console.log(keys);
    };

    useHidWithActionKey('Enter', handleKeys);

_retrieve all key strokes real time_<br/>

    import { useHid } from 'react-hid';

    const handleKey = (key: string) => {
      console.log(key);
    };

    useHid(handleKey);

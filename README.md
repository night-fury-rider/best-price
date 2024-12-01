# Best Price

It is a shopping app that helps users find the best deals by comparing prices for the same product in different volumes or quantities. Whether you're buying a single item, a bulk pack, or a larger size, the app quickly shows you where you can get the best price per unit.

This app has the following features:

<pre>
✔️ Highlight the best price combination available.
</pre>
<p >
  <pre><img src="https://github.com/user-attachments/assets/7583d763-245a-47df-af5c-3d6a4a13ac49" width="200" height="400" alt=""/> <img src="https://github.com/user-attachments/assets/752e9001-18fa-4f7c-b4ec-04abfb6e2296" width="200" height="400" alt=""/></pre>
 
</p>

---
 
# Technologies and Libraries Used

| Library                          | Version |
| -------------------------------- | ------- |
| [React Native](https://reactnative.dev/)                                                                 | v0.72   | 
| [React](https://reactjs.org/)                                                                            | v18     |
| [React Native Paper](https://callstack.github.io/react-native-paper/)                                    | v5      |
| [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)                     | v10     |
| [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)                                       | v2      |
| [Babel Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)                      | v5      |




---

# Getting Started

## Prerequisite

- The mobile with USB debugging enabled
- The mobile and laptop are on the same Wi-Fi network.

## Install the app on the mobile device

```
yarn android
```

## Enable Wireless hot reload

- Run `adb devices` to get the mobile device name.
- Run `ipconfig` to get the IPv4 address.
- Connect the mobile device to the laptop via a USB cable.
- Install the app

```
yarn android
```

- Disconnect the mobile from USB. Metro Bundler will be disconnected.
- Shake the mobile to open the React Native Dev menu. Select Settings. Open `Debug server host & port for device.`
- Enter IPv4 (from step 1) and port number (usually 8081), e.g., 112.128.123.19:8081.
- Shake the mobile to open the React Native Dev menu.
- Select "Reload." Hot reload should now work.

---


# Create the release build

https://github.com/night-fury-rider/react-native-template/wiki/Create-the-release-build

--- 


# Deploy the App on Play Store

https://github.com/night-fury-rider/react-native-template/wiki/Deploy-the-App-on-PlayStore

--- 

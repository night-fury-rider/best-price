# Best Price

It is a shopping app that helps users find the best deals by comparing prices for the same product in different volumes or quantities. Whether you're buying a single item, a bulk pack, or a larger size, the app quickly shows you where you can get the best price per unit.

This app has the following features:

<pre>
✔️ Highlight the best price combination available.
</pre>
<p >
  <pre><img src="https://github.com/user-attachments/assets/8eee76de-c13e-433a-a92f-0b9b5a842d52" width="200" height="400" alt=""/> <img src="https://github.com/user-attachments/assets/cde04cee-195c-428c-895d-04ec3fb6df87" width="200" height="400" alt=""/></pre>
</p>

---
 
# Technologies and Libraries Used

- [React Native 0.72.4](https://reactnative.dev/)
- [React 18.2.0](https://reactjs.org/)
- [React Native Paper 5.12.3](https://callstack.github.io/react-native-paper/)

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

# Publishing to Play Store

https://github.com/night-fury-rider/react-native-template/wiki/Create-the-release-build

---

## Deploying the Release Build

1. Log in to your [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. This action should open the App Dashboard.
3. From the sidebar, select `Production` (under `Release`).
4. Click on `Create new release` located in the top right corner. This action will open `Create production release`.
5. Upload the build file and follow the instructions.

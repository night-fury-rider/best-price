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

## Release Build Setup (One-Time Setup)

- Create the keystore file

```
keytool -genkeypair -v -storetype PKCS12 -keystore best-price-app-upload-key.keystore -alias best-price-app-upload-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- Ensure that the best-price-app-upload-key.keystore file is located in the android/app directory.
- Ensure that the gradle.properties file is located in the .gradle directory. On Windows, the .gradle directory is typically found under C:\Users\<username>. The gradle.properties file should contain the following:

```
BEST_PRICE_UPLOAD_STORE_FILE=best-price-app-upload-key.keystore
BEST_PRICE_UPLOAD_KEY_ALIAS=best-price-app-upload-key-alias
BEST_PRICE_UPLOAD_STORE_PASSWORD=<App_Upload_Store_Password>
BEST_PRICE_UPLOAD_KEY_PASSWORD=<App_Upload_Key_Password>
```

## Creating the release build

- Increment `version` in `package.json`.
- Increment `versionMajor`, `versionMinor`, or `versionPatch` in `android/app/build.gradle`.
- Create the APK build.

```
yarn run android-build-apk
```

- Uninstall the app from the device (including from the work profile if available). Connect the device using USB.
- Install the APK file onto device

```
adb -s <device_name> install android/app/build/outputs/apk/release/app-release.apk
```

- Complete the sanity testing and capture screenshots.
- Update the screenshots in this README.
- Capture the home screen screenshot on emulator with Nexus_7_API_33.
- Capture the home screen screenshot on emulator with Nexus_10_API_33.
- Create a [release on Github](https://github.com/night-fury-rider/best-price/releases). Use [Github filter](https://github.com/night-fury-rider/best-price/compare/v0.0.1...main) for extracting data for release notes.
- Create the release build (aab build).

```
yarn run android-build
```

---

## Deploying the Release Build

1. Log in to your [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. This action should open the App Dashboard.
3. From the sidebar, select `Production` (under `Release`).
4. Click on `Create new release` located in the top right corner. This action will open `Create production release`.
5. Upload the build file and follow the instructions.

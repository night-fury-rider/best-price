# Price Comparator

An application to compare prices of different units of a product. This app is intended to assist in decision-making while shopping.

This app has the following features:

<pre>
✔️ Highlight the best price combination available.
</pre>
<p >
  <pre><img src="https://github.com/night-fury-rider/price-comparator/assets/5191208/1469a009-af32-4314-9dad-567e8cbf5c16" width="200" height="400" alt=""/> </pre>
</p>
<br/><br/>

# Technologies and Libraries Used

- [React Native 0.72.4](https://reactnative.dev/)
- [React 18.2.0](https://reactjs.org/)
- [React Native Elements 0.0.0-edge.2](https://reactnativeelements.com/)

  <br/><br/>

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
- Shake the mobile to open the React Native Dev menu. Select Settings. Open "Debug server host & port for device."
- Enter IPv4 (from step 1) and port number (usually 8081), e.g., 112.128.123.19:8081.
- Shake the mobile to open the React Native Dev menu .
- Select "Reload." Hot reload should now work.

  <br/><br/>

# Publishing to Play Store

## Release Build Setup (One-Time Setup)

- Create the keystore file

```
keytool -genkeypair -v -storetype PKCS12 -keystore price-comparator-app-upload-key.keystore -alias price-comparator-app-upload-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- Ensure that the price-comparator-app-upload-key.keystore file is located in the android/app directory.
- Ensure that the gradle.properties file is located in the .gradle directory. On Windows, the .gradle directory is typically found under C:\Users\<username>. The gradle.properties file should contain the following:

```
PRICE_COMPARATOR_UPLOAD_STORE_FILE=price-comparator-app-upload-key.keystore
PRICE_COMPARATOR_UPLOAD_KEY_ALIAS=price-comparator-app-upload-key-alias
PRICE_COMPARATOR_UPLOAD_STORE_PASSWORD=<App_Upload_Store_Password>
PRICE_COMPARATOR_UPLOAD_KEY_PASSWORD=<App_Upload_Key_Password>
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
- Create a [release on Github](https://github.com/night-fury-rider/price-comparator/releases). Use [Github filter](https://github.com/night-fury-rider/price-comparator/compare/v0.0.1...main) for extracting data for release notes.
- Create the release build (aab build).

```
yarn run android-build
```

<br/><br/>

## Deploying the Release Build

1. Log in to your [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. This action should open the App Dashboard.
3. From the sidebar, select `Production` (under `Release`).
4. Click on `Create new release` located in the top right corner. This action will open `Create production release`.
5. Upload the build file and follow the instructions.
   <br/><br/>

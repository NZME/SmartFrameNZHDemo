# SmartFrameNZHDemo
A demo of SmartFrame embeds in a react-native-webview. I have built this demo using the package versions we currently use in our NZH app:

* React Native: 0.72.17  
* react-native-webview: 13.12.3

This version of React Native will not build in the latest version of XCode (16.4) so please install 16.2 or lower [available from here](https://developer.apple.com/download/all/).

The demo app consists of a Home Screen containing 3 buttons that display different forms of content in the WebView Screen which contains a react-native-webview component.

* **Button 1:** Displays an NZH article using the url: https://www.nzherald.co.nz/sport/rugby/all-blacks/all-blacks-v-france-scott-barrett-ruled-out-for-remainder-of-series-with-calf-injury/VGEAH7VP7RFSTKBVFCGERYCH4U/. This article contains a SmartFrame embed which displays correctly in the webview component
* **Button 2:** Displays a the SmartFrame embed from the article above in html format. This also includes the override script. The SmartFrame does not show at all in this format.
* **Button 3:** Displays a correctly X embed. I wanted to give an example of how we display other embeds within our app.  

There is an additional injected JS script which returns the value 'window.location' of the webview to the console. This was how I was able to confirm that the window.location.href returns 'about:blank' when displaying the SmartFrame embed.

#### Below are the steps required to get the React Native app running:

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/0.72/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install dependencies

To install the dependencies, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install
```

## Step 2: Install iOS dependencies

To install the iOS dependencies, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install
```


## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _ios folder_ of your React Native project:

```bash
# using npm
pod install
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

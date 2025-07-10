import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

import styles from './styles';

const WebViewScreen = ({route, navigation}) => {
  const getSource = () => {
    const {url} = route.params;
    let source = {uri: url};
    if (url?.includes('embed')) {
      source = {
        html: '<script>window.SFURLOverride = "https://www.nzherald.co.nz/sport/rugby/all-blacks/all-blacks-v-france-scott-barrett-ruled-out-for-remainder-of-series-with-calf-injury/VGEAH7VP7RFSTKBVFCGERYCH4U/";</script><script async src="https://static.smartframe.io/embed.js"></script><smartframe-embed customer-id="7c910de5861e399f1115d2a413d299d8" image-id="ARCH305543_00235452" style="width: 100%; display: inline-flex; aspect-ratio: 3654/2436; max-width: 3654px;"></smartframe-embed><!-- https://smartframe.io/embedding-support -->',
      };
    } else if (url?.includes('x')) {
      source = {
        html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🟠 Severe Weather Update🟡<br><br>Heavy rain and strong winds move in on Friday.<br><br>A lot of this rain will be falling on saturated soils so impacts will come about faster.<br><br>Rapidly rising rivers, surface flooding and potential slips.<br><br>Get all the details here: <a href="https://t.co/HZ2TSD5rV7">https://t.co/HZ2TSD5rV7</a> <a href="https://t.co/eDNODngBBj">pic.twitter.com/eDNODngBBj</a></p>&mdash; MetService (@MetService) <a href="https://twitter.com/MetService/status/1943079268273263020?ref_src=twsrc%5Etfw">July 9, 2025</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
      };
    }
    return source;
  };

  //Injected JS to log the window.location props of the webview.
  const newInject = `  
  window.SFURLOverride = "https://www.nzherald.co.nz/";
  window.ReactNativeWebView.postMessage(JSON.stringify(window.location)); 
  true;`;

  const onMessage = event => {
    console.log('window.location.href:', event.nativeEvent.data);
  };

  return (
    <View style={styles.flex}>
      <WebView
        source={getSource()}
        style={styles.flex}
        ref={ref => {
          this.webview = ref;
        }}
        injectedJavaScript={newInject}
        onMessage={onMessage}
        originWhitelist={['*']}
        onRenderProcessGone={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView Crashed: ', nativeEvent.didCrash);
        }}
        onOpenWindow={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          const {targetUrl} = nativeEvent;
          console.log('Intercepted OpenWindow for', targetUrl);
        }}
        onContentProcessDidTerminate={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('Content process terminated, reloading', nativeEvent);
          this.refs.webview.reload();
        }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator />}
        webviewDebuggingEnabled={true}
      />
    </View>
  );
};

export default WebViewScreen;

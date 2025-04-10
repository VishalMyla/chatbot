# Integrate Push Notifications into your React Native project

# Prerequisite -

To start using, you need to set up the firebase account on the Firebase console if not set already. To set up a Firebase account for Android and iOS apps,please follow this guide

For iOS, you need to add either APNs certificate or APNs Auth key on Firebase.

# Android Configuration

To set up push notifications, we need to set up the Firebase Native Android package if not added already.

## Add Google service

To start using push notifications, you need to add the google gms services and start using its plugin -Open android/build.gradle and add the following -

```
dependencies {
   ...
   classpath 'com.google.gms:google-services:x.x.x'
   ...
}
```

```
dependencies {
   ...
   classpath 'com.google.gms:google-services:x.x.x'
   ...
}
```

Now open android/app/build.gradle and add the following at the top just below apply facebook plugin -

```
apply plugin: "com.google.gms.google-services"
```

```
apply plugin: "com.google.gms.google-services"
```

## Add google-info.json file

From the Firebase Console you set up for Android, please download the Google-info.json file and this file in the android app in android/app location.

## Add Hydra push notification packages

Add the Hydra push notification packages in the android/app/build.gradle file below the hydra core package -

```
dependencies {
 implementation("com.capillary:hydra-core:x.x.x")
 implementation("com.capillary:hydra-firebase:x.x.x")
 implementation("com.capillary:hydra-pushbase:x.x.x")
}
```

```
dependencies {
 implementation("com.capillary:hydra-core:x.x.x")
 implementation("com.capillary:hydra-firebase:x.x.x")
 implementation("com.capillary:hydra-pushbase:x.x.x")
}
```

Now sync your Android project to install these dependencies.

## Add Hydra Firebase service

Open android/app/src/main/AndroidManifest.xml file and add the following service to the application -

```
<service
       android:name="com.capillary.hydra.firebase.HydraFirebaseMessagingService"
       android:exported="false">
       <intent-filter>
         <action android:name="com.google.firebase.MESSAGING_EVENT" />
       </intent-filter>
     </service>
```

```
<service
       android:name="com.capillary.hydra.firebase.HydraFirebaseMessagingService"
       android:exported="false">
       <intent-filter>
         <action android:name="com.google.firebase.MESSAGING_EVENT" />
       </intent-filter>
     </service>
```

This will set the firebase service to receive the remote notifications from the Firebase on mobile app.

## Add push notifications listeners

Also add following private method at the end of the file -

You will also need to add 3 new listeners to get the push notification related events -

Create a new folder called listeners and add following files to this folder, these files are used above while setting the push notifications listeners

Create RnApplicationTokenListener.kt file and add following code -

```
package com.example.listeners


import android.util.Log
import com.capillary.hydra.pushbase.listener.TokenAvailableListener
import com.capillary.hydra.pushbase.model.Token
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnApplicationTokenListener : TokenAvailableListener {
   private val TAG = RnApplicationTokenListener::class.java.name


   override fun onTokenAvailable(token: Token) {
     Log.w(TAG, "Application Token $token")
     RnHydra.setNotificationToken(token.token)
     RnHydra.emitEvent(EventTypes.ON_TOKEN_AVAILABLE.event, token.token)
   }
}
```

```
package com.example.listeners


import android.util.Log
import com.capillary.hydra.pushbase.listener.TokenAvailableListener
import com.capillary.hydra.pushbase.model.Token
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnApplicationTokenListener : TokenAvailableListener {
   private val TAG = RnApplicationTokenListener::class.java.name


   override fun onTokenAvailable(token: Token) {
     Log.w(TAG, "Application Token $token")
     RnHydra.setNotificationToken(token.token)
     RnHydra.emitEvent(EventTypes.ON_TOKEN_AVAILABLE.event, token.token)
   }
}
```

Create RnHydraPushNotificationListener and add following code -

```
package com.example.listeners




import android.content.Context
import com.capillary.hydra.pushbase.listener.HydraPushNotificationListener
import com.capillary.hydra.pushbase.notification.model.CTA
import com.capillary.hydra.pushbase.notification.model.NotificationPayload
import com.facebook.react.bridge.Arguments
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra
import com.hydrarnsdk.utils.convertBundleToReadableMap


class RnHydraPushNotificationListener: HydraPushNotificationListener {
 override fun handleCustomAction(context: Context, payload: String) {
   RnHydra.emitEvent(EventTypes.HANDLE_CUSTOM_ACTION.event, payload)
 }


 override fun onNotificationClick(
   context: Context,
   payload: NotificationPayload,
   cta: CTA
 ): Boolean {
    val clickedAction = Arguments.createMap()
    cta.action?.let { clickedAction.putString("action", it) }
    cta.actionText?.let { clickedAction.putString("actionText", it) }
    clickedAction.putString("type", cta.type.toString())
    RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_CLICK.event, clickedAction)
    return true
 }


 override fun onNotificationDismissed(context: Context, payload: NotificationPayload) {
   RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_DISMISSED.event, convertBundleToReadableMap(payload.payload))
 }


 override fun onNotificationReceived(context: Context, payload: NotificationPayload) {
   RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_RECEIVED.event, convertBundleToReadableMap(payload.payload))
 }


 override fun onNotificationShown(context: Context, payload: NotificationPayload) {
   RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_SHOWN.event, convertBundleToReadableMap(payload.payload))
 }
}
```

```
package com.example.listeners




import android.content.Context
import com.capillary.hydra.pushbase.listener.HydraPushNotificationListener
import com.capillary.hydra.pushbase.notification.model.CTA
import com.capillary.hydra.pushbase.notification.model.NotificationPayload
import com.facebook.react.bridge.Arguments
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra
import com.hydrarnsdk.utils.convertBundleToReadableMap


class RnHydraPushNotificationListener: HydraPushNotificationListener {
 override fun handleCustomAction(context: Context, payload: String) {
   RnHydra.emitEvent(EventTypes.HANDLE_CUSTOM_ACTION.event, payload)
 }


 override fun onNotificationClick(
   context: Context,
   payload: NotificationPayload,
   cta: CTA
 ): Boolean {
    val clickedAction = Arguments.createMap()
    cta.action?.let { clickedAction.putString("action", it) }
    cta.actionText?.let { clickedAction.putString("actionText", it) }
    clickedAction.putString("type", cta.type.toString())
    RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_CLICK.event, clickedAction)
    return true
 }


 override fun onNotificationDismissed(context: Context, payload: NotificationPayload) {
   RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_DISMISSED.event, convertBundleToReadableMap(payload.payload))
 }


 override fun onNotificationReceived(context: Context, payload: NotificationPayload) {
   RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_RECEIVED.event, convertBundleToReadableMap(payload.payload))
 }


 override fun onNotificationShown(context: Context, payload: NotificationPayload) {
   RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_SHOWN.event, convertBundleToReadableMap(payload.payload))
 }
}
```

Create another file in listeners folder RnNotificationPermissionListener and add following code -

```
package com.hydrarnsdk.listener


import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.pushbase.listener.NotificationPermissionListener
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnNotificationPermissionListener: NotificationPermissionListener {


 override fun onPermissionResult(isGranted: Boolean) {
   Logger.v("onPermissionResult isGranted: $isGranted")
   RnHydra.emitEvent(EventTypes.ON_REQUEST_PERMISSION_ACTION.event, isGranted)
 }
}
```

```
package com.hydrarnsdk.listener


import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.pushbase.listener.NotificationPermissionListener
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnNotificationPermissionListener: NotificationPermissionListener {


 override fun onPermissionResult(isGranted: Boolean) {
   Logger.v("onPermissionResult isGranted: $isGranted")
   RnHydra.emitEvent(EventTypes.ON_REQUEST_PERMISSION_ACTION.event, isGranted)
 }
}
```

## Push notification React Native Bridge APIs

Now add the Native APIs for setting up the Push notifications from React Native bridge -

```
/**
  * ********************************************************************************
  *                      Hydra Push Notification APIs
  * ********************************************************************************
  */


 /**
  * Adds the event listener for the provided event type
  */
 @ReactMethod
 fun addEventListener(eventType: String) {
   RnHydra.setNotificationListener(eventType)
 }


 /**
  * Removes the event listener for the provided event type
  */
 @ReactMethod
 fun removeEventListener(eventType: String) {
   RnHydra.removeNotificationListener(eventType)
 }


 /**
  * Requests the push notification permission
  */
 @ReactMethod
 fun requestPermissions() {
   HydraPushApi.getInstance().requestPushPermission(reactApplicationContext)
 }




 @ReactMethod
 fun getToken(promise: Promise) {
   promise.resolve(RnHydra.getNotificationToken())
 }


/**
  * ********************************************************************************
  *                              Private functions
  * ********************************************************************************
  */
 /**
  * Registers the push notification listeners
  */
 private fun registerPushNotificationListeners() {
   HydraPushApi().addPermissionResponseListener(RnNotificationPermissionListener())
   HydraPushApi().registerPushNotificationListener(RnHydraPushNotificationListener())
   HydraFirebaseAPI().addTokenListener(RnApplicationTokenListener())
 }

 private fun getDrawableId(icon: String, defType: String): Int {
   val packageName: String = reactApplicationContext.packageName
   return reactApplicationContext.resources.getIdentifier(icon, defType, packageName)
 }
```

```
/**
  * ********************************************************************************
  *                      Hydra Push Notification APIs
  * ********************************************************************************
  */


 /**
  * Adds the event listener for the provided event type
  */
 @ReactMethod
 fun addEventListener(eventType: String) {
   RnHydra.setNotificationListener(eventType)
 }


 /**
  * Removes the event listener for the provided event type
  */
 @ReactMethod
 fun removeEventListener(eventType: String) {
   RnHydra.removeNotificationListener(eventType)
 }


 /**
  * Requests the push notification permission
  */
 @ReactMethod
 fun requestPermissions() {
   HydraPushApi.getInstance().requestPushPermission(reactApplicationContext)
 }




 @ReactMethod
 fun getToken(promise: Promise) {
   promise.resolve(RnHydra.getNotificationToken())
 }


/**
  * ********************************************************************************
  *                              Private functions
  * ********************************************************************************
  */
 /**
  * Registers the push notification listeners
  */
 private fun registerPushNotificationListeners() {
   HydraPushApi().addPermissionResponseListener(RnNotificationPermissionListener())
   HydraPushApi().registerPushNotificationListener(RnHydraPushNotificationListener())
   HydraFirebaseAPI().addTokenListener(RnApplicationTokenListener())
 }

 private fun getDrawableId(icon: String, defType: String): Int {
   val packageName: String = reactApplicationContext.packageName
   return reactApplicationContext.resources.getIdentifier(icon, defType, packageName)
 }
```

## Update Hydra instance init method

We need to do a few changes in the Android native bridge we created recently. IninitSdkmethod in RnHydraModule.kt module, add the following code before initialization the HydraAPI -

```
val fcmConfig = FcmConfig(isFCMRegistrationEnabled)
   val notificationConfig = smallIcon?.let {
     notificationColor?.let { color ->
       NotificationConfig(
         getDrawableId(it, "drawable"),
         getDrawableId(color, "color"),
         isMultipleNotificationInDrawerEnabled
       )
     }
   }

val hydraConfig: HydraConfig = HydraConfig.Builder(
     currentActivity!!.applicationContext,
     accountId,
     baseUrl,
     sslPublicKey,
     country,
     city,
     countryCode,
     captureViewPortDetails,
     fcmConfig,
     notificationConfig,
     null,
     null,
     isDisableAppLaunchedEvent,
     debugLevel
   ).build()


       hydraAPI = HydraAPI.instanceWithConfig(currentActivity!!.applicationContext, hydraConfig)
       // Set the HydraAPI instance to the RnHydra class
       RnHydra.setHydraAPI(hydraAPI!!)
       // Set the JS Event Emitter to the RnHydra class to emit the events to JS
       RnHydra.setJSEventEmitter(reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java))
       // Register the push notification listeners
       registerPushNotificationListeners()


       Logger.i("Hydra Capillary SDK initialized successfully!")
       promise?.resolve(true)
...
```

```
val fcmConfig = FcmConfig(isFCMRegistrationEnabled)
   val notificationConfig = smallIcon?.let {
     notificationColor?.let { color ->
       NotificationConfig(
         getDrawableId(it, "drawable"),
         getDrawableId(color, "color"),
         isMultipleNotificationInDrawerEnabled
       )
     }
   }

val hydraConfig: HydraConfig = HydraConfig.Builder(
     currentActivity!!.applicationContext,
     accountId,
     baseUrl,
     sslPublicKey,
     country,
     city,
     countryCode,
     captureViewPortDetails,
     fcmConfig,
     notificationConfig,
     null,
     null,
     isDisableAppLaunchedEvent,
     debugLevel
   ).build()


       hydraAPI = HydraAPI.instanceWithConfig(currentActivity!!.applicationContext, hydraConfig)
       // Set the HydraAPI instance to the RnHydra class
       RnHydra.setHydraAPI(hydraAPI!!)
       // Set the JS Event Emitter to the RnHydra class to emit the events to JS
       RnHydra.setJSEventEmitter(reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java))
       // Register the push notification listeners
       registerPushNotificationListeners()


       Logger.i("Hydra Capillary SDK initialized successfully!")
       promise?.resolve(true)
...
```

Here we are adding the support to send the custom notification icon and a notification icon color to the Hydra SDK. This will be used.

## RnHydra Singleton instance

To use the Hydra instance from single point and also expose the event listeners, we need to create the RnHydra Singleton instance -

Create a new package called classes and add a new Kotlin class RnHydra.kt and add following code -

```
package com.hydra.sdk.example.classes


import android.annotation.SuppressLint
import com.capillary.hydra.android.sdk.HydraAPI
import com.capillary.hydra.android.sdk.utils.Logger
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter


object RnHydra {
 @SuppressLint("StaticFieldLeak")
 private var hydraAPI: HydraAPI? = null
 private var hydraNotificationListeners: ArrayList<String> = ArrayList()
 private var emitter: RCTDeviceEventEmitter? = null
 private var notificationToken: String? = null


 fun setHydraAPI(hydra: HydraAPI) {
   hydraAPI = hydra
 }


 fun getHydraAPI(): HydraAPI? {
   return hydraAPI
 }


 fun setJSEventEmitter(em: RCTDeviceEventEmitter) {
   emitter = em
 }


 fun setNotificationListener(listener: String) {
   Logger.v("setNotificationListener for $listener")
   if (!hydraNotificationListeners.contains(listener)) {
     hydraNotificationListeners.add(listener)
   }
 }


 fun removeNotificationListener(listener: String) {
   Logger.v("removeNotificationListener for $listener")
   if (hydraNotificationListeners.contains(listener)) {
     hydraNotificationListeners.remove(listener)
   }
 }


 fun getNotificationToken(): String? {
   return notificationToken
 }


 fun setNotificationToken(token: String) {
   notificationToken = token
 }


 fun getNotificationListeners(): ArrayList<String> {
   return hydraNotificationListeners
 }


 fun emitEvent(event: String, data: Any) {
   if (emitter !== null && hydraNotificationListeners.contains(event)) {
     Logger.i("RnHydra", "Emitting $event Event!")
     emitter!!.emit(event, data)
   }
 }
}
```

```
package com.hydra.sdk.example.classes


import android.annotation.SuppressLint
import com.capillary.hydra.android.sdk.HydraAPI
import com.capillary.hydra.android.sdk.utils.Logger
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter


object RnHydra {
 @SuppressLint("StaticFieldLeak")
 private var hydraAPI: HydraAPI? = null
 private var hydraNotificationListeners: ArrayList<String> = ArrayList()
 private var emitter: RCTDeviceEventEmitter? = null
 private var notificationToken: String? = null


 fun setHydraAPI(hydra: HydraAPI) {
   hydraAPI = hydra
 }


 fun getHydraAPI(): HydraAPI? {
   return hydraAPI
 }


 fun setJSEventEmitter(em: RCTDeviceEventEmitter) {
   emitter = em
 }


 fun setNotificationListener(listener: String) {
   Logger.v("setNotificationListener for $listener")
   if (!hydraNotificationListeners.contains(listener)) {
     hydraNotificationListeners.add(listener)
   }
 }


 fun removeNotificationListener(listener: String) {
   Logger.v("removeNotificationListener for $listener")
   if (hydraNotificationListeners.contains(listener)) {
     hydraNotificationListeners.remove(listener)
   }
 }


 fun getNotificationToken(): String? {
   return notificationToken
 }


 fun setNotificationToken(token: String) {
   notificationToken = token
 }


 fun getNotificationListeners(): ArrayList<String> {
   return hydraNotificationListeners
 }


 fun emitEvent(event: String, data: Any) {
   if (emitter !== null && hydraNotificationListeners.contains(event)) {
     Logger.i("RnHydra", "Emitting $event Event!")
     emitter!!.emit(event, data)
   }
 }
}
```

## Create EventTypes

There are several events Hydra SDK will be emitting for Push notifications and other events, create another class in the classes package we created above and add the new file EventTypes.kt and following code in it -

```
package com.hydra.sdk.example.classes


enum class EventTypes(val event: String) {
 ON_TOKEN_AVAILABLE("onTokenAvailable"),
 ON_PUSH_RECEIVED("onPushReceived"),
 ON_NOTIFICATION_CLICK("onNotificationClicked"),
 ON_NOTIFICATION_RECEIVED("onNotificationReceived"),
 ON_NOTIFICATION_SHOWN("onNotificationShown"),
 ON_NOTIFICATION_DISMISSED("onNotificationDismissed"),
 HANDLE_CUSTOM_ACTION("handleCustomAction"),
 ON_REQUEST_PERMISSION_ACTION("onRequestPermissionAction"),
 ON_UNREAD_MESSAGE_COUNT_AVAILABLE("onCountAvailable"),
 ON_MESSAGES_AVAILABLE("onMessagesAvailable")
}
```

```
package com.hydra.sdk.example.classes


enum class EventTypes(val event: String) {
 ON_TOKEN_AVAILABLE("onTokenAvailable"),
 ON_PUSH_RECEIVED("onPushReceived"),
 ON_NOTIFICATION_CLICK("onNotificationClicked"),
 ON_NOTIFICATION_RECEIVED("onNotificationReceived"),
 ON_NOTIFICATION_SHOWN("onNotificationShown"),
 ON_NOTIFICATION_DISMISSED("onNotificationDismissed"),
 HANDLE_CUSTOM_ACTION("handleCustomAction"),
 ON_REQUEST_PERMISSION_ACTION("onRequestPermissionAction"),
 ON_UNREAD_MESSAGE_COUNT_AVAILABLE("onCountAvailable"),
 ON_MESSAGES_AVAILABLE("onMessagesAvailable")
}
```

# iOS Configuration

## Add Push notification capability

To get push notifications on your app, you need to enable the push notification and background actions capabilities in XCode -

Push notificationIn XCode, click on Project target and click on Signing & Capabilities section, search for Push notification, and add it.

Background modesThen search for Background modes and select Background fetch and Remote notifications

![](https://files.readme.io/8ee555b-image.png)

## Add google-info.plist file

1. Now, head back to your firebase account, select Settings from the left top corner and in the General tab from the iOS app, download the google-info.plist file

![](https://files.readme.io/7a057c3-image.png)

1. Now, add that download file to your project by importing it using Add Files to my project option.

![](https://files.readme.io/57d11ba-image.png)

## Add Hydra Push notification packages

To use push notifications, you need to add 1 Firebase Messaging package and 2 Hydra packages in your app -

1. Firebase Messaging

2. Hydra Push notification

3. HydraPushNotificationServiceExtension

Click on the Project from the left corner and click on + icon in dependencies section, now select the already added Hydra iOS package and add these packages to your app from Add to target and click on Add package.

Do clean build once to start getting these packages in your project files if needed

1. Adding Hydra push notification packages

![](https://files.readme.io/3ff8f78-image.png)

1. Add Firebase Messaging -2.1 Search for firebase-ios-packages, select the firebase-ios-packages and click on Add Package button

![](https://files.readme.io/e0268f5-image.png)

2.2 From the list of packages, add FirebaseMessaging to the application and click Add Package

![](https://files.readme.io/5cf0cae-image.png)

## Add Native iOS code

Now, you need to configure the native support for push notifications.

1. Add Required callbacks (delegates) to AppDelegate.m

Firebase and iOS gives few callbacks to handle the Push notifications, we need to add them to get the APNs, Firebase Tokens, Push notifications payload and their action details, add following code to your AppDelegate.m file -

Add new interface on top of AppDelegate implementation like -

```
@interface AppDelegate() <FIRMessagingDelegate, UNUserNotificationCenterDelegate>


@end
```

```
@interface AppDelegate() <FIRMessagingDelegate, UNUserNotificationCenterDelegate>


@end
```

This will allow the Firebase and Notification center delegate methods to be implemented by the AppDelegate class.

Now in AppDelegate class, initialize Firebase and set their delegates indidFinishLaunchingWithOptionsmethod -

```
#import "Firebase.h"
#import "FirebaseMessaging/FirebaseMessaging.h"
#import <React/RCTBundleURLProvider.h>
#import <UserNotifications/UserNotifications.h>
#import "RnPushNotification.h"


@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 // Configure Notifications
 [FIRApp configure];
 [UNUserNotificationCenter currentNotificationCenter].delegate = self;
 [FIRMessaging messaging].delegate = self;


 [[RnPushNotification sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
  self.moduleName = @"myApp";
 // You can add your custom initial props in the dictionary below.
 // They will be passed down to the ViewController used by React Native.
 self.initialProps = @{};


 return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
```

```
#import "Firebase.h"
#import "FirebaseMessaging/FirebaseMessaging.h"
#import <React/RCTBundleURLProvider.h>
#import <UserNotifications/UserNotifications.h>
#import "RnPushNotification.h"


@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 // Configure Notifications
 [FIRApp configure];
 [UNUserNotificationCenter currentNotificationCenter].delegate = self;
 [FIRMessaging messaging].delegate = self;


 [[RnPushNotification sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
  self.moduleName = @"myApp";
 // You can add your custom initial props in the dictionary below.
 // They will be passed down to the ViewController used by React Native.
 self.initialProps = @{};


 return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
```

1. Add Notifications Delegate methods

Now add the Delegate methods for Firebase and User notifications below this method -

```
// Push notification delegates
- (void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(NSString *)fcmToken {
 NSLog(@"GOT THE TOKEN  %@", fcmToken);
 [[RnPushNotification sharedInstance] messaging:fcmToken];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler {
 [[RnPushNotification sharedInstance] userNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler {
 [[FIRMessaging messaging] appDidReceiveMessage:response.notification.request.content.userInfo];
 [[RnPushNotification sharedInstance] userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
 [[RnPushNotification sharedInstance] application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
 NSLog(@"Error: %@", error);
 [[RnPushNotification sharedInstance] application:application didFailToRegisterForRemoteNotificationsWithError:error];
}


- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
 NSLog(@"APNS DeviceToken: %@", deviceToken);
 [[FIRMessaging messaging] setAPNSToken:deviceToken];
 [[RnPushNotification sharedInstance] application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}
```

```
// Push notification delegates
- (void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(NSString *)fcmToken {
 NSLog(@"GOT THE TOKEN  %@", fcmToken);
 [[RnPushNotification sharedInstance] messaging:fcmToken];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler {
 [[RnPushNotification sharedInstance] userNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler {
 [[FIRMessaging messaging] appDidReceiveMessage:response.notification.request.content.userInfo];
 [[RnPushNotification sharedInstance] userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
 [[RnPushNotification sharedInstance] application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
 NSLog(@"Error: %@", error);
 [[RnPushNotification sharedInstance] application:application didFailToRegisterForRemoteNotificationsWithError:error];
}


- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
 NSLog(@"APNS DeviceToken: %@", deviceToken);
 [[FIRMessaging messaging] setAPNSToken:deviceToken];
 [[RnPushNotification sharedInstance] application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}
```

1. Pass Notification Delegate method details to Hydra SDK

You would have noticed, we are calling some APIs from RnPushNotification, this is done to get the notification details to the Hydra SDK. We need to add this Objective-C class in our iOS app -

3.1 Create RnPushNotification Objective-C Cocoa touch classCreate a new Cocoa touch Objective C class -RnPushNotificationin iOS XCode project -

![](https://files.readme.io/7a3d863-image.png)

3.2 Now add following code in RnPushNotification.h

```
#import <Foundation/Foundation.h>
#import "UserNotifications/UNUserNotificationCenter.h"
#import "UIKit/UIApplication.h"


NS_ASSUME_NONNULL_BEGIN


@interface RnPushNotification : NSObject
+ (instancetype)sharedInstance;
- (void) messaging:(id)token;
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler;


- (void)userNotificationCenter:(UNUserNotificationCenter *)center
        didReceiveNotificationResponse:(UNNotificationResponse *)response
        withCompletionHandler:(void (^)(void))completionHandler;


- (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions;
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler;
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;


- (void) updateHydraWithNotificationSupport:(BOOL) granted;
@end


NS_ASSUME_NONNULL_END
```

```
#import <Foundation/Foundation.h>
#import "UserNotifications/UNUserNotificationCenter.h"
#import "UIKit/UIApplication.h"


NS_ASSUME_NONNULL_BEGIN


@interface RnPushNotification : NSObject
+ (instancetype)sharedInstance;
- (void) messaging:(id)token;
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler;


- (void)userNotificationCenter:(UNUserNotificationCenter *)center
        didReceiveNotificationResponse:(UNNotificationResponse *)response
        withCompletionHandler:(void (^)(void))completionHandler;


- (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions;
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler;
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;


- (void) updateHydraWithNotificationSupport:(BOOL) granted;
@end


NS_ASSUME_NONNULL_END
```

3.3 Add implementation for above methods in RnPushNotification.m file

```
#import "RnPushNotification.h"
#import "myApp-Swift.h"


@implementation RnPushNotification
+ (instancetype)sharedInstance {
 static RnPushNotification *shared = nil;
 static dispatch_once_t onceToken;
 dispatch_once(&onceToken, ^{
   shared = [[self alloc] init];
 });
 return shared;
}


- (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] application:application didFinishLanchingWithOptions:launchOptions];
 }];
}


- (void)messaging:(id)token {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] messagingReceiveRegistrationToken:token];
 }];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center
      willPresentNotification:(UNNotification *)notification
        withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
 [[RnHydraCore shared] userNotification:center willPresent:notification withCompletionHandler:completionHandler];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
        withCompletionHandler:(void (^)(void))completionHandler {
 [[RnHydraCore shared] userNotification:center didReceive:response withCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application
didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler {
 [[RnHydraCore shared] application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] application:application didRegisterForRemoteNotificationsWithToken:deviceToken];
 }];
}


- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
 [[RnHydraCore shared] application:application didFailToRegisterForRemoteNotificationsWithError:error];
}


- (void)updateHydraWithNotificationSupport:(BOOL) granted {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] updateNotificationPermission: granted];
 }];
 }
@end
```

```
#import "RnPushNotification.h"
#import "myApp-Swift.h"


@implementation RnPushNotification
+ (instancetype)sharedInstance {
 static RnPushNotification *shared = nil;
 static dispatch_once_t onceToken;
 dispatch_once(&onceToken, ^{
   shared = [[self alloc] init];
 });
 return shared;
}


- (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] application:application didFinishLanchingWithOptions:launchOptions];
 }];
}


- (void)messaging:(id)token {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] messagingReceiveRegistrationToken:token];
 }];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center
      willPresentNotification:(UNNotification *)notification
        withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
 [[RnHydraCore shared] userNotification:center willPresent:notification withCompletionHandler:completionHandler];
}


- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
        withCompletionHandler:(void (^)(void))completionHandler {
 [[RnHydraCore shared] userNotification:center didReceive:response withCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application
didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler {
 [[RnHydraCore shared] application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}


- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] application:application didRegisterForRemoteNotificationsWithToken:deviceToken];
 }];
}


- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
 [[RnHydraCore shared] application:application didFailToRegisterForRemoteNotificationsWithError:error];
}


- (void)updateHydraWithNotificationSupport:(BOOL) granted {
 [NSTimer scheduledTimerWithTimeInterval:1 repeats:NO
                                   block:^(NSTimer * _Nonnull timer) {
   [[RnHydraCore shared] updateNotificationPermission: granted];
 }];
 }
@end
```

3.4 Update RnHydraCore class to add the methods required by RnPushNotification class

Replace the contents of RnHydraCore with following code -

```
//
//  RnHydraCore.swift
//  react-native-capillary
//
//  Created by Rakesh Ostwal on 13/05/24.
//


import Foundation
import HydraCore
import HydraPushNotification
import React


enum EventTypes: String {
 case ON_TOKEN_AVAILABLE = "onTokenAvailable"
 case ON_PUSH_RECEIVED = "onPushReceived"
 case ON_NOTIFICATION_CLICK = "onNotificationClicked"
 case ON_NOTIFICATION_RECEIVED = "onNotificationReceived"
 case ON_NOTIFICATION_SHOWN = "onNotificationShown"
 case ON_NOTIFICATION_DISMISSED = "onNotificationDismissed"
 case HANDLE_CUSTOM_ACTION = "handleCustomAction"
 case ON_REQUEST_PERMISSION_ACTION = "onRequestPermissionAction"
 case ON_UNREAD_MESSAGE_COUNT_AVAILABLE = "onCountAvailable"
 case ON_MESSAGES_AVAILABLE = "onMessagesAvailable"
}


@objc(RnHydraCore)
open class RnHydraCore: NSObject, HydraNotificationCallbackDelegate {
 @objc public static var shared = RnHydraCore(with: true)
 var hydraInstance: Hydra? = nil
 let notificationCore: NotificationCore?
 var apnsTokenToSet: Data? = nil
 var fcmToken: String? = nil
 var permissionToUpdate: Bool = false
 var listeners: [String] = []


  private init(with temp: Bool) {
   notificationCore = NotificationCore.shared
   super.init()
   notificationCore?.setNotificationCallbackDelagte(delegate: self)
 }


  public func generateInstance(
   withConfiguration config: HydraConfiguration,
   geoData: (HydraCore.GeographicDataGenerator)? = nil,
   supportsPushNotifications: Bool = false,
   deviceScreenInfo: HydraCore.DeviceScreenInfo? = nil,
   inboxCoreConfig: (HydraCore.HydraInboxCoreConfigGenerator)? = nil,
   configuredFor env: HydraCore.Env = .dev
 )  -> Hydra? {
   if (hydraInstance == nil) {
     do {
       hydraInstance = try Hydra.generate(with: config,
                                          geoData: geoData,
                                          supportsPushNotifications: supportsPushNotifications,
                                          deviceScreenInfo: deviceScreenInfo,
                                          inboxCoreConfig: inboxCoreConfig,
                                          configuredFor: env)


       print("setting the hydra sdk to notification core")
       notificationCore?.update(sdk: hydraInstance!)


       if (apnsTokenToSet != nil) {
         application(UIApplication.shared, didRegisterForRemoteNotificationsWithToken: apnsTokenToSet!)
       }


       if (self.fcmToken != nil) {
         messaging(didReceiveRegistrationToken: fcmToken!)
       }


       if (self.permissionToUpdate) {
         updateNotificationPermission(granted: true)
       }
     } catch {
       return nil
     }
   }
  
   return hydraInstance
 }




  public func update(sdk hydra: Hydra) {
   self.hydraInstance = hydra
   notificationCore?.update(sdk: hydra)
 }
  public func requestPermissions() {
   let authOptions: UNAuthorizationOptions = [.alert, .badge, .sound]
   let center = UNUserNotificationCenter.current()
   center.requestAuthorization(options: authOptions) { granted, error in
     if let error = error {
       // Handle the error here.
       print("Error occurred due to :\(error.localizedDescription)")
       return
     }
     // Enable or disable features based on the authorization.
     self.updateNotificationPermission(granted: granted)
     if granted{
       print("Application Granted permissions:\(granted)")
       DispatchQueue.main.async {
         UIApplication.shared.registerForRemoteNotifications()
       }
     }
     self.emitEvent(event: EventTypes.ON_REQUEST_PERMISSION_ACTION.rawValue, data: granted)
    
     self.hydraInstance?.reportUserSettingsUpdate()
   }
 }
  public func getToken() -> String? {
   return self.fcmToken
 }


 public func addEventListener(event: String) {
   if !listeners.contains(event) {
     print("Set event listener for - \(event)")
     listeners.append(event)
   }
 }


 public func removeEventListener(event: String) {
   print("Remove event listener for - \(event)")
   self.listeners.removeAll(where: { $0 == event })
 }


 public func emitEvent(event: String, data: Any) {
   if (self.listeners.contains(event)) {
     print("Emitting Event for - \(event)")
     DispatchQueue.main.async {
        RNEventEmitter.emitter.sendEvent(withName: event, body: data)
     }
   }
 }


public func process(cta: HydraCore.CTA, notificationPayload payload: Any) -> Bool {
   print("Notificaiton was clicked with action \(cta.action)")
   emitEvent(event: EventTypes.ON_NOTIFICATION_CLICK.rawValue, data: convertCTAToDictionary(cta))
   return true
 }


 @objc(messagingReceiveRegistrationToken:)
 public func messaging(didReceiveRegistrationToken token: String) {
   if (self.hydraInstance != nil) {
     print("Hydra Core instance is set, updating FCM token with Hydra!")
     notificationCore?.messaging(didReceiveRegistrationToken: token)
     self.fcmToken = token
     emitEvent(event: EventTypes.ON_TOKEN_AVAILABLE.rawValue, data: token)
   } else {
     print("Hydra Core instance is not set now, will update FCM token once the Hydra object is created")
     self.fcmToken = token
   }
 }
  @objc(application:didFinishLanchingWithOptions:)
 public func application(application: UIApplication,
                         didFinishLanchingWithOptions options: NSDictionary?) {
   notificationCore?.application(application, didFinishLaunchingWithOptions: nil)
 }
  @objc(userNotification:didReceive:withCompletionHandler:)
 public func userNotification(center: UNUserNotificationCenter,
                              didReceive response: UNNotificationResponse,
                              withCompletionHandler completionHandler: @escaping () -> Void) {
   notificationCore?.userNotification(center: center, didReceive: response, withCompletionHandler: completionHandler)
 }
  @objc(userNotification:willPresent:withCompletionHandler:)
 public func userNotification(center: UNUserNotificationCenter,
                              willPresent notification: UNNotification,
                              withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
   notificationCore?.userNotification(center: center, willPresent: notification, withCompletionHandler: completionHandler)
 }
 
 @objc(application:didRegisterForRemoteNotificationsWithToken:)
 public func application(_ application: UIApplication,
                         didRegisterForRemoteNotificationsWithToken deviceToken: Data) {
   if (hydraInstance != nil) {
     print("hydra core instance is available")
     notificationCore?.application(application, didRegisterForRemoteNotificationsWithToken: deviceToken)
   } else {
     print("hydra core instance is not available")
     self.apnsTokenToSet = deviceToken
   }
 }
  @objc(application:didFailToRegisterForRemoteNotificationsWithError:)
 public func application(_ application: UIApplication,
                         didFailToRegisterForRemoteNotificationsWithError error: Error) {
   notificationCore?.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
 }
  @objc(application:didReceiveRemoteNotification:fetchCompletionHandler:)
 public func application(_ application: UIApplication,
                         didReceiveRemoteNotification userInfo: [AnyHashable : Any],
                         fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
   notificationCore?.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
 }
  @objc(updateNotificationPermission:)
 public func updateNotificationPermission(granted: Bool) {
   hydraInstance?.update(notificationSupport: granted)
 }
 
 func convertCTAToDictionary(_ cta: CTA) -> [String: Any] {
   var dictionary = [String: Any]()


   dictionary["actionText"] = cta.actionText ?? "" // Handle optional value
   dictionary["action"] = cta.action
   dictionary["type"] = cta.type
  
   return dictionary
 }
}
```

```
//
//  RnHydraCore.swift
//  react-native-capillary
//
//  Created by Rakesh Ostwal on 13/05/24.
//


import Foundation
import HydraCore
import HydraPushNotification
import React


enum EventTypes: String {
 case ON_TOKEN_AVAILABLE = "onTokenAvailable"
 case ON_PUSH_RECEIVED = "onPushReceived"
 case ON_NOTIFICATION_CLICK = "onNotificationClicked"
 case ON_NOTIFICATION_RECEIVED = "onNotificationReceived"
 case ON_NOTIFICATION_SHOWN = "onNotificationShown"
 case ON_NOTIFICATION_DISMISSED = "onNotificationDismissed"
 case HANDLE_CUSTOM_ACTION = "handleCustomAction"
 case ON_REQUEST_PERMISSION_ACTION = "onRequestPermissionAction"
 case ON_UNREAD_MESSAGE_COUNT_AVAILABLE = "onCountAvailable"
 case ON_MESSAGES_AVAILABLE = "onMessagesAvailable"
}


@objc(RnHydraCore)
open class RnHydraCore: NSObject, HydraNotificationCallbackDelegate {
 @objc public static var shared = RnHydraCore(with: true)
 var hydraInstance: Hydra? = nil
 let notificationCore: NotificationCore?
 var apnsTokenToSet: Data? = nil
 var fcmToken: String? = nil
 var permissionToUpdate: Bool = false
 var listeners: [String] = []


  private init(with temp: Bool) {
   notificationCore = NotificationCore.shared
   super.init()
   notificationCore?.setNotificationCallbackDelagte(delegate: self)
 }


  public func generateInstance(
   withConfiguration config: HydraConfiguration,
   geoData: (HydraCore.GeographicDataGenerator)? = nil,
   supportsPushNotifications: Bool = false,
   deviceScreenInfo: HydraCore.DeviceScreenInfo? = nil,
   inboxCoreConfig: (HydraCore.HydraInboxCoreConfigGenerator)? = nil,
   configuredFor env: HydraCore.Env = .dev
 )  -> Hydra? {
   if (hydraInstance == nil) {
     do {
       hydraInstance = try Hydra.generate(with: config,
                                          geoData: geoData,
                                          supportsPushNotifications: supportsPushNotifications,
                                          deviceScreenInfo: deviceScreenInfo,
                                          inboxCoreConfig: inboxCoreConfig,
                                          configuredFor: env)


       print("setting the hydra sdk to notification core")
       notificationCore?.update(sdk: hydraInstance!)


       if (apnsTokenToSet != nil) {
         application(UIApplication.shared, didRegisterForRemoteNotificationsWithToken: apnsTokenToSet!)
       }


       if (self.fcmToken != nil) {
         messaging(didReceiveRegistrationToken: fcmToken!)
       }


       if (self.permissionToUpdate) {
         updateNotificationPermission(granted: true)
       }
     } catch {
       return nil
     }
   }
  
   return hydraInstance
 }




  public func update(sdk hydra: Hydra) {
   self.hydraInstance = hydra
   notificationCore?.update(sdk: hydra)
 }
  public func requestPermissions() {
   let authOptions: UNAuthorizationOptions = [.alert, .badge, .sound]
   let center = UNUserNotificationCenter.current()
   center.requestAuthorization(options: authOptions) { granted, error in
     if let error = error {
       // Handle the error here.
       print("Error occurred due to :\(error.localizedDescription)")
       return
     }
     // Enable or disable features based on the authorization.
     self.updateNotificationPermission(granted: granted)
     if granted{
       print("Application Granted permissions:\(granted)")
       DispatchQueue.main.async {
         UIApplication.shared.registerForRemoteNotifications()
       }
     }
     self.emitEvent(event: EventTypes.ON_REQUEST_PERMISSION_ACTION.rawValue, data: granted)
    
     self.hydraInstance?.reportUserSettingsUpdate()
   }
 }
  public func getToken() -> String? {
   return self.fcmToken
 }


 public func addEventListener(event: String) {
   if !listeners.contains(event) {
     print("Set event listener for - \(event)")
     listeners.append(event)
   }
 }


 public func removeEventListener(event: String) {
   print("Remove event listener for - \(event)")
   self.listeners.removeAll(where: { $0 == event })
 }


 public func emitEvent(event: String, data: Any) {
   if (self.listeners.contains(event)) {
     print("Emitting Event for - \(event)")
     DispatchQueue.main.async {
        RNEventEmitter.emitter.sendEvent(withName: event, body: data)
     }
   }
 }


public func process(cta: HydraCore.CTA, notificationPayload payload: Any) -> Bool {
   print("Notificaiton was clicked with action \(cta.action)")
   emitEvent(event: EventTypes.ON_NOTIFICATION_CLICK.rawValue, data: convertCTAToDictionary(cta))
   return true
 }


 @objc(messagingReceiveRegistrationToken:)
 public func messaging(didReceiveRegistrationToken token: String) {
   if (self.hydraInstance != nil) {
     print("Hydra Core instance is set, updating FCM token with Hydra!")
     notificationCore?.messaging(didReceiveRegistrationToken: token)
     self.fcmToken = token
     emitEvent(event: EventTypes.ON_TOKEN_AVAILABLE.rawValue, data: token)
   } else {
     print("Hydra Core instance is not set now, will update FCM token once the Hydra object is created")
     self.fcmToken = token
   }
 }
  @objc(application:didFinishLanchingWithOptions:)
 public func application(application: UIApplication,
                         didFinishLanchingWithOptions options: NSDictionary?) {
   notificationCore?.application(application, didFinishLaunchingWithOptions: nil)
 }
  @objc(userNotification:didReceive:withCompletionHandler:)
 public func userNotification(center: UNUserNotificationCenter,
                              didReceive response: UNNotificationResponse,
                              withCompletionHandler completionHandler: @escaping () -> Void) {
   notificationCore?.userNotification(center: center, didReceive: response, withCompletionHandler: completionHandler)
 }
  @objc(userNotification:willPresent:withCompletionHandler:)
 public func userNotification(center: UNUserNotificationCenter,
                              willPresent notification: UNNotification,
                              withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
   notificationCore?.userNotification(center: center, willPresent: notification, withCompletionHandler: completionHandler)
 }
 
 @objc(application:didRegisterForRemoteNotificationsWithToken:)
 public func application(_ application: UIApplication,
                         didRegisterForRemoteNotificationsWithToken deviceToken: Data) {
   if (hydraInstance != nil) {
     print("hydra core instance is available")
     notificationCore?.application(application, didRegisterForRemoteNotificationsWithToken: deviceToken)
   } else {
     print("hydra core instance is not available")
     self.apnsTokenToSet = deviceToken
   }
 }
  @objc(application:didFailToRegisterForRemoteNotificationsWithError:)
 public func application(_ application: UIApplication,
                         didFailToRegisterForRemoteNotificationsWithError error: Error) {
   notificationCore?.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
 }
  @objc(application:didReceiveRemoteNotification:fetchCompletionHandler:)
 public func application(_ application: UIApplication,
                         didReceiveRemoteNotification userInfo: [AnyHashable : Any],
                         fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
   notificationCore?.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
 }
  @objc(updateNotificationPermission:)
 public func updateNotificationPermission(granted: Bool) {
   hydraInstance?.update(notificationSupport: granted)
 }
 
 func convertCTAToDictionary(_ cta: CTA) -> [String: Any] {
   var dictionary = [String: Any]()


   dictionary["actionText"] = cta.actionText ?? "" // Handle optional value
   dictionary["action"] = cta.action
   dictionary["type"] = cta.type
  
   return dictionary
 }
}
```

3.5 Add RnEventEmitter Native module

To emit the events to the React Native from Native iOS over the bridge, you need to add the Native Event Emitter -

Create a new Objective C Header file - RNEventEmitter.m and add following code -

```
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


@interface RCT_EXTERN_MODULE(RNEventEmitter, RCTEventEmitter)
 RCT_EXTERN_METHOD(supportedEvents)
@end
```

```
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


@interface RCT_EXTERN_MODULE(RNEventEmitter, RCTEventEmitter)
 RCT_EXTERN_METHOD(supportedEvents)
@end
```

Now add the supporting Swift file - RNEventEmitter.swift file and add the following code -

```
import Foundation
import React


@objc(RNEventEmitter)
open class RNEventEmitter: RCTEventEmitter {


 public static var emitter: RCTEventEmitter!


 override init() {
   super.init()
   RNEventEmitter.emitter = self
 }


 open override func supportedEvents() -> [String] {
   [
     EventTypes.ON_PUSH_RECEIVED.rawValue,
     EventTypes.ON_TOKEN_AVAILABLE.rawValue,
     EventTypes.ON_MESSAGES_AVAILABLE.rawValue,
     EventTypes.ON_NOTIFICATION_CLICK.rawValue,
     EventTypes.ON_NOTIFICATION_SHOWN.rawValue,
     EventTypes.ON_NOTIFICATION_RECEIVED.rawValue,
     EventTypes.ON_NOTIFICATION_DISMISSED.rawValue,
     EventTypes.ON_REQUEST_PERMISSION_ACTION.rawValue,
     EventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE.rawValue,
     EventTypes.HANDLE_CUSTOM_ACTION.rawValue,
   ]
 }
}
```

```
import Foundation
import React


@objc(RNEventEmitter)
open class RNEventEmitter: RCTEventEmitter {


 public static var emitter: RCTEventEmitter!


 override init() {
   super.init()
   RNEventEmitter.emitter = self
 }


 open override func supportedEvents() -> [String] {
   [
     EventTypes.ON_PUSH_RECEIVED.rawValue,
     EventTypes.ON_TOKEN_AVAILABLE.rawValue,
     EventTypes.ON_MESSAGES_AVAILABLE.rawValue,
     EventTypes.ON_NOTIFICATION_CLICK.rawValue,
     EventTypes.ON_NOTIFICATION_SHOWN.rawValue,
     EventTypes.ON_NOTIFICATION_RECEIVED.rawValue,
     EventTypes.ON_NOTIFICATION_DISMISSED.rawValue,
     EventTypes.ON_REQUEST_PERMISSION_ACTION.rawValue,
     EventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE.rawValue,
     EventTypes.HANDLE_CUSTOM_ACTION.rawValue,
   ]
 }
}
```

3.6 Add iOS Native module methodsTo support push notifications, we need request permissions API, need the callbacks when the token or push notification is available, to do that, add following React Native Bridge methods in React Native Bridge -

In RnHydraModule.m, add following code at the end of file -

```
// Push notifications
RCT_EXTERN_METHOD(requestPermissions)


RCT_EXTERN_METHOD(getToken:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(addEventListener:)


RCT_EXTERN_METHOD(removeEventListener:)
```

```
// Push notifications
RCT_EXTERN_METHOD(requestPermissions)


RCT_EXTERN_METHOD(getToken:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(addEventListener:)


RCT_EXTERN_METHOD(removeEventListener:)
```

In RnHydraSdk.swift file, add its implementation -

```
// ************************** push notification methods **************************
 @objc(requestPermissions)
 func requestPermissions() {
   RnHydraCore.shared.requestPermissions()
 }
  @objc(getToken:rejecter:)
 func getToken(resolve:RCTPromiseResolveBlock?, reject:RCTPromiseRejectBlock?) {
   let token = RnHydraCore.shared.getToken()
   resolve?(token)
 }
  @objc(addEventListener:)
 func addEventListener(event: String) {
   RnHydraCore.shared.addEventListener(event: event)
 }


 @objc(removeEventListener:)
 func removeEventListener(event: String) {
   RnHydraCore.shared.removeEventListener(event: event)
 }
// ******************************* private methods *******************************
```

```
// ************************** push notification methods **************************
 @objc(requestPermissions)
 func requestPermissions() {
   RnHydraCore.shared.requestPermissions()
 }
  @objc(getToken:rejecter:)
 func getToken(resolve:RCTPromiseResolveBlock?, reject:RCTPromiseRejectBlock?) {
   let token = RnHydraCore.shared.getToken()
   resolve?(token)
 }
  @objc(addEventListener:)
 func addEventListener(event: String) {
   RnHydraCore.shared.addEventListener(event: event)
 }


 @objc(removeEventListener:)
 func removeEventListener(event: String) {
   RnHydraCore.shared.removeEventListener(event: event)
 }
// ******************************* private methods *******************************
```

## Rich Notification Support

To add Rich notification supports to Hydra SDK, please configure app groups and add new notification service as below

### Add App groups

We recommend having a separate App Group ID set for Hydra SDKs with the format group.{app bundle id}.hydra and make sure the same app group id is enabled for all the targets where Hydra SDK is being used.

To add App groups, you need to add an App groups capability from the Signing and Capability tab.

![](https://files.readme.io/ba1d241-image.png)

Add App Groups and Enable your app’s group -

![](https://files.readme.io/03af5e1-image.png)

### Add Hydra notification extension

To build the rich notifications in iOS app, you need to add the notifications service extension, please add a new notification service extension by following the steps below -

1. Add new App target - Select File -> New -> Target

![](https://files.readme.io/eaad24c-image.png)

1. Search for Notification service, you will get 2 notifications Extensions, 1 - Content Extension and another Service Extension. Select Notification Service Extension.

![](https://files.readme.io/169092b-image.png)

![](https://files.readme.io/c47efb7-image.png)

1. Click next and name it HydraPushNotificationExtension OR anything you want to name and click Next -

![](https://files.readme.io/2d69601-image.png)

![](https://files.readme.io/4f7afa2-image.png)

Make sure you have a team selected and the bundle identifier is showing correctly.

1. Activate Extension - XCode will prompt you if you want to activate the Extension, Click Activate.

![](https://files.readme.io/2a69d9e-image.png)

### Add App groups to Extension

Now, please map the App groups we created with the newly created Extension by adding same App groups id to Extension’s app group -

1. Copy the group id from App’s App group.plist file -

![](https://files.readme.io/6035140-image.png)

1. Add the copied group identifier to Extention’s App group.plist file -

![](https://files.readme.io/81cd598-image.png)

### Update NotificationService.swift file’s code

Now, open the NotificationService file in the Extension Service folder and replace it with the following code -

```
import UserNotifications
import HydraPushNotificationServiceExtension


class NotificationService: UNNotificationServiceExtension {
 let service:HydraRemoteNotificationService = .init()


   var contentHandler: ((UNNotificationContent) -> Void)?
   var bestAttemptContent: UNMutableNotificationContent?


   override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
     service.didReceive(request, withContentHandler: contentHandler)
   }
  
   override func serviceExtensionTimeWillExpire() {
     service.serviceExtensionTimeWillExpire()
   }
}
```

```
import UserNotifications
import HydraPushNotificationServiceExtension


class NotificationService: UNNotificationServiceExtension {
 let service:HydraRemoteNotificationService = .init()


   var contentHandler: ((UNNotificationContent) -> Void)?
   var bestAttemptContent: UNMutableNotificationContent?


   override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
     service.didReceive(request, withContentHandler: contentHandler)
   }
  
   override func serviceExtensionTimeWillExpire() {
     service.serviceExtensionTimeWillExpire()
   }
}
```

NOTE:If you don’t find the HydraRemoteNotificationService, please clean & build the app once.

## React Native Push notification setup

### React Native Bridge methods

Now in React Native code, open the bridge file - HydraModule.ts we created last time and add following code -

```
/**
* ********************************************************************************
*                      Hydra Push Notification APIs
* ********************************************************************************
*/
/**
* Passes user preferences to the Hydra SDK.
*
* @param cuId - The customer ID of the user.
* @param userPreferences - The user preferences to be passed.
* @returns A promise that resolves when the user preferences are successfully passed.
*
* @example
* ```tsx
* passUserPreferences('customer-id', {
*  promPushOpted: true,
* transPushOpted: false,
* });
*/
export function passUserPreferences(
 cuId: string,
 userPreferences: UserPreferences
): Promise<any> {
 // TODO: This needs to be fixed for iOS, we need to call
 // set preferences first before updating preferences
 return Platform.OS === 'android'
   ? RnHydraSdk.passUserPreferences(cuId, userPreferences)
   : RnHydraSdk.passUserPreferences();
}


/**
* Requests permissions for push notifications.
* This method should be called before any other method in the SDK.
*/
export function requestPermissions() {
 return RnHydraSdk.requestPermissions();
}


/**
* A method to get the FCM token from SDK
*
* @returns a notification token string
*/
export function getToken(): Promise<string> {
 return RnHydraSdk.getToken();
}


type EventListenerSubscriptionMap = Record<string, EmitterSubscription>;


/**
* A map of event listener subscriptions.
* The key is the event type and the value is the subscription object.
* This map is used to keep track of the event listeners added by the app.
* This is used to remove the event listeners when they are no longer needed.
* This map should not be accessed directly by the app.
* Use the `addEventListener` and `removeEventListener` functions instead.
*/
const eventListenerSubscriptions: EventListenerSubscriptionMap = {};
const emitter = Platform.OS === 'ios' ? new NativeEventEmitter(NativeModules.RNEventEmitter) : DeviceEventEmitter




/**
* Adds an event listener for the specified event type.
* The listener will be called when the event is triggered.
*
* @param eventType - The type of the event to listen for.
* @param listener - The callback function to be called when the event is triggered.
*/
export function addEventListener(
 eventType: RnEventTypes,
 listener: (event: any) => void
) {
 if (!eventListenerSubscriptions[eventType]) {
   RnHydraSdk.addEventListener(eventType);
   const subscription = emitter.addListener(eventType, listener);
   eventListenerSubscriptions[eventType] = subscription;
 }
}


/**
* Removes the event listener for the specified event type.
*
* @param eventType - The type of the event to remove the listener from.
*/
export function removeEventListener(eventType: RnEventTypes) {
 const subscription = eventListenerSubscriptions[eventType];
 if (subscription) {
   RnHydraSdk.removeEventListener(eventType);
   subscription.remove();
   delete eventListenerSubscriptions[eventType];
 }
}


/**
* Removes all event listeners added by the app.
* This should be called when the app is unmounted or when the event
* listeners are no longer needed.
*/
export function removeAllEventListeners() {
 Object.keys(eventListenerSubscriptions).forEach((eventType) => {
   removeEventListener(eventType as RnEventTypes);
 });
}
```

```
/**
* ********************************************************************************
*                      Hydra Push Notification APIs
* ********************************************************************************
*/
/**
* Passes user preferences to the Hydra SDK.
*
* @param cuId - The customer ID of the user.
* @param userPreferences - The user preferences to be passed.
* @returns A promise that resolves when the user preferences are successfully passed.
*
* @example
* ```tsx
* passUserPreferences('customer-id', {
*  promPushOpted: true,
* transPushOpted: false,
* });
*/
export function passUserPreferences(
 cuId: string,
 userPreferences: UserPreferences
): Promise<any> {
 // TODO: This needs to be fixed for iOS, we need to call
 // set preferences first before updating preferences
 return Platform.OS === 'android'
   ? RnHydraSdk.passUserPreferences(cuId, userPreferences)
   : RnHydraSdk.passUserPreferences();
}


/**
* Requests permissions for push notifications.
* This method should be called before any other method in the SDK.
*/
export function requestPermissions() {
 return RnHydraSdk.requestPermissions();
}


/**
* A method to get the FCM token from SDK
*
* @returns a notification token string
*/
export function getToken(): Promise<string> {
 return RnHydraSdk.getToken();
}


type EventListenerSubscriptionMap = Record<string, EmitterSubscription>;


/**
* A map of event listener subscriptions.
* The key is the event type and the value is the subscription object.
* This map is used to keep track of the event listeners added by the app.
* This is used to remove the event listeners when they are no longer needed.
* This map should not be accessed directly by the app.
* Use the `addEventListener` and `removeEventListener` functions instead.
*/
const eventListenerSubscriptions: EventListenerSubscriptionMap = {};
const emitter = Platform.OS === 'ios' ? new NativeEventEmitter(NativeModules.RNEventEmitter) : DeviceEventEmitter




/**
* Adds an event listener for the specified event type.
* The listener will be called when the event is triggered.
*
* @param eventType - The type of the event to listen for.
* @param listener - The callback function to be called when the event is triggered.
*/
export function addEventListener(
 eventType: RnEventTypes,
 listener: (event: any) => void
) {
 if (!eventListenerSubscriptions[eventType]) {
   RnHydraSdk.addEventListener(eventType);
   const subscription = emitter.addListener(eventType, listener);
   eventListenerSubscriptions[eventType] = subscription;
 }
}


/**
* Removes the event listener for the specified event type.
*
* @param eventType - The type of the event to remove the listener from.
*/
export function removeEventListener(eventType: RnEventTypes) {
 const subscription = eventListenerSubscriptions[eventType];
 if (subscription) {
   RnHydraSdk.removeEventListener(eventType);
   subscription.remove();
   delete eventListenerSubscriptions[eventType];
 }
}


/**
* Removes all event listeners added by the app.
* This should be called when the app is unmounted or when the event
* listeners are no longer needed.
*/
export function removeAllEventListeners() {
 Object.keys(eventListenerSubscriptions).forEach((eventType) => {
   removeEventListener(eventType as RnEventTypes);
 });
}
```

### Update new types in types.ts

Add the new required types in types.ts

```
export interface NotificationPayload {
 accountId: string;
 body: Body;
 campaignId: string;
 clickAction: CTA;
 cuid: string;
 custom: string;
 expandableDetails: ExpandableDetails;
 gateway: GATEWAY;
 imageIdentifier: string;
 isRead: string;
 messageId: string;
 priority: string;
 scope: string;
 senderID: string;
 senderSource: string;
 validity: string;
 variationId: string;
}


export interface Body {
 cta: CTA;
 image: string;
 message: string;
 textRepresentation: string;
 title: string;
}


export interface CTA {
 action: string;
 actionText: string;
 type: string;
}


export interface ExpandableDetails {
 ctas: CTA[];
 image: string;
 message: string;
 style: string;
 textRepresentation: string;
}


/**
* This class defines the event types that gets the callback from the SDK
* when the event is triggered from native side with the required information
* to handle the action on the React native app side.
*/
export enum RnEventTypes  {
 ON_TOKEN_AVAILABLE = "onTokenAvailable",
 ON_PUSH_RECEIVED = "onPushReceived",
 ON_NOTIFICATION_CLICK = "onNotificationClicked",
 ON_NOTIFICATION_RECEIVED = "onNotificationReceived",
 ON_NOTIFICATION_SHOWN = "onNotificationShown",
 ON_NOTIFICATION_DISMISSED = "onNotificationDismissed",
 HANDLE_CUSTOM_ACTION = "handleCustomAction",
 ON_REQUEST_PERMISSION_ACTION = "onRequestPermissionAction",
 ON_UNREAD_MESSAGE_COUNT_AVAILABLE = "onCountAvailable",
 ON_MESSAGES_AVAILABLE = "onMessagesAvailable"
};
```

```
export interface NotificationPayload {
 accountId: string;
 body: Body;
 campaignId: string;
 clickAction: CTA;
 cuid: string;
 custom: string;
 expandableDetails: ExpandableDetails;
 gateway: GATEWAY;
 imageIdentifier: string;
 isRead: string;
 messageId: string;
 priority: string;
 scope: string;
 senderID: string;
 senderSource: string;
 validity: string;
 variationId: string;
}


export interface Body {
 cta: CTA;
 image: string;
 message: string;
 textRepresentation: string;
 title: string;
}


export interface CTA {
 action: string;
 actionText: string;
 type: string;
}


export interface ExpandableDetails {
 ctas: CTA[];
 image: string;
 message: string;
 style: string;
 textRepresentation: string;
}


/**
* This class defines the event types that gets the callback from the SDK
* when the event is triggered from native side with the required information
* to handle the action on the React native app side.
*/
export enum RnEventTypes  {
 ON_TOKEN_AVAILABLE = "onTokenAvailable",
 ON_PUSH_RECEIVED = "onPushReceived",
 ON_NOTIFICATION_CLICK = "onNotificationClicked",
 ON_NOTIFICATION_RECEIVED = "onNotificationReceived",
 ON_NOTIFICATION_SHOWN = "onNotificationShown",
 ON_NOTIFICATION_DISMISSED = "onNotificationDismissed",
 HANDLE_CUSTOM_ACTION = "handleCustomAction",
 ON_REQUEST_PERMISSION_ACTION = "onRequestPermissionAction",
 ON_UNREAD_MESSAGE_COUNT_AVAILABLE = "onCountAvailable",
 ON_MESSAGES_AVAILABLE = "onMessagesAvailable"
};
```

### Update init method in React native

For Push notifications, we need to send the Fcm Config and notificationConfig objects.NotificationConfig object requires a small icon to be displayed in the status bar and a notification color.Small icon - Please add a notification icon in the android/app/res/drawable folder and use the exact same name while passing it from React NativeNotification color - define a notification icon color in the android/app/res/values/colors.xml file and pass its name from React Native init method like below -

The updated init() method shall look like -

```
init({
     accountId: 'account-id',
     baseURL:
       'https://baseurl.com/new/',
     sslPublicKey: 'Qfmq8ourRhwcDdl0pizPcqtYvJmHhoROhmdadoesmwT^',
     country: 'India',
     city: 'Pune',
     countryCode: '91',
     captureViewPortDetails: true,
     isDisableAppLaunchedEvent: false,
     debugLevel: 2,
     fcmConfig: {
       isFCMRegistrationEnabled: true,
     },
     notificationConfig: {
       smallIcon: 'small_icon',
       notificationColor: 'teal_200',
       isMultipleNotificationInDrawerEnabled: true,
     },
   })
```

```
init({
     accountId: 'account-id',
     baseURL:
       'https://baseurl.com/new/',
     sslPublicKey: 'Qfmq8ourRhwcDdl0pizPcqtYvJmHhoROhmdadoesmwT^',
     country: 'India',
     city: 'Pune',
     countryCode: '91',
     captureViewPortDetails: true,
     isDisableAppLaunchedEvent: false,
     debugLevel: 2,
     fcmConfig: {
       isFCMRegistrationEnabled: true,
     },
     notificationConfig: {
       smallIcon: 'small_icon',
       notificationColor: 'teal_200',
       isMultipleNotificationInDrawerEnabled: true,
     },
   })
```

### Push Notifications Event Listeners -

Now in your app, call requestPermissions after your init() function call and setup token listener and notification click listeners-

```
function onTokenAvailable(token: string) {
   console.log('Token:', token);
 }


 function onNotificationClicked(notification: any) {
   // TODO: Handle notification click
 }


 function onPermissionAction(isGranted: boolean) {
   console.log(`Notification permission ${isGranted ? '' : 'not'} granted`);
   // TODO setup push token and notification callbacks if permission is granted
 }


 React.useEffect(() => {
   requestPermissions();
   addEventListener(RnEventTypes.ON_REQUEST_PERMISSION_ACTION,onPermissionAction);


   addEventListener(RnEventTypes.ON_TOKEN_AVAILABLE, onTokenAvailable);
   addEventListener(RnEventTypes.ON_NOTIFICATION_CLICK, onNotificationClicked);
   return () => {
     removeEventListener(RnEventTypes.ON_REQUEST_PERMISSION_ACTION);
     removeEventListener(RnEventTypes.ON_TOKEN_AVAILABLE);
     removeEventListener(RnEventTypes.ON_NOTIFICATION_CLICK);
   };
 }, []);
```

```
function onTokenAvailable(token: string) {
   console.log('Token:', token);
 }


 function onNotificationClicked(notification: any) {
   // TODO: Handle notification click
 }


 function onPermissionAction(isGranted: boolean) {
   console.log(`Notification permission ${isGranted ? '' : 'not'} granted`);
   // TODO setup push token and notification callbacks if permission is granted
 }


 React.useEffect(() => {
   requestPermissions();
   addEventListener(RnEventTypes.ON_REQUEST_PERMISSION_ACTION,onPermissionAction);


   addEventListener(RnEventTypes.ON_TOKEN_AVAILABLE, onTokenAvailable);
   addEventListener(RnEventTypes.ON_NOTIFICATION_CLICK, onNotificationClicked);
   return () => {
     removeEventListener(RnEventTypes.ON_REQUEST_PERMISSION_ACTION);
     removeEventListener(RnEventTypes.ON_TOKEN_AVAILABLE);
     removeEventListener(RnEventTypes.ON_NOTIFICATION_CLICK);
   };
 }, []);
```

If you notice above, we are setting up the listeners to get the callbacks when the user takes action on permissions, OR when the token is available or when the user clicks on notification.

### Handing Notification click events

When a user clicks on Push notification, the Hydra SDK provides the notification click event details like action, actionText and what is actionType. Based on the action, you can customize the action you want to take in the onNotificationClicked method.

Consider you sent a notification to user to update their settings and if user clicks on push notification, you will get the click details and based on details, you can perform action accordingly -

```
function onNotificationClicked(notification: any) {
     console.log('>>>>>>>>> onNotificationClicked', notification);


     if (notification.action === 'settings') {
       navigate.navigate('UserPreferences')
     }
   }
```

```
function onNotificationClicked(notification: any) {
     console.log('>>>>>>>>> onNotificationClicked', notification);


     if (notification.action === 'settings') {
       navigate.navigate('UserPreferences')
     }
   }
```

### Get notification token

You can also get a push notification token using the React Native Bridge method called getToken() as required.

```
getToken()
   .then((token) => {})
   .catch((err) => console.log(err));
```

```
getToken()
   .then((token) => {})
   .catch((err) => console.log(err));
```

That’s all, now you are good to get started. Run your app, get the notification token and send sample Hydra and normal notifications and use FCM APIs and see if you get the notifications and if you are able to click on notifications and get notification payload.
# Integrate In-App messaging into your React Native project

Hydra In-App Messaging targets your users by showing a message while the user is using your app. They are very effective in providing contextual information and help to cross-sell/up-sell on desired screens of your app or/and on desired actions performed by the user in your app.

# Prerequisites

HydraInAppMessaging framework handles the silent remote notifications received by the application. In order to add support for In App Messaging, the application must have integrated the HydraPushNotification Android and iOS Packages to manage the In-App messages.

# Integration

## Android

To integrate In App messaging notifications in Android, you need to add the Hydra InApp messaging package in Android’s app/build.gradle file.

Open android/app/build.gradle file and move to the dependencies section to add the package -

```
dependencies {
   ...
   // Hydra SDKs


   implementation("com.capillary:hydra-inapp:536.0.12")
   ...
}
```

```
dependencies {
   ...
   // Hydra SDKs


   implementation("com.capillary:hydra-inapp:536.0.12")
   ...
}
```

## iOS

For iOS, we need to add the XCode dependency from the package dependencies we recently added for other Hydra packages.

Open XCode and click on Project name -> from Package Dependencies click + -> select hydra-sdk-ios-packages and click Add Package -

![](https://files.readme.io/08336c3-image.png)

# Update Bridge Module

In order to use the In-App messaging package and its features, we need to add this package to the bridge module we created recently for Android and iOS.

## Android

### Update Hydra SDK initialization method

In Android, we need to initialize the InApp messaging instance to start receiving messages.

Open RnHydraModule.kt file from android/app/src folder and update the initSdk method to add the in app messaging config to Hydra SDK -

```
@ReactMethod
   fun initSdk(rnConfig: ReadableMap, promise: Promise?) {
       … 
       val inAppDefaultIcon: String? = rnConfig.getMap("inAppConfig")?.getString("defaultImage")


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
       val inAppConfig = inAppDefaultIcon?.let {
           InAppConfig(getDrawableId(it, "drawable"))
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
           inAppConfig,
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
   }
```

```
@ReactMethod
   fun initSdk(rnConfig: ReadableMap, promise: Promise?) {
       … 
       val inAppDefaultIcon: String? = rnConfig.getMap("inAppConfig")?.getString("defaultImage")


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
       val inAppConfig = inAppDefaultIcon?.let {
           InAppConfig(getDrawableId(it, "drawable"))
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
           inAppConfig,
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
   }
```

### Add click listener

In Android when user clicks on CTAs (custom action button) in the InApp message, the React Native app gets the callback to handle the click event, to handle the click event in Android, we need to add the new listener called RnOnInAppMessageClickListener -

Open android/app/listener folder we created recently and add a new file called RnOnInAppMessageClickListener  and update its code with following -

```
package com.hydra.sdk.example.listener

import android.content.Context
import com.capillary.hydra.inapp.listener.OnMessageClickListener
import com.capillary.hydra.inapp.repository.model.CTA
import com.facebook.react.bridge.Arguments
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnOnInAppMessageClickListener: OnMessageClickListener {
   override fun onMessageClick(context: Context, cta: CTA): Boolean {
       val clickedAction = Arguments.createMap()
       cta.action?.let { clickedAction.putString("action", it) }
       cta.actionText?.let { clickedAction.putString("actionText", it) }
       clickedAction.putString("type", cta.type.toString())
       RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_CLICK.event, clickedAction)
       return true
   }
}
```

```
package com.hydra.sdk.example.listener

import android.content.Context
import com.capillary.hydra.inapp.listener.OnMessageClickListener
import com.capillary.hydra.inapp.repository.model.CTA
import com.facebook.react.bridge.Arguments
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnOnInAppMessageClickListener: OnMessageClickListener {
   override fun onMessageClick(context: Context, cta: CTA): Boolean {
       val clickedAction = Arguments.createMap()
       cta.action?.let { clickedAction.putString("action", it) }
       cta.actionText?.let { clickedAction.putString("actionText", it) }
       clickedAction.putString("type", cta.type.toString())
       RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_CLICK.event, clickedAction)
       return true
   }
}
```

### Register click listener

Now we need to register this click listener, go to registerPushNotificationListeners method in RnHydraModule.kt and add the newly added listener to this method -

```
import com.capillary.hydra.inapp.utils.HydraInAppUIHelper
   private fun registerPushNotificationListeners() {
       HydraPushApi().addPermissionResponseListener(RnNotificationPermissionListener())
       HydraPushApi().registerPushNotificationListener(RnHydraPushNotificationListener())
       HydraFirebaseAPI().addTokenListener(RnApplicationTokenListener())
       HydraInAppUIHelper.getInstance().registerOnMessageClickListener(RnOnInAppMessageClickListener())
   }
```

```
import com.capillary.hydra.inapp.utils.HydraInAppUIHelper
   private fun registerPushNotificationListeners() {
       HydraPushApi().addPermissionResponseListener(RnNotificationPermissionListener())
       HydraPushApi().registerPushNotificationListener(RnHydraPushNotificationListener())
       HydraFirebaseAPI().addTokenListener(RnApplicationTokenListener())
       HydraInAppUIHelper.getInstance().registerOnMessageClickListener(RnOnInAppMessageClickListener())
   }
```

### Add default placeholder image -

Hydra In app messaging library requires the default fallback placeholder image to be added in the android’s resources folder and then pass it in the Hydra init configuration later. Please go to the android/app/res/drawable folder in Android Studio or VSCode and add the default InApp messaging image you want to keep.

## iOS

### Update Hydra SDK init method

In XCode, go to initSdk method in  RnHydraSdk.swift file and add the code to initialize the InApp messaging -

```
@objc(initSdk:withResolver:withRejecter:)
 func initSdk(config: NSDictionary,
              resolve:RCTPromiseResolveBlock?,
              reject:RCTPromiseRejectBlock?) -> Void {
   ...
   let inAppConfigParams: NSDictionary? = (config.value(forKey: "inAppConfig") as? NSDictionary)


   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, [0,5,10,30,120]))
    
     // TODO: need to add a custom class for GeoData - currently SDK is not accepting the init for some reason
//      let geoData: GeoData = GeoData(country: "", countryCode: "", city: "", timezone: "")
     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(withConfiguration: config, geoData: nil, supportsPushNotifications: isFCMRegistrationEnabled, inboxCoreConfig: inboxConfig)
    
     // InApp messaging
     if (inAppConfigParams != nil) {
       let defImage: String? = (inAppConfigParams?.value(forKey: "defaultImage") as? String)
       let placeholderImage: UIImage? = defImage.flatMap { UIImage(named: $0) }
       let inAppConfig = HydraInAppMessageConfiguration(hydraConfig: config, notificationCore: NotificationCore.shared, appStoreId: "", placeholderImage: placeholderImage)
       let inAppCore = try InAppMessagingCore(with: inAppConfig, environment: .dev)
       RnHydraCore.shared.update(inAppCore: inAppCore)
     }
     ...  
 }
```

```
@objc(initSdk:withResolver:withRejecter:)
 func initSdk(config: NSDictionary,
              resolve:RCTPromiseResolveBlock?,
              reject:RCTPromiseRejectBlock?) -> Void {
   ...
   let inAppConfigParams: NSDictionary? = (config.value(forKey: "inAppConfig") as? NSDictionary)


   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, [0,5,10,30,120]))
    
     // TODO: need to add a custom class for GeoData - currently SDK is not accepting the init for some reason
//      let geoData: GeoData = GeoData(country: "", countryCode: "", city: "", timezone: "")
     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(withConfiguration: config, geoData: nil, supportsPushNotifications: isFCMRegistrationEnabled, inboxCoreConfig: inboxConfig)
    
     // InApp messaging
     if (inAppConfigParams != nil) {
       let defImage: String? = (inAppConfigParams?.value(forKey: "defaultImage") as? String)
       let placeholderImage: UIImage? = defImage.flatMap { UIImage(named: $0) }
       let inAppConfig = HydraInAppMessageConfiguration(hydraConfig: config, notificationCore: NotificationCore.shared, appStoreId: "", placeholderImage: placeholderImage)
       let inAppCore = try InAppMessagingCore(with: inAppConfig, environment: .dev)
       RnHydraCore.shared.update(inAppCore: inAppCore)
     }
     ...  
 }
```

### Update RnHydra code to set InApp messaging object -

Open RnHydraCore.swift and add following code to set the Inapp messaging object -

Add a new instance variable inAppCore to the RnHydraInstance

`var inAppCore: InAppMessagingCore? = nil`

`var inAppCore: InAppMessagingCore? = nil`

Add new method to set this instance from RnHydraSdk.swift file -

```
public func update(inAppCore core: InAppMessagingCore) {
   self.inAppCore = core
 }
```

```
public func update(inAppCore core: InAppMessagingCore) {
   self.inAppCore = core
 }
```

This method is being called from the initSdk method.

### Click listener

iOS uses the common click listener for Push notifications and InApp messaging CTAs, so we do not need to set this again as we have set this while integrating push notifications. For more information, checkout this section.

### Add default placeholder image

Just like Android, iOS also needs the default placeholder image, to add the placeholder image, go to XCode, images and add a new placeholder image

## React Native

In React Native, you need to pass the InApp messaging config object from init method to instantiate the InApp messaging module -

### Update types

Go to types.ts file and add the InAppConfig class

```
/**
* InApp Configuration object
* @param defaultImage Resource-Id for fallback image for in app message
*/
export interface InAppConfig {
 defaultImage: string;
}
```

```
/**
* InApp Configuration object
* @param defaultImage Resource-Id for fallback image for in app message
*/
export interface InAppConfig {
 defaultImage: string;
}
```

Now add this type to the HydraConfigParams interface -

```
export type HydraConfigParams = {
  ...
  notificationConfig?: NotificationConfig;
  inAppConfig?: InAppConfig;
}
```

```
export type HydraConfigParams = {
  ...
  notificationConfig?: NotificationConfig;
  inAppConfig?: InAppConfig;
}
```

### Update Hydra initialization

Go to the init method you have called from recently and update it with following -

```
init({
       ...
       fcmConfig: {
         isFCMRegistrationEnabled: true,
       },
       notificationConfig: {
         smallIcon: "small_icon",
         notificationColor: "teal_200",
         isMultipleNotificationInDrawerEnabled: true,
       },
       inAppConfig: {
         defaultImage: "transparent_fallback",
       }
     });
```

```
init({
       ...
       fcmConfig: {
         isFCMRegistrationEnabled: true,
       },
       notificationConfig: {
         smallIcon: "small_icon",
         notificationColor: "teal_200",
         isMultipleNotificationInDrawerEnabled: true,
       },
       inAppConfig: {
         defaultImage: "transparent_fallback",
       }
     });
```

NOTE:The value of defaultImage should be exactly the same name you gave while adding the resource image Android and iOS apps.

Now you can run the app and send the sample Inapp messaging notifications from backend/postman to test the configuration.

# InApp Supported Layouts

![](https://files.readme.io/fb47f8e-image.png)

![](https://files.readme.io/0c0c893-image.png)
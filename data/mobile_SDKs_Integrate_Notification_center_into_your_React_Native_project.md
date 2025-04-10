# Integrate Notification center into your React Native project

Notification Center is a powerful feature through which your users can have a unified and streamlined notification experience, where they can easily access and manage their notifications in one place. It provides an option for the end-user to scroll back and see what they have missed, read the notifications and maintain the history by deleting the notifications.

# Prerequisites

Like InApp messaging, Notification Center also requires you to first set up the Push notifications for Android and iOS before you start using it.

# Integration

There can be two approaches to implement the Notification Center in the application.

- Integrate HydraInboxCore frameworkWhen developers want to create their own UI implementation then they can use this framework and its API’s.This framework can return all the notifications and the developer can sketch the UI as per their requirement.

- When developers want to create their own UI implementation then they can use this framework and its API’s.

- This framework can return all the notifications and the developer can sketch the UI as per their requirement.

- Integrate HydraInboxCore and HydraInboxUI frameworks(Recommended)This should be used when the developer wants to use the Notification Center UI designed by the SDK.This will need the developer to set up a notification button(or any button) and push/present SDK’s Notification Center UI.

- This should be used when the developer wants to use the Notification Center UI designed by the SDK.

- This will need the developer to set up a notification button(or any button) and push/present SDK’s Notification Center UI.

## Dependencies

Notification Center has 2 packages -

1. HydraInboxCore - Contains the inbox core apis, only use/add this package if you building custom UI

2. HydraInboxUI - Contains the Notification Center UI, use/add this package if you want to use the inbuilt notification center UI.

## Android

### Add package dependency

Open android/app/build.gradle file and add the following dependencies to the application

```
dependencies {
   ...
   // Hydra SDKs
   implementation("com.capillary:hydra-core:536.3.6")
   implementation("com.capillary:hydra-pushbase:536.4.8")
   implementation("com.capillary:hydra-firebase:536.3.6")
   implementation("com.capillary:hydra-richnotification:536.0.5")




   implementation("com.capillary:hydra-inapp:536.0.12")
   implementation("com.capillary:hydra-inbox-core:536.0.11")
   implementation("com.capillary:hydra-inbox-ui:536.0.12")
   ...
}
```

```
dependencies {
   ...
   // Hydra SDKs
   implementation("com.capillary:hydra-core:536.3.6")
   implementation("com.capillary:hydra-pushbase:536.4.8")
   implementation("com.capillary:hydra-firebase:536.3.6")
   implementation("com.capillary:hydra-richnotification:536.0.5")




   implementation("com.capillary:hydra-inapp:536.0.12")
   implementation("com.capillary:hydra-inbox-core:536.0.11")
   implementation("com.capillary:hydra-inbox-ui:536.0.12")
   ...
}
```

NOTE:add hydra-inbox-ui package only if you want to use the in built notification center UI otherwise just add hydra-inbox-core.

### Update Android Bridge module

Open RnHydraModule.kt from android/app/src folder and update the init method to accommodate the notification center instance in Hydra instance -

```
@ReactMethod
   fun initSdk(rnConfig: ReadableMap, promise: Promise?) {
       ...
       val inAppDefaultIcon: String? = rnConfig.getMap("inAppConfig")?.getString("defaultImage")
       val notificationCenterDefaultIcon: String? = rnConfig.getMap("notificationCenterConfig")?.getString("defaultImage")
       val notificationCenterOffset: Int? = rnConfig.getMap("notificationCenterConfig")?.getInt("notificationCenterOffset")


       ...


       val inAppConfig = inAppDefaultIcon?.let {
           InAppConfig(getDrawableId(it, "drawable"))
       }


       val notificationCenterConfig = notificationCenterDefaultIcon?.let {
           notificationCenterOffset?.let {offset ->
               NotificationCenterConfig(getDrawableId(it,"drawable"), offset)
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
           inAppConfig,
           notificationCenterConfig,
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
       ...
       val inAppDefaultIcon: String? = rnConfig.getMap("inAppConfig")?.getString("defaultImage")
       val notificationCenterDefaultIcon: String? = rnConfig.getMap("notificationCenterConfig")?.getString("defaultImage")
       val notificationCenterOffset: Int? = rnConfig.getMap("notificationCenterConfig")?.getInt("notificationCenterOffset")


       ...


       val inAppConfig = inAppDefaultIcon?.let {
           InAppConfig(getDrawableId(it, "drawable"))
       }


       val notificationCenterConfig = notificationCenterDefaultIcon?.let {
           notificationCenterOffset?.let {offset ->
               NotificationCenterConfig(getDrawableId(it,"drawable"), offset)
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
           inAppConfig,
           notificationCenterConfig,
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

Here we created the notificationCenterConfig by extracting the notificationConfig object we sent from ReactNative side (this will come later) and added the notificationCenterConfig object to the Hydra’s instance method.

### Add Notification Click Event listener

NOTE:If you are using built-in Notification Center UI from Hydra, then you need to add this listener otherwise you can ignore this.

Create a new listener class in android/app/src/listeners folder - RnOnInboxMessageClickListener and add following code to it

```
package com.hydra.sdk.example.listener

import android.content.Context
import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.inbox.core.model.Action
import com.capillary.hydra.inbox.ui.listener.OnMessageClickListener
import com.facebook.react.bridge.Arguments
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra

class RnOnInboxMessageClickListener: OnMessageClickListener {
   override fun onMessageClick(context: Context, action: Action): Boolean {
       val clickedAction = Arguments.createMap()
       action.action?.let { clickedAction.putString("action", it) }
       action.actionText?.let { clickedAction.putString("actionText", it) }
       clickedAction.putString("type", action.type.toString())
       RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_CLICK.event, clickedAction)
       return true
   }
}
```

```
package com.hydra.sdk.example.listener

import android.content.Context
import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.inbox.core.model.Action
import com.capillary.hydra.inbox.ui.listener.OnMessageClickListener
import com.facebook.react.bridge.Arguments
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra

class RnOnInboxMessageClickListener: OnMessageClickListener {
   override fun onMessageClick(context: Context, action: Action): Boolean {
       val clickedAction = Arguments.createMap()
       action.action?.let { clickedAction.putString("action", it) }
       action.actionText?.let { clickedAction.putString("actionText", it) }
       clickedAction.putString("type", action.type.toString())
       RnHydra.emitEvent(EventTypes.ON_NOTIFICATION_CLICK.event, clickedAction)
       return true
   }
}
```

Keep the same package at top of file as per your package

### Register click event listener

Now register this click listener to start receiving click events in registerPushNotificationListeners method -

Add following code at the end of method -

```
private fun registerPushNotificationListeners() {
      ...       HydraInboxUIHelper.getInstance().registerOnMessageClickListener(RnOnInboxMessageClickListener())
   }
```

```
private fun registerPushNotificationListeners() {
      ...       HydraInboxUIHelper.getInstance().registerOnMessageClickListener(RnOnInboxMessageClickListener())
   }
```

## iOS

### Add package dependency

In iOS, open XCode and click on Project name, -> in package dependencies -> click + icon and select hydra-sdk-ios-packages -> click Add Package.

Now the new window will be opened, add HydraInboxCore and HydraInboxUI to your project target and click Add Package

![](https://files.readme.io/c9f007d-image.png)

### Update iOS Bridge module

Now update the initSdk method in RnHydraSdk.swift to initialize HydraInboxCore and HydraInboxUI

```
@objc(initSdk:withResolver:withRejecter:)
 func initSdk(config: NSDictionary,
              resolve:RCTPromiseResolveBlock?,
              reject:RCTPromiseRejectBlock?) -> Void {
   ...
   let inAppConfigParams: NSDictionary? = (config.value(forKey: "inAppConfig") as? NSDictionary)
   let ncConfigParams: NSDictionary? = (config.value(forKey: "notificationCenterConfig") as? NSDictionary)


   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, [0,5,10,30,120]))
     let geoData: GeoData = GeoData(country: country, countryCode: countryCode, city: city, timeZone: timezone)


     // Notificaion Inbox Core Config
     let inboxConfig: InboxCoreConfiguration? = ncConfigParams.flatMap { params in
         return InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: 200)
     }


     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(
       withConfiguration: config,
       geoData: geoData,
       supportsPushNotifications: isFCMRegistrationEnabled,
       inboxCoreConfig: inboxConfig
     )
    
     // InApp messaging
     ...


     // Notification Inbox Core
     if (ncConfigParams != nil) {
       let inboxCore = try InboxCore(with: inboxConfig!)
       RnHydraCore.shared.update(inboxCore: inboxCore)


       // Setup notification core ui only if the app supports notification center ui
       if (useNotificationCenterUI) {
         let inboxUIConfiguration: NSDictionary? = (ncConfigParams?.value(forKey: "inboxUIConfiguration") as? NSDictionary)
         let unreadMessageConfigPayload = (inboxUIConfiguration?.value(forKey: "unreadMessageConfig") as? NSDictionary)
         let readMessageConfigPayload = (inboxUIConfiguration?.value(forKey: "readMessageConfig") as? NSDictionary)
         let defNCImage: String? = (ncConfigParams?.value(forKey: "defaultImage") as? String)
         let ncPlaceHolderImage: UIImage? = defNCImage.flatMap {UIImage(named: $0)}
        
         var inboxUnreadConfig: HydraReactNativeInboxUIConfiguration? = nil
         var inboxReadConfig: HydraReactNativeInboxUIConfiguration? = nil
         if (unreadMessageConfigPayload != nil) {
           inboxUnreadConfig = convertInboxUIPayloadToInboxUIConfig(dictionary: unreadMessageConfigPayload!, type: InboxUIConfigurationType.unread)
         }
        
         if (readMessageConfigPayload != nil) {
           inboxReadConfig = convertInboxUIPayloadToInboxUIConfig(dictionary: readMessageConfigPayload!, type: InboxUIConfigurationType.read)
         }


         let inboxUIConfig = HydraInboxUIConfiguration(
           unreadMessageConfigType: inboxUnreadConfig != nil ? .customReactNativeConfiguration(inboxUnreadConfig!) : .defaultUnreadConfiguration,
           readMessageConfigType: inboxReadConfig != nil ?.customReactNativeConfiguration(inboxReadConfig!) : .defaultReadConfiguration,
           placeholderImage: ncPlaceHolderImage
         )


         let inboxUI = InboxUICore(with: inboxCore, configuration: inboxUIConfig)


         RnHydraCore.shared.update(inboxUICore: inboxUI)
       }
     }


     // setting log level
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
   let ncConfigParams: NSDictionary? = (config.value(forKey: "notificationCenterConfig") as? NSDictionary)


   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, [0,5,10,30,120]))
     let geoData: GeoData = GeoData(country: country, countryCode: countryCode, city: city, timeZone: timezone)


     // Notificaion Inbox Core Config
     let inboxConfig: InboxCoreConfiguration? = ncConfigParams.flatMap { params in
         return InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: 200)
     }


     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(
       withConfiguration: config,
       geoData: geoData,
       supportsPushNotifications: isFCMRegistrationEnabled,
       inboxCoreConfig: inboxConfig
     )
    
     // InApp messaging
     ...


     // Notification Inbox Core
     if (ncConfigParams != nil) {
       let inboxCore = try InboxCore(with: inboxConfig!)
       RnHydraCore.shared.update(inboxCore: inboxCore)


       // Setup notification core ui only if the app supports notification center ui
       if (useNotificationCenterUI) {
         let inboxUIConfiguration: NSDictionary? = (ncConfigParams?.value(forKey: "inboxUIConfiguration") as? NSDictionary)
         let unreadMessageConfigPayload = (inboxUIConfiguration?.value(forKey: "unreadMessageConfig") as? NSDictionary)
         let readMessageConfigPayload = (inboxUIConfiguration?.value(forKey: "readMessageConfig") as? NSDictionary)
         let defNCImage: String? = (ncConfigParams?.value(forKey: "defaultImage") as? String)
         let ncPlaceHolderImage: UIImage? = defNCImage.flatMap {UIImage(named: $0)}
        
         var inboxUnreadConfig: HydraReactNativeInboxUIConfiguration? = nil
         var inboxReadConfig: HydraReactNativeInboxUIConfiguration? = nil
         if (unreadMessageConfigPayload != nil) {
           inboxUnreadConfig = convertInboxUIPayloadToInboxUIConfig(dictionary: unreadMessageConfigPayload!, type: InboxUIConfigurationType.unread)
         }
        
         if (readMessageConfigPayload != nil) {
           inboxReadConfig = convertInboxUIPayloadToInboxUIConfig(dictionary: readMessageConfigPayload!, type: InboxUIConfigurationType.read)
         }


         let inboxUIConfig = HydraInboxUIConfiguration(
           unreadMessageConfigType: inboxUnreadConfig != nil ? .customReactNativeConfiguration(inboxUnreadConfig!) : .defaultUnreadConfiguration,
           readMessageConfigType: inboxReadConfig != nil ?.customReactNativeConfiguration(inboxReadConfig!) : .defaultReadConfiguration,
           placeholderImage: ncPlaceHolderImage
         )


         let inboxUI = InboxUICore(with: inboxCore, configuration: inboxUIConfig)


         RnHydraCore.shared.update(inboxUICore: inboxUI)
       }
     }


     // setting log level
     ...
 }
```

If you notice, in above code, we are adding the inbox core and inbox UI instances to the Hydra SDK.

We are updating the Hydra initialization by setting the inboxCoreConfig in its init method and then later we are adding the code to create the inboxCore and inboxUI instances and setting them in RnHydraCore for further usage.

### Add private method at the end of file -

```
private func convertInboxUIPayloadToInboxUIConfig(dictionary: NSDictionary, type: InboxUIConfigurationType) -> HydraReactNativeInboxUIConfiguration? {
   let cellBackgroundColor = dictionary["cellBackgroundColor"] as? String
   let cellTitleLabelTextColor = dictionary["cellTitleLabelTextColor"] as? String
   let cellMessageLabelTextColor = dictionary["cellMessageLabelTextColor"] as? String
   let cellTimeLabelTextColor = dictionary["cellTimeLabelTextColor"] as? String
   var titleFont: HydraFontGenerator?
   var messageFont: HydraFontGenerator?
   var timeFont: HydraFontGenerator?


   if let cellTitleLabelFontDict = dictionary["cellTitleLabelFont"] as? [String: Any] {
     titleFont = createFontGenerator(from: cellTitleLabelFontDict)
   }


   if let cellMessageLabelFontDict = dictionary["cellMessageLabelFont"] as? [String: Any] {
     messageFont = createFontGenerator(from: cellMessageLabelFontDict)
   }


   if let cellTimeLabelFontDict = dictionary["cellTimeLabelFont"] as? [String: Any] {
     timeFont = createFontGenerator(from: cellTimeLabelFontDict)
   }


   let cellTitleLabelLineLimit = dictionary["cellTitleLabelLineLimit"] as? Int ?? 2
   let cellMessageLabelLineLimit = dictionary["cellMessageLabelLineLimit"] as? Int ?? 2


   return HydraReactNativeInboxUIConfiguration(
     type: type,
     cellBackgroundColor: cellBackgroundColor,
     cellTitleLabelTextColor: cellTitleLabelTextColor,
     cellMessageLabelTextColor: cellMessageLabelTextColor,
     cellTimeLabelTextColor: cellTimeLabelTextColor,
     cellTitleLabelFont: titleFont,
     cellMessageLabelFont: messageFont,
     cellTimeLabelFont: timeFont,
     cellTitleLabelLineLimit: cellTitleLabelLineLimit,
     cellMessageLabelLineLimit: cellMessageLabelLineLimit
   )
 }


 func createFontGenerator(from dictionary: [String: Any]) -> HydraFont {
   let size = dictionary["size"] as? CGFloat ?? 0.0
   let name = dictionary["name"] as? String ?? ""
   return HydraFont(size: size, name: name)
 }
```

```
private func convertInboxUIPayloadToInboxUIConfig(dictionary: NSDictionary, type: InboxUIConfigurationType) -> HydraReactNativeInboxUIConfiguration? {
   let cellBackgroundColor = dictionary["cellBackgroundColor"] as? String
   let cellTitleLabelTextColor = dictionary["cellTitleLabelTextColor"] as? String
   let cellMessageLabelTextColor = dictionary["cellMessageLabelTextColor"] as? String
   let cellTimeLabelTextColor = dictionary["cellTimeLabelTextColor"] as? String
   var titleFont: HydraFontGenerator?
   var messageFont: HydraFontGenerator?
   var timeFont: HydraFontGenerator?


   if let cellTitleLabelFontDict = dictionary["cellTitleLabelFont"] as? [String: Any] {
     titleFont = createFontGenerator(from: cellTitleLabelFontDict)
   }


   if let cellMessageLabelFontDict = dictionary["cellMessageLabelFont"] as? [String: Any] {
     messageFont = createFontGenerator(from: cellMessageLabelFontDict)
   }


   if let cellTimeLabelFontDict = dictionary["cellTimeLabelFont"] as? [String: Any] {
     timeFont = createFontGenerator(from: cellTimeLabelFontDict)
   }


   let cellTitleLabelLineLimit = dictionary["cellTitleLabelLineLimit"] as? Int ?? 2
   let cellMessageLabelLineLimit = dictionary["cellMessageLabelLineLimit"] as? Int ?? 2


   return HydraReactNativeInboxUIConfiguration(
     type: type,
     cellBackgroundColor: cellBackgroundColor,
     cellTitleLabelTextColor: cellTitleLabelTextColor,
     cellMessageLabelTextColor: cellMessageLabelTextColor,
     cellTimeLabelTextColor: cellTimeLabelTextColor,
     cellTitleLabelFont: titleFont,
     cellMessageLabelFont: messageFont,
     cellTimeLabelFont: timeFont,
     cellTitleLabelLineLimit: cellTitleLabelLineLimit,
     cellMessageLabelLineLimit: cellMessageLabelLineLimit
   )
 }


 func createFontGenerator(from dictionary: [String: Any]) -> HydraFont {
   let size = dictionary["size"] as? CGFloat ?? 0.0
   let name = dictionary["name"] as? String ?? ""
   return HydraFont(size: size, name: name)
 }
```

### Update RnHydraCore methods

We need to set the inbox core and inbox ui instances to the RnHydraCore instance to use it in future. Add following methods to the RnHydraCore -

Add 2 new instance variables to the RnHydraCore object -

```
var inboxCore: InboxCore? = nil
 var inboxUICore: InboxUICore? = nil
```

```
var inboxCore: InboxCore? = nil
 var inboxUICore: InboxUICore? = nil
```

Add methods to set these variables from RnHydraSdk -

```
public func update(inboxCore core: InboxCore) {
   self.inboxCore = core
 }


 public func update(inboxUICore core: InboxUICore) {
   self.inboxUICore = core
 }
```

```
public func update(inboxCore core: InboxCore) {
   self.inboxCore = core
 }


 public func update(inboxUICore core: InboxUICore) {
   self.inboxUICore = core
 }
```

### Click listener

iOS uses the same click listener as the push notification click listener, so if you have set that up, you will get the click event in onNotificationClicked event listener, you are all set. For more information, Check outHanding Notification click eventssection.

# Notification Center APIs

Notification center exposes following APIs for users to use and render the notifications on the app -

| Sr. | API | Description | Package to Use |

| --- | --- | --- | --- |

| 1 | startNotificationCenterActivity | An API to show the notification center UI screen. Use this API if you want to display the built-in UI. This API also provides the option to customize the UI as you need. | Hydra Inbox UI |

| 2 | getInboxMessages | Returns all Notification messages the app has received so far. | Hydra Inbox Core |

| 3 | getUnreadNotificationCount | Returns the unread notifications messages count. | Hydra Inbox Core |

| 4 | trackInboxMessageClick | Updates Hydra SDK that the notification was clicked. | Hydra Inbox Core |

| 5 | deleteInboxMessage | Deletes the selected notification from the list. | Hydra Inbox Core |

| 6 | deleteAllInboxMessages | Deletes all inbox messages from the list. | Hydra Inbox Core |



Before we start using these APIs, we need to set the native bridge module on both Android and iOS to expose its functionality.

## Android

### Native Android bridge API support

Open RnHydramodule.kt and add following methods below Push notifications APIs section

### Native Android bridge APIs

```
/**
    * ********************************************************************************
    *                      Hydra Notification Center APIs
    * ********************************************************************************
    */


   /**
    * Starts the notification center activity
    * This method is used to start the notification center activity from the RN bridge
    * to show the notification center UI.
    */
   @ReactMethod
   fun startNotificationCenterActivity() {
       val inboxActivity = Intent(reactApplicationContext, InboxActivity::class.java)
       inboxActivity.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
       ContextCompat.startActivity(reactApplicationContext, inboxActivity, null)
   }


   /**
    * A method to get the unread notification count over the RN bridge
    * Once SDK gets the notification count, it sends the data back to the JS
    * over the bridge using {@link RnUnReadCountListener}.
    */
   @ReactMethod
   fun getUnreadNotificationCount() {
       HydraInboxCoreApi().getUnReadMessagesCount(reactApplicationContext, RnUnReadCountListener())
   }


   /**
    * A method to track the notification click event over the RN bridge
    */
   @ReactMethod
   fun trackInboxMessageClick(inboxData: ReadableMap) {
       val inbox = readableMapToInboxMessage(inboxData)
       if (inbox != null) {
           HydraInboxCoreApi().trackInboxMessageClick(reactApplicationContext, inbox)
       }
   }


   /**
    * A method to fetch all the notification messages saved in the SDK and pass
    * it over the React Native application over the bridge.
    *
    * Once SDK gets the messages, it sends the data back to the JS over the bridge
    * using {@link RnOnMessagesAvailableListener}.
    */
   @ReactMethod
   fun fetchInboxMessages() {
       HydraInboxCoreApi().fetchInboxMessages(reactApplicationContext, RnOnMessagesAvailableListener())
   }


   /**
    * A method to delete a given inbox notification
    *
    * @returns a promise once the SDK deletes the notification from inbox
    *
    * NOTE: the promise is asynchronously handled considering the notification
    * will be deleted by the time the SDK sends promise over the bridge as
    * RN SDK is not getting a callback when the Native SDK deletes it.
    */
   @ReactMethod
   fun deleteInboxMessage(inboxData: ReadableMap, promise: Promise?) {
       val inbox = readableMapToInboxMessage(inboxData)
       if (inbox !=null) {
           HydraInboxCoreApi().deleteInboxMessage(reactApplicationContext, inbox)
           promise?.resolve(true)
       }
   }


   /**
    * A method to delete all the inbox notifications from the SDK.
    *
    * @returns a promise once the SDK deletes all the notifications from inbox
    *
    * NOTE: the promise is asynchronously handled considering the notification
    * will be deleted by the time the SDK sends promise over the bridge as
    * RN SDK is not getting a callback when the Native SDK deletes it.
    */
   @ReactMethod
   fun deleteAllInboxMessages(promise: Promise?) {
       HydraInboxCoreApi().deleteAllInboxMessages(reactApplicationContext)
       promise?.resolve(true)
   }
```

```
/**
    * ********************************************************************************
    *                      Hydra Notification Center APIs
    * ********************************************************************************
    */


   /**
    * Starts the notification center activity
    * This method is used to start the notification center activity from the RN bridge
    * to show the notification center UI.
    */
   @ReactMethod
   fun startNotificationCenterActivity() {
       val inboxActivity = Intent(reactApplicationContext, InboxActivity::class.java)
       inboxActivity.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
       ContextCompat.startActivity(reactApplicationContext, inboxActivity, null)
   }


   /**
    * A method to get the unread notification count over the RN bridge
    * Once SDK gets the notification count, it sends the data back to the JS
    * over the bridge using {@link RnUnReadCountListener}.
    */
   @ReactMethod
   fun getUnreadNotificationCount() {
       HydraInboxCoreApi().getUnReadMessagesCount(reactApplicationContext, RnUnReadCountListener())
   }


   /**
    * A method to track the notification click event over the RN bridge
    */
   @ReactMethod
   fun trackInboxMessageClick(inboxData: ReadableMap) {
       val inbox = readableMapToInboxMessage(inboxData)
       if (inbox != null) {
           HydraInboxCoreApi().trackInboxMessageClick(reactApplicationContext, inbox)
       }
   }


   /**
    * A method to fetch all the notification messages saved in the SDK and pass
    * it over the React Native application over the bridge.
    *
    * Once SDK gets the messages, it sends the data back to the JS over the bridge
    * using {@link RnOnMessagesAvailableListener}.
    */
   @ReactMethod
   fun fetchInboxMessages() {
       HydraInboxCoreApi().fetchInboxMessages(reactApplicationContext, RnOnMessagesAvailableListener())
   }


   /**
    * A method to delete a given inbox notification
    *
    * @returns a promise once the SDK deletes the notification from inbox
    *
    * NOTE: the promise is asynchronously handled considering the notification
    * will be deleted by the time the SDK sends promise over the bridge as
    * RN SDK is not getting a callback when the Native SDK deletes it.
    */
   @ReactMethod
   fun deleteInboxMessage(inboxData: ReadableMap, promise: Promise?) {
       val inbox = readableMapToInboxMessage(inboxData)
       if (inbox !=null) {
           HydraInboxCoreApi().deleteInboxMessage(reactApplicationContext, inbox)
           promise?.resolve(true)
       }
   }


   /**
    * A method to delete all the inbox notifications from the SDK.
    *
    * @returns a promise once the SDK deletes all the notifications from inbox
    *
    * NOTE: the promise is asynchronously handled considering the notification
    * will be deleted by the time the SDK sends promise over the bridge as
    * RN SDK is not getting a callback when the Native SDK deletes it.
    */
   @ReactMethod
   fun deleteAllInboxMessages(promise: Promise?) {
       HydraInboxCoreApi().deleteAllInboxMessages(reactApplicationContext)
       promise?.resolve(true)
   }
```

### Add Event listeners

As you would have noticed - getUnreadNotificationCount and fetchInboxMessages methods requires us to give the callback listeners so once the data is available, the Android SDK will callback this listener and then the bridge module will pass it back to the React Native App

As you would have noticed - getUnreadNotificationCount and fetchInboxMessages methods requires us to give the callback listeners so once the data is available, the Android SDK will callback this listener and then the bridge module will pass it back to the React Native App

1. Create RnUnReadCountListener

In android/app/src/listener, create a new listener - RnUnReadCountListener.kt and add following code to it -

```
package com.hydra.sdk.example.listener


import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.inbox.core.listener.UnReadCountListener
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnUnReadCountListener: UnReadCountListener {
 override fun onCountAvailable(unReadMessagesCount: Int) {
   Logger.v("onCountAvailable $unReadMessagesCount")
   RnHydra.emitEvent(EventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE.event, unReadMessagesCount)
 }
}
```

```
package com.hydra.sdk.example.listener


import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.inbox.core.listener.UnReadCountListener
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra


class RnUnReadCountListener: UnReadCountListener {
 override fun onCountAvailable(unReadMessagesCount: Int) {
   Logger.v("onCountAvailable $unReadMessagesCount")
   RnHydra.emitEvent(EventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE.event, unReadMessagesCount)
 }
}
```

Keep the package name as of your application’s package name

1. Create RnOnMessagesAvailableListener

In android/app/src/listener, create a new listener - RnOnMessagesAvailableListener.kt and add following code to it -

```
package com.hydra.sdk.example.listener


import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.inbox.core.listener.OnMessagesAvailableListener
import com.capillary.hydra.inbox.core.model.InboxMessage
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableArray
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra
import com.hydrarnsdk.utils.inboxMessageToReadableMap


class RnOnMessagesAvailableListener: OnMessagesAvailableListener {
 override fun onMessagesAvailable(inboxMessages: List<InboxMessage>) {
   Logger.v("onMessagesAvailable, total messages - ${inboxMessages.size}")
   val list : WritableArray = Arguments.createArray()
   inboxMessages.forEach {
     val item = inboxMessageToReadableMap(it)
     list.pushMap(item)
   }
   RnHydra.emitEvent(EventTypes.ON_MESSAGES_AVAILABLE.event, list)
 }
}
```

```
package com.hydra.sdk.example.listener


import com.capillary.hydra.android.sdk.utils.Logger
import com.capillary.hydra.inbox.core.listener.OnMessagesAvailableListener
import com.capillary.hydra.inbox.core.model.InboxMessage
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableArray
import com.hydrarnsdk.classes.EventTypes
import com.hydrarnsdk.classes.RnHydra
import com.hydrarnsdk.utils.inboxMessageToReadableMap


class RnOnMessagesAvailableListener: OnMessagesAvailableListener {
 override fun onMessagesAvailable(inboxMessages: List<InboxMessage>) {
   Logger.v("onMessagesAvailable, total messages - ${inboxMessages.size}")
   val list : WritableArray = Arguments.createArray()
   inboxMessages.forEach {
     val item = inboxMessageToReadableMap(it)
     list.pushMap(item)
   }
   RnHydra.emitEvent(EventTypes.ON_MESSAGES_AVAILABLE.event, list)
 }
}
```

Keep the package name as of your application’s package name

## iOS

For iOS, we need to setup the Native bridge module methods like we did for Android -

### Native iOS bridge APIs interface

Open RnHydraModule.m bridge file and add the following notification center APIs -

```
// Push notification inbox core
RCT_EXTERN_METHOD(startNotificationCenterActivity)


RCT_EXTERN_METHOD(fetchInboxMessages)


RCT_EXTERN_METHOD(getUnreadNotificationCount)


RCT_EXTERN_METHOD(trackInboxMessageClick:)


RCT_EXTERN_METHOD(deleteInboxMessage:)


RCT_EXTERN_METHOD(deleteAllInboxMessages)
```

```
// Push notification inbox core
RCT_EXTERN_METHOD(startNotificationCenterActivity)


RCT_EXTERN_METHOD(fetchInboxMessages)


RCT_EXTERN_METHOD(getUnreadNotificationCount)


RCT_EXTERN_METHOD(trackInboxMessageClick:)


RCT_EXTERN_METHOD(deleteInboxMessage:)


RCT_EXTERN_METHOD(deleteAllInboxMessages)
```

### Native iOS bridge APIs implementation

Now, we need to add its implementation in the RnHydraSdk.swift file. Open the file and copy following APIs in it -

```
// ********************* push notification center inbox apis *********************


 @objc(startNotificationCenterActivity)
 func startNotificationCenterActivity() {
   RnHydraCore.shared.showNotificationController()
 }
  @objc(fetchInboxMessages)
 func getInboxMessages() {
   RnHydraCore.shared.getInboxMessages()
 }
  @objc(getUnreadNotificationCount)
 func getUnreadNotificationCount() {
   RnHydraCore.shared.getUnreadNotificationCount()
 }
  @objc(trackInboxMessageClick:)
 func trackInboxMessageClick(message: [AnyHashable : Any]) {
   RnHydraCore.shared.trackInboxMessageClick(message: message)
 }
  @objc(deleteInboxMessage:)
 func deleteInboxMessage(message: [AnyHashable : Any]) {
   RnHydraCore.shared.deleteInboxMessage(message: message)
 }
  @objc(deleteAllInboxMessages)
 func deleteAllInboxMessages() {
   RnHydraCore.shared.deleteAllInboxMessages()
 }
```

```
// ********************* push notification center inbox apis *********************


 @objc(startNotificationCenterActivity)
 func startNotificationCenterActivity() {
   RnHydraCore.shared.showNotificationController()
 }
  @objc(fetchInboxMessages)
 func getInboxMessages() {
   RnHydraCore.shared.getInboxMessages()
 }
  @objc(getUnreadNotificationCount)
 func getUnreadNotificationCount() {
   RnHydraCore.shared.getUnreadNotificationCount()
 }
  @objc(trackInboxMessageClick:)
 func trackInboxMessageClick(message: [AnyHashable : Any]) {
   RnHydraCore.shared.trackInboxMessageClick(message: message)
 }
  @objc(deleteInboxMessage:)
 func deleteInboxMessage(message: [AnyHashable : Any]) {
   RnHydraCore.shared.deleteInboxMessage(message: message)
 }
  @objc(deleteAllInboxMessages)
 func deleteAllInboxMessages() {
   RnHydraCore.shared.deleteAllInboxMessages()
 }
```

### Update RnHydraCore object

The actual implementation for these methods needs to be added in the RnHydraCore object, add following methods to the instance -

```
public func showNotificationController() {
   if (self.inboxUICore != nil) {
     DispatchQueue.main.async {
       guard let notificationCenter = self.inboxUICore?.getNotificationCenter()
       else { return  }
       print("Showing notification center UI")
       self.navController?.pushViewController(notificationCenter, animated: true)
     }
   }
 }


 public func getInboxMessages() {
   let  notifications  = self.inboxCore?.getNotifications()
   var notificationsJson: [Any] = []
   for notification in notifications! {
     notificationsJson.append(notification.getJSON())
   }
   emitEvent(event: EventTypes.ON_MESSAGES_AVAILABLE.rawValue, data: notificationsJson)
 }
  public func getUnreadNotificationCount() {
   let count = self.inboxCore?.getUnreadNotificationCount()
   emitEvent(event: EventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE.rawValue, data: count ?? 0)
 }


 public func trackInboxMessageClick(message: [AnyHashable : Any]) {
   let payload = HydraNotificationPayload.generate(from: message)
   print("Marking inbox message for scope \(payload.scope) as read.")
   self.inboxCore?.handleNotification(notification: payload, action: .read)
 }
  public func deleteInboxMessage(message: [AnyHashable : Any]) {
   let payload = HydraNotificationPayload.generate(from: message)
   print("Deleting inbox message for scope \(payload.scope).")
   self.inboxCore?.handleNotification(notification: payload, action: .delete)
 }


 public func deleteAllInboxMessages() {
   print("Deleting all inbox messages.")
   self.inboxCore?.handleDeleteAllNotifications()
 }
```

```
public func showNotificationController() {
   if (self.inboxUICore != nil) {
     DispatchQueue.main.async {
       guard let notificationCenter = self.inboxUICore?.getNotificationCenter()
       else { return  }
       print("Showing notification center UI")
       self.navController?.pushViewController(notificationCenter, animated: true)
     }
   }
 }


 public func getInboxMessages() {
   let  notifications  = self.inboxCore?.getNotifications()
   var notificationsJson: [Any] = []
   for notification in notifications! {
     notificationsJson.append(notification.getJSON())
   }
   emitEvent(event: EventTypes.ON_MESSAGES_AVAILABLE.rawValue, data: notificationsJson)
 }
  public func getUnreadNotificationCount() {
   let count = self.inboxCore?.getUnreadNotificationCount()
   emitEvent(event: EventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE.rawValue, data: count ?? 0)
 }


 public func trackInboxMessageClick(message: [AnyHashable : Any]) {
   let payload = HydraNotificationPayload.generate(from: message)
   print("Marking inbox message for scope \(payload.scope) as read.")
   self.inboxCore?.handleNotification(notification: payload, action: .read)
 }
  public func deleteInboxMessage(message: [AnyHashable : Any]) {
   let payload = HydraNotificationPayload.generate(from: message)
   print("Deleting inbox message for scope \(payload.scope).")
   self.inboxCore?.handleNotification(notification: payload, action: .delete)
 }


 public func deleteAllInboxMessages() {
   print("Deleting all inbox messages.")
   self.inboxCore?.handleDeleteAllNotifications()
 }
```

## React Native

### React Native Bridge APIs

Expose these native methods to the React Native by adding the following code in the HydraModule.ts

```
/**
* ********************************************************************************
*                      Hydra Notification Center APIs
* ********************************************************************************
*/
/**
*
* A method to start the notification center activity/component.
* This method opens the notification center on new screen.
*/
export function startNotificationCenterActivity() {
 return RnHydraSdk.startNotificationCenterActivity();
}


/**
* A method to fetch the notification inbox messages from the SDK.
*
* @param callback - A callback function that will be called when the inbox messages are available.
*/
export function getInboxMessages(callback: (event: InboxMessage[]) => void) { 
 addEventListener(RnEventTypes.ON_MESSAGES_AVAILABLE, (event) => {
   callback(event)
   removeEventListener(RnEventTypes.ON_MESSAGES_AVAILABLE);
 });
 RnHydraSdk.fetchInboxMessages();
}


/**
* A method to get the unread notification count from the SDK.
*
* @param callback - A callback function that will be called when the unread notification count is available.
*/
export function getUnreadNotificationCount(callback: (event: number) => void) {
 addEventListener(RnEventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE, (event) => {
   callback(event);
   removeEventListener(RnEventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE);
 });
 RnHydraSdk.getUnreadNotificationCount();
}


/**
* A method to inform SDK the inbox message is read.
*
* @param inboxMessage - The inbox message that was clicked.
*
* @returns A promise that resolves when the inbox message is successfully marked as read.
*/
export function trackInboxMessageClick(inboxMessage: InboxMessage) {
 return RnHydraSdk.trackInboxMessageClick(inboxMessage);
}


/**
* A methof to delete the inbox message from the SDK.
*
* @returns A promise that resolves when the inbox message is successfully deleted.
*/
export function deleteInboxMessage(inboxMessage: InboxMessage) {
 return RnHydraSdk.deleteInboxMessage(inboxMessage);
}


/**
* A method to delete all the inbox messages from the SDK.
*
* @returns A promise that resolves when all the inbox messages are successfully deleted.
*/
export function deleteAllInboxMessages() {
 return RnHydraSdk.deleteAllInboxMessages();
}
```

```
/**
* ********************************************************************************
*                      Hydra Notification Center APIs
* ********************************************************************************
*/
/**
*
* A method to start the notification center activity/component.
* This method opens the notification center on new screen.
*/
export function startNotificationCenterActivity() {
 return RnHydraSdk.startNotificationCenterActivity();
}


/**
* A method to fetch the notification inbox messages from the SDK.
*
* @param callback - A callback function that will be called when the inbox messages are available.
*/
export function getInboxMessages(callback: (event: InboxMessage[]) => void) { 
 addEventListener(RnEventTypes.ON_MESSAGES_AVAILABLE, (event) => {
   callback(event)
   removeEventListener(RnEventTypes.ON_MESSAGES_AVAILABLE);
 });
 RnHydraSdk.fetchInboxMessages();
}


/**
* A method to get the unread notification count from the SDK.
*
* @param callback - A callback function that will be called when the unread notification count is available.
*/
export function getUnreadNotificationCount(callback: (event: number) => void) {
 addEventListener(RnEventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE, (event) => {
   callback(event);
   removeEventListener(RnEventTypes.ON_UNREAD_MESSAGE_COUNT_AVAILABLE);
 });
 RnHydraSdk.getUnreadNotificationCount();
}


/**
* A method to inform SDK the inbox message is read.
*
* @param inboxMessage - The inbox message that was clicked.
*
* @returns A promise that resolves when the inbox message is successfully marked as read.
*/
export function trackInboxMessageClick(inboxMessage: InboxMessage) {
 return RnHydraSdk.trackInboxMessageClick(inboxMessage);
}


/**
* A methof to delete the inbox message from the SDK.
*
* @returns A promise that resolves when the inbox message is successfully deleted.
*/
export function deleteInboxMessage(inboxMessage: InboxMessage) {
 return RnHydraSdk.deleteInboxMessage(inboxMessage);
}


/**
* A method to delete all the inbox messages from the SDK.
*
* @returns A promise that resolves when all the inbox messages are successfully deleted.
*/
export function deleteAllInboxMessages() {
 return RnHydraSdk.deleteAllInboxMessages();
}
```

### Update Types

Add following types to the types.ts file -

```
// Interface for TextContent
interface TextContent {
 title: string;
 message: string;
}


// Interface for MediaContent
interface MediaContent {
 image: string;
}


// Interface for InboxMessage
export interface InboxMessage {
 scope: string,
 accountId: string,
 senderId: string,
 messageId: string,
 gateway: GATEWAY,
 textContent: TextContent,
 action: CTA,
 mediaContent: MediaContent,
 isRead: Boolean,
 createdAt: string,
 payload: JSONObject;
}
```

```
// Interface for TextContent
interface TextContent {
 title: string;
 message: string;
}


// Interface for MediaContent
interface MediaContent {
 image: string;
}


// Interface for InboxMessage
export interface InboxMessage {
 scope: string,
 accountId: string,
 senderId: string,
 messageId: string,
 gateway: GATEWAY,
 textContent: TextContent,
 action: CTA,
 mediaContent: MediaContent,
 isRead: Boolean,
 createdAt: string,
 payload: JSONObject;
}
```

# Using Notification Center APIs

## Update React Native Hydra initialization

Open the init() method in React Native code and add the notificationCenterConfig to the method -

```
init({
       ...
       inAppConfig: {
         defaultImage: "transparent_fallback",
       },
       notificationCenterConfig: {
         defaultImage: "notification_center_fallback",
         notificationCenterOffset: 10,
         useNotificationCenterUI: true, // iOS only
       },
     });
```

```
init({
       ...
       inAppConfig: {
         defaultImage: "transparent_fallback",
       },
       notificationCenterConfig: {
         defaultImage: "notification_center_fallback",
         notificationCenterOffset: 10,
         useNotificationCenterUI: true, // iOS only
       },
     });
```

To use the notification center ui, you need to add the default image to the Android and iOS app folders -

Adding default image to AndroidOpen android/app/res/drawable and add the default fallback image for the notification center.

Adding default image to iOSXCode app and add the default fallback image for the notification center.

Please make sure to keep the name of the image same as mentioned in the notificationCenterConfig above.

If you want to show the built-in notification center ui in iOS, it is important to set theuseNotificationCenterUIto true, if it's not set or set to false, the app won’t show the notification center UI.

1. Get Notifications listThis API is used to get the list of all notifications user has received -

To get the list of notification messages, use following API -

```
getInboxMessages((messages: InboxMessage[]) => {
       console.log(JSON.stringify(messages));
       deleteInboxMessage(messages[0])
     });
```

```
getInboxMessages((messages: InboxMessage[]) => {
       console.log(JSON.stringify(messages));
       deleteInboxMessage(messages[0])
     });
```

1. Get Unread Notifications countTo get the total number of unread notification messages, use the following API -

```
getUnreadNotificationCount((count) => {
       console.log('Unread notification count:', count);
     });
```

```
getUnreadNotificationCount((count) => {
       console.log('Unread notification count:', count);
     });
```

1. Track Notification Click event -When user clicks on a notification, you can call this API to let Hydra SDK know, user clicked on the notification.

`trackInboxMessageClick(messages[0]);`

`trackInboxMessageClick(messages[0]);`

1. Delete selected messageTo delete a specific message, please call the delete Inbox API

`deleteInboxMessage(messages[0])`

`deleteInboxMessage(messages[0])`

1. Delete selected messageTo delete all messages, please call the delete All Inbox API

`deleteAllInboxMessages()`

`deleteAllInboxMessages()`

NOTE:You need to call the getInboxMessages() API every time you either track click or delete the notification.

1. Show Notification Center UITo show the built-in notification center, please make sure the useNotificationCenterUI flag in the notificationCenterConfig is enabled.

Use startNotificationCenterActivity API to show the built-in notification center UI -

```
const onShowNotificationCenter = () => {
   startNotificationCenterActivity();
 }
```

```
const onShowNotificationCenter = () => {
   startNotificationCenterActivity();
 }
```

## Customizing Notification Center Screen

Hydra SDK gives you the way to customize the built-in notifications center screen the way you want to. You can change the background color, title, message, time text color, and more.It works differently in Android vs iOS. In Android though. Here is how you can customize the screen in Android and iOS platforms.

## Android

If you do not customize any items in the notification center UI, then it uses its default settings. But in the above view of notification center, application can customize the following attributes by overriding their corresponding styles

To start customizing the Notification Center UI in Android, you will need to create Styles and Colors file in the Android app - android/app/src/res/values folder, if this folder is not present already, then please add a new package called values in res folder and then create following files

styles.xmlCreate a new file in values package called styles.xml, we will define our themes in this resource file

colors.xmlCreate a new file in the values package called colors.xml, we will define the colors we will use in styles in this resource file.

Fonts.xmlIf you are using custom fonts in your app, you must have already set them for React Native elements, you can also set them for using it in Native views, please follow this article to set the fonts and use them in the styling below -https://developer.android.com/guide/topics/resources/font-resource

Dimens.xmlCreate Toolbar Style

- To customize the title and navigation icon in the toolbar overrideInboxToolbarStyle

```
<style name="HydraInboxToolbarStyle" parent="Theme.AppCompat">
   <item name="android:textColorSecondary">@color/hydra_inbox_toolbar_text_color</item>
   <item name="android:textColorPrimary">@color/hydra_inbox_toolbar_text_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textSize">@dimen/hydra_inbox_toolbar_font_size</item>
   <item name="android:textStyle">bold</item>
   <item name="android:background">@color/hydra_inbox_toolbar_background_color</item>
   <item name="android:navigationIcon">@drawable/ic_menu_black_24dp</item>


</style>
```

```
<style name="HydraInboxToolbarStyle" parent="Theme.AppCompat">
   <item name="android:textColorSecondary">@color/hydra_inbox_toolbar_text_color</item>
   <item name="android:textColorPrimary">@color/hydra_inbox_toolbar_text_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textSize">@dimen/hydra_inbox_toolbar_font_size</item>
   <item name="android:textStyle">bold</item>
   <item name="android:background">@color/hydra_inbox_toolbar_background_color</item>
   <item name="android:navigationIcon">@drawable/ic_menu_black_24dp</item>


</style>
```

- To customize the unread messages count in toolbar override InboxToolbarTextStyle

```
<style name="HydraInboxToolbarTextStyle">
   <item name="android:textColor">@color/hydra_inbox_toolbar_text_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textSize">@dimen/hydra_inbox_toolbar_font_size</item>
   <item name="android:textStyle">bold</item>
</style>
```

```
<style name="HydraInboxToolbarTextStyle">
   <item name="android:textColor">@color/hydra_inbox_toolbar_text_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textSize">@dimen/hydra_inbox_toolbar_font_size</item>
   <item name="android:textStyle">bold</item>
</style>
```

- To customize the CLEAR ALL button in toolbar override InboxToolbarButtonStyle

```
<style name="HydraInboxToolbarButtonStyle">
   <item name="android:textColor">@color/hydra_inbox_toolbar_button_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textSize">@dimen/hydra_inbox_toolbar_button_size</item>
   <item name="android:textStyle">normal</item>
</style>
```

```
<style name="HydraInboxToolbarButtonStyle">
   <item name="android:textColor">@color/hydra_inbox_toolbar_button_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textSize">@dimen/hydra_inbox_toolbar_button_size</item>
   <item name="android:textStyle">normal</item>
</style>
```

### Inbox Messages

Any message displayed in the notification center can be either in theunread state or read state. To create a distinction among the two, SDK provides separate styles for the individual entities as follows

- Inbox message background Color- To change the color of the background of individual messages override the following colorUnread StateXML<color name="hydra_unread_message_background_color">#FFFFFF</color>Read StateXML<color name="hydra_read_message_background_color">#FFFFFF</color>

- Unread State

```
<color name="hydra_unread_message_background_color">#FFFFFF</color>
```

```
<color name="hydra_unread_message_background_color">#FFFFFF</color>
```

- Read State

```
<color name="hydra_read_message_background_color">#FFFFFF</color>
```

```
<color name="hydra_read_message_background_color">#FFFFFF</color>
```

- Title- To change the style of the title override the following styleUnread StateXML<style name="HydraUnReadInboxTitleTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_title_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_title_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
   <item name="android:maxLines">2</item>
</style>Read StateXML<style name="HydraReadInboxTitleTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_title_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_title_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
   <item name="android:maxLines">2</item>
</style>

- Unread State

```
<style name="HydraUnReadInboxTitleTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_title_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_title_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
   <item name="android:maxLines">2</item>
</style>
```

```
<style name="HydraUnReadInboxTitleTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_title_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_title_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
   <item name="android:maxLines">2</item>
</style>
```

- Read State

```
<style name="HydraReadInboxTitleTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_title_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_title_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
   <item name="android:maxLines">2</item>
</style>
```

```
<style name="HydraReadInboxTitleTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_title_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_title_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
   <item name="android:maxLines">2</item>
</style>
```

- Summary- To change the style of the message override the following style.Unread StateXML<style name="HydraUnReadInboxMessageTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_message_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
   <item name="android:maxLines">3</item>
</style>Read StateXML<style name="HydraReadInboxMessageTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_message_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
   <item name="android:maxLines">3</item>
</style>

- Unread State

```
<style name="HydraUnReadInboxMessageTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_message_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
   <item name="android:maxLines">3</item>
</style>
```

```
<style name="HydraUnReadInboxMessageTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_message_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
   <item name="android:maxLines">3</item>
</style>
```

- Read State

```
<style name="HydraReadInboxMessageTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_message_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
   <item name="android:maxLines">3</item>
</style>
```

```
<style name="HydraReadInboxMessageTextStyle">
   <item name="android:textSize">@dimen/hydra_inbox_message_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
   <item name="android:maxLines">3</item>
</style>
```

- TimeStamp- To change the style of the timestamp override the following styleUnread StateXML<style name="HydraUnReadInboxMessageTimeStyle">
   <item name="android:textSize">@dimen/hydra_inbox_time_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_time_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
</style>Read StateXML<style name="HydraReadInboxMessageTimeStyle">
   <item name="android:textSize">@dimen/hydra_inbox_time_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_time_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
</style>

- Unread State

```
<style name="HydraUnReadInboxMessageTimeStyle">
   <item name="android:textSize">@dimen/hydra_inbox_time_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_time_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
</style>
```

```
<style name="HydraUnReadInboxMessageTimeStyle">
   <item name="android:textSize">@dimen/hydra_inbox_time_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_time_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
</style>
```

- Read State

```
<style name="HydraReadInboxMessageTimeStyle">
   <item name="android:textSize">@dimen/hydra_inbox_time_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_time_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
</style>
```

```
<style name="HydraReadInboxMessageTimeStyle">
   <item name="android:textSize">@dimen/hydra_inbox_time_font_size</item>
   <item name="android:textColor">@color/hydra_inbox_time_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">bold</item>
</style>
```

### InboxEmptyBoxTextStyle

To customize the empty text box view when no notifications are available overrideInboxEmptyBoxTextStyle

```
<style name="HydraInboxEmptyBoxTextStyle">
   <item name="android:background">@color/hydra_inbox_transparent_color</item>
   <item name="android:textSize">@dimen/hydra_inbox_empty_box_text_size</item>
   <item name="android:textColor">@color/hydra_inbox_empty_box_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
</style>
```

```
<style name="HydraInboxEmptyBoxTextStyle">
   <item name="android:background">@color/hydra_inbox_transparent_color</item>
   <item name="android:textSize">@dimen/hydra_inbox_empty_box_text_size</item>
   <item name="android:textColor">@color/hydra_inbox_empty_box_message_color</item>
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:textStyle">normal</item>
</style>
```

This is how the default notification UI looks like on Android -

![](https://files.readme.io/c11db49-image.png)

Now, if we set the background color for an unread message in the colors.xml  -

```
<color name="hydra_unread_message_background_color">#AFAFAF</color>
```

```
<color name="hydra_unread_message_background_color">#AFAFAF</color>
```

And rerun the application, the app will have the grey background color to the message row -

![](https://files.readme.io/8f3f7d5-image.png)

## iOS

For iOS platform, you need to set the notification configuration object in the Hydra’s notificationCenterConfiguration object -

### Add Inbox UI configuration type

Open types.ts and add HydraReactNativeInboxUIConfiguration type -

```
// Interface for HydraReactNativeInboxUIConfiguration to be passed to the notification center config
interface HydraReactNativeInboxUIConfiguration {
 cellBackgroundColor?: string;
 cellTitleLabelTextColor?: string;
 cellMessageLabelTextColor?: string;
 cellTimeLabelTextColor?: string;
 cellTitleLabelFont?: HydraFont;
 cellMessageLabelFont?: HydraFont;
 cellTimeLabelFont?: HydraFont;
 cellTitleLabelLineLimit?: number;
 cellMessageLabelLineLimit?: number;
}
```

```
// Interface for HydraReactNativeInboxUIConfiguration to be passed to the notification center config
interface HydraReactNativeInboxUIConfiguration {
 cellBackgroundColor?: string;
 cellTitleLabelTextColor?: string;
 cellMessageLabelTextColor?: string;
 cellTimeLabelTextColor?: string;
 cellTitleLabelFont?: HydraFont;
 cellMessageLabelFont?: HydraFont;
 cellTimeLabelFont?: HydraFont;
 cellTitleLabelLineLimit?: number;
 cellMessageLabelLineLimit?: number;
}
```

Now add inboxUIConfiguration using above type to set the unread and read message configuration, update NotificationCenterConfig class as following -

```
export interface NotificationCenterConfig {
 defaultImage: string;
 notificationCenterOffset: number;
 useNotificationCenterUI: boolean;
 inboxUIConfiguration?: {  // iOS only
   unreadMessageConfig?: HydraReactNativeInboxUIConfiguration;
   readMessageConfig?: HydraReactNativeInboxUIConfiguration;
 };
}
```

```
export interface NotificationCenterConfig {
 defaultImage: string;
 notificationCenterOffset: number;
 useNotificationCenterUI: boolean;
 inboxUIConfiguration?: {  // iOS only
   unreadMessageConfig?: HydraReactNativeInboxUIConfiguration;
   readMessageConfig?: HydraReactNativeInboxUIConfiguration;
 };
}
```

The inboxUIConfiguration is used only for iOS and is optional, if you want to use the default built-in UI, then you can ignore setting this object while initializing the Hydra SDK.

### Update Hydra init method to set notification configuration for iOS UI -

```
init({
       accountId: Platform.OS === "android" ? "buk-23715" : "fki-7723",
       baseURL:
         "https://vo4mrjpidb.execute-api.us-east-1.amazonaws.com/crm-nightly-new/",
       sslPublicKey: "Qfmq8ouVRhwcHdl0piZPcWtYvJmGhoROhmdadoesmlA=",
       country: "India",
       city: "Pune",
       countryCode: "91",
       timezone: "Asia/Kolkata",
       captureViewPortDetails: true,
       isDisableAppLaunchedEvent: false,
       debugLevel: 2,
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
       },
       notificationCenterConfig: {
         defaultImage: "notification_center_fallback",
         notificationCenterOffset: 10,
         useNotificationCenterUI: true,
         inboxUIConfiguration: {
           unreadMessageConfig: {
             cellBackgroundColor: "#fff",
             cellTitleLabelTextColor: "#000",
             cellTimeLabelTextColor: "#B0B0B0",
             cellMessageLabelTextColor: "#A0A0A0",
             cellTitleLabelLineLimit: 3,
             cellMessageLabelLineLimit: 2,
             cellTimeLabelFont: {
               size: 12,
               name: "Helvetica",
             },
             cellTitleLabelFont: {
               size: 16,
               name: "Helvetica-Bold",
             },
             cellMessageLabelFont: {
               size: 14,
               name: "Helvetica",
             },
           },
           readMessageConfig: {
             cellBackgroundColor: "#000",
             cellTitleLabelTextColor: "#fff",
             cellTimeLabelTextColor: "#B0B0B0",
             cellMessageLabelTextColor: "#A0A0A0",
             cellTitleLabelLineLimit: 3,
             cellMessageLabelLineLimit: 2,
             cellTimeLabelFont: {
               size: 12,
               name: "Helvetica",
             },
             cellTitleLabelFont: {
               size: 16,
               name: "Helvetica-Bold",
             },
             cellMessageLabelFont: {
               size: 14,
               name: "Helvetica",
             },
           },
         },
       },
     });
```

```
init({
       accountId: Platform.OS === "android" ? "buk-23715" : "fki-7723",
       baseURL:
         "https://vo4mrjpidb.execute-api.us-east-1.amazonaws.com/crm-nightly-new/",
       sslPublicKey: "Qfmq8ouVRhwcHdl0piZPcWtYvJmGhoROhmdadoesmlA=",
       country: "India",
       city: "Pune",
       countryCode: "91",
       timezone: "Asia/Kolkata",
       captureViewPortDetails: true,
       isDisableAppLaunchedEvent: false,
       debugLevel: 2,
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
       },
       notificationCenterConfig: {
         defaultImage: "notification_center_fallback",
         notificationCenterOffset: 10,
         useNotificationCenterUI: true,
         inboxUIConfiguration: {
           unreadMessageConfig: {
             cellBackgroundColor: "#fff",
             cellTitleLabelTextColor: "#000",
             cellTimeLabelTextColor: "#B0B0B0",
             cellMessageLabelTextColor: "#A0A0A0",
             cellTitleLabelLineLimit: 3,
             cellMessageLabelLineLimit: 2,
             cellTimeLabelFont: {
               size: 12,
               name: "Helvetica",
             },
             cellTitleLabelFont: {
               size: 16,
               name: "Helvetica-Bold",
             },
             cellMessageLabelFont: {
               size: 14,
               name: "Helvetica",
             },
           },
           readMessageConfig: {
             cellBackgroundColor: "#000",
             cellTitleLabelTextColor: "#fff",
             cellTimeLabelTextColor: "#B0B0B0",
             cellMessageLabelTextColor: "#A0A0A0",
             cellTitleLabelLineLimit: 3,
             cellMessageLabelLineLimit: 2,
             cellTimeLabelFont: {
               size: 12,
               name: "Helvetica",
             },
             cellTitleLabelFont: {
               size: 16,
               name: "Helvetica-Bold",
             },
             cellMessageLabelFont: {
               size: 14,
               name: "Helvetica",
             },
           },
         },
       },
     });
```

If you notice, we are setting readMessageConfig and unreadMessageConfig here.

NOTE:All the parameters in this setting are optional and you can set only parameters that you want to customize.
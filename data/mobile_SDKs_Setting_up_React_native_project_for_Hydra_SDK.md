# Setting up React native project for Hydra SDK

To use Capillary Engagement platform on React Native application, you need to set up the React Native Wrapper using the Native Hydra Android and iOS SDKs.

# Requirements

## Android

- Minimum Android SDK version - 21

- Minimum compileSdkVersion - 34

- Supported targetSdkVersion - 34

- Minimum Android Gradle Version - 7.2.2

- Minimum Kotlin version - 1.7.10

## iOS

- Minimum iOS SDK version - 14.3+

# Prerequisites

To start integrating and accessing the Hydra SDK, you need -

1. Capillary Account access with account Id, base url, and sslPublicKey

2. Private Github Hydra Maven package access for Android and iOS

Client team will need to share following information to Hydra team -

1. App bundle id for both Android and iOS (extracted by client app)

2. App signature (extracted by client app)

## Getting App Bundle Ids

Android- Go to android/app/build.gradle file and copy applicationIdiOS- Open XCode, click on Project target -> General settings -> Copy Bundle Id

## Getting App Signature

For Android, Capillary requires App’s signatures for Debug and Release certificates. Here is how you can extract the app signatures -

From terminal-

If you have keytool installed, then you can use following commands -

keytool -list -v -keystore PATH_TO_KEYSTORE -alias VALUE_OF_ALIAS

Copy the SHA256 string from the output:

SHA256: LOOK_FOR_THIS_VALUE

From Android Studio-

gradle -> app -> Tasks -> android -> signingReport

Copy the SHA256 string from the output:

SHA256: LOOK_FOR_THIS_VALUE

# Native Hydra Packages

Hydra SDK supports following packages -

1. Hydra Core - This is the core Hydra package which is used to initialize Hydra SDK and expose behavioral events (signUp, signIn, pushEvents etc)

2. Hydra Push Base - Base Push notification package

3. Hydra Firebase - Hydra Firebase package for push notifications using Firebase

4. Hydra Rich Notification - Package for Rich Notification support in Android

5. Hydra InApp - Hydra package for In App messaging support

6. Hydra Inbox Core - Hydra package for Notification Center Support APIs

7. Hydra Inbox UI  - Hydra package for Notification Center Support with UI

8. Hydra Push Notification Extension (iOS only) - Push notification extension for iOS

# Demo App

We have also create a Sample React native application to demonstrate how to integrate these packages in the React Native application, please contact Capillary support team to get the access

# React Native Android Setup

## Setting up Hydra Gradle private repository URL

Hydra Native SDKs are the private Maven repositories, to access the private repositories in the React Native applications, you need to add the private Maven repository URL and credentials in the afterEvaluate section in the app/build.gradle file.

Open android/app/build.gradle file and add the following code at the end of file -

```
project.afterEvaluate {
   project.repositories.maven { ->
       url = URI.create("https://maven.pkg.github.com/Capillary/hydra-sdk-android-maven")
       credentials { cred ->
           cred.username = System.getenv("MAVEN_USERNAME")
           cred.password = System.getenv("MAVEN_PASSWORD")
       }
   }
}
```

```
project.afterEvaluate {
   project.repositories.maven { ->
       url = URI.create("https://maven.pkg.github.com/Capillary/hydra-sdk-android-maven")
       credentials { cred ->
           cred.username = System.getenv("MAVEN_USERNAME")
           cred.password = System.getenv("MAVEN_PASSWORD")
       }
   }
}
```

You need to add the MAVEN_USERNAME and MAVEN_PASSWORD either in the local environment (from bash) OR setup using the react-native-config environment setup. The other way you can do it is, add a github properties file in the android/app and read the variables from that file.

NOTE: Username is your Github username and the password is the Github PAT.

## Setup Hydra Core SDK

Add dependencies of Hydra SDK along with AndroidX Libraries in the app/build.gradle file.

```
dependencies {
...
   // AndroidX libraries
   implementation("androidx.core:core-ktx:1.13.1")
   implementation("androidx.appcompat:appcompat:1.6.1")
   implementation("androidx.lifecycle:lifecycle-process:2.8.0")


   // Hydra SDKs
   implementation("com.capillary:hydra-core:1.3.1")
...
}
```

```
dependencies {
...
   // AndroidX libraries
   implementation("androidx.core:core-ktx:1.13.1")
   implementation("androidx.appcompat:appcompat:1.6.1")
   implementation("androidx.lifecycle:lifecycle-process:2.8.0")


   // Hydra SDKs
   implementation("com.capillary:hydra-core:1.3.1")
...
}
```

## Setup React Native Android Bridge

As we are using the Native Hydra SDK to use the Capillary’s APIs, we will need to set up the Android bridge and expose the native methods to the React Native application.

### Navigate to Android Project:

Open your React Native project's Android folder using Android Studio or another IDE. This folder is usually located at android/app/src/main/java/com.your.app.name (replace com.your.app.name with your actual app's package name).

### Create a New Class:

Inside this folder, create a new Java or Kotlin class for your native module. For example, if your module is for handling toast messages, name it RnHydraModule.kt

Setup this class as a ReactNativeModule by extending it using ReactContextBaseJavaModule -

```
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule


class RnHydraModule(reactContext: ReactApplicationContext) :
   ReactContextBaseJavaModule(reactContext) {
   override fun getName(): String {
       return NAME
   }


   companion object {
       const val NAME = "HydraRnSdk"
   }
}
```

```
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule


class RnHydraModule(reactContext: ReactApplicationContext) :
   ReactContextBaseJavaModule(reactContext) {
   override fun getName(): String {
       return NAME
   }


   companion object {
       const val NAME = "HydraRnSdk"
   }
}
```

## Register the Module (Java/Kotlin)

In the same directory, create a new class RnHydraPackage.kt and replace it’s contents with following code -

```
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class RnHydraPackage: ReactPackage {
   override fun createNativeModules(reactContext: ReactApplicationContext): List<RnHydraModule> {
       return listOf(RnHydraModule(reactContext))
   }


   override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
       return emptyList()
   }
}
```

```
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class RnHydraPackage: ReactPackage {
   override fun createNativeModules(reactContext: ReactApplicationContext): List<RnHydraModule> {
       return listOf(RnHydraModule(reactContext))
   }


   override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
       return emptyList()
   }
}
```

Now open the MainApplication.kt file, and in getPackages method, add this package as -

```
override fun getPackages(): List<ReactPackage> =
   PackageList(this).packages.apply {
     add(RnHydraPackage())
   }
```

```
override fun getPackages(): List<ReactPackage> =
   PackageList(this).packages.apply {
     add(RnHydraPackage())
   }
```

# React Native iOS Setup

To use the Hydra SDK APIs on iOS, we need to integrate the native iOS packages and expose the native methods over the React Native Bridge.

NOTE:Please make sure to dopod installbefore starting iOS setup

## Setup Native Hydra iOS XCode packages

To add Native iOS packages, add the Hydra iOS package repository -

1. Open the iOS project from ReactNativeProject/iOS/ReactNativeProject.xcworkspace

Open the iOS project from ReactNativeProject/iOS/ReactNativeProject.xcworkspace

2. Click on Project target on top left corner and click on project name under Project section

Click on Project target on top left corner and click on project name under Project section

![](https://files.readme.io/29a7270-image.png)

1. Click on Add button (+) to add new XCode package and search forhttps://github.com/Capillary/hydra-sdk-ios-packages.git

![](https://files.readme.io/f695a00-image.png)

1. Click Add Package and add the required packages to the Project and click Add Package -

![](https://files.readme.io/8bd401e-image.png)

## Setup iOS React Native Bridge module

In XCode, right click on your project name in the left pane and click New File option and select Objective-C file.

![](https://files.readme.io/63d6c9f-image.png)

Create RnHydraModule.m file and in this file enter the following code to setup the Native Module -

```
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RnHydraSdk, NSObject)

@end
```

```
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RnHydraSdk, NSObject)

@end
```

Make sure your RnHydraModule.m is added to the App’s target by checking it from right pane -

![](https://files.readme.io/a806ea2-image.png)

Create another swift file - RnHydraSdk.swift to add the implementation for the Native methods we will be exposing on React Native Bridge -When you add this file,XCode may prompt you to add a bridging header, please add it.

```
@objc(RnHydraSdk)
class RnHydraSdk: NSObject {
  
}
```

```
@objc(RnHydraSdk)
class RnHydraSdk: NSObject {
  
}
```

NOTE:Please make sure to create the swift file with the same as you created your Native Bridge with, in our case we named RnHydraSdk.

# Hydra Core

## Setup Native Android Hydra Core methods

### Add Native Hydra Core methods

Open RnHydraModule file and add following methods for accessing the Hydra Core APIs

```
import com.capillary.hydra.android.sdk.FcmConfig
import com.capillary.hydra.android.sdk.HydraAPI
import com.capillary.hydra.android.sdk.HydraConfig
import com.capillary.hydra.android.sdk.UserPreferences
import com.capillary.hydra.android.sdk.utils.Logger
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.hydrarnsdk.utils.convertReadableMapToMap


class RnHydraModule(reactContext: ReactApplicationContext) :
   ReactContextBaseJavaModule(reactContext) {
   override fun getName(): String {
       return NAME
   }


   companion object {
       const val NAME = "RnHydraSdk"
       const val INSTANCE_NOT_FOUND = "Cannot find Capillary instance, please instantiate your SDK"
   }


   private var hydraAPI: HydraAPI? = null


   /**
    * ********************************************************************************
    *                          Hydra Core APIs
    * ********************************************************************************
    */


   /**
    * Initializes the SDK with the provided configuration
    */
   @ReactMethod
   fun initSdk(rnConfig: ReadableMap, promise: Promise?) {
       val accountId = rnConfig.getString("accountId")
       if (accountId == null) {
           promise?.reject(Throwable("Account Id cannot be null"))
           return
       }


       val baseUrl: String? = rnConfig.getString("baseURL")
       val sslPublicKey: String? = rnConfig.getString("sslPublicKey")
       val country = rnConfig.getString("country")
       val countryCode = rnConfig.getString("countryCode")
       val city = rnConfig.getString("city")
       val captureViewPortDetails: Boolean = rnConfig.getBoolean("captureViewPortDetails")
       val isDisableAppLaunchedEvent: Boolean = rnConfig.getBoolean("captureViewPortDetails")
       val debugLevel = rnConfig.getInt("debugLevel")
       val isFCMRegistrationEnabled =
           rnConfig.getMap("fcmConfig")?.getBoolean("isFCMRegistrationEnabled") == true


       val fcmConfig = FcmConfig(isFCMRegistrationEnabled)


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
           null,
           null,
           null,
           isDisableAppLaunchedEvent,
           debugLevel
       ).build()


       Logger.i("Hydra Capillary SDK initialized successfully!")
       promise?.resolve(true)
   }


   /**
    * Pushes the user sign up event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    *
    */
   @ReactMethod
   fun pushUserSignUp(
       cuId: String,
       firstName: String,
       lastName: String,
       email: String,
       phone: String,
       customData: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignup(cuId, firstName, lastName, email, phone,
           customData?.let { convertReadableMapToMap(it) })
       Logger.i("User signed up successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user sign in event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   
@ReactMethod
   fun pushUserSignIn(
       cuId: String,
       firstName: String? = null,
       lastName: String? = null,
       email: String? = null,
       phone: String? = null,
       customData: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignin(cuId, firstName, lastName, email, phone,
           customData?.let { convertReadableMapToMap(it) })
       Logger.i("User signed up successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user update event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   @ReactMethod
   fun pushUserUpdate(
       cuId: String,
       firstName: String? = null,
       lastName: String? = null,
       email: String? = null,
       phone: String? = null,
       customData: ReadableMap? = null,
       subscriptions: ReadableArray? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserUpdate(
           cuId,
           firstName,
           lastName,
           email,
           phone,
           customData?.let { convertReadableMapToMap(it) },
           subscriptions?.let { subscriptions.toArrayList() }
       )
       Logger.i("User data updated successfully!")
       promise?.resolve(result != null)
   }

   /**
    * Pushes the user sign out event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   @ReactMethod
   fun pushUserSignOut(
       cuId: String,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignOut(cuId)
       Logger.i("User signed out successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user delete event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param userPreference The user preferences to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    */
   @ReactMethod
   fun passUserPreferences(cuId: String, userPreference: ReadableMap, promise: Promise?) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))


       val promPushOpted = userPreference.getBoolean("promPushOpted")
       val transPushOpted = userPreference.getBoolean("transPushOpted")
       val result = hydraAPI?.passUserPreferences(cuId, UserPreferences(promPushOpted, transPushOpted))
       Logger.i("User preferences data updated successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user events to the SDK
    *
    * @param eventName The event name to be pushed
    * @param attributes The attributes to be sent along with the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    *
    * @example
    * pushEvent("eventName", { "key": "value" })
    *
    */
   @ReactMethod
   fun pushEvent(
       eventName: String,
       attributes: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushEvent(eventName, attributes?.let { convertReadableMapToMap(it) })
       Logger.i("Push Event sent successfully!")
       promise?.resolve(result != null)
   }
}
```

```
import com.capillary.hydra.android.sdk.FcmConfig
import com.capillary.hydra.android.sdk.HydraAPI
import com.capillary.hydra.android.sdk.HydraConfig
import com.capillary.hydra.android.sdk.UserPreferences
import com.capillary.hydra.android.sdk.utils.Logger
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.hydrarnsdk.utils.convertReadableMapToMap


class RnHydraModule(reactContext: ReactApplicationContext) :
   ReactContextBaseJavaModule(reactContext) {
   override fun getName(): String {
       return NAME
   }


   companion object {
       const val NAME = "RnHydraSdk"
       const val INSTANCE_NOT_FOUND = "Cannot find Capillary instance, please instantiate your SDK"
   }


   private var hydraAPI: HydraAPI? = null


   /**
    * ********************************************************************************
    *                          Hydra Core APIs
    * ********************************************************************************
    */


   /**
    * Initializes the SDK with the provided configuration
    */
   @ReactMethod
   fun initSdk(rnConfig: ReadableMap, promise: Promise?) {
       val accountId = rnConfig.getString("accountId")
       if (accountId == null) {
           promise?.reject(Throwable("Account Id cannot be null"))
           return
       }


       val baseUrl: String? = rnConfig.getString("baseURL")
       val sslPublicKey: String? = rnConfig.getString("sslPublicKey")
       val country = rnConfig.getString("country")
       val countryCode = rnConfig.getString("countryCode")
       val city = rnConfig.getString("city")
       val captureViewPortDetails: Boolean = rnConfig.getBoolean("captureViewPortDetails")
       val isDisableAppLaunchedEvent: Boolean = rnConfig.getBoolean("captureViewPortDetails")
       val debugLevel = rnConfig.getInt("debugLevel")
       val isFCMRegistrationEnabled =
           rnConfig.getMap("fcmConfig")?.getBoolean("isFCMRegistrationEnabled") == true


       val fcmConfig = FcmConfig(isFCMRegistrationEnabled)


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
           null,
           null,
           null,
           isDisableAppLaunchedEvent,
           debugLevel
       ).build()


       Logger.i("Hydra Capillary SDK initialized successfully!")
       promise?.resolve(true)
   }


   /**
    * Pushes the user sign up event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    *
    */
   @ReactMethod
   fun pushUserSignUp(
       cuId: String,
       firstName: String,
       lastName: String,
       email: String,
       phone: String,
       customData: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignup(cuId, firstName, lastName, email, phone,
           customData?.let { convertReadableMapToMap(it) })
       Logger.i("User signed up successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user sign in event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   
@ReactMethod
   fun pushUserSignIn(
       cuId: String,
       firstName: String? = null,
       lastName: String? = null,
       email: String? = null,
       phone: String? = null,
       customData: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignin(cuId, firstName, lastName, email, phone,
           customData?.let { convertReadableMapToMap(it) })
       Logger.i("User signed up successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user update event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param firstName The first name of the user
    * @param lastName The last name of the user
    * @param email The email of the user
    * @param phone The phone number of the user
    * @param customData The custom data to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   @ReactMethod
   fun pushUserUpdate(
       cuId: String,
       firstName: String? = null,
       lastName: String? = null,
       email: String? = null,
       phone: String? = null,
       customData: ReadableMap? = null,
       subscriptions: ReadableArray? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserUpdate(
           cuId,
           firstName,
           lastName,
           email,
           phone,
           customData?.let { convertReadableMapToMap(it) },
           subscriptions?.let { subscriptions.toArrayList() }
       )
       Logger.i("User data updated successfully!")
       promise?.resolve(result != null)
   }

   /**
    * Pushes the user sign out event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param promise The promise to resolve or reject the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    */
   @ReactMethod
   fun pushUserSignOut(
       cuId: String,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushUserSignOut(cuId)
       Logger.i("User signed out successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user delete event to the SDK
    *
    * @param cuId The customer unique identifier
    * @param userPreference The user preferences to be sent along with the event
    * @param promise The promise to resolve or reject the event
    *
    */
   @ReactMethod
   fun passUserPreferences(cuId: String, userPreference: ReadableMap, promise: Promise?) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))


       val promPushOpted = userPreference.getBoolean("promPushOpted")
       val transPushOpted = userPreference.getBoolean("transPushOpted")
       val result = hydraAPI?.passUserPreferences(cuId, UserPreferences(promPushOpted, transPushOpted))
       Logger.i("User preferences data updated successfully!")
       promise?.resolve(result != null)
   }


   /**
    * Pushes the user events to the SDK
    *
    * @param eventName The event name to be pushed
    * @param attributes The attributes to be sent along with the event
    *
    * @return The promise to resolve or reject the event
    *
    * @throws Throwable If the instance is not found
    *
    * @example
    * pushEvent("eventName", { "key": "value" })
    *
    */
   @ReactMethod
   fun pushEvent(
       eventName: String,
       attributes: ReadableMap? = null,
       promise: Promise?
   ) {
       if (hydraAPI == null) promise?.reject(Throwable(INSTANCE_NOT_FOUND))
       val result = hydraAPI?.pushEvent(eventName, attributes?.let { convertReadableMapToMap(it) })
       Logger.i("Push Event sent successfully!")
       promise?.resolve(result != null)
   }
}
```

### Add a utils class

Create a new folder called utils/utils.kt and add the following code in it -

```
package com.hydrarnsdk.utils


import android.os.Bundle
import com.capillary.hydra.inbox.core.model.Action
import com.capillary.hydra.inbox.core.model.CTATYPE
import com.capillary.hydra.inbox.core.model.GATEWAY
import com.capillary.hydra.inbox.core.model.InboxMessage
import com.capillary.hydra.inbox.core.model.MediaContent
import com.capillary.hydra.inbox.core.model.TextContent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableType
import com.facebook.react.bridge.WritableMap
import org.json.JSONObject




// Recursive function to convert ReadableMap to Map
fun convertReadableMapToMap(readableMap: ReadableMap): Map<String, Any> {
   val immutableMap = mutableMapOf<String, Any>()
   val iterator = readableMap.keySetIterator()
   while (iterator.hasNextKey()) {
       val key = iterator.nextKey()
       when (readableMap.getType(key)) {
           ReadableType.Boolean -> immutableMap[key] = readableMap.getBoolean(key)
           ReadableType.Number -> immutableMap[key] = readableMap.getDouble(key)
           ReadableType.String -> immutableMap[key] = readableMap.getString(key) as String
           ReadableType.Map -> immutableMap[key] =
               convertReadableMapToMap(readableMap.getMap(key)!!)


           ReadableType.Array -> {
               readableMap.getArray(key)?.let { convertReadableArrayToArray(it) }
           }


           else -> { /* Handle other types if needed */
           }
       }
   }
   return immutableMap
}


fun convertReadableArrayToArray(readableArray: ReadableArray): List<Any> {
   val immutableList = mutableListOf<Any>()
   for (i in 0 until readableArray.size()) {
       when (readableArray.getType(i)) {
           ReadableType.Boolean -> immutableList.add(readableArray.getBoolean(i))
           ReadableType.Number -> immutableList.add(readableArray.getDouble(i))
           ReadableType.String -> immutableList.add(readableArray.getString(i))
           ReadableType.Map -> immutableList.add(convertReadableMapToMap(readableArray.getMap(i)))
           ReadableType.Array -> immutableList.add(
               convertReadableArrayToArray(
                   readableArray.getArray(
                       i
                   )
               )
           )


           else -> { /* Handle other types if needed */
           }
       }
   }
   return immutableList
}


fun convertBundleToReadableMap(bundle: Bundle): WritableMap {
   return Arguments.fromBundle(bundle)
}


fun readableMapToInboxMessage(map: ReadableMap): InboxMessage? {
   val scope = map.getString("scope") ?: return null
   val accountId = map.getString("accountId") ?: return null
   val senderId = map.getString("senderId") ?: return null
   val messageId = map.getString("messageId") ?: return null


   val gatewayString = map.getString("gateway")
   val gateway = GATEWAY.valueOf(gatewayString ?: return null)


   val textContentMessage = map.getMap("textContent")?.getString("message")
   val textContentTitle = map.getMap("textContent")?.getString("title")
   val textContent = TextContent(textContentTitle!!, textContentMessage!!)


   var actionObj: Action? = null
   map.getMap("action")?.let {
       val action = it.getString("action")
       val actionText = it.getString("actionText")
       val actionType: CTATYPE = enumValueOf<CTATYPE>(it.getString("type").toString())
       actionObj = Action(actionText!!, actionType, action)
   }


   val mediaImage = map.getMap("mediaContent")?.getString("image")
   val mediaContent = MediaContent(mediaImage!!)


   val isRead = map.getBoolean("isRead")
   val createdAt = map.getString("createdAt") ?: return null
   val payload = map.getString("payload")?.let { JSONObject(it) } ?: JSONObject()


   return InboxMessage(
       scope,
       accountId,
       senderId,
       messageId,
       gateway,
       textContent,
       actionObj,
       mediaContent,
       isRead,
       createdAt,
       payload
   )
}


fun inboxMessageToReadableMap(message: InboxMessage): ReadableMap {
   val mutableMap = mutableMapOf<String, Any>()
   mutableMap["scope"] = message.scope
   mutableMap["accountId"] = message.accountId
   mutableMap["senderId"] = message.senderId
   mutableMap["messageId"] = message.messageId
   mutableMap["gateway"] = message.gateway.name


   val textContentMap = mutableMapOf<String, Any>()
   textContentMap["title"] = message.textContent.title
   textContentMap["message"] = message.textContent.message
   mutableMap["textContent"] = textContentMap


   message.action?.let {
       val actionMap = mutableMapOf<String, Any>()
       actionMap["actionText"] = it.actionText as String
       actionMap["type"] = it.type.name
       actionMap["action"] = it.action as String
       mutableMap["action"] = actionMap
   }


   message.mediaContent?.let {
       val mediaContentMap = mutableMapOf<String, Any>()
       mediaContentMap["image"] = it.image
       mutableMap["mediaContent"] = mediaContentMap
   }


   mutableMap["isRead"] = message.isRead
   mutableMap["createdAt"] = message.createdAt
   mutableMap["payload"] = message.payload.toString()


   return Arguments.makeNativeMap(mutableMap)
```

```
package com.hydrarnsdk.utils


import android.os.Bundle
import com.capillary.hydra.inbox.core.model.Action
import com.capillary.hydra.inbox.core.model.CTATYPE
import com.capillary.hydra.inbox.core.model.GATEWAY
import com.capillary.hydra.inbox.core.model.InboxMessage
import com.capillary.hydra.inbox.core.model.MediaContent
import com.capillary.hydra.inbox.core.model.TextContent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableType
import com.facebook.react.bridge.WritableMap
import org.json.JSONObject




// Recursive function to convert ReadableMap to Map
fun convertReadableMapToMap(readableMap: ReadableMap): Map<String, Any> {
   val immutableMap = mutableMapOf<String, Any>()
   val iterator = readableMap.keySetIterator()
   while (iterator.hasNextKey()) {
       val key = iterator.nextKey()
       when (readableMap.getType(key)) {
           ReadableType.Boolean -> immutableMap[key] = readableMap.getBoolean(key)
           ReadableType.Number -> immutableMap[key] = readableMap.getDouble(key)
           ReadableType.String -> immutableMap[key] = readableMap.getString(key) as String
           ReadableType.Map -> immutableMap[key] =
               convertReadableMapToMap(readableMap.getMap(key)!!)


           ReadableType.Array -> {
               readableMap.getArray(key)?.let { convertReadableArrayToArray(it) }
           }


           else -> { /* Handle other types if needed */
           }
       }
   }
   return immutableMap
}


fun convertReadableArrayToArray(readableArray: ReadableArray): List<Any> {
   val immutableList = mutableListOf<Any>()
   for (i in 0 until readableArray.size()) {
       when (readableArray.getType(i)) {
           ReadableType.Boolean -> immutableList.add(readableArray.getBoolean(i))
           ReadableType.Number -> immutableList.add(readableArray.getDouble(i))
           ReadableType.String -> immutableList.add(readableArray.getString(i))
           ReadableType.Map -> immutableList.add(convertReadableMapToMap(readableArray.getMap(i)))
           ReadableType.Array -> immutableList.add(
               convertReadableArrayToArray(
                   readableArray.getArray(
                       i
                   )
               )
           )


           else -> { /* Handle other types if needed */
           }
       }
   }
   return immutableList
}


fun convertBundleToReadableMap(bundle: Bundle): WritableMap {
   return Arguments.fromBundle(bundle)
}


fun readableMapToInboxMessage(map: ReadableMap): InboxMessage? {
   val scope = map.getString("scope") ?: return null
   val accountId = map.getString("accountId") ?: return null
   val senderId = map.getString("senderId") ?: return null
   val messageId = map.getString("messageId") ?: return null


   val gatewayString = map.getString("gateway")
   val gateway = GATEWAY.valueOf(gatewayString ?: return null)


   val textContentMessage = map.getMap("textContent")?.getString("message")
   val textContentTitle = map.getMap("textContent")?.getString("title")
   val textContent = TextContent(textContentTitle!!, textContentMessage!!)


   var actionObj: Action? = null
   map.getMap("action")?.let {
       val action = it.getString("action")
       val actionText = it.getString("actionText")
       val actionType: CTATYPE = enumValueOf<CTATYPE>(it.getString("type").toString())
       actionObj = Action(actionText!!, actionType, action)
   }


   val mediaImage = map.getMap("mediaContent")?.getString("image")
   val mediaContent = MediaContent(mediaImage!!)


   val isRead = map.getBoolean("isRead")
   val createdAt = map.getString("createdAt") ?: return null
   val payload = map.getString("payload")?.let { JSONObject(it) } ?: JSONObject()


   return InboxMessage(
       scope,
       accountId,
       senderId,
       messageId,
       gateway,
       textContent,
       actionObj,
       mediaContent,
       isRead,
       createdAt,
       payload
   )
}


fun inboxMessageToReadableMap(message: InboxMessage): ReadableMap {
   val mutableMap = mutableMapOf<String, Any>()
   mutableMap["scope"] = message.scope
   mutableMap["accountId"] = message.accountId
   mutableMap["senderId"] = message.senderId
   mutableMap["messageId"] = message.messageId
   mutableMap["gateway"] = message.gateway.name


   val textContentMap = mutableMapOf<String, Any>()
   textContentMap["title"] = message.textContent.title
   textContentMap["message"] = message.textContent.message
   mutableMap["textContent"] = textContentMap


   message.action?.let {
       val actionMap = mutableMapOf<String, Any>()
       actionMap["actionText"] = it.actionText as String
       actionMap["type"] = it.type.name
       actionMap["action"] = it.action as String
       mutableMap["action"] = actionMap
   }


   message.mediaContent?.let {
       val mediaContentMap = mutableMapOf<String, Any>()
       mediaContentMap["image"] = it.image
       mutableMap["mediaContent"] = mediaContentMap
   }


   mutableMap["isRead"] = message.isRead
   mutableMap["createdAt"] = message.createdAt
   mutableMap["payload"] = message.payload.toString()


   return Arguments.makeNativeMap(mutableMap)
```

## Setup Native iOS Hydra Core methods

Open RnHydraModule.m and add following methods in the file -

### iOS Bridge methods

```
#import <React/RCTBridgeModule.h>


@interface RCT_EXTERN_MODULE(RnHydraSdk, NSObject)


RCT_EXTERN_METHOD(initSdk:(NSDictionary)config
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignUp:(NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignIn:(NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignOut:(NSString *)cuId
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserUpdate: (NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withSubscriptions: (NSArray)subscriptions
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushEvent:(NSString *)eventName
                 withEventAttributes:(NSDictionary)eventAttributes
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(passUserPreferences: (NSDictionary)userPreferences
                 withResolver: (RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(updateCustomerId:(NSString *)custId
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
@end
```

```
#import <React/RCTBridgeModule.h>


@interface RCT_EXTERN_MODULE(RnHydraSdk, NSObject)


RCT_EXTERN_METHOD(initSdk:(NSDictionary)config
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignUp:(NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignIn:(NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserSignOut:(NSString *)cuId
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushUserUpdate: (NSString *)username
                 withFirstName: (NSString *)firstname
                 withLastName: (NSString *)lastname
                 withEmail: (NSString *)email
                 withPhone: (NSString *) phone
                 withCustomData: (NSDictionary)customData
                 withSubscriptions: (NSArray)subscriptions
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(pushEvent:(NSString *)eventName
                 withEventAttributes:(NSDictionary)eventAttributes
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(passUserPreferences: (NSDictionary)userPreferences
                 withResolver: (RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(updateCustomerId:(NSString *)custId
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
@end
```

### iOS Bridge Method implementation

Now, open HydraRnSdk.swift file and add the following methods to implement the above methods we defined -

```
import HydraCore
import HydraPushNotification
import HydraInAppMessage


@objc(RnHydraSdk)
class RnHydraSdk: NSObject {
  static var hydra: Hydra? = nil


 public static func getHydraInstance() -> Hydra? {
   if (hydra != nil) {
     return hydra
   }
  
   return nil
 }
  @objc(initSdk:withResolver:withRejecter:)
 func initSdk(config: NSDictionary,
              resolve:RCTPromiseResolveBlock?,
              reject:RCTPromiseRejectBlock?) -> Void {
   let accountId: String = (config.value(forKey: "accountId") as? String) ?? ""
   let customerId: String = (config.value(forKey: "customerId") as? String) ?? ""
   let baseUrl: String = (config.value(forKey: "baseURL") as? String) ?? ""
   let sslPublicKey: String = (config.value(forKey: "sslPublicKey") as? String) ?? ""
   let country: String = (config.value(forKey: "country") as? String) ?? ""
   let city: String = (config.value(forKey: "city") as? String) ?? ""
   let countryCode: String = (config.value(forKey: "countryCode") as? String) ?? ""
   let timezone: String = (config.value(forKey: "timezone") as? String) ?? ""
   let debugLevel: Int = (config.value(forKey: "debugLevel") as? Int) ?? 0
  
   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, [0,5,10,30,120]))
     let geoData: GeoData = GeoData(country: country, countryCode: countryCode, city: city, timeZone: timezone)


     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(
       withConfiguration: config,
       geoData: geoData
     )


     // setting log level
     RnHydraSdk.hydra!.updateLogLevel(level: getSdkLogLevel(debugLevel: debugLevel))
     resolve?("HydraCore SDK initialized successully!")
     print("HydraCore SDK initialized successully!")
   } catch {
     print("Error initializing SDK")
     reject?("ERROR", "Error initializing SDK", error)
   }
 }
  @objc(pushUserSignUp:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserSignUp(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: [String: Any],
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
     RnHydraSdk.hydra!.reportUserSignUP(data: userInfo, customData: customData)
     resolve?("User sign up successfully!")
     print("pushUserSignIn::User sign up successfully!")
   } else {
     reject?("SIGNUP_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushUserSignUp::Error while signing up user")
   }
 }
  @objc(pushUserSignIn:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserSignIn(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: [String: Any],
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
  
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
     RnHydraSdk.hydra!.reportUserSignIn(data: userInfo, customData: customData)
     resolve?("User sign in successfully!")
     print("pushUserSignIn::User sign in successfully!")
   } else {
     reject?("SIGNIN_ERROR", "Error while signing in user", getHydraNotFoundError())
     print("pushUserSignIn::Error while signing in user")
   }
 }
  @objc(pushUserSignOut:withResolver:withRejecter:)
 func pushUserSignOut(cuId: String,
                      resolve:RCTPromiseResolveBlock?,
                      reject:RCTPromiseRejectBlock?) {
   if(RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra!.reportUserSignOut(customData: ["customerId": cuId])
     resolve?("User sign in successfully!")
     print("pushUserSignOut::User sign out successfully!")
   } else {
     let error = NSError(domain: "com.reactnative.ccapillary", code: 400, userInfo: [NSLocalizedDescriptionKey: "Cannot find instance of HydraCore"])
     reject?("SIGNOUT_ERROR", "Error while signing out user", error)
     print("pushUserSignOut::Error while signing in user")
   }
 }
  @objc(pushUserUpdate:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserUpdate(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: [String: Any],
                     subscriptions: [Any]?,
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
    RnHydraSdk.hydra!.reportUserProfileUpdate(data: userInfo, customData: customData, subscriptions: subscriptions)


     resolve?("User data updated successfully!")
     print("pushUserUpdate::User sign up successfully!")
   } else {
     reject?("SIGNUP_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushUserUpdate::Error while signing up user")
   }
 }
  @objc(pushEvent:withEventAttributes:withResolver:withRejecter:)
 func pushEvent(eventName: String,
                eventAttribues: Attributes,
                resolve:RCTPromiseResolveBlock?,
                reject:RCTPromiseRejectBlock?) -> Void {
   if (RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra?.reportUserEvent(name: eventName, customAttributes: eventAttribues)
     resolve?("Push Event sent successfully!")
     print("pushEvent::User sign up successfully!")
   } else {
     reject?("PUSH_EVENT_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushEvent::Error while sending push event")
   }
 }


 @objc(passUserPreferences:withResolver:withRejecter:)
 func passUserPreferences(
   userPreferences: [String: Bool],
   resolve:RCTPromiseResolveBlock?,
   reject:RCTPromiseRejectBlock?
 ) {
   if(RnHydraSdk.hydra != nil) {
     let promPushOpted = userPreferences["promPushOpted"] ?? false
     let transPushOpted = userPreferences["transPushOpted"] ?? false
     RnHydraSdk.hydra?.updateUserNotificationSettingsFor(promoPushOpted: promPushOpted, transPushOpted: transPushOpted)
     RnHydraSdk.hydra!.reportUserPreferencesUpdate()
     resolve?("Push Event sent successfully!")
     print("passUserPreferences::User sign up successfully!")
   } else {
     reject?("PASS_PREFERENCES_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("passUserPreferences::Error while sending push event")
   }
 }


  @objc(updateCustomerId:withResolver:withRejecter:)
 func updateCustomerId(custId: String,
                       resolve:RCTPromiseResolveBlock?,
                       reject:RCTPromiseRejectBlock?) -> Void {
   if (RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra!.update(customerID: custId)
     resolve?(true)
     print("passUserPreferences::User sign up successfully!")
   } else {
     reject?("ERROR", "Error while updating customer id", getHydraNotFoundError())
   }
 }
 // ******************************* private methods *******************************
 private func getHydraNotFoundError() -> NSError {
   return NSError(domain: "com.reactnative.ccapillary",
                  code: 400,
                  userInfo: [NSLocalizedDescriptionKey: "Cannot find instance of HydraCore"]
   )
 }
  private func getSdkLogLevel(debugLevel: Int) -> LogLevel {
   switch(debugLevel) {
   case 0:
     return LogLevel.verbose;
   case 1:
     return LogLevel.debug;
   case 2:
     return LogLevel.info;
   case 3:
     return LogLevel.error;
   case 4:
     return LogLevel.critical;
   default:
     return LogLevel.verbose;
   }
 }
}
```

```
import HydraCore
import HydraPushNotification
import HydraInAppMessage


@objc(RnHydraSdk)
class RnHydraSdk: NSObject {
  static var hydra: Hydra? = nil


 public static func getHydraInstance() -> Hydra? {
   if (hydra != nil) {
     return hydra
   }
  
   return nil
 }
  @objc(initSdk:withResolver:withRejecter:)
 func initSdk(config: NSDictionary,
              resolve:RCTPromiseResolveBlock?,
              reject:RCTPromiseRejectBlock?) -> Void {
   let accountId: String = (config.value(forKey: "accountId") as? String) ?? ""
   let customerId: String = (config.value(forKey: "customerId") as? String) ?? ""
   let baseUrl: String = (config.value(forKey: "baseURL") as? String) ?? ""
   let sslPublicKey: String = (config.value(forKey: "sslPublicKey") as? String) ?? ""
   let country: String = (config.value(forKey: "country") as? String) ?? ""
   let city: String = (config.value(forKey: "city") as? String) ?? ""
   let countryCode: String = (config.value(forKey: "countryCode") as? String) ?? ""
   let timezone: String = (config.value(forKey: "timezone") as? String) ?? ""
   let debugLevel: Int = (config.value(forKey: "debugLevel") as? Int) ?? 0
  
   do {
     let config: HydraConfiguration = try HydraConfiguration(
       accountID: accountId,
       customerId: customerId,
       server:  .genericServer(baseUrl, sslPublicKey, [0,5,10,30,120]))
     let geoData: GeoData = GeoData(country: country, countryCode: countryCode, city: city, timeZone: timezone)


     RnHydraSdk.hydra = RnHydraCore.shared.generateInstance(
       withConfiguration: config,
       geoData: geoData
     )


     // setting log level
     RnHydraSdk.hydra!.updateLogLevel(level: getSdkLogLevel(debugLevel: debugLevel))
     resolve?("HydraCore SDK initialized successully!")
     print("HydraCore SDK initialized successully!")
   } catch {
     print("Error initializing SDK")
     reject?("ERROR", "Error initializing SDK", error)
   }
 }
  @objc(pushUserSignUp:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserSignUp(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: [String: Any],
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
     RnHydraSdk.hydra!.reportUserSignUP(data: userInfo, customData: customData)
     resolve?("User sign up successfully!")
     print("pushUserSignIn::User sign up successfully!")
   } else {
     reject?("SIGNUP_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushUserSignUp::Error while signing up user")
   }
 }
  @objc(pushUserSignIn:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserSignIn(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: [String: Any],
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
  
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
     RnHydraSdk.hydra!.reportUserSignIn(data: userInfo, customData: customData)
     resolve?("User sign in successfully!")
     print("pushUserSignIn::User sign in successfully!")
   } else {
     reject?("SIGNIN_ERROR", "Error while signing in user", getHydraNotFoundError())
     print("pushUserSignIn::Error while signing in user")
   }
 }
  @objc(pushUserSignOut:withResolver:withRejecter:)
 func pushUserSignOut(cuId: String,
                      resolve:RCTPromiseResolveBlock?,
                      reject:RCTPromiseRejectBlock?) {
   if(RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra!.reportUserSignOut(customData: ["customerId": cuId])
     resolve?("User sign in successfully!")
     print("pushUserSignOut::User sign out successfully!")
   } else {
     let error = NSError(domain: "com.reactnative.ccapillary", code: 400, userInfo: [NSLocalizedDescriptionKey: "Cannot find instance of HydraCore"])
     reject?("SIGNOUT_ERROR", "Error while signing out user", error)
     print("pushUserSignOut::Error while signing in user")
   }
 }
  @objc(pushUserUpdate:withFirstName:withLastName:withEmail:withPhone:withCustomData:withResolver:withRejecter:)
 func pushUserUpdate(username: String,
                     firstname: String,
                     lastname: String,
                     email: String,
                     phonenumber: String,
                     customData: [String: Any],
                     subscriptions: [Any]?,
                     resolve:RCTPromiseResolveBlock?,
                     reject:RCTPromiseRejectBlock?) -> Void {
   if(RnHydraSdk.hydra != nil) {
     let userInfo: UserDetails = UserDetails(
       firstName: firstname,
       lastName: lastname,
       email: email,
       phone: phonenumber)
    
    RnHydraSdk.hydra!.reportUserProfileUpdate(data: userInfo, customData: customData, subscriptions: subscriptions)


     resolve?("User data updated successfully!")
     print("pushUserUpdate::User sign up successfully!")
   } else {
     reject?("SIGNUP_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushUserUpdate::Error while signing up user")
   }
 }
  @objc(pushEvent:withEventAttributes:withResolver:withRejecter:)
 func pushEvent(eventName: String,
                eventAttribues: Attributes,
                resolve:RCTPromiseResolveBlock?,
                reject:RCTPromiseRejectBlock?) -> Void {
   if (RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra?.reportUserEvent(name: eventName, customAttributes: eventAttribues)
     resolve?("Push Event sent successfully!")
     print("pushEvent::User sign up successfully!")
   } else {
     reject?("PUSH_EVENT_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("pushEvent::Error while sending push event")
   }
 }


 @objc(passUserPreferences:withResolver:withRejecter:)
 func passUserPreferences(
   userPreferences: [String: Bool],
   resolve:RCTPromiseResolveBlock?,
   reject:RCTPromiseRejectBlock?
 ) {
   if(RnHydraSdk.hydra != nil) {
     let promPushOpted = userPreferences["promPushOpted"] ?? false
     let transPushOpted = userPreferences["transPushOpted"] ?? false
     RnHydraSdk.hydra?.updateUserNotificationSettingsFor(promoPushOpted: promPushOpted, transPushOpted: transPushOpted)
     RnHydraSdk.hydra!.reportUserPreferencesUpdate()
     resolve?("Push Event sent successfully!")
     print("passUserPreferences::User sign up successfully!")
   } else {
     reject?("PASS_PREFERENCES_ERROR", "Error while signing up user", getHydraNotFoundError())
     print("passUserPreferences::Error while sending push event")
   }
 }


  @objc(updateCustomerId:withResolver:withRejecter:)
 func updateCustomerId(custId: String,
                       resolve:RCTPromiseResolveBlock?,
                       reject:RCTPromiseRejectBlock?) -> Void {
   if (RnHydraSdk.hydra != nil) {
     RnHydraSdk.hydra!.update(customerID: custId)
     resolve?(true)
     print("passUserPreferences::User sign up successfully!")
   } else {
     reject?("ERROR", "Error while updating customer id", getHydraNotFoundError())
   }
 }
 // ******************************* private methods *******************************
 private func getHydraNotFoundError() -> NSError {
   return NSError(domain: "com.reactnative.ccapillary",
                  code: 400,
                  userInfo: [NSLocalizedDescriptionKey: "Cannot find instance of HydraCore"]
   )
 }
  private func getSdkLogLevel(debugLevel: Int) -> LogLevel {
   switch(debugLevel) {
   case 0:
     return LogLevel.verbose;
   case 1:
     return LogLevel.debug;
   case 2:
     return LogLevel.info;
   case 3:
     return LogLevel.error;
   case 4:
     return LogLevel.critical;
   default:
     return LogLevel.verbose;
   }
 }
}
```

### RnHydraCore class

Create a new file called RnHydraCore.swift and add the following code in it -

```
import Foundation
import HydraCore


@objc(RnHydraCore)
open class RnHydraCore: NSObject {
 @objc public static var shared = RnHydraCore(with: true)
 var hydraInstance: Hydra? = nil
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
     } catch {
       return nil
     }
   }
  
   return hydraInstance
 }
```

```
import Foundation
import HydraCore


@objc(RnHydraCore)
open class RnHydraCore: NSObject {
 @objc public static var shared = RnHydraCore(with: true)
 var hydraInstance: Hydra? = nil
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
     } catch {
       return nil
     }
   }
  
   return hydraInstance
 }
```

## Setup React Native Bridge methods

For the methods we added in the Native Android module and exposed them to React Native, we need to add them to the React Native side for the React Native apps to start using those.

### React Native Bridge methods

Create a new RnHydra.tsx and types.ts files in your React Native’s root directory and add the following (eg - projectName/scr/RnHydra.tsx)-

```
import {
 NativeModules,
 Platform,
} from 'react-native';
import {
 type HydraConfigParams,
 type PushUserParams,
 type UserPreferences,
} from './types';


/**
* Error message displayed when the 'react-native-capillary' package is not linked.
*/
const LINKING_ERROR =
 `The package 'Hydra SDK' doesn't seem to be linked. Make sure: \n\n` +
 Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
 '- You rebuilt the app after installing the package\n'


const RnHydraSdk = NativeModules.RnHydraSdk
 ? NativeModules.RnHydraSdk
 : new Proxy(
   {},
   {
     get() {
       throw new Error(LINKING_ERROR);
     },
   }
 );


/**
* Initializes the Hydra SDK with the provided configuration parameters.
* This method should be called before any other method in the SDK.
* The SDK should be initialized only once in the app lifecycle.
* Subsequent calls to this method will have no effect.
* The SDK will not be initialized if the configuration parameters are invalid, if the configuration
* parameters are not provided or if the configuration parameters are not provided in the correct format.
*
* @param hydraConfig - The configuration parameters for the Hydra SDK.
* @returns A promise that resolves when the SDK is successfully initialized.
*
* @example
* ```tsx
* init({
*   accountId: 'account-id',
*   baseURL: 'https://api.your-domain.in/',
*   sslPublicKey: 'ssl-public',
*   customerId: 'customer-id',
*   country: 'India',
*   city: 'Pune',
*   countryCode: '91',
*   captureViewPortDetails: true,
*   isDisableAppLaunchedEvent: false,
*   debugLevel: 2,
*   fcmConfig: {
*     isFCMRegistrationEnabled: false,
*   },
*   notificationConfig: {
*     isNotificationEnabled: true,
*     ...
*   }
* });
*/
export function init(hydraConfig: HydraConfigParams): Promise<any> {
 return RnHydraSdk.initSdk(hydraConfig);
}


/**
* Pushes user sign up data to the Hydra SDK.
*
* @param params - The parameters for user sign up.
* @returns A promise that resolves when the user sign up data is successfully pushed.
*
* @example
* ```tsx
* pushUserSignUp({
*   username: 'username',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserSignUp({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }


 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user sign up data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserSignUp(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserSignUp(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData
   );
 }
}


/**
* Pushes user sign in data to the Hydra SDK.
*
* @param params - The parameters for user sign in.
* @returns A promise that resolves when the user sign in data is successfully pushed.
*
* @example
* ```tsx
* pushUserSignIn({
*   customerId: 'customerId',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserSignIn({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }


 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user sign in data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserSignIn(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserSignIn(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData
   );
 }
}


/**
* Pushes user update data to the Hydra SDK.
*
* @param params - The parameters for user update.
* @returns A promise that resolves when the user update data is successfully pushed.
*
* @example
* ```tsx
* pushUserUpdate({
*   customerId: 'customerId',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserUpdate({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
 subscriptions
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }
 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user update data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserUpdate(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData,
       subscriptions
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserUpdate(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData,
     subscriptions
   );
 }
}


/**
* Pushes user sign out data to the Hydra SDK.
*
* @param cuid - The customer ID of the user.
* @returns A promise that resolves when the user sign out data is successfully pushed.
*/
export function pushUserSignOut(cuid: string): Promise<any> {
 return RnHydraSdk.pushUserSignOut(cuid);
}


/**
* Pushes an event to the Hydra SDK.
*
* @param eventName - The name of the event.
* @param attributes - Additional attributes associated with the event.
* @returns A promise that resolves when the event is successfully pushed.
*
* @example
* ```tsx
* pushEvent('event-name', {
*  key: 'value',
* });
*/
export function pushEvent(
 eventName: string,
 attributes?: Record<string, any>
): Promise<any> {
 return RnHydraSdk.pushEvent(eventName, attributes);
}


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
```

```
import {
 NativeModules,
 Platform,
} from 'react-native';
import {
 type HydraConfigParams,
 type PushUserParams,
 type UserPreferences,
} from './types';


/**
* Error message displayed when the 'react-native-capillary' package is not linked.
*/
const LINKING_ERROR =
 `The package 'Hydra SDK' doesn't seem to be linked. Make sure: \n\n` +
 Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
 '- You rebuilt the app after installing the package\n'


const RnHydraSdk = NativeModules.RnHydraSdk
 ? NativeModules.RnHydraSdk
 : new Proxy(
   {},
   {
     get() {
       throw new Error(LINKING_ERROR);
     },
   }
 );


/**
* Initializes the Hydra SDK with the provided configuration parameters.
* This method should be called before any other method in the SDK.
* The SDK should be initialized only once in the app lifecycle.
* Subsequent calls to this method will have no effect.
* The SDK will not be initialized if the configuration parameters are invalid, if the configuration
* parameters are not provided or if the configuration parameters are not provided in the correct format.
*
* @param hydraConfig - The configuration parameters for the Hydra SDK.
* @returns A promise that resolves when the SDK is successfully initialized.
*
* @example
* ```tsx
* init({
*   accountId: 'account-id',
*   baseURL: 'https://api.your-domain.in/',
*   sslPublicKey: 'ssl-public',
*   customerId: 'customer-id',
*   country: 'India',
*   city: 'Pune',
*   countryCode: '91',
*   captureViewPortDetails: true,
*   isDisableAppLaunchedEvent: false,
*   debugLevel: 2,
*   fcmConfig: {
*     isFCMRegistrationEnabled: false,
*   },
*   notificationConfig: {
*     isNotificationEnabled: true,
*     ...
*   }
* });
*/
export function init(hydraConfig: HydraConfigParams): Promise<any> {
 return RnHydraSdk.initSdk(hydraConfig);
}


/**
* Pushes user sign up data to the Hydra SDK.
*
* @param params - The parameters for user sign up.
* @returns A promise that resolves when the user sign up data is successfully pushed.
*
* @example
* ```tsx
* pushUserSignUp({
*   username: 'username',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserSignUp({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }


 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user sign up data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserSignUp(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserSignUp(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData
   );
 }
}


/**
* Pushes user sign in data to the Hydra SDK.
*
* @param params - The parameters for user sign in.
* @returns A promise that resolves when the user sign in data is successfully pushed.
*
* @example
* ```tsx
* pushUserSignIn({
*   customerId: 'customerId',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserSignIn({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }


 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user sign in data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserSignIn(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserSignIn(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData
   );
 }
}


/**
* Pushes user update data to the Hydra SDK.
*
* @param params - The parameters for user update.
* @returns A promise that resolves when the user update data is successfully pushed.
*
* @example
* ```tsx
* pushUserUpdate({
*   customerId: 'customerId',
*   firstName: 'first-name',
*   lastName: 'last-name',
*   email: 'email',
*   phone: 'phone',
*   customData: {
*     customKey: 'customValue',
*   },
* });
*/
export async function pushUserUpdate({
 customerId,
 firstName,
 lastName,
 email,
 phone,
 customData,
 subscriptions
}: PushUserParams): Promise<any> {
 if (customerId === undefined) {
   throw new Error('customerId is required');
 }
 if (Platform.OS === 'ios') {
   // iOS needs customerId to be updated before pushing user update data
   try {
     await RnHydraSdk.updateCustomerId(customerId);
     return RnHydraSdk.pushUserUpdate(
       customerId,
       firstName,
       lastName,
       email,
       phone,
       customData,
       subscriptions
     );
   } catch (err) {
     throw err;
   }
 } else {
   return RnHydraSdk.pushUserUpdate(
     customerId,
     firstName,
     lastName,
     email,
     phone,
     customData,
     subscriptions
   );
 }
}


/**
* Pushes user sign out data to the Hydra SDK.
*
* @param cuid - The customer ID of the user.
* @returns A promise that resolves when the user sign out data is successfully pushed.
*/
export function pushUserSignOut(cuid: string): Promise<any> {
 return RnHydraSdk.pushUserSignOut(cuid);
}


/**
* Pushes an event to the Hydra SDK.
*
* @param eventName - The name of the event.
* @param attributes - Additional attributes associated with the event.
* @returns A promise that resolves when the event is successfully pushed.
*
* @example
* ```tsx
* pushEvent('event-name', {
*  key: 'value',
* });
*/
export function pushEvent(
 eventName: string,
 attributes?: Record<string, any>
): Promise<any> {
 return RnHydraSdk.pushEvent(eventName, attributes);
}


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
```

### Types

Add type.ts in projectName/src/types.ts

```
import type { FcmConfig } from './FcmConfig';


export interface PushUserParams {
 customerId: string;
 firstName?: string | null;
 lastName?: string | null;
 email?: string | null;
 phone?: string | null;
 customData?: Record<string, any> | null;
 subscriptions?: any[];
}

/**
* Notification Configuration object.
*
* @param smallIcon Resource-Id for the Notification Small icon.
*
* Guideline: Notification small icon should be flat, pictured face on, and must be white on
* a transparent background.
*
* @param notificationColor Set the icon color for notification.
*
* @param isMultipleNotificationInDrawerEnabled By default,Sdk will show multiple notifications
* i.e. isMultipleNotificationInDrawerEnabled is true, if the app wants
* to show a single notification then they should pass
* isMultipleNotificationInDrawerEnabled as false
*/
export interface NotificationConfig {
  // small icon resource for push-notification. Give the string name of the icon
  // you added in android drawable without extension.
  // @example
  // If you added small_notification.xml in the android/app/res/drawable/ folder, then
  // give the string name as small_notification
 
 smallIcon: string;


 // Color resource for push-notification icon. Give the string name of the icon
 // you added in android drawable without extension.
 // @example
 // If you added notification_color as a color property in the android/app/res/colors/colors.xml,
 // then give the string name as notification_color


 notificationColor: string;
  //If true show multiple notification in the drawer, else show single notification.
 isMultipleNotificationInDrawerEnabled: boolean;
}


/**
* InApp Configuration object
* @param defaultImage Resource-Id for fallback image for in app message
*/
export interface InAppConfig {
 defaultImage: string;
}


/**
* NotificationCenterConfig Configuration object
* @param defaultImage Resource-Id for fallback image for the inbox messages in the notification center
*/
export interface NotificationCenterConfig {
 defaultImage: string;
 notificationCenterOffset: number;
}

/**
* This class is responsible for handling instance configuration info of Hydra SDK.
*/
export type HydraConfigParams = {
 accountId: string
 baseURL?: string
 sslPublicKey?: string
 customerId?: string
 country?: string
 city?: string;
 countryCode?: string
 captureViewPortDetails: boolean;
 isDisableAppLaunchedEvent: boolean;
 debugLevel: number;
 fcmConfig: FcmConfig;
 notificationConfig?: NotificationConfig;
 inAppConfig?: InAppConfig;
 notificationCenterConfig?: NotificationCenterConfig;
}


/**
* This class is responsible for handling user preferences info of Hydra SDK.
*/
export type UserPreferences = {
 promPushOpted: boolean;
 transPushOpted: boolean;
}
```

```
import type { FcmConfig } from './FcmConfig';


export interface PushUserParams {
 customerId: string;
 firstName?: string | null;
 lastName?: string | null;
 email?: string | null;
 phone?: string | null;
 customData?: Record<string, any> | null;
 subscriptions?: any[];
}

/**
* Notification Configuration object.
*
* @param smallIcon Resource-Id for the Notification Small icon.
*
* Guideline: Notification small icon should be flat, pictured face on, and must be white on
* a transparent background.
*
* @param notificationColor Set the icon color for notification.
*
* @param isMultipleNotificationInDrawerEnabled By default,Sdk will show multiple notifications
* i.e. isMultipleNotificationInDrawerEnabled is true, if the app wants
* to show a single notification then they should pass
* isMultipleNotificationInDrawerEnabled as false
*/
export interface NotificationConfig {
  // small icon resource for push-notification. Give the string name of the icon
  // you added in android drawable without extension.
  // @example
  // If you added small_notification.xml in the android/app/res/drawable/ folder, then
  // give the string name as small_notification
 
 smallIcon: string;


 // Color resource for push-notification icon. Give the string name of the icon
 // you added in android drawable without extension.
 // @example
 // If you added notification_color as a color property in the android/app/res/colors/colors.xml,
 // then give the string name as notification_color


 notificationColor: string;
  //If true show multiple notification in the drawer, else show single notification.
 isMultipleNotificationInDrawerEnabled: boolean;
}


/**
* InApp Configuration object
* @param defaultImage Resource-Id for fallback image for in app message
*/
export interface InAppConfig {
 defaultImage: string;
}


/**
* NotificationCenterConfig Configuration object
* @param defaultImage Resource-Id for fallback image for the inbox messages in the notification center
*/
export interface NotificationCenterConfig {
 defaultImage: string;
 notificationCenterOffset: number;
}

/**
* This class is responsible for handling instance configuration info of Hydra SDK.
*/
export type HydraConfigParams = {
 accountId: string
 baseURL?: string
 sslPublicKey?: string
 customerId?: string
 country?: string
 city?: string;
 countryCode?: string
 captureViewPortDetails: boolean;
 isDisableAppLaunchedEvent: boolean;
 debugLevel: number;
 fcmConfig: FcmConfig;
 notificationConfig?: NotificationConfig;
 inAppConfig?: InAppConfig;
 notificationCenterConfig?: NotificationCenterConfig;
}


/**
* This class is responsible for handling user preferences info of Hydra SDK.
*/
export type UserPreferences = {
 promPushOpted: boolean;
 transPushOpted: boolean;
}
```

## Initializing Hydra Core

You need to create an instance of the Hydra SDK to use SDK APIs, this api needs to be called in from your App’s initial file (e.g. App.tsx) of the application with the HydraConfig.

```
import {init} from './HydraModule';
useEffect(() => {
   init({
     accountId: 'ACCOUNT_ID_PROVIDED_BY_CAPILLARY,
     baseURL:
       'https://baseurl.com/new/',
     sslPublicKey: 'Qfmq8ouVRhwcHdl0piZPcWtYvJmHhoRPhmdadowsmla=',
     country: 'India',
     city: 'Pune',
     countryCode: '91',
     captureViewPortDetails: true,
     isDisableAppLaunchedEvent: false,
     debugLevel: 2,
     fcmConfig: {
       isFCMRegistrationEnabled: false,
     },
   })
 }, []);
```

```
import {init} from './HydraModule';
useEffect(() => {
   init({
     accountId: 'ACCOUNT_ID_PROVIDED_BY_CAPILLARY,
     baseURL:
       'https://baseurl.com/new/',
     sslPublicKey: 'Qfmq8ouVRhwcHdl0piZPcWtYvJmHhoRPhmdadowsmla=',
     country: 'India',
     city: 'Pune',
     countryCode: '91',
     captureViewPortDetails: true,
     isDisableAppLaunchedEvent: false,
     debugLevel: 2,
     fcmConfig: {
       isFCMRegistrationEnabled: false,
     },
   })
 }, []);
```

At this point, your Hydra SDK is initialized and you can use the Hydra core APIs.

## Behavioral Events

### Sign up event

When a user signs up on the app, the client app shall call the Hydra SDK API to sign up the user on the Hydra platform as well.

Example 1:

```
import {pushUserSignUp} from './HydraModule';
pushUserSignUp({
         customerId: '12345',
         email: '[email protected]',
         phone: '1234567890',
         firstName: 'Rakesh',
         lastName: 'Kumar',
         customData: {
           age: '25',
           gender: 'MALE',
           address: 'Pune',
         },
       })
         .then(resp => {console.log('pushUserSignUp success', resp);})
         .catch(error => {});
```

```
import {pushUserSignUp} from './HydraModule';
pushUserSignUp({
         customerId: '12345',
         email: '[email protected]',
         phone: '1234567890',
         firstName: 'Rakesh',
         lastName: 'Kumar',
         customData: {
           age: '25',
           gender: 'MALE',
           address: 'Pune',
         },
       })
         .then(resp => {console.log('pushUserSignUp success', resp);})
         .catch(error => {});
```

[[email protected]](/cdn-cgi/l/email-protection)

Example 2: You can sign up without optional data as well -

```
pushUserSignUp({
         customerId: '12345',
         email: '',
         phone: '',
         firstName: '',
         lastName: '',
         customData: null,
       })
         .then(resp => {console.log('pushUserSignUp success', resp);})
         .catch(error => {});
```

```
pushUserSignUp({
         customerId: '12345',
         email: '',
         phone: '',
         firstName: '',
         lastName: '',
         customData: null,
       })
         .then(resp => {console.log('pushUserSignUp success', resp);})
         .catch(error => {});
```

### Sign in event

Similar to sign up event, when the user logs into the client mobile app, the client mobile app shall call the sign in Hydra SDK API with required details -

```
import {pushUserSignIn} from './HydraModule';


pushUserSignIn({
     customerId: userName,
     firstName,
     lastName,
     email,
     phone: phoneNumber,
     customData: JSON.parse(customAttributes),
   })
     .then((res: any) => {console.log('pushUserSignIn success', res)})
     .catch((err: any) => {Alert.alert('Error', 'Failed to sign in')});
```

```
import {pushUserSignIn} from './HydraModule';


pushUserSignIn({
     customerId: userName,
     firstName,
     lastName,
     email,
     phone: phoneNumber,
     customData: JSON.parse(customAttributes),
   })
     .then((res: any) => {console.log('pushUserSignIn success', res)})
     .catch((err: any) => {Alert.alert('Error', 'Failed to sign in')});
```

### Update User info event

When user updates the user information, the app shall call push user update api -

```
import {pushUserUpdate} from './HydraModule';


   let customAttributesObj = customAttributes
     ? JSON.parse(customAttributes)
     : null;
   let subscriptionsObj = subscriptions ? JSON.parse(subscriptions) : null;
   console.log("calling pushUserSignUp");
   pushUserUpdate({
     customerId: userName,
     firstName,
     lastName,
     email,
     phone: phoneNumber,
     customData: customAttributesObj,
     subscriptions: subscriptionsObj,
   })
     .then((res: any) => {
       console.log("pushUserSignUp", res);
       navigation.goBack();
     })
     .catch((err: any) => {
       console.log("pushUserSignUp", err);
       Alert.alert("Error", "Failed to sign up");
     });
 };
```

```
import {pushUserUpdate} from './HydraModule';


   let customAttributesObj = customAttributes
     ? JSON.parse(customAttributes)
     : null;
   let subscriptionsObj = subscriptions ? JSON.parse(subscriptions) : null;
   console.log("calling pushUserSignUp");
   pushUserUpdate({
     customerId: userName,
     firstName,
     lastName,
     email,
     phone: phoneNumber,
     customData: customAttributesObj,
     subscriptions: subscriptionsObj,
   })
     .then((res: any) => {
       console.log("pushUserSignUp", res);
       navigation.goBack();
     })
     .catch((err: any) => {
       console.log("pushUserSignUp", err);
       Alert.alert("Error", "Failed to sign up");
     });
 };
```

### Sign out event

When user signs out from the app, user shall call the sign out function -

```
import {pushUserSignOut} from './HydraModule';  
pushUserSignOut(customerID)  
     .then(() => {  
       navigation.reset({  
         index: 0,  
         routes: [{ name: 'Welcome' }],  
       });  
     })  
     .catch((err: any) => {  
       console.log('pushUserSignOut', err);  
       Alert.alert('Error', 'Failed to sign out');  
     });
```

```
import {pushUserSignOut} from './HydraModule';  
pushUserSignOut(customerID)  
     .then(() => {  
       navigation.reset({  
         index: 0,  
         routes: [{ name: 'Welcome' }],  
       });  
     })  
     .catch((err: any) => {  
       console.log('pushUserSignOut', err);  
       Alert.alert('Error', 'Failed to sign out');  
     });
```

### Sending custom event

If your application want to register any custom event for example, the new user created or user added the new items or user does some action and app want to trigger the event then please use pushEvent API -

```
pushEvent(eventName, customData)
   .then((res: any) => {console.log('pushEvent success', res)}
   ).catch((err: any) => {console.log('pushEvent error', err)}
```

```
pushEvent(eventName, customData)
   .then((res: any) => {console.log('pushEvent success', res)}
   ).catch((err: any) => {console.log('pushEvent error', err)}
```
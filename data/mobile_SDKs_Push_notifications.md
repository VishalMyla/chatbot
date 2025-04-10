# Push notifications

Push notifications are alerts that appear on a user's screen when an update occurs on the mobile app. The notification appears even if the user is not using the mobile app. They are useful for delivering timely and personalised content to users and can be an effective way to increase user engagement with your app.

The push notifications are enabled through the HydraNotifications framework. The framework also records data related to notifications and can be used for analytics.

You need to integrate the below frameworks to enable the push notifications:

- HydraPushNotification

- HydraPushNotificationServiceExtension

Capillary SDK sends push notifications to users usingFirebase Cloud Messaging(FCM). Firebase Cloud Messaging is a service that allows you to send notifications to your applications and receive information from them.

To configure APNS Push notifications with Firebase, perform the following:

1. Download APNs keyLog into your Apple developer account.Navigate toCertificates, Identifiers and Profiles.ClickKeysand then click  the “+” button in the top right corner.In theNamefield, enter a name for your APNs Auth Key.Select Apple Push Notification Service (APNs).ClickContinue.Verify the information and clickConfirm.ClickDownloadto download your auth key file. Copy and save the Key ID.

1. Log into your Apple developer account.

2. Navigate toCertificates, Identifiers and Profiles.

3. ClickKeysand then click  the “+” button in the top right corner.

4. In theNamefield, enter a name for your APNs Auth Key.

5. Select Apple Push Notification Service (APNs).

6. ClickContinue.

7. Verify the information and clickConfirm.

8. ClickDownloadto download your auth key file. Copy and save the Key ID.

> 📘NoteYou can only download the file once. Make sure you save this file properly and create a backup for later. Do not rename the file. You can also use APNs certificate. For more information seeApple developer guide.

## 📘Note

Note

You can only download the file once. Make sure you save this file properly and create a backup for later. Do not rename the file. You can also use APNs certificate. For more information seeApple developer guide.

1. Add the APNs key/certificate to the FirebaseIn the Firebase Console, go to your project settings.Select theCloud Messagingtab.Click oniOS app configuration.Upload your APNs authentication key or certificate. For more information, seeFirebase documentation.

Add the APNs key/certificate to the Firebase

1. In the Firebase Console, go to your project settings.

2. Select theCloud Messagingtab.

3. Click oniOS app configuration.

4. Upload your APNs authentication key or certificate. For more information, seeFirebase documentation.

6. Configure Firebase Cloud Messaging (FCM)In the Firebase Console, go to your project settings.Select theCloud Messagingtab.From "iOS app configuration," copy the "Server Key" and save it for later.

Configure Firebase Cloud Messaging (FCM)

1. In the Firebase Console, go to your project settings.

2. Select theCloud Messagingtab.

3. From "iOS app configuration," copy the "Server Key" and save it for later.

10. Add the Firebase configuration file to projectDownload theGoogleService-Info.plist filefor your app.Open your Xcode project.Drag and drop the GoogleService-Info.plist file into your project.Make sure that the file is added to your app's target.For more information onGoogleService-Info.plist fileand on adding it to your Firebase project, seeFirebase documentation.

Add the Firebase configuration file to project

1. Download theGoogleService-Info.plist filefor your app.

2. Open your Xcode project.

3. Drag and drop the GoogleService-Info.plist file into your project.Make sure that the file is added to your app's target.For more information onGoogleService-Info.plist fileand on adding it to your Firebase project, seeFirebase documentation.

# Initialisation

To initialise the push notifications, perform the following:

## Install Firebase SDK and set up push notifications in your app

1. In your Xcode project, open your app'sAppDelegate.swiftfile.

`AppDelegate.swift`

2. Import the Firebase and FirebaseMessaging.

3. In thedidFinishLaunchingWithOptionsmethod, add the following code to initialise Firebase:

`didFinishLaunchingWithOptions`

```
import Firebase
import FirebaseMessaging


func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        FirebaseApp.configure()
        Messaging.messaging().delegate = self


        // Add any additional configuration code or other setup here


        return true
}
```

```
import Firebase
import FirebaseMessaging


func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        FirebaseApp.configure()
        Messaging.messaging().delegate = self


        // Add any additional configuration code or other setup here


        return true
}
```

## Initialise NotificationCore

1. InitialiseHydraPushNotificationobject. Use below API:Swiftlet notificationCore:NotificationCore = NotificationCore.shared

`HydraPushNotification`

```
let notificationCore:NotificationCore = NotificationCore.shared
```

```
let notificationCore:NotificationCore = NotificationCore.shared
```

2. Pass the HydraCore object created previously.

```
notificationCore.update(sdk: hydraCoreSDK)
```

```
notificationCore.update(sdk: hydraCoreSDK)
```

## Trigger HydraPushNotification APIs from AppDelegates

TheHydraPushNotificationclass is responsible for implementing APIs that respond to the life cycle methods of the application, including the AppDelegate protocols. To ensure the smooth functioning ofHydraPushNotification, the application should trigger the following methods from their appropriate locations:

`HydraPushNotification`

`HydraPushNotification`

```
public func application(_ application: UIApplication,
                            didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                            fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) -> ((UIBackgroundFetchResult) -> Void)


public func application(_ application: UIApplication,
                             didRegisterForRemoteNotificationsWithToken deviceToken: Data)


public  func application(_ application: UIApplication,
                             didFailToRegisterForRemoteNotificationsWithError error: Error)


public  func application(_ application: UIApplication,
                             didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil)
```

```
public func application(_ application: UIApplication,
                            didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                            fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) -> ((UIBackgroundFetchResult) -> Void)


public func application(_ application: UIApplication,
                             didRegisterForRemoteNotificationsWithToken deviceToken: Data)


public  func application(_ application: UIApplication,
                             didFailToRegisterForRemoteNotificationsWithError error: Error)


public  func application(_ application: UIApplication,
                             didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil)
```

## Send FCM token to SDK

From AppDelegate’sdidReceiveRegistrationToken, send the received token to SDK

`didReceiveRegistrationToken`

```
extension AppDelegate:MessagingDelegate{
    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        if let fcmToken = fcmToken {
            Logger.info("FCM Token is \(fcmToken)")
            notificationCore.messaging(didReceiveRegistrationToken: fcmToken)
        }
    }
}
```

```
extension AppDelegate:MessagingDelegate{
    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        if let fcmToken = fcmToken {
            Logger.info("FCM Token is \(fcmToken)")
            notificationCore.messaging(didReceiveRegistrationToken: fcmToken)
        }
    }
}
```

Example:

```
class AppDelegate: UIResponder, UIApplicationDelegate {
    private var notificationCore:NotificationCore
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        self.notificationCore.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
    
}
extension AppDelegate: UNUserNotificationCenterDelegate{
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                didReceive response: UNNotificationResponse,
                                withCompletionHandler completionHandler: @escaping () -> Void) {
        let userInfo = response.notification.request.content.userInfo
        Messaging.messaging().appDidReceiveMessage(userInfo)
        let result = notificationCore.userNotification(center: center, didReceive: response, withCompletionHandler: completionHandler)
        if result != nil {
                //developer can write custom code to handle as per their needs.
        }
    }
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                willPresent notification: UNNotification,
                                withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        let result = notificationCore.userNotification(center: center, willPresent: notification, withCompletionHandler: completionHandler)
        if result != nil {
                //developer can write custom code to handle as per their needs.
        }
    }
}


extension AppDelegate:MessagingDelegate{
    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        if let fcmToken = fcmToken {
            Logger.info("FCM_Token is \(fcmToken)")
            notificationCore.messaging(didReceiveRegistrationToken: fcmToken)
        }
    }
}


extension AppDelegate {
    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
        notificationCore.application(application, didRegisterForRemoteNotificationsWithToken: deviceToken)
    }


    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        print("Error occurred due to \(error.localizedDescription)")
        notificationCore.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
    }


    func application(_ application: UIApplication,
                     didReceiveRemoteNotification userInfo: [AnyHashable : Any],
                     fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        Messaging.messaging().appDidReceiveMessage(userInfo)
        notificationCore.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
    }
}
```

```
class AppDelegate: UIResponder, UIApplicationDelegate {
    private var notificationCore:NotificationCore
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        self.notificationCore.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
    
}
extension AppDelegate: UNUserNotificationCenterDelegate{
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                didReceive response: UNNotificationResponse,
                                withCompletionHandler completionHandler: @escaping () -> Void) {
        let userInfo = response.notification.request.content.userInfo
        Messaging.messaging().appDidReceiveMessage(userInfo)
        let result = notificationCore.userNotification(center: center, didReceive: response, withCompletionHandler: completionHandler)
        if result != nil {
                //developer can write custom code to handle as per their needs.
        }
    }
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                willPresent notification: UNNotification,
                                withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        let result = notificationCore.userNotification(center: center, willPresent: notification, withCompletionHandler: completionHandler)
        if result != nil {
                //developer can write custom code to handle as per their needs.
        }
    }
}


extension AppDelegate:MessagingDelegate{
    func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
        if let fcmToken = fcmToken {
            Logger.info("FCM_Token is \(fcmToken)")
            notificationCore.messaging(didReceiveRegistrationToken: fcmToken)
        }
    }
}


extension AppDelegate {
    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Messaging.messaging().apnsToken = deviceToken
        notificationCore.application(application, didRegisterForRemoteNotificationsWithToken: deviceToken)
    }


    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        print("Error occurred due to \(error.localizedDescription)")
        notificationCore.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
    }


    func application(_ application: UIApplication,
                     didReceiveRemoteNotification userInfo: [AnyHashable : Any],
                     fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        Messaging.messaging().appDidReceiveMessage(userInfo)
        notificationCore.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
    }
}
```

# Customise and modify push notifications

You can integrateHydraPushNotificationExtensionServiceframework toUNNotificationServiceExtensionto customise and modify incoming remote notifications before they are displayed to the user.  Perform the following:

`HydraPushNotificationExtensionService`

`UNNotificationServiceExtension`

## 1. Create a push notification service extension target

To create a service extension target:

1. In Xcode, from theFilemenu, clickNewand selectTarget.

![](https://files.readme.io/4bea20c-Select_target.png)

1. SelectNotification Service Extension.

![](https://files.readme.io/c6a2b32-Select_Service_Extension.png)

1. Enter a name for the extension target and add it to the project.

For more information on service extension, seeUNNotificationServiceExtension documentation.

## 2. AddHydraPushNotificationServiceExtensionframework to extension target

`HydraPushNotificationServiceExtension`

AddHydraPushNotificationServiceExtensionframework toFrameworks and Librariesof notification service extension.

`HydraPushNotificationServiceExtension`

![](https://files.readme.io/7ad65fe-Add_framework.png)

## 3. Make changes to theUNNotificationServiceExtensionclass

`UNNotificationServiceExtension`

ImportHydraPushNotificationServiceExtensionand call the API from this framework. See the code snippet below.

`HydraPushNotificationServiceExtension`

```
import UserNotifications
import Foundation
import HydraPushNotificationServiceExtension
class NotificationService: UNNotificationServiceExtension {
    let service:HydraRemoteNotificationService = .init()
    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        service.didReceive(request, withContentHandler: contentHandler)
    }
    override func serviceExtensionTimeWillExpire() {
            // Called just before the extension will be terminated by the system.
            // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
        service.serviceExtensionTimeWillExpire()
    }
}
```

```
import UserNotifications
import Foundation
import HydraPushNotificationServiceExtension
class NotificationService: UNNotificationServiceExtension {
    let service:HydraRemoteNotificationService = .init()
    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        service.didReceive(request, withContentHandler: contentHandler)
    }
    override func serviceExtensionTimeWillExpire() {
            // Called just before the extension will be terminated by the system.
            // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
        service.serviceExtensionTimeWillExpire()
    }
}
```

# Gateway configuration

To enable mAPP SDK Channel and the push notifications, the team setting up the firebase account for the brand must raise a ticket with the gateways team with details requested by them.
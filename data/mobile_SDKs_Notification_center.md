# Notification center

The Notification Center is a feature in the SDK that provides a central place for users to view and manage all of their push notifications. The Notification Center is a UI element that is displayed within the app. It contains a list of all of the push notifications that the user has received. The user can tap on a notification to open the corresponding app.

The Notification Center helps with the following:

- Centralized Management:Users access a centralized hub for all push notifications, ensuring organization and control over their app interactions.

Centralized Management:Users access a centralized hub for all push notifications, ensuring organization and control over their app interactions.

- Enhanced Accessibility:Notifications are no longer buried in cluttered bars; users can manage them efficiently, leading to a seamless experience.

Enhanced Accessibility:Notifications are no longer buried in cluttered bars; users can manage them efficiently, leading to a seamless experience.

- Increased Engagement:Clear and accessible notifications promote active engagement, allowing users to respond promptly to social interactions, promotions, and achievements.

Increased Engagement:Clear and accessible notifications promote active engagement, allowing users to respond promptly to social interactions, promotions, and achievements.

- Improved customer satisfaction:The Notification Center will help to improve customer satisfaction by making the app more useful and engaging

Improved customer satisfaction:The Notification Center will help to improve customer satisfaction by making the app more useful and engaging

- Metrics: Enables to track the number of users who open the Notification Center, the number of push notifications that are viewed in the Notification Center, and the number of push notifications that are deleted from the Notification CenterUse Case: Retail Loyalty ProgramScenario:A retail company operates a loyalty program where customers earn points for each purchase. This program offers exclusive promotions and discounts to reward loyal customers. The app sends push notifications to users, notifying them of earned points and offering special discounts.Issue:Many users miss out on these discounts due to cluttered notification bars filled with messages from various apps. They frequently clear their notification bars without noticing the discounts, resulting in missed opportunities.Solution:Introducing a Notification Center within the app resolves this issue. Users can conveniently access all loyalty program notifications in one location. Here, they can easily view their accumulated points and available discounts. This streamlined approach enhances user engagement and loyalty.

Metrics: Enables to track the number of users who open the Notification Center, the number of push notifications that are viewed in the Notification Center, and the number of push notifications that are deleted from the Notification Center

## Use Case: Retail Loyalty Program

Scenario:A retail company operates a loyalty program where customers earn points for each purchase. This program offers exclusive promotions and discounts to reward loyal customers. The app sends push notifications to users, notifying them of earned points and offering special discounts.Issue:Many users miss out on these discounts due to cluttered notification bars filled with messages from various apps. They frequently clear their notification bars without noticing the discounts, resulting in missed opportunities.Solution:Introducing a Notification Center within the app resolves this issue. Users can conveniently access all loyalty program notifications in one location. Here, they can easily view their accumulated points and available discounts. This streamlined approach enhances user engagement and loyalty.

# Prerequisites

1. Notification Management:The Notification Center exclusively handles remote notifications that the application receives. To enable and support the Notification Center's functionality, developers must integrate two  frameworks:HydraPushNotificationHydraPushNotificationServiceExtension

Notification Management:The Notification Center exclusively handles remote notifications that the application receives. To enable and support the Notification Center's functionality, developers must integrate two  frameworks:

- HydraPushNotification

- HydraPushNotificationServiceExtension

4. App Group Identifier Setup:To ensure the proper functionality of InboxCore and InboxUI, developers must configure the App Group Identifier. We recommend creating a distinct App Group ID for the Capillary SDKs, following the formatgroup.{app bundle id}.hydra❗️Make sure that the same App Group ID is enabled for all the targets where the Capillary SDK is utilized.

App Group Identifier Setup:To ensure the proper functionality of InboxCore and InboxUI, developers must configure the App Group Identifier. We recommend creating a distinct App Group ID for the Capillary SDKs, following the formatgroup.{app bundle id}.hydra

`group.{app bundle id}.hydra`

> ❗️Make sure that the same App Group ID is enabled for all the targets where the Capillary SDK is utilized.

## ❗️Make sure that the same App Group ID is enabled for all the targets where the Capillary SDK is utilized.

Make sure that the same App Group ID is enabled for all the targets where the Capillary SDK is utilized.

### Set up APP group ID

To set up an App Group ID for the main application, fromTARGETS, select your App Target, navigate to theSigning & Capabilitiestab and perform the following:

i.  EnableApp Groupsfor your app target and choose an App Group ID. If you don't have one, create a new one with the formatgroup.{your_bundle_id}.hydra.

`group.{your_bundle_id}.hydra`

ii. EnableBackground modeand select/enableRemote Notification.

iii. Turn on thePush Notificationscapability for your app.

![](https://files.readme.io/fad705a-iOS_SDK_App_group_identifier.png)

To set up an App Group ID for the Push Notification Extension Target, fromTARGETS, select your App Target, navigate to theSigning & Capabilitiestab and perform the changes as shown in the image below:

![](https://files.readme.io/01c6356-Push_notification_extension_target.png)

NOTE:The App Group ID must precisely match the name of the main application.

# Integration

You can implement the Notification Center in the application in two ways:

| Approach | Frameworks | Description |

| --- | --- | --- |

| Approach 1 | HydraInboxCore | When developers want to create their own UI implementation, they can use this framework and its APIs. The framework returns all notifications, and developers can design their own UI as per their requirements. |

| Approach 2 | HydraInboxCore and HydraInboxUI (Recommended) | Recommended when the developer wants to use the Notification Center UI designed by the SDK. The developer needs to set up a notification button (or any button) and push/present the SDK’s Notification Center UI. |



Integration Steps for HydraInboxCore Framework

HydraInboxCore

- This framework handles all remote notifications received by the application.

- APIs are exposed to get details related to the Notification Center, such as the number of notifications available, the number of unread notifications, and the list of available notifications.

- The application can use these APIs to design its own UI to display the Notification Center.

Integration Steps for HydraInboxCore and HydraInboxUI Frameworks (Recommended)

HydraInboxUI

- Responsible for getting notifications from HydraInboxCore and displaying them under the Notification Center.

- Recommended for ease of use, as the application only needs to initialize HydraInboxUI.

Initialization Steps for HydraInboxCore Framework and to create an instance of InboxCore

```
public init(with config: HydraInboxCoreConfigGenerator, configuredFor env: Env) throws
```

```
public init(with config: HydraInboxCoreConfigGenerator, configuredFor env: Env) throws
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| config | HydraInboxCoreConfigGenerator | Compulsory | Object of class conforming to HydraInboxCoreConfigGenerator protocol |

| env | Environment | Optional | Either .dev or .unittest |



HydraInboxCoreConfigGenerator

```
public protocol HydraInboxCoreConfigGenerator {
    var maximumNotificationCount: Int? { get set }
    var hydraConfig: ConfigurationGenerator { get set }
    func update(with config: HydraInboxCoreConfigGenerator?)
}
```

```
public protocol HydraInboxCoreConfigGenerator {
    var maximumNotificationCount: Int? { get set }
    var hydraConfig: ConfigurationGenerator { get set }
    func update(with config: HydraInboxCoreConfigGenerator?)
}
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| hydraConfig | ConfigurationGenerator | Compulsory | An object of class conforming to ConfigurationGenerator protocol |

| maximumNotificationCount | Int | Optional | Maximum number of notifications to display in the Notification Center (set to nil for internal default value) |



NOTE:IfmaximumNotificationCountis set tonull, the SDK will use an internal value (250) to limit the number of notifications stored in the database.

`maximumNotificationCount`

`null`

Initialization Steps for HydraInboxUI Framework and to create an instance of InboxUICore

```
public init(with inboxCore: InboxCore, configuration: HydraInboxUIConfigurator)
```

```
public init(with inboxCore: InboxCore, configuration: HydraInboxUIConfigurator)
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| inboxCore | InboxCore | Compulsory | Instance of InboxCore |

| configuration | HydraInboxUIConfigurator | Compulsory | Object of class conforming to HydraInboxUIConfigurator protocol |



HydraInboxUIConfigurator

```
public protocol HydraInboxUIConfigurator {
    var unreadMessageConfigurationType: InboxMessageConfiguration { get set }
    var readMessageConfigurationType: InboxMessageConfiguration { get set }
    var placeholderImage: UIImage? { get set }
    var notificationsNotFoundConfiguration: HydraInboxEmptyNotificationsConfigurator { get set }
}
```

```
public protocol HydraInboxUIConfigurator {
    var unreadMessageConfigurationType: InboxMessageConfiguration { get set }
    var readMessageConfigurationType: InboxMessageConfiguration { get set }
    var placeholderImage: UIImage? { get set }
    var notificationsNotFoundConfiguration: HydraInboxEmptyNotificationsConfigurator { get set }
}
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| unreadMessageConfigurationType | InboxMessageConfiguration | Compulsory | Enum value: .defaultUnreadConfiguration or .customConfiguration |

| readMessageConfigurationType | InboxMessageConfiguration | Compulsory | Enum value: .defaultReadConfiguration or .customConfiguration |

| notificationsNotFoundConfiguration | HydraInboxEmptyNotificationsConfigurator | Optional | Object of class conforming to HydraInboxEmptyNotificationsConfigurator protocol |

| placeholderImage | UIImage | Optional | Object of UIImage class |



NOTE:IfplaceholderImageis set tonull, the SDK application will set the application icon as placeholder image.

`placeholderImage`

`null`

HydraInboxEmptyNotificationsConfigurator

```
public protocol HydraInboxEmptyNotificationsConfigurator {
    var notificationsNotFoundLabelTextColor: UIColor { get set }
    var notificationsNotFoundLabelFont: UIFont { get set }
}
```

```
public protocol HydraInboxEmptyNotificationsConfigurator {
    var notificationsNotFoundLabelTextColor: UIColor { get set }
    var notificationsNotFoundLabelFont: UIFont { get set }
}
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| notificationsNotFoundLabelTextColor | UIColor | Compulsory | Object of class UIColor |

| notificationsNotFoundLabelFont | UIFont | Compulsory | Object of class UIFont |



Example: Using Default UI Configuration

```
let config = try HydraConfiguration(accountID: "AccountID", customerId: "CustomerID", server: .server1)
guard let hydra = try? Hydra.generate(with: config) else {
    Logger.error("Error in configuration generation")
    return nil
}
Logger.updateLogLevel(level: .critical)
do {
    let config = InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: nil)
    inboxCore = try InboxCore(with: config)
    inboxUI = InboxUICore(with: inboxCore!, configuration: HydraInboxUIConfiguration(unreadMessageConfigType: .defaultUnreadConfiguration, readMessageConfigType: .defaultReadConfiguration))
} catch let error {
    print(error)
}
```

```
let config = try HydraConfiguration(accountID: "AccountID", customerId: "CustomerID", server: .server1)
guard let hydra = try? Hydra.generate(with: config) else {
    Logger.error("Error in configuration generation")
    return nil
}
Logger.updateLogLevel(level: .critical)
do {
    let config = InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: nil)
    inboxCore = try InboxCore(with: config)
    inboxUI = InboxUICore(with: inboxCore!, configuration: HydraInboxUIConfiguration(unreadMessageConfigType: .defaultUnreadConfiguration, readMessageConfigType: .defaultReadConfiguration))
} catch let error {
    print(error)
}
```

Example: Using Custom UI Configuration

```
let config = try HydraConfiguration(accountID: "AccountID", customerId: CustomerID, server: .server1)
guard let hydra = try? Hydra.generate(with: config) else { return nil }
Logger.updateLogLevel(level: .critical)
do {
    let config = InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: nil)
    inboxCore = try InboxCore(with: config)
    let unreadConfig: InboxMessageConfiguration = .customConfiguration(.systemIndigo, .white, .white, .white, .systemFont(ofSize: 20, weight: .heavy), .systemFont(ofSize: 15, weight: .bold), .italicSystemFont(ofSize: 10), 4, 6)
    let readConfig: InboxMessageConfiguration = .customConfiguration(.systemPink, .white, .white, .white, .systemFont(ofSize: 15,

 weight: .heavy), .systemFont(ofSize: 10, weight: .bold), .italicSystemFont(ofSize: 10), 2, 4)
    let emptyNotificationsConfiguration = HydraInboxEmptyNotificationsConfiguration(notificationsNotFoundLabelTextColor: .red, notificationsNotFoundLabelFont: .systemFont(ofSize: 15, weight: .regular))
    inboxUI = InboxUICore(with: inboxCore!, configuration: HydraInboxUIConfiguration(unreadMessageConfigType: unreadConfig, readMessageConfigType: readConfig, notificationsNotFoundConfiguration: emptyNotificationsConfiguration, placeholderImage: UIImage(named: "placeholder")))
} catch let error {
    print(error)
}
```

```
let config = try HydraConfiguration(accountID: "AccountID", customerId: CustomerID, server: .server1)
guard let hydra = try? Hydra.generate(with: config) else { return nil }
Logger.updateLogLevel(level: .critical)
do {
    let config = InboxCoreConfiguration(hydraConfig: config, maximumNotificationCount: nil)
    inboxCore = try InboxCore(with: config)
    let unreadConfig: InboxMessageConfiguration = .customConfiguration(.systemIndigo, .white, .white, .white, .systemFont(ofSize: 20, weight: .heavy), .systemFont(ofSize: 15, weight: .bold), .italicSystemFont(ofSize: 10), 4, 6)
    let readConfig: InboxMessageConfiguration = .customConfiguration(.systemPink, .white, .white, .white, .systemFont(ofSize: 15,

 weight: .heavy), .systemFont(ofSize: 10, weight: .bold), .italicSystemFont(ofSize: 10), 2, 4)
    let emptyNotificationsConfiguration = HydraInboxEmptyNotificationsConfiguration(notificationsNotFoundLabelTextColor: .red, notificationsNotFoundLabelFont: .systemFont(ofSize: 15, weight: .regular))
    inboxUI = InboxUICore(with: inboxCore!, configuration: HydraInboxUIConfiguration(unreadMessageConfigType: unreadConfig, readMessageConfigType: readConfig, notificationsNotFoundConfiguration: emptyNotificationsConfiguration, placeholderImage: UIImage(named: "placeholder")))
} catch let error {
    print(error)
}
```

Note: Custom configuration has the following sequence of parameters:.customConfiguration(cellBackgroundColor, cellTitleLabelTextColor, cellMessageLabelTextColor, cellTimeLabelTextColor, cellTitleLabelFont, cellMessageLabelFont, cellTimeLabelFont, cellTitleLabelLineLimit, cellMessageLabelLineLimit)

```
.customConfiguration(cellBackgroundColor, cellTitleLabelTextColor, cellMessageLabelTextColor, cellTimeLabelTextColor, cellTitleLabelFont, cellMessageLabelFont, cellTimeLabelFont, cellTitleLabelLineLimit, cellMessageLabelLineLimit)
```

# API Usage

## HydraInboxCore

### getUnreadNotificationCount()

Use this API to retrieve the count of unread notifications using the instance ofInboxCore. This method returns an integer value.

Example:In the example below, we have set a badge icon on the bell image if there is one or more unread notification(s):

```
guard let inboxCore Application Manager sharedObj inboxCore else
{
  return
}
if inboxCore getUnread NotificationCount() > 0
{
notificationButton setImage Ullmage system Name: "bell.badge" for normal
} 
else 
{
  notificationButton setImage Ullmage system Name: "bell" for normal
}
```

```
guard let inboxCore Application Manager sharedObj inboxCore else
{
  return
}
if inboxCore getUnread NotificationCount() > 0
{
notificationButton setImage Ullmage system Name: "bell.badge" for normal
} 
else 
{
  notificationButton setImage Ullmage system Name: "bell" for normal
}
```

### getNotifications()

Use this API to get the available notifications. This method returns an array ofHydraNotificationPayloadobjects. The configuration provided while initializing the InboxCore instance is used. For more information, refer to theHydraInboxCoreConfigGeneratorsection.

Example:

```
val notifications: List<HydraNotificationPayload> = inboxCore.getNotifications()
```

```
val notifications: List<HydraNotificationPayload> = inboxCore.getNotifications()
```

## handleNotification(notification: HydraNotificationPayload, action: HydraNotificationAction)

This API communicates the action taken on the notification to the SDK. The action should be an enum of typeHydraNotificationAction.

There are two type of actions:

- Use.readwhen the user clicks on the notification, and

`.read`

- .deletewhen the user wants to delete the notification.

`.delete`

Example:

```
inboxCore.handleNotification(notification.notification, HydraNotificationAction.READ)
```

```
inboxCore.handleNotification(notification.notification, HydraNotificationAction.READ)
```

#### handleDeleteAllNotifications()

This API deletes all notifications associated with the current user from the database. Returnstrueif all notifications were deleted successfully, otherwisefalse.

`true`

`false`

Example:

```
if (inboxCore.handleDeleteAllNotifications()) {
    Logger.info("Delete all notifications succeeded")
} else {
    Logger.error("Delete all notifications failed")
}
```

```
if (inboxCore.handleDeleteAllNotifications()) {
    Logger.info("Delete all notifications succeeded")
} else {
    Logger.error("Delete all notifications failed")
}
```

### performNotificationAction(notification: HydraNotificationPayload)

Use this API to perform the action associated with the notification when the user clicks on it.

Example:

```
inboxCore.performNotificationAction(notification.notification)
```

```
inboxCore.performNotificationAction(notification.notification)
```

### setHydraInboxUIDelegate(delegate: HydraInboxUIProtocol?)

Use this API to set the delegate ofInboxCore. The delegate is notified of changes in the database, such as insertion, deletion, or updates of notifications. The view displaying the Notification Center should implement theHydraInboxUIProtocoland use this method.

The Notification Center view can implement thefunc refreshNotificationList()to update the UI and refresh the notifications.

`func refreshNotificationList()`

Example:

```
extension NotificationListViewModel: HydraInboxUIProtocol

{ func refreshNotificationList()
                                                         
{
DispatchQueue.main.async
  { [weak self] in self?.refresh()
}
}
}
```

```
extension NotificationListViewModel: HydraInboxUIProtocol

{ func refreshNotificationList()
                                                         
{
DispatchQueue.main.async
  { [weak self] in self?.refresh()
}
}
}
```

## HydraInboxUI

To show Notification Center, an Application Developer can use either

- showNotificationCenter(with navigationController: UINavigationController)OR

```
showNotificationCenter(with navigationController: UINavigationController)
```

- getNotificationCenter()API

`getNotificationCenter()`

#### showNotificationCenter(with navigationController: UINavigationController)

Use this API to push Notification Center created by the SDK in the given navigationController.

Example:

```
inboxUI.showNotificationCenter(with = navigationController)
```

```
inboxUI.showNotificationCenter(with = navigationController)
```

### getNotificationCenter()

Use this API to obtain the Notification Center created by the SDK. The application can then decide whether to push or present this Notification Center.

Example:

```
val notificationCenterViewController = inboxUI.getNotificationCenter()
navigationController.pushViewController(notificationCenterViewController, animated = true)
```

```
val notificationCenterViewController = inboxUI.getNotificationCenter()
navigationController.pushViewController(notificationCenterViewController, animated = true)
```

#### setHydraInboxUIDelegate(delegate: HydraInboxUIProtocol)

Use this API to set the delegate ofInboxUICore. This delegate is also passed internally to theInboxCoredelegate. By doing so, changes notified byInboxCoreare directly passed to this delegate.

Example:

For instance, if you have a bell icon on the Home screen that should show a badge when there are unread notifications, set the delegate ofInboxUICoreon the Home screen using this method. Implement therefreshNotificationList()method in the Home screen to update the bell icon accordingly:

```
override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        updateNotificationBellIcon()
       self.inboxUI.setInboxUIDelegate(delegate: self)
}
@objc private func updateNotificationBellIcon() {
        guard let inboxCore = ApplicationManager.sharedObj.inboxCore else {
            return
        }
        if inboxCore.getUnreadNotificationCount() > 0 {
            notificationButton.setImage(UIImage(systemName: "bell.badge"), for: .normal)
        } else {
            notificationButton.setImage(UIImage(systemName: "bell"), for: .normal)
        }
    }


extension HomeViewController: HydraInboxUIProtocol {
    func refreshNotificationList() {
        DispatchQueue.main.async { [weak self] in
            self?.updateNotificationBellIcon()
        }
    }
}
```

```
override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        updateNotificationBellIcon()
       self.inboxUI.setInboxUIDelegate(delegate: self)
}
@objc private func updateNotificationBellIcon() {
        guard let inboxCore = ApplicationManager.sharedObj.inboxCore else {
            return
        }
        if inboxCore.getUnreadNotificationCount() > 0 {
            notificationButton.setImage(UIImage(systemName: "bell.badge"), for: .normal)
        } else {
            notificationButton.setImage(UIImage(systemName: "bell"), for: .normal)
        }
    }


extension HomeViewController: HydraInboxUIProtocol {
    func refreshNotificationList() {
        DispatchQueue.main.async { [weak self] in
            self?.updateNotificationBellIcon()
        }
    }
}
```
# In-app messaging

The In-app messaging targets users by displaying messages while they are using your app. These messages are highly effective in providing contextual information and facilitating cross-selling/up-selling on specific screens or actions within your app.

# Prerequisites

- HydraPushNotification framework: Manages in-app messages.

- HydraInAppMessaging framework: Handles silent remote notifications (in-app messages).

# Integration

Add the HydraInAppMessage framework. This framework is responsible for processing in-app messages.

# Initialize InAppMessagingCore object

Initialize the InAppMessagingCore object and create an instance of the InboxCore using the following method:

```
public init(with config: HydraInAppMessageConfigGenerator, environment env: Env = .dev) throws
```

```
public init(with config: HydraInAppMessageConfigGenerator, environment env: Env = .dev) throws
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| config | HydraInAppMessageConfigGenerator | Compulsory | An object of class conforming to HydraInAppMessageConfigGenerator protocol |

| env | Environment | Optional | Either .dev or .unittest |



HydraInAppMessageConfigGeneratorThis value is required and can be generated using the following protocol:

```
public protocol HydraInAppMessageConfigGenerator {
    var hydraConfig: ConfigurationGenerator { get set }
    var notificationCore: NotificationCore? { get set }
    var placeholderImage: UIImage? { get set }
    var appStoreId: String? { get set }
}
```

```
public protocol HydraInAppMessageConfigGenerator {
    var hydraConfig: ConfigurationGenerator { get set }
    var notificationCore: NotificationCore? { get set }
    var placeholderImage: UIImage? { get set }
    var appStoreId: String? { get set }
}
```

| Parameter | Type | Mandatory/Optional | Description |

| --- | --- | --- | --- |

| hydraConfig | ConfigurationGenerator | Compulsory | An instance of Hydra core. |

| notificationCore | NotificationCore | Optional | An instance of Notification core. |

| placeholderImage | UIImage | Optional | An object of UIImage class. |

| appStoreId | String | Optional | Application's app store id. |



Example:

```
let config = try HydraConfiguration(accountID: "AccountID", customerId: "CustomerID", server: .server1)
guard let hydra = try? Hydra.generate(with: config) else {
    Logger.error("Error in configuration generation")
    return nil
}
Logger.updateLogLevel(level: .critical)
do {
    let inAppConfig = HydraInAppMessageConfiguration(hydraConfig: config, notificationCore: notificationCore, appStoreId: "", placeholderImage: nil)
    inAppCore = try InAppMessagingCore(with: inAppConfig, environment: .dev)
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
    let inAppConfig = HydraInAppMessageConfiguration(hydraConfig: config, notificationCore: notificationCore, appStoreId: "", placeholderImage: nil)
    inAppCore = try InAppMessagingCore(with: inAppConfig, environment: .dev)
} catch let error {
    print(error)
}
```

# InApp-supported layouts

![App rating](https://files.readme.io/8b2d8a2-App_rating.png)

App rating

![Feedback](https://files.readme.io/a3f22bb-Feedback.png)

Feedback

![Footer](https://files.readme.io/dc3b779-Footer.png)

Footer

![Header](https://files.readme.io/3bd3e08-Header.png)

Header

![Interstitial](https://files.readme.io/3ee7a54-INTERSTITIAL.png)

Interstitial

![Pop up](https://files.readme.io/5d334ab-POP_UP.png)

Pop up

![Rating](https://files.readme.io/98965d8-Rating.png)

Rating
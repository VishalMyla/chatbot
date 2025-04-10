# Initialise SDK

> 📘A sample applicationHydra Sample Appis available for testing framework integration and APIs.

## 📘A sample applicationHydra Sample Appis available for testing framework integration and APIs.

A sample applicationHydra Sample Appis available for testing framework integration and APIs.

To initialise the Capillary iOS SDK, perform the following:

1. Open the AppDelegate file in your Xcode project.

Open the AppDelegate file in your Xcode project.

2. Locate the methodapplication(_:didFinishLaunchingWithOptions:). If not available, use the below code and create the method.Swiftoptional func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil
) -> Bool

Locate the methodapplication(_:didFinishLaunchingWithOptions:). If not available, use the below code and create the method.

```
application(_:didFinishLaunchingWithOptions:)
```

```
optional func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil
) -> Bool
```

```
optional func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil
) -> Bool
```

3. Add the below code to the method and create the HydraCore instance. You need to create an instance of the SDK for each application separately.Swiftstatic public func generate(with configuration: ConfigurationGenerator,
                                geoData: GeographicDataGenerator? = nil,
                                supportsPushNotifications: Bool = false,
                                deviceScreenInfo: DeviceScreenInfo? = nil) throws -> HydraThe table below provides an overview of the parameters, their corresponding types, descriptions, and whether they are mandatory or optional.ParameterTypeDescriptionMandatory/OptionalHydraConfigurationConfigurationGeneratorAn object of class conforming to ConfigurationGenerator protocolMandatoryGeoDataGeographicDataGeneratorUser's geographic detailsOptionalsupportsPushNotificationsBoolDevice's push notification settingsMandatoryDeviceScreenInfoDeviceScreenInfoDevice screen sizeOptional

Add the below code to the method and create the HydraCore instance. You need to create an instance of the SDK for each application separately.

```
static public func generate(with configuration: ConfigurationGenerator,
                                geoData: GeographicDataGenerator? = nil,
                                supportsPushNotifications: Bool = false,
                                deviceScreenInfo: DeviceScreenInfo? = nil) throws -> Hydra
```

```
static public func generate(with configuration: ConfigurationGenerator,
                                geoData: GeographicDataGenerator? = nil,
                                supportsPushNotifications: Bool = false,
                                deviceScreenInfo: DeviceScreenInfo? = nil) throws -> Hydra
```

The table below provides an overview of the parameters, their corresponding types, descriptions, and whether they are mandatory or optional.

| Parameter | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| HydraConfiguration | ConfigurationGenerator | An object of class conforming to ConfigurationGenerator protocol | Mandatory |

| GeoData | GeographicDataGenerator | User's geographic details | Optional |

| supportsPushNotifications | Bool | Device's push notification settings | Mandatory |

| DeviceScreenInfo | DeviceScreenInfo | Device screen size | Optional |



4. Retrieve the parameter values for the required configuration (HydraConfiguration, GeoData, and DeviceScreenInfo). Use the below code snippets:HydraConfiguration(Mandatory)Swiftpublic protocol ConfigurationGenerator {
    var accountID: String {get set}
    var customerId: String {get set}
    var server: ServerConfig {get set}ParameterTypeDescriptionMandatory/OptionalaccountIDStringAccount ID of partnerMandatorycustomerIdStringPhone/email/external IDMandatoryserverServerConfigServer configurationOptionalGeoData(Optional)This is optional and needs to be passed only if the below values have to be sent to the SDK.Swiftpublic protocol GeographicDataGenerator {
    var country: String? {get set}
    var city: String? {get set}
    var countryCode: String? {get set}
    var timeZone: String {get set}
}DeviceScreenInfo(Optional)This is optional and needs to be passed only if the below values have to be sent to the SDK.Swiftpublic protocol DeviceScreenInfoGenerator {
    var screenWidth: Int {get set}
    var screenHeight: Int {get set}
}ParameterTypeDescriptionMandatory/OptionalscreenWidthIntDevice screen widthMandatoryscreenHeightIntDevice screen heightMandatory

Retrieve the parameter values for the required configuration (HydraConfiguration, GeoData, and DeviceScreenInfo). Use the below code snippets:

1. HydraConfiguration(Mandatory)Swiftpublic protocol ConfigurationGenerator {
    var accountID: String {get set}
    var customerId: String {get set}
    var server: ServerConfig {get set}ParameterTypeDescriptionMandatory/OptionalaccountIDStringAccount ID of partnerMandatorycustomerIdStringPhone/email/external IDMandatoryserverServerConfigServer configurationOptional

HydraConfiguration(Mandatory)

```
public protocol ConfigurationGenerator {
    var accountID: String {get set}
    var customerId: String {get set}
    var server: ServerConfig {get set}
```

```
public protocol ConfigurationGenerator {
    var accountID: String {get set}
    var customerId: String {get set}
    var server: ServerConfig {get set}
```

| Parameter | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| accountID | String | Account ID of partner | Mandatory |

| customerId | String | Phone/email/external ID | Mandatory |

| server | ServerConfig | Server configuration | Optional |



2. GeoData(Optional)This is optional and needs to be passed only if the below values have to be sent to the SDK.Swiftpublic protocol GeographicDataGenerator {
    var country: String? {get set}
    var city: String? {get set}
    var countryCode: String? {get set}
    var timeZone: String {get set}
}

GeoData(Optional)

This is optional and needs to be passed only if the below values have to be sent to the SDK.

```
public protocol GeographicDataGenerator {
    var country: String? {get set}
    var city: String? {get set}
    var countryCode: String? {get set}
    var timeZone: String {get set}
}
```

```
public protocol GeographicDataGenerator {
    var country: String? {get set}
    var city: String? {get set}
    var countryCode: String? {get set}
    var timeZone: String {get set}
}
```

3. DeviceScreenInfo(Optional)This is optional and needs to be passed only if the below values have to be sent to the SDK.Swiftpublic protocol DeviceScreenInfoGenerator {
    var screenWidth: Int {get set}
    var screenHeight: Int {get set}
}ParameterTypeDescriptionMandatory/OptionalscreenWidthIntDevice screen widthMandatoryscreenHeightIntDevice screen heightMandatory

DeviceScreenInfo(Optional)

This is optional and needs to be passed only if the below values have to be sent to the SDK.

```
public protocol DeviceScreenInfoGenerator {
    var screenWidth: Int {get set}
    var screenHeight: Int {get set}
}
```

```
public protocol DeviceScreenInfoGenerator {
    var screenWidth: Int {get set}
    var screenHeight: Int {get set}
}
```

| Parameter | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| screenWidth | Int | Device screen width | Mandatory |

| screenHeight | Int | Device screen height | Mandatory |



8. Initialise the SDK. See the below example:Swiftdo {
            let config = HydraConfiguration(accountID: "account-id", customerId: "customer-id", server: .server1)
            let geoData = GeoData(country: "country", countryCode: "country-code", city: "city", timeZone: "timezone")
            let deviceInfo = DeviceScreenInfo(screenHeight: 00, screenWidth: 00)
            let supportsPushNotifications = true
            
            Hydra.generate(with: config,
                           geoData: geoData,
                           supportsPushNotifications: supportsPushNotifications,
                           deviceScreenInfo: deviceInfo)
        } catch let error {
            print("Failed to initialise Hydra SDK")
        }

Initialise the SDK. See the below example:

```
do {
            let config = HydraConfiguration(accountID: "account-id", customerId: "customer-id", server: .server1)
            let geoData = GeoData(country: "country", countryCode: "country-code", city: "city", timeZone: "timezone")
            let deviceInfo = DeviceScreenInfo(screenHeight: 00, screenWidth: 00)
            let supportsPushNotifications = true
            
            Hydra.generate(with: config,
                           geoData: geoData,
                           supportsPushNotifications: supportsPushNotifications,
                           deviceScreenInfo: deviceInfo)
        } catch let error {
            print("Failed to initialise Hydra SDK")
        }
```

```
do {
            let config = HydraConfiguration(accountID: "account-id", customerId: "customer-id", server: .server1)
            let geoData = GeoData(country: "country", countryCode: "country-code", city: "city", timeZone: "timezone")
            let deviceInfo = DeviceScreenInfo(screenHeight: 00, screenWidth: 00)
            let supportsPushNotifications = true
            
            Hydra.generate(with: config,
                           geoData: geoData,
                           supportsPushNotifications: supportsPushNotifications,
                           deviceScreenInfo: deviceInfo)
        } catch let error {
            print("Failed to initialise Hydra SDK")
        }
```

9. Placeholder

Placeholder

The SDK also allows to set of additional parameters at a later stage, after the SDK has been initialized. You can set the following parameters:

- Customer Id

- Device Token

- InterfaceId/FCM Token

- Notification support ie Users notification settings status

## Updating customer Id

To set a customer Id or to update a customer ID, use the below API. Whenever the customer Id changes in the app, the same must be updated in the SDK.

`public func update(customerID id:String)`

`public func update(customerID id:String)`

Example:

```
hydraCore.update(customerID: "customer-id")
```

```
hydraCore.update(customerID: "customer-id")
```

## Updating device token

You need to update the device's push token to ensure continued receipt of push notifications.  use the below API:

```
public func update(deviceToken id: String)
```

```
public func update(deviceToken id: String)
```

Example:

```
hydraCore.update(deviceToken: "device-token")
```

```
hydraCore.update(deviceToken: "device-token")
```

If you are using Firebase for receiving push notifications, use the below API:

```
public func update((interfaceID id: String)
```

```
public func update((interfaceID id: String)
```

## Updating interfaceId/FCM token

For the application to receive remote notifications properly, you must update the Firebase Cloud Messaging (FCM) token whenever necessary. Use the below API:

```
public func update(interfaceID id: String)
```

```
public func update(interfaceID id: String)
```

Example:

```
hydraCore.update(interfaceID: "FCM-Token")
```

```
hydraCore.update(interfaceID: "FCM-Token")
```

## Updating notification support

You can enable or disable the support for notifications in your application. Use the below API:

```
public func update(notificationSupport status: Bool
```

```
public func update(notificationSupport status: Bool
```

Example:

```
hydraCore.update(notificationSupport: true)
```

```
hydraCore.update(notificationSupport: true)
```

## Updating promotional push notification support

SDK have defined a API -

```
func setPromotionalPushOpted(status: Bool = false)
```

```
func setPromotionalPushOpted(status: Bool = false)
```

Example:

This API can be utilised to set promotional push notification opt status as below:

```
UserDefaults.standard.setPromotionalPushOpted(status: Bool = false)
```

```
UserDefaults.standard.setPromotionalPushOpted(status: Bool = false)
```

## Updating transactional push notification support

SDK have defined a API -

```
func setTransactionalPushOpted(status: Bool = false)
```

```
func setTransactionalPushOpted(status: Bool = false)
```

Example:

This API can be utilised to set transactional push notification opt status as below:

```
UserDefaults.standard.setTransactionalPushOpted(status: Bool = false)
```

```
UserDefaults.standard.setTransactionalPushOpted(status: Bool = false)
```

## Updating console log level

Capillary SDK has a logging mechanism that enables the application to view all the SDK logs. The SDK logs statements at various levels and allows the application to determine the extent of logs it wishes to observe. The application can print records as per its requirements, enabling efficient monitoring and debugging capabilities.

| Level | Description |

| --- | --- |

| error | Error messages indicate a problem that has occurred, but the application may continue to run. |

| warning | Warning messages indicate a potential issue that might lead to problems in the future or unexpected behaviour, but the application continues to run. |

| info | Info messages provide general information about the application's operation. |

| debug | Debug messages provide detailed information about the application's operation, which can be useful for debugging problems. |

| none | SDK will not print any logs on the console |



API:

```
func updateConsoleLogLevel(level: LogLevel)
```

```
func updateConsoleLogLevel(level: LogLevel)
```

> 📘By default, the SDK sets the console log level atdebug.

## 📘By default, the SDK sets the console log level atdebug.

By default, the SDK sets the console log level atdebug.

`debug`

Example:

`Logger.updateLogLevel(level: .critical)`

`Logger.updateLogLevel(level: .critical)`

## Updating remote log level

Hydra SDK provides support for Remote Logging Mechanism allowing the application to sync the logs with the server.

The Remote Logger module will sync all the logs with levels greater than or equal to the remote log level set by the application. Below API is exposed by SDK for setting the level of remote logs.

```
func updateRemoteLogLevel(level: LogLevel)
```

```
func updateRemoteLogLevel(level: LogLevel)
```

Below are different log levels.

| Level | Description |

| --- | --- |

| error | SDK will sync onlyerrorlevel logs |

| warning | SDK will sync onlywarning and errorlevel logs |

| info | SDK will syncinfo, warning and errorlevel logs |

| debug | SDK will syncall the logswith the server |

| none | SDK willnot sync any logswith server |



Example: This is how the remote log level can be set

`Logger.updateLogLevel(level: .critical)`

`Logger.updateLogLevel(level: .critical)`

> 📘By default, the SDK sets the remote log level atnone.

## 📘By default, the SDK sets the remote log level atnone.

By default, the SDK sets the remote log level atnone.

`none`
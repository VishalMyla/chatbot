# Set up events tracking

Capillary SDK allows you to record events using the SDK for information about your app's usage patterns, and segment users based on their actions. For example, events such as signing in, launching an app, viewing a product, etc are used to track individual actions performed by users in your app or website.

There are 2 types of events:

1. Standard events- These events are configured in the SDK and cannot be removed.  With Capillary SDK, you can record user-specific information such as their username, first name, last name, email, mobile number, and other custom information, along with system information, in the events. This information can then be used to run campaigns based on user segregation at different levels.

2. Behavioural events- The events resource also allows you to create behavioural events to track any other important user interactions for your business. For example, events such as forgot password, cart abandonment, etc. These events can be further defined by event attributes such as price, quantity, and category. These events need to be configured in your org settings.For behavioural events, you need to do configuration in the Hydraconfig and organisation settings.

# Sending standard events to SDK

The SDK offers four event-tracking APIs for recording for reporting user action events. These APIs enable you to recognize visitors, monitor events, generate events dynamically, and track the activities of users, including any properties that describe their actions. This information can be used to gain insights into user behavior and create campaigns based on user segmentation at different levels. For example, with the user event data, you can send welcome messages to customers through e-mail or offer different offers based on user age, gender, etc.

The SDK has below standard event tracking APIs:

1. Sign In

2. Sign Up

3. User Update

4. Sign Out

## Sign In

This API enables reporting of a SignIn event to the SDK.

```
public func reportUserSignIn(data: UserSignInGenerator, customData: Attributes)
```

```
public func reportUserSignIn(data: UserSignInGenerator, customData: Attributes)
```

- UserSignInGenerator: This object holds the necessary basic information. You can generate this object by organizing the required information into a suitable container or object that adheres to theUserSignInGeneratorprotocol.

`UserSignInGenerator`

`UserSignInGenerator`

- customData(Optional): This allows adding any extra information or custom data associated with the event being reported. The custom data should be added in the format of aDictionary<String, Any>.

`customData`

`Dictionary<String, Any>`

| Parameters | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| firstName | String | User first name | Mandatory |

| lastName | String | User last name | Mandatory |

| email | String | User email address | Optional |

| phone | String | User mobile number | Mandatory |

| customData | Dictionary | Additional information associated with the event being reported. | Optional |



Example 1:SignIn event with  emptycustomDataparameter.

`customData`

```
let userSignInData = UserSignInData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignIn(data: userSignInData, customData: [:])
```

```
let userSignInData = UserSignInData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignIn(data: userSignInData, customData: [:])
```

[[email protected]](/cdn-cgi/l/email-protection)

Example 2:SignIn event withcustomDataattributes age and gender. This allows for the logging of specific attributes related to the user's age and gender during the user sign-in report.

`customData`

```
let userSignInData = UserDetails(firstName: "first-name", lastName: "last-name", email: nil, phone: "xxxxxxxx")
hydraCore.reportUserSignIn(data: userSignInData, customData: [“Age”: “25”, “Gender”: “Male”])
```

```
let userSignInData = UserDetails(firstName: "first-name", lastName: "last-name", email: nil, phone: "xxxxxxxx")
hydraCore.reportUserSignIn(data: userSignInData, customData: [“Age”: “25”, “Gender”: “Male”])
```

Example 3:SignIn event withcustomDataattributes age, gender and email.

`customData`

```
let userSignInData = UserSignInData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignIn(data: userSignInData, customData: [“Age”: “25”, “Gender”: “Male”])
```

```
let userSignInData = UserSignInData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignIn(data: userSignInData, customData: [“Age”: “25”, “Gender”: “Male”])
```

[[email protected]](/cdn-cgi/l/email-protection)

## Sign Up

This API enables reporting of a SignUp (user registration) event to the SDK.

```
public func reportUserSignUp(data: UserSignUpGenerator, customData: Attributes)
```

```
public func reportUserSignUp(data: UserSignUpGenerator, customData: Attributes)
```

- UserSignUpGenerator: This object holds the necessary basic information. You can generate this object by organizing the required information into a suitable container or object that adheres to theUserSignUpGeneratorprotocol.

`UserSignUpGenerator`

`UserSignUpGenerator`

- customData(Optional): This allows adding any extra information or custom data associated with the event being reported. The custom data should be added in the format of aDictionary<String, Any>.

`customData`

`Dictionary<String, Any>`

| Parameters | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| firstName | String | User first name | Mandatory |

| lastName | String | User last name | Mandatory |

| email | String | User email address | Optional |

| phone | String | User mobile number | Mandatory |

| customData | Dictionary | Additional information associated with the event being reported. | Optional |



Example 1:SignUp event with emptycustomDataparameter.

`customData`

```
let userSignUpData = UserSignUpData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignUp(data: userSignUpData, customData: [:])
```

```
let userSignUpData = UserSignUpData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignUp(data: userSignUpData, customData: [:])
```

[[email protected]](/cdn-cgi/l/email-protection)

Example 2:SignUp event withcustomDataattributes age and gender. This allows for the logging of specific attributes related to the user's age and gender during the user sign-in report.

`customData`

```
let userSignUpData = UserDetails(firstName: "first-name", lastName: "last-name", email: nil, phone: "xxxxxxxx")
hydraCore.reportUserSignUp(data: userSignUpData, customData: [“Age”: “25”, “Gender”: “Male”])
```

```
let userSignUpData = UserDetails(firstName: "first-name", lastName: "last-name", email: nil, phone: "xxxxxxxx")
hydraCore.reportUserSignUp(data: userSignUpData, customData: [“Age”: “25”, “Gender”: “Male”])
```

Example 3:SignUp event withcustomDataattributes age, gender and email.

`customData`

```
let userSignUpData = UserSignUpData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignUp(data: userSignUpData, customData: [“Age”: “25”, “Gender”: “Male”])
```

```
let userSignUpData = UserSignUpData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserSignUp(data: userSignUpData, customData: [“Age”: “25”, “Gender”: “Male”])
```

[[email protected]](/cdn-cgi/l/email-protection)

## User profile update

This API enables reporting of a user details update event to the SDK.

```
public func reportUserProfileUpdate(data: UserProfileUpdateGenerator, customData: Attributes, subscriptions: [Any]? = nil)
```

```
public func reportUserProfileUpdate(data: UserProfileUpdateGenerator, customData: Attributes, subscriptions: [Any]? = nil)
```

- UserProfileUpdateGenerator: This object holds the necessary basic information. You can generate this object by organizing the required information into a suitable container or object that adheres to theUserProfileUpdateGeneratorprotocol.

`UserProfileUpdateGenerator`

`UserProfileUpdateGenerator`

- customData(Optional): This allows adding any extra information or custom data associated with the event being reported. The custom data should be added in the format of aDictionary<String, Any>.

`customData`

`Dictionary<String, Any>`

| Parameters | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| firstName | String | User first name | Optional |

| lastName | String | User last name | Optional |

| email | String | User email address | Optional |

| phone | String | User mobile number | Optional |

| customData | Dictionary | Additional information associated with the event being reported. | Optional |

| subscriptions | Array | The subscriptions list for the logged in user. | Optional |



Example 1:User profile update event with  emptycustomDataparameter.

`customData`

```
let userProfileUpdateData = UserProfileUpdateData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserProfileUpdate(data: userProfileUpdateData, customData: [:])
```

```
let userProfileUpdateData = UserProfileUpdateData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserProfileUpdate(data: userProfileUpdateData, customData: [:])
```

[[email protected]](/cdn-cgi/l/email-protection)

Example 2:User profile update withcustomDataattributes age and gender. This allows for the logging of specific attributes related to the user's age and gender during the user sign-in report.

`customData`

```
let userProfileUpdateData = UserProfileUpdateData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserProfileUpdate(data: userProfileUpdateData, customData: [“Age”: “25”, “Gender”: “Male”])
```

```
let userProfileUpdateData = UserProfileUpdateData(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCore.reportUserProfileUpdate(data: userProfileUpdateData, customData: [“Age”: “25”, “Gender”: “Male”])
```

[[email protected]](/cdn-cgi/l/email-protection)

Example 3:User profile update event withsubscriptionparameter.

`subscription`

```
var subscriptions: [HydraSubscription] = []
var subscription: HydraSubscription = HydraSubscription(channel: "EMAIL", priority: "BULK", type: "OPTIN")
 subscriptions.append(subscription)
 subscription = HydraSubscription(channel: "PUSH", priority: "BULK", type: "OPTIN")
 subscriptions.append(subscription)
let userProfileUpdateData = UserDetails(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCoreSDK.reportUserProfileUpdate(data: userProfileUpdateData, customData: [:], subscriptions: subscriptions)
```

```
var subscriptions: [HydraSubscription] = []
var subscription: HydraSubscription = HydraSubscription(channel: "EMAIL", priority: "BULK", type: "OPTIN")
 subscriptions.append(subscription)
 subscription = HydraSubscription(channel: "PUSH", priority: "BULK", type: "OPTIN")
 subscriptions.append(subscription)
let userProfileUpdateData = UserDetails(firstName: "first-name", lastName: "last-name", email: "[email protected]", phone: "xxxxxxxx")
hydraCoreSDK.reportUserProfileUpdate(data: userProfileUpdateData, customData: [:], subscriptions: subscriptions)
```

[[email protected]](/cdn-cgi/l/email-protection)

## Sign Out

This API enables reporting of a sign-out event to the SDK.

```
public func reportUserSignOut(customData: [String: Any])
```

```
public func reportUserSignOut(customData: [String: Any])
```

To log sign-out events, you can call the API without providing any data. This action removes all the user-related basic information, such as first name and mobile number, that was previously provided in the session.

Example

```
hydraCore.reportUserSignOut(customData: [:])
```

```
hydraCore.reportUserSignOut(customData: [:])
```

# Sending behavioural events to SDK

These events can be used to track user actions throughout the application. These events are valid only if the SDK receives theSignInorSignUpevents. Events are Invalid if they are called after aSignOutevent. In order to track these events, users have to pass event names (NotNull or NonEmpty) and attributes (optional).

`SignIn`

`SignUp`

`SignOut`

The API below enables the application to send the custom events:

```
public func reportBehavioralEvent(name: String, customAttributes attributes: Attributes)
```

```
public func reportBehavioralEvent(name: String, customAttributes attributes: Attributes)
```

| Parameter | Type | Description | Mandatory/Optional |

| --- | --- | --- | --- |

| event_name | String | Name of the event | Compulsory |

| attributes | Dictionary | The custom attributes map for the events | Optional |



Example:

```
hydraCore.reportBehavioralEvent(name: "event-name",
                                                        customAttributes: ["additional-info" : "additional-details",
                                                                                      ["additional-info" : "additional-details"])
```

```
hydraCore.reportBehavioralEvent(name: "event-name",
                                                        customAttributes: ["additional-info" : "additional-details",
                                                                                      ["additional-info" : "additional-details"])
```
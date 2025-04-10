# iOS SDK

Capillary SDK provides you with essential analytics capabilities and helps you engage better with your users throughevents tracking,push notificationsand anotification center.

The SDK consists of the following frameworks:

- HydraCore- This framework is the base for all other frameworks. The framework provides various infrastructure modules such as network, data persistence and log management, and in addition, also provides API(s) for Analytics(Event) reporting.

- HydraPushNotification-This framework helps in the following:simplifying the integration of push/remote notifications for all Capillary customersenabling the delivery of notificationscapturing and reporting data for analyticsensuring the posting of DLR (Delivery Receipt) events at all stages.

- simplifying the integration of push/remote notifications for all Capillary customers

- enabling the delivery of notifications

- capturing and reporting data for analytics

- ensuring the posting of DLR (Delivery Receipt) events at all stages.

- HydraPushNotificationServiceExtension- This can be integrated with the notification content extension of the host application and enables customising and modifying the original notifications before it is presented to the user.

- HydraInAppMessage- This enables to display in-app messages using popup notifications.

- HydraInboxCore- Manages all remote notifications received by the application and stores them locally to display in the Notification Center.

- HydraInboxUI- Populates the Notification Center with all remote notifications received by the application.

# Prerequisites

iOS SDK version 14.3 or above

# Supported platforms

- Mobile(iOS)

- Tablet(iPadOS)

# Version

HydraSDK 1.3.0 and above.

# iOS SDK Size

| SDK library | Size |

| --- | --- |

| HydraCore | 12.9 MB |

| HydraInAppMessage | 2 MB |

| HydraPushNotification | 1.4 MB |

| HydraPushNotificationServiceExtension | 1.1 MB |



To integrate your mobile apps with Capillary iOS SDK, perform the below steps:

- Install SDK

- Initialise SDK

- Set up events tracking

- Configure push notifications
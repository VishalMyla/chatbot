# FAQs - store center and InStore

What databases are used for In-Store and Store Center locally?Store Center uses SQL Express 2008 R2 and MS SQL Server, while InStore uses SQLite.

Do we have to open up ports before installing Store Center or InStore?You do not have to open up ports for installation. However, we run the Storecenter WCF (Windows Communication Foundation) service on port 8736, and Store Center listens on port number 6969. If these ports are used by some other programs, we may have to handle the configuration accordingly.

What are the prerequisites for installing Store Center and InStore?You require Microsoft .Net 3.5 SP1 Framework and a custom setup built in-house.

What registry entries are created while installing Store Center and InStore?Storecenter Installer:

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService]

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite]

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\StoreCenter]

Instore Installer:

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService]

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite]

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStore]

Instore and StoreCenter ClicOnce Installer:

HKEY_CURRENT_USER\SOFTWARE\Capillary\InTouch

What service does Store Center and InStore use?Store Center and InStore currently use the .Net 3.5 SP1 service

How does the data flow to cloud?Store Center and InStore have a local database that store all the transactions happening on the POS. During a specified interval, this data is synced to the Capillary Cloud through our InTouch APIs.

What connectivity protocols are used by Store Center and InStore?Store Center communicates with the InStore application through TCP/IP, while it communicates with the Capillary Cloud through HTTP.The InStore application communicates with the Capillary Cloud through HTTP, but it can be configured to communicate through HTTPS as well.

Is there an encryption done while transferring the data?Currently the data is transferred without any encryption.

Should SQLite also be installed if MSSQL Express is already installed?You do not have to install Sqlite for Instore. InStore installation by default contains Sqlite. For Store Center, if the database is already installed, you must point the Store Center to that database server.

How do the older and newer Store Center Installers differ?While installing Store Center using the older Installer (ClicOnce), you must first install SQLExpress. If there is no SQL Express installed prior to running the new installer, it installs SQLExpress 2008 R2 automatically.

What version of SQLite is currently used?The SQLite version currently used is 1.0.90.0

Which features are still available when InStore is offline?The following table lists which features are still accessible when InStore is offline.

| Features | Available Offline | Notes |

| --- | --- | --- |

| Customer Registration/Update | Yes |  |

| Capture Transaction | Yes |  |

| Capture Return Transaction | No |  |

| Customer Search | Yes |  |

| Transaction Search | No |  |

| Online Search | No |  |

| Advanced Customer Search | No |  |

| Customer Summary | Yes | Limited, depending on the Clienteling and Non Clienteling versions. |

| Point Redemption | No |  |

| Coupon Redemption | No |  |

| View Call Tasks | Yes | Call tasks are synced on a nightly basis. On syncing, call tasks can be viewed offline too. |

| Close/Change Call Task Status | No |  |

| View/Edit Customer Notes | No |  |

| View/Edit Customer Preferences | No |  |

| View Transaction History Screen | No |  |

| View Interaction History | No |  |

| Intelligent Notifications | Yes | Limited Capability. Some notifications are available only when Instore is online, while some are available when InStore is offline. |

| Customer Feedback | No |  |

| View Store Terminal Report | No |  |

| View Points Balance | Yes* | *The points balance is based on last sync completion. Points data might be outdated. |

| View Customer Active Coupons | Yes* | *The active coupons list is based on last sync completion. The active coupons list might be outdated. |

| Customer Profile - Refresh | No |  |

| Product Search | No | This is a Clienteling feature. |

| Reminder Notification | Yes |  |

| Gift Cards (Redeem/Recharge) | No |  |

| Mobile Change Request | Yes |  |

| Email Change Request | Yes |  |

| Subscription | No |  |

| Referral | No |  |



Updatedover 1 year ago
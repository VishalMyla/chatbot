# Update association detailsput

# Query parameter

| Parameter | Description |

| --- | --- |

| source | FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE, ALL |

| accountId | Account ID of the customer |



# Body Parameter

| Parameter | Description |

| --- | --- |

| loyaltyType* | Loyalty status of the customer. |

| profiles | Meta information of the customer. |

| identifiers* | Identifiers of the customer in type and value. |

| type | Type of the customer identifier. |

| value | Value of the specified identifier. |

| seriesId | Card series ID (for card series generated in Capillary). |

| seriesCode | Unique card series code (for external card series). |

| statusLabel | User defined card status. |

| lastViewedDate** | Date when the customer recently opened the app. |

| loyaltyProgramEnrollments | Lets you enroll new customers in the loyalty program. |

| programId | Unique ID of the loyalty program in which you want to enroll. |

| tierNumber | Sequence number of the tier that you want to allocate to the customer. |

| loyaltyPoints | Loyalty points to credit in customer's account. |

| tierExpiryDate | Expiry date and time of the specified tier. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone). |

| pointsExpiryDate | Expiry date and time of the points issued. Supported Format: YYYY-MM-DDTHH:MM:SS+/-(time-zone). |

| hierarchyCode | Unique code of the hierarchy to associate with the customer/company. |

| roleCode | Pre defined role code. |

| childCustomers | Details of child customers. |

| profiles | Details of the customer to associate. |

| Firstname | First name of the customer. |

| Lastname | Last name of the customer. |

| identifiers* | Identifiers of the customer in type and value. |

| type | Type of the customer identifier. |

| value | Value of the specified identifier. |

| commChannels | Available communication channels of the customer. |

| createDate | Time and date of registration inYYYY-MM-DDTHH:MM:SS+HH:MMformat. Example: 2016-06-23T19:11:18+08:00 |

| associatedWith | The TILL code associated with the customer registration. |

| extendedFields | Customer level extended field details of the customer in key. |

| fields | Custom field details of customers in key-value pairs. |

| fleetCompany | Details of |

| externalId | External ID of the company. |



`YYYY-MM-DDTHH:MM:SS+HH:MM`

`Try It!`
# Associate Customerpost

> 📘Batch support is for normal customer registration

## 📘Batch support is for normal customer registration

Batch support is for normal customer registration

# Request Body Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| loyaltyType | enum | Loyalty status of the customer. |

| profiles | obj | Meta information of the customer. |

| identifiers | obj | Identifiers of the customer in type and value. |

| type | enum | Type of the customer identifier. . |

| value | string | Value of the specified identifier. |

| seriesId | int | Card series ID (for card series generated in Capillary). . |

| seriesCode | string | Unique card series code (for external card series). |

| statusLabel | string | User defined card status. |

| lastViewedDate | Date | Date when the customer recently opened the app. |

| loyaltyProgramEnrollments | obj | Lets you enroll new customers in the loyalty program. |

| programId | int | Unique ID of the loyalty program in which you want to enroll. |

| tierNumber | int | Sequence number of the tier that you want to allocate to the customer. |

| loyaltyPoints | int | Loyalty points to credit in customer's account. |

| tierExpiryDate | date-time | Expiry date and time of the specified tier. |

| pointsExpiryDate | date-time | Expiry date and time of the points issued. |

| hierarchyCode | string | Unique code of the hierarchy to associate with the customer/company. All configurations set for the hierarchy will be applicable to the customer/company. |

| roleCode | string | Pre defined role code - Role of the customer in the hierarchy. |

| parentCustomer | obj | User profile of the parent customer. |

| fleetCompany | obj | Details of the company the customer is associated with. |

| childCustomers | obj | Profiles of the child customers. |

| externalId | string | External ID of the company. |

| profiles | obj | Details of the customer to associate. |

| Firstname | string | First name of the customer. |

| Lastname | string | Last name of the customer. |

| identifiers | obj | Identifiers of the customer in type and value. |

| type | enum | Type of the customer identifier. |

| value | string | Value of the specified identifier. |

| commChannels | obj | Available communication channels of the customer. |

| createDate | date-time | Time and date of registration inYYYY-MM-DDTHH:MM:SS+HH:MMformat. |

| associatedWith | string | The TILL code associated with the customer registration. |

| extendedFields | obj | Customer level extended field details of the customer in key:value pairs. |

| fields | obj | Custom field details of customers in key-value pairs. |



`YYYY-MM-DDTHH:MM:SS+HH:MM`

# Response parameter

| Parameter | Description |

| --- | --- |

| id | Unique ID of the entity. |

| profiles | Array of profiles associated with the entity. |

| firstName | First name of the profile. |

| lastName | Last name of the profile. |

| attribution | Information about the profile's creation and modification. |

| fields | Additional fields associated with the profile. |

| identifiers | Array of identifiers associated with the profile. |

| commChannels | Communication channels (like email, mobile) associated with the profile. |

| source | Source of the profile. |

| userId | User ID associated with the profile. |

| accountId | Account ID associated with the profile. |

| conflictingProfileList | List of profiles that have conflicts. |

| autoUpdateTime | Time of automatic update of the profile. |

| loyaltyInfo | Loyalty information associated with the entity. |

| segments | Segments associated with the entity. |

| referralCode | Referral code for the entity. |

| associationDetails | Details about the association of the entity. |

| extendedFields | Extended fields associated with the entity. |

| warnings | Array of warnings related to the entity. |

| childEntities | Array of child entities associated with the main entity. |

| childCount | Total count of child entities. |

| childFailureCount | Count of child entities that failed. |

| childSuccessCount | Count of child entities that succeeded. |



`Try It!`
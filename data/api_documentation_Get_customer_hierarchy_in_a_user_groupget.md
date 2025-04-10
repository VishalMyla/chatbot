# Get customer hierarchy in a user groupget

> ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

## ❗️Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

Make sure that you have appropriate access control configured. For more information, seeaccess group documentation.

# API endpoint

{host}/v2/customers/bulk?{queryparameters}

```
{host}/v2/customers/bulk?{queryparameters}
```

# Query parameters

| Query Parameter | Type | Description |

| --- | --- | --- |

| source | string | Indicates the origin of the data. |

| associationEntityType | string | Type of entity associated. |

| associationEntityIdentifierType | string | The type of identifier used for the associated entity. |

| associationEntityIdentifierValue | integer/string | The actual identifier value for the associated entity. |

| limit | integer | The maximum number of records to return per page. |

| offset | integer | The starting point in the list of records. |

| sortOrder | string | The order in which the data is sorted. |

| includeNoOfChildren | boolean | A flag indicating whether to include the number of children entities. |

| includeCustomerAssociateDetail | boolean | A flag indicating whether to include details of associated customers. |



# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| entity | object | An object containing information about customers and their parent relationships. |

| customers | array[object] | An array containing customer profiles and related details. |

| profiles | array[object] | An array containing customer profile details such as first name, last name, identifiers, communication channels, source, user ID, account ID, and more. |

| firstName | string | The first name of the customer. |

| lastName | string | The last name of the customer. |

| fields | object | Additional fields associated with the customer profile. |

| identifiers | array[object] | An array containing customer identifier details such as type and value. |

| type | string | The type of identifier, e.g., "mobile". |

| value | string | The value of the identifier, e.g., mobile number. |

| commChannels | array[object] | An array containing communication channel details such as type, value, primary status, verification status, meta attributes, and attributes. |

| type | string | The type of communication channel, e.g., "mobile". |

| value | string | The value of the communication channel, e.g., mobile number. |

| primary | boolean | Indicates if the communication channel is the primary one. |

| verified | boolean | Indicates if the communication channel is verified. |

| meta | object | Meta attributes associated with the communication channel. |

| source | string | The source of the customer data, e.g., "INSTORE". |

| userId | integer | The unique identifier of the user. |

| accountId | string | The account ID associated with the customer. |

| conflictingProfileList | array | An array containing conflicting profile information. |

| autoUpdateTime | string | The date and time when the customer profile was last updated. |

| identifiersAll | array[object] | An array containing all identifier details for the customer. |

| roleCode | string | A string representing the role code associated with the customer profile. |

| createdDate | string | The date and time when the customer profile was created. |

| noOfChildren | integer | The number of children associated with the customer. |

| defaultChild | boolean | Indicates whether the customer is the default child. |

| parentCustomer | object | An object containing details about the parent customer of the specified customer. |

| extendedFields | object | An object containing extended fields associated with the customer profile, such as city and gender. |

| city | string | The city associated with the customer. |

| gender | string | The gender of the customer. |

| count | integer | An integer indicating the count of entities in the response. |

| errors | array | An array containing any errors encountered during the request. |

| warnings | array | An array containing any warnings generated during the request. |

| success | boolean | A boolean indicating the success status of the request. |



`Try It!`
# Create Event (Custom)post

### Request Body Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| eventName* | string | Name of the event. |

| actions* | enum | Destination of the event. Values:EMFConsumerfor EMF related events: Loyalty, DVS, and Communication, EIConsumer for Essential Insights. |

| description | string | Short description for the event. |

| fields | obj | Configure fields for the current event with attributes:name,type, andvalue. The various attributes available are:-addCustomerIfNotExists- Adds the customer if the customer does not exist.-isRequired- Marks the attribute as mandatory-isUniqueKeyField- Includes the attribute, to the unique key. Once defined as a unique key field, this attribute becomes mandatory and needs to be marked asisRequired. By default, customer identifier and event name are already part of the unique key.-isPsiData- Mark the field as Protected Sensitive Information. For more information refer to,Classify Potentially Sensitive Information (PSI).Note- You cannot enableisPsiDatafor the mandatory customer identifier field. |

| name | string | Specify the name of the field. |

| type | enum | Specify the type of the attribute. Values:tillCode,couponCode,customer,productSku,productBrand,productCategory,string,double. |

| addCustomerIfNotExists | obj | Set this value totrueto allow registering new customers into the loyalty program automatically |

| valueType | enum | Data-type of the attribute. For example,Boolean,Enum,String. |

| value | string | Value of the attribute based on itsvalueType.For example, ifvalueTypeis Boolean, value could be eithertrueorfalse. |

| identifierType | Object | Specify the identifier type and its value |

| value | String | Supported values: userId, mobile, email, externalId, wechat, martjackId, cuid, fbid, unionId, fcmToken, line, cardnumber, cardExternalId |

| valueType | String | Value for the identifier type |



`EMFConsumer`

`name`

`type`

`value`

`addCustomerIfNotExists`

`isRequired`

`isUniqueKeyField`

`isRequired`

`isPsiData`

[Classify Potentially Sensitive Information (PSI)](/docs/classify-potentially-sensitive-information-psi)

`isPsiData`

`tillCode`

`couponCode`

`customer`

`productSku`

`productBrand`

`productCategory`

`string`

`double`

`true`

`Boolean`

`Enum`

`String`

`valueType`

`valueType`

`true`

`false`

For information on event uniqueness check, seeEvent uniqueness check.

`Try It!`
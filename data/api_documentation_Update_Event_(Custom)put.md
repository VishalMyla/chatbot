# Update Event (Custom)put

### Request Body Parameters

| Parameter | Type | Description |

| --- | --- | --- |

| eventName* | string | Name of the event. |

| actions* | enum | Destination of the event. Values:EMFConsumerfor EMF related events: Loyalty, DVS, and Communication, EIConsumer for Essential Insights. |

| description | string | A short description for the event. |

| fields | obj | Configure fields for the current event with attributes:name,type, andvalue.-addCustomerIfNotExists- Adds the customer if the customer does not exist.-isRequired- Marks the attribute as mandatory-isUniqueKeyField- Includes the attribute, to the unique key. Once defined as a unique key field, this attribute becomes mandatory and needs to be marked asisRequired. By default, customer identifier and event name are already part of the unique key. |

| name | string | Name of the field. |

| type | enum | Specify the type of the attribute. Values:tillCode,couponCode,customer,productSku,productBrand,productCategory,string,double. |

| addCustomerIfNotExists | obj | Set this value totrueto allow registering new customers in to the loyalty program automatically |

| valueType | enum | Data-type of the attribute. For example,Boolean,Enum,String. |

| value | string | Value of the attribute based on itsvalueType.For example, ifvalueTypeis Boolean, value could be eithertrueorfalse. |



`EMFConsumer`

`name`

`type`

`value`

`addCustomerIfNotExists`

`isRequired`

`isUniqueKeyField`

`isRequired`

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

`Try It!`
# Simulation transaction addpost

This API enables the workflow simulation of a transaction and helps to demonstrate the benefits that the customers will receive with the transaction. It functions as a wrapper for the existing transaction add v2 API, allowing this process without performing any database writes. For more information on workflow simulation, refer to theworkflow simulation documentation.

> 👍For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# Prerequisites

- Enable configCONF_ENABLE_SIMULATION_API_MODE

`CONF_ENABLE_SIMULATION_API_MODE`

- Write access to the Event simulation access group. For information on access groups, refer to theaccess group documentation.

# Rate limit

Refer torate limit documentation.

# API endpoint example

https://eu.api.capillarytech.com/v2/simulation/transactions?identifierName=email&[email protected]

```
https://eu.api.capillarytech.com/v2/simulation/transactions?identifierName=email&[email protected]
```

[[email protected]](/cdn-cgi/l/email-protection)

# Request body parameters

| Parameter(Parameters marked with * sign are mandatory) | Type | Description |

| --- | --- | --- |

| type* | Enum | Type of transactions - Regular, Return, Mixed |

| billAmount* | string | Total bill amount |

| billNumber* | string | Bill number |

| addWithLocalCurrency | boolean | Indicates local currency usage |

| lineItemsV2 | array | An array containing item-level parameters |

| customFields | object | An object containing custom field parameters.Note:The custom fields are not taken into consideration for simulation. |

| extendedFields | object | An object containing extended field parameters |



> 📘NoteYou can include all the body parameters permitted in theregular transaction add APIexcept rawSideEffects  and use_async query param. Please note that the list provided above is not exhaustive and does not include all allowable body parameters.

## 📘Note

Note

You can include all the body parameters permitted in theregular transaction add APIexcept rawSideEffects  and use_async query param. Please note that the list provided above is not exhaustive and does not include all allowable body parameters.

# Request query parameters

| Parameter(Parameters marked with * sign are mandatory) | Type | Description |

| --- | --- | --- |

| identifierName* | Enum | Pass any of the registered identifier name of the customer.Values:mobile,email,externalId,id,wechat,martjackId,fbId(Facebook ID),cardnumber,cardExternalId. |

| identifierValue* | string | Pass the respective identifier value. For example if identifierType is mobile, identifierValue is mobile number. |

| source | Enum | Pass the source from which the transaction is made. Values:INSTORE(for InStore),WECHAT(WeChat),MARTJACK(AnywhereCommerce),WEB_ENGAGE(Web-engage integration),ECOMMERCE(ECOMMERCE),JD(JD),TAOBAO(Taobao),TMALL(TMall),FACEBOOK(Facebook),WEBSITE(other website),OTHERS(any other source). |

| accountId | string | For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for INSTORE source. |



`mobile`

`email`

`externalId`

`id`

`wechat`

`martjackId`

`fbId`

`cardnumber`

`cardExternalId`

`INSTORE`

`WECHAT`

`MARTJACK`

`WEB_ENGAGE`

`ECOMMERCE`

`JD`

`TAOBAO`

`TMALL`

`FACEBOOK`

`WEBSITE`

`OTHERS`

# Response parameters

| Parameter | Type | Description |

| --- | --- | --- |

| warnings | Array | An array containing any warnings related to the simulation. |

| errors | Array | An array containing any errors encountered during the simulation. |

| simulatedPointsBreakup | Object | An object providing a breakdown of points earned from the simulation event. |

| eventDetails | Object | Details about the simulation event, such as max conversion date, event time, and till ID. |

| billDetails | Object | Details about the bill associated with the simulation, including bill type, number, and amount. |

| pointsEarned | Object | Information about the points earned during the simulation. |

| promised | Array | An array of promised points, including their value, conversion date, program ID, and name. |

| lineItems | Array | An array of line items associated with the bill, each containing details and earned points. |

| regular | Array | An array of regular points earned, including their value, expiration date, program ID, and name. |

| customFields | Array | An array of custom fields associated with the simulation event.Note:The custom fields are not taken into consideration for simulation. |

| extendedFields | Array | An array of extended fields, such as "room_nights_count," with their respective values. |

| paymentModes | Array | An array containing information about payment modes used in the simulation. |

| pointInTimeSlabs | Array | An array of point-in-time slabs, including slab number, name, program ID, and default status. |



`Try It!`
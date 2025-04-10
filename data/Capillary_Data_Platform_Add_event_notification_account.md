# Add event notification account

An event notification allows you to send triggered notifications to external webhooks such as your client webhooks.

To create a new event notification, follow these steps.

1. Log on to InTouch of your cluster and navigate toProfileicon >Organization Settings>Event Notifications.

![1336](https://files.readme.io/56d5790-cY8Vk20STgJtKHSEicRqu2m9cb1kACRgpQ.png)

1. ClickNew notification.

![615](https://files.readme.io/89054e1-HbYUddyuarSMTUpzVuqrDExMHSix4U6lSQ.png)

1. InWebhookname, specify a name for the event notification.

2. InWebhook URL, enter the Webhook URL that you want to associate with the event notification. To get a Webhook URL, you need to have a Webhook account. You can use the URL generated for the account to configure event notifications.

3. InHeader, enter the required headers (for integration authentication) as keys and values required to authenticate event notification.

![513](https://files.readme.io/d901e71-NbgghBqyE9QipMdNJnib3bugfN7eERNzxQ.png)

1. InPayload enrichment settings, select the entries that you want to capture in the current notification. This provides better data enrichment by including the selected entry parameters in the payload.📘NoteBy default, the customer identifiers are not available in the event notification payload. The presence of identifiers in the payload depends on:How the API was called - the identifier used to make the API call will be included in the payloadWhether identifier enrichment is explicitly enabled

> 📘NoteBy default, the customer identifiers are not available in the event notification payload. The presence of identifiers in the payload depends on:How the API was called - the identifier used to make the API call will be included in the payloadWhether identifier enrichment is explicitly enabled

## 📘Note

Note

By default, the customer identifiers are not available in the event notification payload. The presence of identifiers in the payload depends on:

- How the API was called - the identifier used to make the API call will be included in the payload

- Whether identifier enrichment is explicitly enabled

![](https://files.readme.io/5f424d3-Event_enrichment.png)

- Select Till to capture till details - till data enrichment. The payload will contain till details such as till code, till name, and till ID.

- Select Store to capture store details - store data enrichment. The payload will contain store details such as store name, store ID, store code, and store external ID.

- By default, the customer identifiers are not available in the event notification payload. The presence of identifiers in the payload depends on:How the API was called - the identifier used to make the API call will be included in the payloadWhether identifier enrichment is explicitly enabled.To include a customer identifier in the payload, select Customer identifier to capture customer identifiers according to the selected source - customer data enrichment. You will see the Source drop-down as shown in the following screenshots. Select the source identifier that you want to capture. The available options are WeChat, WebEngage, and InStore. For example, if you select Instore and the Instore profile of the customer contains an external ID, mobile and email, the event response payload will include the identifiers external ID, mobile and email.

- How the API was called - the identifier used to make the API call will be included in the payload

- Whether identifier enrichment is explicitly enabled.To include a customer identifier in the payload, select Customer identifier to capture customer identifiers according to the selected source - customer data enrichment. You will see the Source drop-down as shown in the following screenshots. Select the source identifier that you want to capture. The available options are WeChat, WebEngage, and InStore. For example, if you select Instore and the Instore profile of the customer contains an external ID, mobile and email, the event response payload will include the identifiers external ID, mobile and email.

- Including card information along with the customer identifier information - You can select theCard Numberto include card details of the customer in the event payload. An associated source (channel or source from which the card number is obtained or linked to a customer's profile) must be selected before selecting the Card Number check box. If the customer has multiple card numbers, all the card numbers are added.

![760](https://files.readme.io/ec0e6c5-3_RqqI3eiBgriOtpUpW4nW0-t8eeD7HFvQ.png)

![](https://files.readme.io/3536410-Customer_Ident.png)

- The awarded Reference ID is a unique identifier associated with each issued point or redemption transaction within the system. These IDs are generated upon awarding loyalty points and can be used to track points issuance and redemption activities. In this context, you can select the Awarded Reference ID checkbox to capture the reference ID of the points issued as a result of the behavioural events.

- Available Points Balance: To capture the total available points across multiple program IDs the customer is associated with, you can raise a JIRA ticket to the sustenance team and enable the configurationavailablePointsBalanceEnrichmentEnabled. Once activated, the system automatically records the customer's total points balance acrosspointsIssuedandpointsRedeemedevents in theAvailablePointsBalancefield.

`availablePointsBalanceEnrichmentEnabled`

`pointsIssued`

`pointsRedeemed`

`AvailablePointsBalance`

1. InAdvanced Settings, you can configure the following.

![725](https://files.readme.io/2da3fdb-8Yv6DSVFVkcFJRAJMryI5G5TIOSaBpyUmw.png)

- Maximum allowed connections: Set the maximum number of concurrent webhook calls that could be allowed.

- Delivery SLA (in seconds): Set the expected delivery time of the event notification in seconds. This is used to track notifications that took more time than the SLA set.

1. In Add Events, click + Select events to add events to the notification and click Done. Use the Search box to easily find the event.

![298](https://files.readme.io/b55de7e-TqqyH1LnHXcbSUKCFtlugpPrQ3I9Ltub-g.png)

- To view the complete schema of a specific event click the respective > icon. See the image below.

```
{
   "allOf":[
      {
         "$ref":"commonEvent.json"
      }
   ],
   "javaInterfaces":[
      "com.capillary.eventNotification.bo.BaseEvent"
   ],
   "$schema":"http://json-schema.org/draft-06/schema#",
   "extends":{
      "$ref":"commonEvent.json"
   },
   "name":"pointsExpired",
   "description":"Schema for Points Expired",
   "type":"object",
   "properties":{
      "eventName":{
         "type":"string",
         "default":"pointsExpired"
      },
      "data":{
         "javaType":"com.capillary.eventNotification.bo.PointsExpiredAttributes",
         "type":"object",
         "required":[
            "customerIdentifiers"
         ],
         "properties":{
            "customerIdentifiers":{
               "$ref":"internal/customer.json"
            },
            "triggeringActivity":{
               "$ref":"internal/triggerActivity.json"
            },
            "loyaltyProgramId":{
               "type":"integer"
            },
            "pointsExpired":{
               "type":"number"
            }
         }
      }
   }
}
```

```
{
   "allOf":[
      {
         "$ref":"commonEvent.json"
      }
   ],
   "javaInterfaces":[
      "com.capillary.eventNotification.bo.BaseEvent"
   ],
   "$schema":"http://json-schema.org/draft-06/schema#",
   "extends":{
      "$ref":"commonEvent.json"
   },
   "name":"pointsExpired",
   "description":"Schema for Points Expired",
   "type":"object",
   "properties":{
      "eventName":{
         "type":"string",
         "default":"pointsExpired"
      },
      "data":{
         "javaType":"com.capillary.eventNotification.bo.PointsExpiredAttributes",
         "type":"object",
         "required":[
            "customerIdentifiers"
         ],
         "properties":{
            "customerIdentifiers":{
               "$ref":"internal/customer.json"
            },
            "triggeringActivity":{
               "$ref":"internal/triggerActivity.json"
            },
            "loyaltyProgramId":{
               "type":"integer"
            },
            "pointsExpired":{
               "type":"number"
            }
         }
      }
   }
}
```

Updated5 months ago
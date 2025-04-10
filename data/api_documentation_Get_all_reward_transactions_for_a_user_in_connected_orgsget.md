# Get all reward transactions for a user in connected orgsget

This API is used to get details of all the issue reward transactions for a user.

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

> 🚧Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

## 🚧Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

Use this API exclusively for connected orgs. For other orgs, use thisAPIinstead.

# Prerequisites

- Authentication: Basic or OAuth authentication

- Default access group

# Resource information

|  |  |

| --- | --- |

| URL | /api_gateway/rewards/core/v1.1/reward-transactions?customerId={customerId} |

| HTTP Method | GET |

| Pagination | Yes |

| Batch support | No |

| Rate limit information | None |



# API endpoint example

https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions?customerId=564488660&redemptionType=INTOUCH_REWARD%2C%20PHYSICAL_REWARD

# Headers

| Header | Description |

| --- | --- |

| DATA-SCOPE-ORG | List of Organization IDs |

| DATA-SCOPE | Scopes define what data can be accessed using the API. You can use scopes to control access to data from a parent or child organization. Defining a scope ensures that the response contains only data from the respective organization.Supported headers:SELF,OTHERandALL.Refer to connected orgsdata scopesfor more information. |



`SELF`

`OTHER`

`ALL`

[data scopes](/reference/connected-orgs-data-scopes)

# Request query parameters

| Parameters | Data Type | Description |

| --- | --- | --- |

| page | Integer | Retrieve information for a specific page. Set the page value to 0 to disable pagination.Example:page=2&size=10retrieves 10 results from page 2. |

| size | Long | Number of results to display per page. Default value is 10. Maximum supported value is 50. |

| status | Boolean | Filter the reward transactions based on status of the issued reward.Setstatus=trueto view successful transactions andstatus=falseto view failed transactions.Successful transactions are the ones where the reward was issued whereas failed transactions are ones where the reward was not issued.If this parameter is not applied, the response by default gives both successful and failed transactions. |

| redemptionType | Enum | Retrieves rewards based on their redemption type. Reward redemption is when a customer uses their points/ cash to redeem a reward.Supported values:GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC.Use comma separated values to retrieve reward details for multiple redemption types.Example:INTOUCH_REWARD, MILES. The values are case sensitive.This parameter fetches both, failed and successful reward issue transactions. To filter successful transactions for a specific redemption type, setstatus=true. |

| ownerType | Enum | Module for which the reward was created.Supported values:Loyalty program, Milestones, Campaigns, Journeys, Goodwill. |

| ownerId | String | Unique identifier of the owner. |

| groupName | String | Retrieves rewards associated with a specific group name. |



`page=2&size=10`

`status`

`true`

`status`

`false`

```
GAMES, AUCTION, CART_PROMOTION, CASH_WALLET, VENDOR_ONLY_REWARD, VOUCHER, CASH_BACK, INTOUCH_REWARD, PHYSICAL_REWARD, CHARITY, MILES, GIFT_CARD, SWEEPSTAKES, VENDOR_INTOUCH_REWARD, CARD_DISC
```

`INTOUCH_REWARD, MILES`

`status`

`true`

```
Loyalty program, Milestones, Campaigns, Journeys, Goodwill
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions?customerId=564488660&redemptionType=INTOUCH_REWARD%2C%20PHYSICAL_REWARD' \
--header 'Authorization: Basic cHJhYzOGEwMTQ3ZjRlMg==' \
--header 'DATA-SCOPE: ALL' \
--header 'Cookie: _cfuvid=pmSuDaHvCdKa7QSC237W8OuowKHVWkxCo-1737524754414-0.0.1.1-604800000'
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/rewards/core/v1.1/reward-transactions?customerId=564488660&redemptionType=INTOUCH_REWARD%2C%20PHYSICAL_REWARD' \
--header 'Authorization: Basic cHJhYzOGEwMTQ3ZjRlMg==' \
--header 'DATA-SCOPE: ALL' \
--header 'Cookie: _cfuvid=pmSuDaHvCdKa7QSC237W8OuowKHVWkxCo-1737524754414-0.0.1.1-604800000'
```

# Response parameters

| Parameter Name | Description |

| --- | --- |

| status | Contains the details of the operation. |

| -success | Indicates if the operation was successful. |

| -code | HTTP status code of the operation. |

| -message | Message about the operation's outcome. |

| rewardIssueTransactions | Contains the details of the issue reward transactions. |

| -rewardTransactionId | Unique identifier for the reward transaction. |

| -rewardIssueRefId | Reference ID for the reward issuance. |

| -rewardTransactionDate | Date and time of the reward transaction in milliseconds since epoch. |

| -status | Contains the status of the reward issue. |

| --success | Indicates if the reward was issued successfully,truefor successful reward issual andfalsefor failed reward issual. |

| --code | Status code for the reward issue transaction. |

| --message | Status message for the reward issue transaction, indicating if the reward issual was successful. |

| -rewardDetails | Contains details of the issued reward. |

| --rewardId | Unique identifier of the reward. |

| --languageCode | Language code of the reward details.Example:enfor English. |

| --name | Name of the reward. |

| --description | Description of the reward. |

| --termNConditionsId | Unique identifier for the terms and conditions of the reward. |

| --termNConditionsUrl | URL to the terms and conditions of the reward. |

| --imageId | Unique identifier for the image associated with the reward. |

| --imageUrl | URL to the image associated with the reward. |

| --thumbnailId | Unique identifier for the thumbnail image associated with the reward. |

| --thumbnailUrl | URL to the thumbnail image associated with the reward. |

| --enabled | Indicates whether the reward is enabled. |

| --groups | Specifies the group associated with the reward. |

| --rewardRank | Rank or position of the reward within its category or list. |

| -ownerType | Module for which the reward was created.Supported values:Loyalty program, Milestones, Campaigns, Journeys, Goodwill. |

| -ownerId | Unique identifier of the owner.Example:123. |

| -pointsRedemptionRefIds | Unique identifier generated each time rewards are issued. This field stores a list of these identifiers, allowing you to track multiple points redemption transactions. You have to pass thepointsRefIdas a query param to populate the data of Points Redemption Reference IDs. |

| -fulfillmentStatus | Gives the fulfillment status of the reward. Example:SHIPPED,ON THE WAY,DELIVERED. |

| -orgId | Unique identifier of the org. |

| -redemptionType | Gives the redemption type of the reward.Example:INTOUCH_REWARD. |

| pagingDto | Contains the paging details. |

| -last | Indicates if the current page is the last page. |

| -totalElements | Total number of elements across all pages. |

| -totalPages | Total number of pages. |

| -numberOfElements | Number of elements in the current page. |

| -first | Indicates if the current page is the first page. |

| -size | Number of elements per page. |

| -number | The current page number. |



`true`

`false`

`en`

```
Loyalty program, Milestones, Campaigns, Journeys, Goodwill
```

`123`

`pointsRefId`

`SHIPPED`

`ON THE WAY`

`DELIVERED`

`INTOUCH_REWARD`

```
{"status":{"success":true,"code":200,"message":"Reward issue transactions fetched successfully"},"rewardIssueTransactions":[{"rewardTransactionId":"321583","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736755804000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  points are not redeemable"},"rewardDetails":{"rewardId":299166,"languageCode":"en","name":"PointsRewardTest","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321532","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750647000,"status":{"success":true,"code":200,"message":"Reward issued successfully"},"rewardDetails":{"rewardId":297001,"languageCode":"en","name":" INTOUCH Enabled","description":"Description","termNConditionsId":"EXDR12987R","termNConditionsUrl":null,"imageId":"EXDR12987U","imageUrl":null,"thumbnailId":"EXDR12987T","thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"PHYSICAL_REWARD"},{"rewardTransactionId":"321531","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750220000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321530","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750106000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321529","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750105000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321528","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750084000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321527","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750040000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321526","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736749995000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321524","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736748983000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"}],"pagingDto":{"last":true,"totalElements":9,"totalPages":1,"numberOfElements":9,"first":true,"size":10,"number":0}}
```

```
{"status":{"success":true,"code":200,"message":"Reward issue transactions fetched successfully"},"rewardIssueTransactions":[{"rewardTransactionId":"321583","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736755804000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  points are not redeemable"},"rewardDetails":{"rewardId":299166,"languageCode":"en","name":"PointsRewardTest","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321532","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750647000,"status":{"success":true,"code":200,"message":"Reward issued successfully"},"rewardDetails":{"rewardId":297001,"languageCode":"en","name":" INTOUCH Enabled","description":"Description","termNConditionsId":"EXDR12987R","termNConditionsUrl":null,"imageId":"EXDR12987U","imageUrl":null,"thumbnailId":"EXDR12987T","thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"PHYSICAL_REWARD"},{"rewardTransactionId":"321531","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750220000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321530","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750106000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321529","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750105000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321528","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750084000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321527","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736750040000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321526","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736749995000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"},{"rewardTransactionId":"321524","rewardIssueRefId":"transactionNumber","rewardTransactionDate":1736748983000,"status":{"success":false,"code":8004,"message":"fail to issue reward as  Coupon Series ID is invalid"},"rewardDetails":{"rewardId":299141,"languageCode":"en","name":"Testreward2","description":"test","termNConditionsId":null,"termNConditionsUrl":null,"imageId":null,"imageUrl":null,"thumbnailId":null,"thumbnailUrl":null,"enabled":true,"groups":[],"rewardRank":null},"ownerType":null,"ownerId":"","pointsRedemptionRefIds":null,"fulfillmentStatus":null,"orgId":100737,"redemptionType":"INTOUCH_REWARD"}],"pagingDto":{"last":true,"totalElements":9,"totalPages":1,"numberOfElements":9,"first":true,"size":10,"number":0}}
```

`Try It!`
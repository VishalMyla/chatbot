# Redeeming Points from User Groups

Users can use both their individual wallet points and group wallet points to purchase the reward. This will allow them to have more flexibility in redeeming their points and enjoy the benefits associated.

![](https://files.readme.io/f018673-screen-capture_4.gif)

Enhancements made for points redemption from group wallet:

Every group has a primary user and secondary users. For identifiers, it can be group ID/ primary user ID/ External ID of the group.

In the isRedeemable and Redeem API, you can now pass the group identifier along with the user ID to redeem the points from the group wallet and issue the reward.

Sample request for issue with group ID:

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":31059,
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "4WF17B",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":31059,
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "4WF17B",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

Sample request for issue with external ID:

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?username=tillcapillary' \

--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2ExternalId":"famgroup11",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "0LP85Y",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?username=tillcapillary' \

--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2ExternalId":"famgroup11",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "0LP85Y",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

Sample request for issue with user group primary user ID:

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?user_group2_primary_user_id=381798579' \

--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":31059,
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "4WF17B",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15465/issue?user_group2_primary_user_id=381798579' \

--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":31059,
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": true,
        "code": 200,
        "message": "Reward issued successfully"
    },
    "intouch": {
        "pointsRedeemed": "1",
        "couponCode": "4WF17B",
        "codeExpiry": "2027-05-12 00:00:00"
    },
    "promotion": null,
    "vendor": null
}
```

Error when configuration is missing:

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/gamification/v1/brand/JOTUNUAEDEMO/user/971560000005/games/all?language=en' \
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
curl --location 'https://eu.api.capillarytech.com/api_gateway/gamification/v1/brand/JOTUNUAEDEMO/user/971560000005/games/all?language=en' \
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "828"
            ],
            "messages": [
                "points redemption rules/configuration not allowing redemption"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

Error when invalid ID is passed:

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15466/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":"381751178",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15466/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 919712709262,
    "userGroup2Id":"381751178",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1632"
            ],
            "messages": [
                "group id/externalId/primary userId 381751178 passed is not valid"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

Error when user doesn’t belong to the group:

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15466/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 917122001239,
    "userGroup2PrimaryUserId":"381798579",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 381798977 does not belong to group 31059"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

```
curl --location 'http://crm-nightly-new.cc.capillarytech.com/api_gateway/rewards/core/v1/user/reward/15466/issue?username=tillcapillary' \
--data '{
    "brand": "MarvelTest",
    "transactionNumber": "123456789",
    "mobile": 917122001239,
    "userGroup2PrimaryUserId":"381798579",
    "notes":"xyz"
}'
Response:
{
    "status": {
        "success": false,
        "code": 8004,
        "message": "fail to issue reward as  points are not redeemable",
        "partnerError": {
            "codes": [
                "1620"
            ],
            "messages": [
                "user 381798977 does not belong to group 31059"
            ]
        }
    },
    "intouch": null,
    "promotion": null,
    "vendor": null
}
```

Points to Note

1. The reward will be given to the individual initiating the transaction, which can be either the primary user or one of the secondary users.

2. The reward is not given to the group today as that functionality is not supported.

3. In Loyalty side in the redemption event, write the rule for the group and configure redeem points action.If "Friends & Family" group is enabled, choose the redemption options from the Advance settings, and enable redemption.If "Fleet" group is enabled, in Redemption event, write the rule "currentEvent.IsUserGroupInfopresent" and configure redeem points action. Within the action, the option should be selected as group.

1. If "Friends & Family" group is enabled, choose the redemption options from the Advance settings, and enable redemption.

2. If "Fleet" group is enabled, in Redemption event, write the rule "currentEvent.IsUserGroupInfopresent" and configure redeem points action. Within the action, the option should be selected as group.

![](https://files.readme.io/2b71bf0-Screenshot_2023-07-18_at_11.59.02_AM.png)

![](https://files.readme.io/8392395-Screenshot_2023-07-18_at_12.04.55_PM.png)

1. The validation checks for accessing points from the group wallet is entirely managed by the EMF side. It relies on the group settings to determine which users have the authority to redeem points from the group wallet.

2. If either of the user_group2_primary_user_id or user_group2_id or user_group2_external_id is not null, the transaction will be treated as group loyalty redemption.

For more information, refer tothis.

Updated8 months ago
# Update redeem pointsput

This API allows you to update points redemption. The fields that can be updated are:

- bill_id

- bill_number

- purpose

> 👍NoteFor detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

## 👍Note

Note

For detailed information about our APIs and for hands-on testing, refer documentation inAPI overviewand  step-by-step guide on making your first API call inMake your first API call.

# API specifications

| Feature | Availability |

| --- | --- |

| Authentication supported | Basic |

| Pagination | Not supported |

| Batch support | Not supported |

| Access Group | Yes |



# API endpoint example

https://eucrm.cc.capillarytech.com/v2/points/updateRedemption

```
https://eucrm.cc.capillarytech.com/v2/points/updateRedemption
```

# Request body parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| redemptionId* | String | A unique identifier for the redemption process. |

| externalReferenceNumber* | String | Unique reference number associated with the bill. |

| billNumber | String | A string identifier for the bill. |

| billId | Integer | A numerical identifier for the bill. The maximum number of supported characters is 19. |

| purpose | String | The purpose or reason for the transaction. |

| entity | Object | An object containing details about the entity. |

| entity.type | Enum | The type of entity involved in the transaction. |

| entity.identifierType | Enum | The type of identifier used for the entity. |

| entity.identifierValue | String | The value of the identifier for the entity. |



Note: It is mandatory to pass either redemptionId or externalReferenceNumber.

```
{
    "redemptionId": "8878ru",
    "billNumber": "number7939623972",
    "billId": 12345,
    "purpose": "Testing",   
    "entity": {
        "type": "CUSTOMER",
        "identifierType": "mobile",
        "identifierValue": "917939623972"
    }

}
```

```
{
    "redemptionId": "8878ru",
    "billNumber": "number7939623972",
    "billId": 12345,
    "purpose": "Testing",   
    "entity": {
        "type": "CUSTOMER",
        "identifierType": "mobile",
        "identifierValue": "917939623972"
    }

}
```

# Response parameters

| Parameter | Data Type | Description |

| --- | --- | --- |

| id | Integer | A unique identifier for the transaction. |

| programId | Integer | Identifier for the associated program. |

| pointsRedeemed | Float | The number of points redeemed in the transaction. |

| billId | Integer | A numerical identifier for the bill. |

| billNumber | String | A string identifier for the bill. |

| validationCode | String | A code used for validating the transaction. |

| notes | String | Additional notes or comments about the transaction. |

| redemptionTime | Long (Epoch time) | Timestamp of when the redemption occurred. |

| pointsRedemptionTime | Long (Epoch time) | Timestamp of when the points were redeemed. |

| tillId | Integer | Identifier for the till where the transaction occurred. |

| tillName | String | Name of the till where the transaction occurred. |

| pointDeductionList | Array | List of point deductions involved in the transaction. |

| redemptionId | String | A unique identifier for the redemption process. |

| customerId | Integer | Identifier for the customer involved in the transaction. |

| redemptionPurpose | String | The purpose or reason for the redemption. |

| redemptionDate | String (Date-Time) | The date and time of redemption in ISO 8601 format. |

| warnings | Array | List of any warnings related to the transaction. |



```
{
    "id": 396023,
    "programId": 1098,
    "pointsRedeemed": 100.0,
    "billId": 12345,
    "billNumber": "number7939623972",
    "validationCode": "",
    "notes": "Redemption by SMS",
    "redemptionTime": 1721991144000,
    "pointsRedemptionTime": 1721971345000,
    "tillId": 50149495,
    "tillName": "",
    "pointDeductionList": [],
    "externalReferenceNumber": "ACR-5801353177",
    "redemptionId": "8878ru",
    "customerId": 346926900,
    "redemptionPurpose": "Testing",
    "redemptionDate": "2024-07-26T10:52:24Z",
    "warnings": []
}
```

```
{
    "id": 396023,
    "programId": 1098,
    "pointsRedeemed": 100.0,
    "billId": 12345,
    "billNumber": "number7939623972",
    "validationCode": "",
    "notes": "Redemption by SMS",
    "redemptionTime": 1721991144000,
    "pointsRedemptionTime": 1721971345000,
    "tillId": 50149495,
    "tillName": "",
    "pointDeductionList": [],
    "externalReferenceNumber": "ACR-5801353177",
    "redemptionId": "8878ru",
    "customerId": 346926900,
    "redemptionPurpose": "Testing",
    "redemptionDate": "2024-07-26T10:52:24Z",
    "warnings": []
}
```

# API-specific error codes

| Error code | Description |

| --- | --- |

| 748 | No metadata update requested. |

| 749 | Exactly one redemption identifier needed to identify redemption. |

| 750 | Redemption update failed : {0}. |

| 1219 | Entity details not set/invalid. |

| 1212 | Entity type passed is not valid. |



`Try It!`
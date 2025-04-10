# Request (V1)

## Status Codes

### Success Codes

| Code | Description |

| --- | --- |

| 9000 | Change Identifier request added successfully.Request retrieved successfully.Goodwill request added successfully.Retro request added successfully.Request updated successfully.Retro request approved successfully. |



### Error Codes

| Code | Description |

| --- | --- |

| 201 | Some requests have failed due to errors |

| 1001 | Customer not registered. Mobile number provided is invalid. |

| 1002 | Invalid Email |

| 1627 | Transaction already marked retro |

| 1629 | Client signature is mandatory for this action |

| 9001 | Request retrieve unsuccessfulRequested new email ID is invalid |

| 9002 | Requested new email already exists |

| 9003 | Requested new External ID already exists |

| 9005 | Requested new mobile already exists |

| 9006 | Request Type is invalid |

| 9055 | Request has been queued earlier |

| 9007 | Target customer is not Existing or Invalid |

| 9008 | Request Base Type is invalid |

| 9009 | Request add failed due to internal error. Please try again later |

| 9011 | User is not registered |

| 9012 | Old value is invalid |

| 9013 | Request not found |

| 9018 | Request for Merge already exists for the victim in pending or processing state |

| 9019 | No customer identifiers passed |

| 9021 | Requested On date is in future |

| 9022 | Customer is not registered for Loyalty Program |

| 9023 | Survivor is already merged to another user as victim |

| 9024 | New value is invalid |

| 9026 | Request for Merge already exists for the survivor in pending or processing state |

| 9027 | Victim is already merged to another user |

| 9028 | Request already exists for same new value |

| 9029 | Survivor and victim are same |

| 9031 | Old value is same as new value |

| 9035 | Identifier reallocation request already exists in pending state for the customer |

| 9040 | Request change type not supported |

| 9041 | Invalid identifiers count |

| 9042 | Customer not found for given identifiers |

| 9043 | No request identifiers found |

| 9046 | Requested new mobile is invalid |

| 9047 | Requested new external_id is invalid |

| 9049 | Invalid identifiers |

| 9050 | Request not found |

| 9051 | Same user cannot request and approve |

| 9052 | Invalid request status |

| 9057 | Invalid transaction old_type specified |

| 9058 | Invalid transaction new_type specified |

| 9051 | Invalid transaction ID |

| 9053 | Registration is too much older than transaction time |

| 9052 | Transaction is too old to mark as retro |

| 9056 | Same user cannot request and approve |

| 9059 | Transaction amount beyond auto-approval limit |

| 9060 | Retro transactions are not permitted as per org-configs |


# Get Points Balanceget

### Important Note

| When | fetchDataForAllProgramsis true | fetchDataForAllProgramsis false |

| --- | --- | --- |

| programId is passed | You will still see points balance of the customer across all programs. | You will still see points balance of the customer for that particular program. |

| programId is not passed | You will still see points balance of the customer across all programs. | You will still see points balance of the customer for the default program. |



`fetchDataForAllPrograms`

`fetchDataForAllPrograms`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| entityId | long | Unique ID of the customer. |

| promisedPointsBreakup | obj | Break up details of promised points. |

| mainPoints | int | The current redeemable points |

| totalPoints | int | The sum of both current redeemable points and promised points. |

| delayedAccrualPoints | int | Promised points |

| externalTriggerBasedPoints | int | Promised points converted to regular points upon receipt of an external trigger. |



`Try It!`
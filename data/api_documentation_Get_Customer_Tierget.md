# Get Customer Tierget

### Important Note

| When | fetchDataForAllProgramsis true | fetchDataForAllProgramsis false |

| --- | --- | --- |

| programId is passed | You will still see tier details of the customer across all programs | You will still see tier details of the customer for that particular program. |

| programId is not passed | You will still see tier details of the customer across all programs | You will still see tier details of the customer for the default program. |



`fetchDataForAllPrograms`

`fetchDataForAllPrograms`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| entityId | long | Unique ID of the customer. |

| currentTierSerialNumber | int | Serial number of the current tier. For highest tier, this value is shown as-1meaning no next tier is available. |

| nextTierSerialNumber | int | Serial number of the next tier. For highest tier, this value is shown as-1meaning no next tier is available. |



`-1`

`-1`

`Try It!`
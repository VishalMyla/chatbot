# Get Points Conversion Scheduleget

### Important Note

| When | fetchDataForAllProgramsis true | fetchDataForAllProgramsis false |

| --- | --- | --- |

| programId is passed | You will still see promised points schedules of the customer across all programs | You will still see promised points schedules of that particular program. |

| programId is not passed | You will still see promised points schedules of the customer across all programs | You will still see promised points schedules of the default program. |



`fetchDataForAllPrograms`

`fetchDataForAllPrograms`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| entityId | long | Unique ID of the customer. |

| pointsType | enum | Type of the points entry. Values: bill_regular, bill_promotions, line_item_regular, line_item_promotions, customer_promotions. |

| expiryType | enum | Points expiry type - fixed or rolling. |

| triggerBasedPointsList | obj | Shows the required condition to convert delayed accrual (promised points) to main points. |



`Try It!`
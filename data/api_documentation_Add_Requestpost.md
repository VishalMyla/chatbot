# Add Requestpost

Requests, when submitted, will be in pending status by default. Capillary back-end team verifies the request and could either approves or rejects it. Therequest/addAPI allows you to directly process a request by passing a query param client_auto_approve=true.

`request/add`

If client_auto_approve=true, the request will be created in pending status by default and then processed automatically.

However, requests can be approved automatically based on the following configs set on Member Care.

| Config | Description |

| --- | --- |

| CI_EMAIL_AUTO_APPROVE | Approves email id change requests automatically |

| CI_MOBILE_AUTO_APPROVE | Approves mobile number change requests automatically |

| CI_EXTID_AUTO_APPROVE | Approves external id change requests automatically |

| CI_ADDRESS_AUTO_APPROVE | Approves registered address change requests automatically |



> 📘The paramclient_auto_approveoverrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.

## 📘

The paramclient_auto_approveoverrides all the server side configurations mentioned in the table above. However, it is recommended not to use the param unless it is highly necessary.

`client_auto_approve`

### Request Body Parameters (for Identifier change)

| Parameter | Datatype | Description |

| --- | --- | --- |

| mobile/email/external_id/id* | string | Pass any of the identifiers of the customer with the identifier value. |

| reference_id* | long | Unique reference id for the request |

| type | enum | Type of request. Value:CHANGE_IDENTIFIER,TRANSACTION_UPDATE, |

| base_type | enum | Identifier that you want to update. Value:MOBILE,EMAIL,EXTERNAL_ID.RETRO for transaction update. |

| old_value | string | The current value of the customer identifier. |

| new_value | string | The new value of the customer identifier. |



`CHANGE_IDENTIFIER`

`TRANSACTION_UPDATE`

`MOBILE`

`EMAIL`

`EXTERNAL_ID`

### Request Body Parameters (for retro transaction)

| Parameter | Datatype | Description |

| --- | --- | --- |

| type | enum | Type of request. Value: TRANSACTION_UPDATE. |

| base_type | enum | Base transaction type. Value: RETRO. |

| old_type | enum | Current transaction type. Value: NOT_INTERESTED. |

| new_type | enum | New transaction type. Value: REGULAR. |

| reason | string | Reason for issuing goodwill points/coupons. Applicable only for goodwill response |

| comments | string | Small description on why goodwill points/coupons issued |

| transaction_id | string | Transaction ID of the not-interested transaction that you want to update. |

| misc_info | string | Additional information regarding the current retro conversion. |



### Request Body Parameters (for mobile number reallocation)

| Parameter | Datatype | Description |

| --- | --- | --- |

| type | enum | Type of request. Value: GOODWILL. |

| base_type | enum | Sub-type of the request. Value: POINTS for goodwill points issual, COUPONS for goodwill coupon issual. |

| series_id | long | Offer ID from which coupon has to be issued. Ensure that the offer is consumed by Member Care module (Goodwill Adjustment Settings > Coupon). Applicable only for base_type as COUPONS. |

| points | int | Number of points to issue. Applicable only for base_type asPOINTS. |



`POINTS`

### Request Body Parameters (for merge accounts)

| Parameter | Datatype | Description |

| --- | --- | --- |

| target_customer | obj | Details of the survivor account - the account that will continue to remain after merging. |

| type | enum | PassCHANGE_IDENTIFIERfor merge requests. |

| base_type | enum | Sub-type of the request. Value:MERGE. |



`CHANGE_IDENTIFIER`

`MERGE`

### Request Body Parameters (for goodwill requests)

| Parameter | Datatype | Description |

| --- | --- | --- |

| type | enum | Type of request. Value:GOODWILL. |

| base_type | enum | Sub-type of the request. Value:POINTS. |



`GOODWILL`

`POINTS.`

### Request Body Parameters (for group goodwill requests)

| Parameter | Datatype | Description |

| --- | --- | --- |

| type | enum | Type of request. Value:GOODWILL. |

| base_type | enum | Sub-type of the request. Value:POINTS. |

| earning_entity_type | enum | USERGROUP2 |

| identifier_value | string | Group id |



`GOODWILL`

`POINTS.`

### Response Parameters

| Parameter | Datatype | Description |

| --- | --- | --- |

| reference_id | string | Unique reference ID of the request. |

| id | long | Unique ID generated for the request. |

| status | enum | Current status of the request. Values:PENDING,APPROVED,REJECTED. |

| customer | obj | Details of the customer details associated to the request. |



`PENDING`

`APPROVED`

`REJECTED`

`Try It!`
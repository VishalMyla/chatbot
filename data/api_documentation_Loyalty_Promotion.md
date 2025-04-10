# Loyalty Promotion

The Loyalty Promotion are of three types:

- Available without issue - Accessible to all customers and automatically triggered based on predefined rules, behavioural events, or milestone completions. Benefits such as points, tier upgrades, coupons, or badges are directly provided when customers meet the defined criteria.

- Direct issue - A specific promotion is issued to customers based on their behaviour or transactions. Customers must meet the criteria during a future transaction to receive the benefits. This process is initiated through workflows like TransactionAdd or Behavioral events.

- Enroll & Issue - Requires customers to opt in or enrol before receiving a promotion. Involves three steps: enrollment, completing specific actions, and receiving benefits. These promotions engage customers through an interactive approach, targeting specific audiences.

| Type of Promotion | API for Single Issuance and Enrolment | API for Bulk Issuance and Enrolment (Can be also used for Single Issual and Enrolment) | API for Revoking Promotion |

| --- | --- | --- | --- |

| Available without issue | - | - | - |

| Direct issue | v2/promotion/issue- Promotion type should beLOYALTY | v2/promotion/bulk/directEarn- Promotion type should beLOYALTY | v2/promotion/bulk/revokeDirectEarn |

| Enroll & Issue | v2/promotion/issue- Promotion type should beLOYALTY_EARNING | v2/promotion/bulk/enrolAndEarn- Promotion type should beLOYALTY_EARNING | v2/promotion/bulk/revokeEnrolAndEarn |



`v2/promotion/issue`

`v2/promotion/bulk/directEarn`

`v2/promotion/bulk/revokeDirectEarn`

`v2/promotion/issue`

`v2/promotion/bulk/enrolAndEarn`

`v2/promotion/bulk/revokeEnrolAndEarn`

# Terminologies

The table below highlights backend terminologies and their corresponding terms used in the UI/frontend:

| UI/Frontend terminology | Backend terminology | Description |

| --- | --- | --- |

| Enrol | Issue | The customer is enrolled into a promotion. |

| Issue | Earn | The customer completes the required activity to earn the promotion. Once the promotion is earned, the customer can fulfil the criteria to receive the associated benefits. |



For more information and use cases, refer to the userdocumentation on Loyalty Promotions.
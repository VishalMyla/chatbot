# API reference index

| Title | Method | API endpoint | Access group resource |

| --- | --- | --- | --- |

| Badges |  |  |  |

| Create badges org meta | POST | api_gateway/v1/badges/orgMeta | - |

| Update badges org meta | PUT | api_gateway/v1/badges/orgMeta | - |

| Get badges org meta | GET | api_gateway/v1/badges/orgMeta | - |

| Create badges | POST | api_gateway/v1/badges/badgeMeta | - |

| Update badges | PUT | api_gateway/v1/badges/badgeMeta | - |

| Get all badges | GET | api_gateway/v1/badges/badgeMeta | - |

| Get badge by ID | GET | api_gateway/v1/badges/badgeMeta/{{badgeId}} | - |

| Claim badge | POST | api_gateway/v1/badges/badgeMeta/{{badegId}}/claim | - |

| Update the activation status of badge | PUT | api_gateway/v1/badges/badgeMeta/{badgeId}/{activationStatus} | - |

| Enroll customers in badges | POST | api_gateway/v1/badges/badgeMeta/customer/issueBulk | - |

| Issue badge to the customer | POST | api_gateway/v1/badges/customer/earn | - |

| Revoke enrolment of a badge | POST | api_gateway/v1/badges/badgeMeta/customer/revokeIssue | - |

| Revoke issual of a badge | POST | api_gateway/v1/badges/customer/revokeEarn | - |

| Get badges for customer | GET | api_gateway/v1/badges/customer/{customerId} | - |

| Behavioural events |  |  |  |

| Add Event (Custom) | POST | v2/events | Behavioural events |

| Behavioural events | PUT | v2/events | Behavioural Events |

| Get Event Details | GET | v2/events | Behavioural Events |

| Get Running Events Status | GET | v2/events/running_status | Behavioural Events |

| Get Customer Events | GET | v2/events/event_data/{userId} | Behavioural Events |

| Add Webhook | POST | v2/events/webhook | Behavioural Events |

| Get Audit Logs | GET | v2/events/audit_logs | Behavioural Events |

| Get Events Logs | GET | v2/events/logs | Behavioural Events |

| Card |  |  |  |

| Develop Cards | POST | v2/card/generate | Card |

| Get Card Generation Log | GET | v2/card/card/generation/logs | Card |

| Add Card (Single) | POST | v2/card | Card |

| Update Card Details (Single) | PUT | v2/card | Card |

| Update Card Details (Bulk) | PUT | v2/card/bulk | Card |

| Get Card Details | GET | v2/card | Card |

| Get Status Log | GET | v2/card/statusLog | Card |

| Limit Active Cards per Customer | POST | v2/organization/configs | Organization |

| Communications |  |  |  |

| Send email communications | POST | v2/communications/email | Communications |

| Send SMS | GET | v1.1/communications/sms | Communications |

| Get SMS | GET | v1.1/communications/sms | Communications |

| Send Email | POST | v1.1/communications/sms | Communications |

| Get Email | GET | v1.1/communications/sms | Communications |

| Send SMS | POST | v1/communications/sms | - |

| Get SMS | GET | v1/communications/sms | - |

| Send Email | POST | v1/communications/sms | - |

| Get Email | GET | v1/communications/sms | - |

| Company |  |  |  |

| Add Company | POST | v2/companies | Companies |

| Update Company | PUT | v2/companies | Companies |

| Get Company Details | GET | v2/companies | Companies |

| Remove Company | DELETE | v2/companies | Companies |

| Get Org Companies | GET | v2/companies/all | Companies |

| Get Companies byExtended Field Values | GET | v2/companies/extendedFieldSearch | Companies |

| Coupon |  |  |  |

| Create coupon series | POST | v2/coupon/series | Coupon |

| Update coupon series | PUT | v2/coupon/series/{id} | Coupon |

| Get coupon series details | GET | v2/coupon/series | Coupon |

| Issue single coupon | POST | v2/coupon/issue | Coupon |

| Issue bulk coupons | POST | v2/coupon/bulk/issue | Coupon |

| Redeem single coupon | POST | v2/coupon/redeem | Coupon |

| Redeem bulk coupons | POST | v2/coupon/bulk/redeem | Coupon |

| Check if coupon is Redeemable | GET | v2/coupon/is_redeemable | Coupon |

| Reactivate redeemed coupon | POST | v2/coupon/reactivate | Coupon |

| Get coupon details | GET | v2/coupon | Coupon |

| Issue Coupon | POST | v1.1/coupon/issue | Coupon |

| Resend Coupon | GET | v1.1/coupon/resend | Coupon |

| Redeem Coupon | POST | v1.1/coupon/redeem | Coupon |

| Get Coupon details | GET | v1.1/coupon/get | Coupon |

| Is Coupon Redeemable | GET | v1.1/coupon/isredeemable | Coupon |

| Get Coupon series details | GET | v1.1/coupon/series | Coupon |

| Issue Coupon | POST | v1/coupon/issue | - |

| Resend Coupon | GET | v1/coupon/resend | - |

| Redeem Coupon | POST | v1/coupon/redeem | - |

| Get Coupon details | GET | v1/coupon/get | - |

| Is Coupon Redeemable | GET | v1/coupon/isredeemable | - |

| Get Coupon series details | GET | v1/coupon/series | - |

| Coupon upload |  |  |  |

| Get Status of Redeemed Coupons | GET | v2/upload/getUploadRedeemedCouponStatus/{couponSeriesId} | - |

| Get Uploaded Coupons Status | GET | v1/upload/getUploadStatus/ | - |

| Upload Redeemed Coupons | POST | v1/upload/getUploadRedeemedCouponStatus | - |

| Upload Coupons (Batch) | POST | coupon/api/v1/upload/file/{couponSeriedId} | - |

| Customer |  |  |  |

| Add Customer | POST | v2/customers | Customer |

| Get Customer ID | GET | v2/customers/lookup | Customer |

| Update Identifier/Issue Card | PUT | v2/{userId}/changeIdentifier | Customer |

| Upsert Customer | POST | v2/integrations/customer/upsert/bulk?skipChangeIdentifier=false | Customer |

| Associate Customer | POST | v2/bulk | Customer |

| Get Customer Details | GET | v2/customers/{customerId} | Customer |

| Get customer hierarchy in a user group | GET | v2/customers/bulk | Customer |

| Update Customer Details | PUT | v2/customers/{userId} | Customer |

| Update association details | PUT | v2/bulk | Customer |

| Search Customers | GET | v2/customers/search | Customer |

| Update Subscription Details | PUT | v2/customers/{userId}/subscriptions | Customer |

| Get Subscription Details | GET | v2/customers/{customerId}/subscriptions | Customer |

| Get Points Expiry Schedule | GET | v2/customers/{userId}/pointsExpirySchedule | Customer |

| Get Points Expiry Schedule(Light API) | GET | v2/customers/lookup/pointsExpirySchedule | Customer |

| Get Loyalty Events | GET | v2/customers/{userId}/loyaltyEvents | Customer |

| Get Loyalty Details | GET | v2/customers/{customerId}/loyaltyDetails | Customer |

| Get Points Transfer Summary | GET | v2/customers/{userId}/pointsTransfers | Customer |

| Get Points Balance | GET | v2/customers/{user id}/points/balance | Customer |

| Get Customer Tier | GET | v2/customers/{userId|/tierDetails} | Customer |

| Get Points Conversion Schedule | GET | v2/customers/{userId}/promisedPointsSchedule | User Groups |

| Get Customer Coupons(Detailed) | GET | v2/customers/{customerId}/coupons | Customer |

| Get Retro Requests | GET | v2/customers/{customerId}/retroRequest | Customer |

| Get Identifier Change Requests | GET | v2/customers/{customerId}/changeRequest | Customer |

| Get Goodwill Requests | GET | v2/customers/{customerId}/goodwillRequest | Customer |

| Request Goodwill points (Group) | GET | v2/requests/ | Requests |

| Add Customer Image | POST | v2/customers/{customerId}/setImage | Customer |

| Delete Customer Image | DELETE | v2/customers/{userId}/deleteImage | Customer |

| Get Customer Coupons (Basic) | GET | v2/customers/coupons | Customer |

| Link/Delink Card | POST | v2/customers/{userId}/changeIdentifier | Customer |

| Add Referrals | POST | v2/customers/{userId}/referrals | Customer |

| Get Referrals | GET | v2/customers/{userId}/referrals | Customer |

| Get Customer Status Log | GET | v2/customers/{userId}/statusLog | Customer |

| Get Customer Subscription Log | GET | v2/customers/{userId}/subscriptionStatusChangeLog | Customer |

| Get user group customer trackerdetails | GET | v2/customers/userEntityTrackers | Customer |

| Get customer transactions | GET | v2/customers/{id}/transactions | - |

| Add Customer | POST | v1.1/customer/add | Customer |

| Update Customer details | POST | v1.1/customer/update | Customer |

| Update Customer Identifier | POST | v1.1/customer/update_identity | Customer |

| Get Customer Details | GET | v1.1/customer/get | Customer |

| Get Customer Transactions | GET | v1.1/customer/transactions | Customer |

| Get Customer Redemptions | GET | v1.1/customer/redemptions | Customer |

| Get Customer Coupons | GET | v1.1/customer/coupons | Customer |

| Add/Update Customer Notes | POST | v1.1/customer/notes | Customer |

| Get Customer Notes | GET | v1.1/customer/notes | Customer |

| Get Product Recommendations | GET | v1.1/customer/recommendations | Customer |

| Get Customer Interactions | GET | v1.1/customer/interaction | Customer Communications |

| Add Ticket | POST | v1.1/customer/tickets | Customer |

| Get Ticket Details | GET | v1.1/customer/tickets | Customer |

| Refer Customer | POST | v1.1/customer/referrals | Customer |

| Get Referral Details | GET | v1.1/customer/referrals | Customer |

| Add/Update Customer Preferences | POST | v1.1/customer/preferences | Customer |

| Get Customer Preferences | GET | v1.1/customer/preferences | Customer |

| Update Subscription Details | POST | v1.1/customer/subscriptions | Customer |

| Get Subscription Details | GET | v1.1/customer/subscriptions | Customer |

| Customer (Lookup) |  |  |  |

| Get promotion data | GET | v2/customers/lookup/promotionData | Customer |

| Update Customer Details | PUT | v2/customers/lookup | Customer |

| Get Customer Details | GET | v2/customers/lookup/customerDetails | - |

| Update Customer Status | PUT | v2/customers/lookup/status | - |

| Get Subscription Details | GET | v2/customers/lookup/subscriptions | - |

| Get Customer Loyalty Details | GET | v2/customers/lookup/loyaltyDetails | - |

| Get Retro Requests | GET | v2/customers/lookup/retroRequest | - |

| Add Customer Image | POST | v2/customers/lookup/setImage | - |

| Get Referrals | GET | v2/customers/lookup/referrals | - |

| Get CustomerRecommendations | GET | v2/customers/lookup/recommendations | - |

| Get Points Balance | GET | v2/customers/lookup/points/balance | - |

| Get Customer Tier | GET | v2/customers/lookup/tierDetails | - |

| Get Points ConversionSchedule | GET | v2/customers/lookup/promisedPointsSchedule | - |

| Customer labels |  |  |  |

| Add Labels | POST | v2/organization/label | Organization |

| Get Org Labels | GET | v2/organization/labels | Organization |

| Tag Customers (to Labels) | POST | v2/customers/{userId}/changeLabels | Customer |

| Get Customer Labels | GET | v2/customers/{userId}/labels | Customer |

| Search Customers by Label | GET | v2/customers/labels/search?q={LabelName} | Customer |

| Event logs |  |  |  |

| Get Event Log(by Request ID) | GET | v3/webHooks/eventLog/requestId | - |

| Get Event Log(by Reference ID) | GET | v3/webHooks/eventLog/refId | - |

| Get Event Log(by Event ID) | GET | v3/webhooks/eventLog | - |

| Leads |  |  |  |

| Add Lead | PATCH | v2/leads | Leads |

| Add Lead Substatus | POST | v2/leads/substatus | Leads |

| Update Lead Status | PUT | v2/leads/{leadId}/status | Leads |

| Update Lead Followups | POST | v2/leads/{leadId}/followup | Leads |

| Update Lead | PUT | v2/leads/{leadId} | Leads |

| Configure lead reasons | POST | v2/leads/reasons | Leads |

| Get Lead Status Log | GET | v2/leads/{leadId}/statusLog | Leads |

| Get Lead follow-ups | GET | v2/leads/{leadId}/followups | Leads |

| Get Lead Reasons | GET | v2/leads/reasons | Leads |

| Get Lead Details | GET | v2/leads | Leads |

| Get Lead Substatus | GET | v2/leads/substatuses | Leads |

| Assign Lead | GET | v2/leads | Leads |

| Search lead | GET | v2/leads | Leads |

| Organization |  |  |  |

| Get Custom Fields | GET | v2/organization/customFields | Organization Data Field |

| Get Config Key Values | GET | v2/organization/organization/configkeyvalue | Organization |

| Get org till details | GET | v2/organization/till | Organization |

| Get Active Tills | GET | v2/organization/activeTill | Organization |

| Get Loyalty Programs | GET | v2/organization/programs | Organization |

| Add Store | POST | v2/orgEntity/store | Organization |

| Get Org Details | GET | v1.1/organization/get | Organization |

| Get Org Entities | GET | v1.1/organization/entities | Organization |

| Get Org Configurations | GET | v1.1/organization/configs | Organization |

| Get Org Statistics | GET | v1.1/organization/statistics | - |

| Get Top Selling Items | GET | v1.1/organization/topitems | Organization Entity |

| Get Org Custom Fields | GET | v1.1/organization/customfields | Organization Data Fields |

| Get Org Payment Modes | GET | v1.1/organization/tenders | Organization |

| Get Org Details | GET | v1/organization/get | - |

| Get Org Entities | GET | v1/organization/entities | - |

| Get Org Configurations | GET | v1/organization/configs | - |

| Get Org Statistics | GET | v1/organization/statistics | - |

| Get Top Selling Items | GET | v1/organization/topitems | - |

| Get Org Custom Fields | GET | v1/organization/customfields | - |

| Get Org Payment Modes | GET | v1/organization/tenders | Organization |

| OTP |  |  |  |

| Generate OTP | POST | v2/otp/generate | OTP |

| Validate OTP | POST | v2/otp/validate | OTP |

| Get OTP | GET | v2/otp | OTP |

| Partner program |  |  |  |

| Link Customer to Partner Program | POST | v2/partnerProgram/linkCustomer | Partner Program |

| Update Customer | POST | v2/partnerProgram/customerPartnerProgramUpdate | Partner Program |

| Delink Customer | POST | v2/partnerProgram/deLinkCustomer | Partner Program |

| Get Customer Activity | GET | v2/partnerProgram/customerActivityHistory | Partner Program |

| PII deletion |  |  |  |

| Add a PII deletion request | POST | v2/requests | Requests |

| Update PII deletion status | PUT | v2/requests | Requests |

| Retrieve request statusof PII deletion | GET | v2/requests/{id} | Requests |

| Retrieve PII deletionrequest details | GET | v2/requests | Requests |

| Points |  |  |  |

| Customer Points Transferrable | POST | v2/points/isTransferrable | Points |

| Transfer Customer Points | POST | v2/points/transfer | Points |

| Get Points Transfer Details | GET | v2/points/transfer | Points |

| Reverse Redeemed Points | POST | v2/points/reverse | Points |

| Group Points Transferrable | POST | v2/points/userGroup2/isTransferrable | Points |

| Transfer Group Points | POST | v2/points//transfer | Points |

| Points Unlock API | POST | v2/points//unlockPromisedPoints | Points |

| Check If Points Redeemable | GET | v1.1/points/isredeemable | Points |

| Issue Validation Code(to redeem points) | GET | v1.1/points/validationcode | Points |

| Redeem Points | POST | v1.1/points/redeem | Points |

| Check If Points Redeemable | GET | v1/points/isredeemable | - |

| Issue Validation Code(to redeem points) | GET | v1/points/validationcode | - |

| Redeem Points | POST | v1/points/redeem | - |

| Points ledger |  |  |  |

| Get Customer Ledger Balance | GET | v2/pointsLedger/getCustomerLedgerBalance | Points |

| Get Customer Ledger Information | GET | v2/pointsLedger/getCustomerLedgerInfo? | Points |

| Get Points Ledger Explode info | GET | v2/pointsLedger/getLedgerExplodeInfo | Points |

| Product |  |  |  |

| Add Product | POST | v1.1/product/add | Product |

| Get Product Details | GET | v1.1/product/get | Product |

| Search Products | GET | v1.1/product/search | Product |

| Add Product Attributes | POST | v1.1/product/attributes | Product |

| Get Product Attributes | GET | v1.1/product/attributes | Product |

| Get Product Categories | GET | v1.1/product/categories | Product |

| Get Product Brands | GET | v1.1/product/brands | Product |

| Get Product Colors | GET | v1.1/product/colors | Product |

| Get Product Sizes | GET | v1.1/product/sizes | Product |

| Get Product Meta Sizes | GET | v1.1/product/meta_sizes | Product |

| Add Product | POST | v1/product/add | - |

| Get Product Details | GET | v1/product/get | - |

| Search Products | GET | v1/product/search | - |

| Add Product Attributes | POST | v1/product/attributes | - |

| Get Product Attributes | GET | v1/product/attributes | - |

| Get Product Categories | GET | v1/product/categories | - |

| Get Product Brands | GET | v1/product/brands | - |

| Get Product Colors | GET | v1/product/colors | - |

| Get Product Sizes | GET | v1/product/sizes | - |

| Get Product Meta Sizes | GET | v1/product/meta_sizes | - |

| Add transaction request | POST | v2/requests/ | Requests |

| Update transaction request | PUT | v2/requests/ | Requests |

| Retrieve transaction requeststatus | GET | v2/requests/{id} | Requests |

| Retrieve transaction requestdetails | GET | v2/requests | Requests |

| Add Request | POST | v1.1/request/ad | Requests |

| Approve Requests | POST | v1.1/request/approve | Requests |

| Reject Requests | POST | v1.1/request/reject | Requests |

| Get Request Details | GET | v1.1/request/get | Requests |

| Get Request Logs | GET | v1.1/request/logs | CustChangeReqs |

| Send retro request | POST | v1.1/request/ | Requests |

| Approval of the request | POST | v1.1/request/approve | Requests |

| Approve Requests | POST | v1/request/approve | - |

| Reject Requests | POST | v1/request/reject | - |

| Get Request Details | GET | v1/request/get | - |

| Get Request Logs | GET | v1/request/logs | - |

| Send retro request | POST | v1/request | - |

| Approval of request | POST | v1/request/approve | - |

| Referral |  |  |  |

| Validate referral code | GET | v2/validate | Customer |

| Reward catalog |  |  |  |

| Create Reward | POST | api_gateway/rewards/core/v1/reward/create |  |

| Update Reward | PUT | api_gateway/rewards/core/v1/reward/{reward ID}/brand/{brand ID} |  |

| Create custom field | POST | api_gateway/rewards/core/v1/brand/customfield |  |

| Get custom field | GET | api_gateway/rewards/core/v1/brand/customfield |  |

| Get user brand rewards | GET | api_gateway/rewards/core/v1/user/reward/{reward Id}/brand/{brand name} |  |

| Get Brands Rewards | GET | api_gateway/rewards/core/v1/reward/brand/{brand Id} |  |

| Get User Reward Details | GET | api_gateway/rewards/core/v1/user/vouchers/brand/{brand name}?mobile={mobile}&username={store} |  |

| Get User Reward by ID | GET | api_gateway/rewards/core/v1/user/reward/{reward Id}/vouchers/brand/{brand name}?mobile={mobile}&username={store} |  |

| Issue User Reward | POST | api_gateway/rewards/core/v1/user/reward/{reward Id}/issue?username={store}&skip_validation=true |  |

| Issue bulk reward | POST | api_gateway/rewards/core/v1/user/rewards/issue?username={store}&skip_validation=true |  |

| Create Catalog Promotion | POST | api_gateway/rewards/core/v1/promotion/create |  |

| Update Catalog Promotion | PUT | api_gateway/rewards/core/v1/promotion/{reward Id}/brand/{brand Id} |  |

| Get Catalog Promotion Details | GET | api_gateway/rewards/core/v1/promotion/{promotion Id}/brand/{brand Id} |  |

| Get List of Promotions | GET | api_gateway/rewards/core/v1/promotion/brand/{brand Id} |  |

| Disable Promotion | PUT | api_gateway/rewards/core/v1/promotion/{promotion Id}/status/false/brand/{brand Id} |  |

| Get Rewards for User | GET | api_gateway/rewards/core/v1/user/reward/brand/{BrandName}?userId={userID} |  |

| Get rewards for User (New API) | GET | api_gateway/rewards/core/v1/user/userReward/brand/{BrandName} |  |

| Staff |  |  |  |

| Add Staff Account | POST | v2/staff | Staff |

| Get Access Token | GET | v2/staff/accessToken | Staff |

| Edit Staff Details | POST | v2/staff/edit | Staff |

| Get Staff Details | GET | v2/staff | Staff |

| Change Account Password | POST | v2/staff/changePassword | Staff |

| Send OTP | POST | v2/staff/sendOtp | Staff |

| Validate OTP | POST | v2/staff/validate | Staff |

| Change Identifier (Send OTP) | POST | v2/staff/changeidentifier/sendotp | Staff |

| Change Identifier (Validate OTP) | POST | v2/staff/changeidentifier | Staff |

| Transfer Staff User | POST | v2/staff/transfer | Staff |

| Get Staff of Store/Zone | GET | v2/staff/getUsersList | Staff |

| Logout Staff Account | GET | v2/staff/logout | Staff |

| Remove Staff Account | POST | v2/staff/delete | Staff |

| Store |  |  |  |

| Get Store Details | GET | v1.1/store/get | Store |

| Get Store Staff Details | GET | v1.1/store/staff | Store |

| Get Store Tasks | GET | v1.1/store/tasks | Store |

| Verify Store Login Credentials | GET | v1.1/store/login | Store |

| Upload Store Logs | POST | v1.1/store/logs | Store |

| Upload Store Reports | POST | v1.1/store/reports | Store |

| Get Store Reports | GET | v1.1/store/reports | Store |

| Get Store Configurations | GET | v1.1/store/configurations | Store |

| Verify Login Credentials | GET | v1.1/store/login | Store |

| Get Store Details | GET | v1/store/get | Store |

| Get Store Staff Details | GET | v1/store/staff | Store |

| Get Store Tasks | GET | v1/store/tasks | Store |

| Verify Store Login Credentials | GET | v1/store/login | Store |

| Upload Store Logs | POST | v1/store/logs | Store |

| Upload Store Reports | POST | v1/store/reports | Store |

| Get Store Reports | GET | v1/store/reports | Store |

| Get Store Configurations | GET | v1/store/configurations | Store |

| Verify Login Credentials | GET | v1/store/login | Store |

| Target group |  |  |  |

| Deactivate target | DELETE | v3/targetGroups/{groupId}/targets/{targetId} | - |

| Create target groups | POST | v3/targetGroups | - |

| Get target groups | GET | v3/targetGroups/{targetGroupId} | - |

| Get target periods | GET | v3/targetGroups/{targetGroupId}/targetPeriods | - |

| Get targets details | GET | v3/targetGroups/{targetGroupId}/targets | - |

| Get target communicationtemplate | GET | v3/targetGroups/{targetGroupId}/targets/{targetId}/communications | - |

| Upsert target communication | POST | v3/targetGroups/{groupId}targets/{targetId}/communications/upsert | - |

| Get target channels | GET | v3/targetGroups/channels | - |

| Delete target group | DELETE | v3/targetGroups/{groupId} | - |

| Create target period | POST | v3/targetGroups/{groupId}/targetPeriods | - |

| Update target period | PUT | v3/targetGroups/{groupId}/targetPeriods | - |

| Create targets | POST | v3/targetGroups/{groupId}/targets | - |

| Modify targets | PUT | v3/targetGroups/{groupId}/targets/{targetId} | - |

| Tasks |  |  |  |

| Add Tasks | POST | v1.1/task/add | Tasks |

| Update Tasks | POST | v1.1/task/update | Tasks |

| Get Tasks Metadata | GET | v1.1/task/metadata | Tasks |

| Get Task Logs | GET | v1.1/task/log | Tasks |

| Update Status Mappings | POST | v1.1/task/statusmapping | Tasks |

| Get Status Mappings | GET | v1.1/task/statusmapping | Tasks |

| Get Task Reminders | GET | v1.1/task/reminder | Tasks |

| Create/Update Task Reminders | POST | v1.1/task/reminder | Tasks |

| Add Tasks | POST | v1/task/add | Tasks |

| Update Tasks | POST | v1/task/update | Tasks |

| Get Tasks Metadata | GET | v1/task/metadata | Tasks |

| Get Task Logs | GET | v1/task/log | Tasks |

| Update Status Mappings | POST | v1/task/statusmapping | Tasks |

| Get Status Mappings | GET | v1/task/statusmapping | Tasks |

| Get Task Reminders | GET | v1/task/reminder | Tasks |

| Create/Update Task Reminders | POST | v1/task/reminder | Tasks |

| Transaction |  |  |  |

| Add/Return Transaction(bulk) | POST | v2/transactions/bulk | Transaction |

| Add/Return transaction (single) | POST | v2/transactions | Transaction |

| Update Transaction | PUT | v2/transactions | Transaction |

| Get Transaction Details | GET | v2/transactions/{id} | Transaction |

| Get transaction details using bill number | GET | v2/transactions/getByBillNumber/{bill_number} | - |

| Add Transaction | POST | v1.1/transaction/add | Transaction |

| Add Transaction with Local Currency | POST | v1.1/transaction/add_with_local_currency | Transaction |

| Update Transaction Details | POST | v1.1/transaction/update | Transaction |

| Get Transaction Details | GET | v1.1/transaction/get | Transaction |

| Add Transaction | POST | v1/transaction/add | - |

| Add Transaction with Local Currency | POST | v1/transaction/add_with_local_currency | - |

| Update Transaction Details | POST | v1/transaction/update | - |

| Get Transaction Details | GET | v1/transaction/get | - |

| Transaction rejection |  |  |  |

| getRejectedTransactions | GET | v2/organization/rejectedTransactions | Transaction |

| getReTriggerStatus | GET | v2/organization/rejectedTransactions/retriggerStatus/{retriggerId} | - |

| markFailed | PUT | v2/organization/rejectedTransactions/markFailed | - |

| retriggerTransactionAdd | POST | v2/organization/rejectedTransactions/retrigger | - |

| User authentication |  |  |  |

| Register User | POST | v2/user_auth/register | Customer |

| Authorize User | POST | v2/user_auth/authorize_user | Customer |

| Update Password | POST | v2/user_auth/update | Customer |

| User group |  |  |  |

| Add Group | POST | v2/userGroup2 | User groups |

| Update User Group | PUT | v2/userGroup2 | User groups |

| Search user groupsby name, ID, andmobile number | GET | v2/userGroup2/search | User groups |

| Delete User Group | DELETE | v2/userGroup2 | User groups |

| Join Member to Group | POST | v2/userGroup2/join | User groups |

| Remove group member | DELETE | v2/userGroup2/{groupId}/leave | User groups |

| Transfer Group Member | POST | v2/userGroup2/transfer | Points |

| Get group transactions | GET | v2/userGroup2/transactions | User groups |

| Retrieve user group members list | GET | v2/userGroup2 | User groups |

| Retrieve user group memberslist with cards & status details | GET | v2/userGroup2/members | User groups |

| Retrieve Primary &Secondary Member Details | GET | v2/userGroup2 | User groups |

| Retrieve group slab/tier log history | GET | v2/userGroup2/slabHistory | User groups |

| Retrieve group ledger information | GET | v2/pointsLedger/getCustomerLedgerInfo | Points |

| Retrieve points expiry schedule of a group | GET | v2/userGroup2/pointsExpirySchedule | User groups |

| Retrieve points conversion schedule | GET | v2/userGroup2/promisedPointsSchedule | User groups |

| Users |  |  |  |

| Target group | GET | v3/users/{userId}/targetGroups | - |


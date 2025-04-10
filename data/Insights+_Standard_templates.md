# Standard templates

A template is a combination of KPIs or facts, and dimensions. Standard templates are created from facts, and dimensions, where as custom templates are created using KPIs and dimensions.

Standard templates consist of raw data of facts or dimensions. You can use standard templates to get summarized data, for example,  points issued, total visits, and purchases at the customer level.  However, if you need these values for a specific duration, you can create custom templates.

There are over 20 different standard templates categorized as Fact, Dimension and Fraud. Each category consists of different templates as mentioned below:

# Fact Templates

You can export data based on event date or last updated date. Following are the different standard templates available in EI. You can export data based on event date or last updated date.

| Name | Description |

| --- | --- |

| Members | Contains details of members (loyalty and non-loyalty customers) and non-members based on the last updated date or event date (registration date). You can export other customer details such as- Custom fields- Extended fields- User segments- Current slab- Audience group- Customers registered in a specific duration (up to one year).For more information on supported measures and dimensions, clickMembers. |

| Coupons | Lets you export all details of the coupons issued at customer level and transaction level, You can export the details of:- Transaction numbers along with coupon details,- Redeemed and expired coupons, and- Coupon level custom fields.You need to select custom fields manually.Note: Coupons that are issued or redeemed will be tagged to a transaction only if both the transaction and coupon issual or redemption occurs within the span of - +/- 15 minutes.For more information on supported measures and dimensions, clickCoupons. |

| Points | There are 3 export templates for points data.Points - Lets you export the data of points related events such as points issual, and points deduction (redeemed, expired, and returned) including source details. You will receive a detailed breakdown of deducted points, but not the summarized one.The template will have the filters redeemable and not applicable (deducted), applied by default.Note: Points that are redeemed will be tagged to a transaction only if both the transaction and points redemption occurs with in  the span of +/- 15 minutes.Points Redemption Summary - Lets your export the details of the points redemption done by the customers.Points Expiry Reminder Info - Lets you export the details of points expiry reminders sent to customers through Loyalty Engine. These are automated reminders configured for points expiry.For more information on supported measures and dimensions, clickPoints. |

| Response Info | It consists of the dump of transactions at a line-item level for responders of a particular campaign. You can export transactions and line-item level details of customers that responded to a specific campaign.For more information on supported measures and dimensions, clickResponse Info. |

| Contacted | Lets you get customers that were contacted for a specific campaign.For more information on supported measures and dimensions, clickContacted. |

| Invitation Sent | Lets you export details of events related to the sending of invitations during a referral campaign. They include fields such as the date and time at which the invitation was sent, identifiers for the campaign, client, and invitee, type of identifier and the status of the invitee.For more information on supported measures and dimensions, clickInvitation sent. |

| Profiles | A customer can register with the brand through multiple sources. For example, InStore , WeChat, Tmall , Mobile app or any other source. This template lets you export customer details from various sources. It currently does not capture InStore registrations.For more information on available measures and dimensions, clickProfiles. |

| Registration events | Lets you export the details of the events in which an entity (customer/ store staff) registration takes place.For more information on available measures and dimensions, clickRegistration events. |

| Slab Change Log | Lets you to export the slab change log data which contains details such as from slab, to slab, changed date, store and customer details.For more information on available measures and dimensions, clickSlab Change Log. |

| Return Transactions | Lets you export the details of return transactions at bill level and line-item level. These are transactions that are generated for return products.For more information on available measures and dimensions, clickReturn Transactions. |

| Issue Trackers | Lets you export the data of all complaints raised by customers that are converted into "issues" and is managed by the Customer Care Management System.For more information on available measures and dimensions, clickIssue Trackers. |

| Messages | Lets you export the data of all communications sent to customers. This is the only template where you can get both transaction and campaign messages together.For more information on available measures and dimensions, clickMessages. |

| Call Tasks | Lets you export the data of all call tasks created at the POS for cashiers to process. The tasks could be call customers for birthday wishes that will get populated every day for the cashier to process. These tasks have a specific validity within which these needs to be closed.For more information on available measures and dimensions, clickCall Tasks. |

| Footfall | Lets you export VisitorMetrix related information which contains logs of in count, out count of customers and staff. You can also get group counts by its size - 1, 2, 3, and 4 or more.For more information on available measures and dimensions, clickFootfall. |

| Transaction | Lets you export transactions related details such asBill and line-item level transactionsMember and non-member transactionsStore level transactionsAudience list (irrespective of selected date-range)Transaction level pointsTransactions of user segmentsTransaction level custom fields, and extended fieldsLine item level custom fields and extended fieldsUser level extended fieldsFor more information on measures and dimensions, clickTransactions. |

| Tracker Value | Lets you export tracker values generated through the Loyalty Engine to update slabs and perform other activities. You will get bills by entry but not cumulative bills.You can use this template to export:Tracker value at a bill or line-item level, andAll tracker bills of the specified duration irrespective of the slabLimitationsYou cannot export the current tracker valueTo know more about trackers and configurations, seeTrackers.For more information on supported measures and dimensions, clickTracker Value. |

| Payment mode | Lets you export payment mode related data. Provides transaction-level details, along with the split of payment methods. A bill can be paid fully or partially using various modes such as cash, credit card, gift card, points, coupon redemption, or other means.For more information on supported measures and dimensions, clickPayment Mode. |

| Customer Merge Event Log | Lets you export the log of customer account merge event which includes both victim and survivor details. The template also supports, audience filter based and customer segment bases filters.To know more about account merge and its affect on both the accounts, seeChange Account PasswordYou can Change Identifiers & Account Merge Configuration in Member Care. To know more, clickIdentifier change request.For more information on supported measures and dimensions, clickCustomer Merge Event Log. |

| Badges | Badges Earn: Lets you export data related to the badges earned by customers. Allows you to export the badge ID, customer ID, earning date, expiry date, and whether the badge is active or revoked.Badges Issue: Lets you export data of the event where the customer has enrolled in a badge before earning it. Allows you to export the badge ID, customer ID, issuance date, expiry date, and whether the badge is active or revoked.Badges Earned Benefits: Lets you export data of the promotions or benefits earned by the customers, that are linked to the badge. Allows you to export the benefit type, coupon code, points earned, and validity of the benefit that comes along.For more information on supported measures and dimensions, clickBadges. |

| Goodwill Request | Lets you export the details of the goodwill requests generated while allocating goodwill points or coupons to the customers.For more information on supported measures and dimensions, clickGoodwill Requests. |



[Members](/docs/members-standard-export-template)

[Coupons](/docs/coupons-standard-export-template)

[Points](/docs/points-standard-export-template)

[Response Info](/docs/response-info-standard-export-template)

[Contacted](/docs/contacted-standard-export-template)

[Invitation sent](/docs/invitation-sent-standard-export-template)

[Profiles](/docs/profiles-2-standard-export-template)

[Registration events](/docs/registration-event-standard-export-template)

[Slab Change Log](/docs/slab-change-log-standard-export-template)

[Return Transactions](/docs/return-transactions-standard-export-template)

[Issue Trackers](/docs/issue-trackers-standard-export-template)

[Messages](/docs/messages-standard-export-template)

[Call Tasks](/docs/call-tasks-standard-export-template)

[Footfall](/docs/footfall-standard-export-template)

[Transactions](/docs/transactions-standard-export-template)

[Trackers](/docs/trackers-1)

[Tracker Value](/docs/tracker-value-standard-export-template)

[Payment Mode](/docs/payment-mode-standard-export-template)

[Change Account Password](/reference/change-account-password)

[Identifier change request](/docs/manage-id-change_requests)

[Customer Merge Event Log](/docs/customer-merge-event-log-standard-export-template)

[Badges](/docs/badges-standard-export-template)

[Goodwill Requests](/docs/goodwill-requests-standard-export-template)

# Dimension Templates

Following are the different standard dimension templates available for export.

| Name | Description |

| --- | --- |

| Concepts | Lets you export the name of the concept hierarchy. |

| Users | Lets you export the user details such as user id, slab name, fraud status, mobile number, loyalty type, email address, first name and last name. |

| Audience Group | Lets you export the audience group data based on campaign group type, name and ROI type. |

| Campaign | Lets you export campaign data based on campaign name, start date, and end date. |

| Stores | Lets you export store names. |

| Inventory | Lets you export the inventory item details such as ou_id, brand_name, color, style, inventory description, image url, price, sub category code, category code, item code, sub category, category, and item Id. |



# Fraud

Currently, there are no templates in this category.

Updated7 months ago
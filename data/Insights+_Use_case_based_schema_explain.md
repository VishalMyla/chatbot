# Use case based schema explain

The major fact tables to refer to understand the use cases and possible scenarios of events related to points are as below:

| EItables for Points data |  |

| --- | --- |

| Fact tables | Dimension tables |

| points | points_awarded_type |

|  | points_category |

|  | points_event_type |

|  | points_promotions |

|  | deduction_type |

| points_redemption_summary | Date , zone_till , time |

| points_expiry_reminder_info | Date , communication_channel, time |



The dimension table for Point Fact which gives info regarding the points awarded scenario ispoints_awarded_type.

## Values for awarded_type and their context:

### POINTS_AWARDED:

- It refers to the regular points awarded to the user  for making any  transactions.

- Scenario:Customer made a txn of Rs.1000 on 1st FebCustomer is awarded  100 points

- Customer made a txn of Rs.1000 on 1st Feb

- Customer is awarded  100 points

- Effect:Entry in the points fact on EI side with granularity at  awarded_ref_id level.Each entry refers to a unique event of points awarded at transaction level.The column dim_points_awarded_type_id will be 1 referring to enum ‘POINT_AWARDED’.Allocated_points = 100 [populated from the points_exclusive column of the points_awarded table in the source ] against the bill_id.

- Entry in the points fact on EI side with granularity at  awarded_ref_id level.

- Each entry refers to a unique event of points awarded at transaction level.

- The column dim_points_awarded_type_id will be 1 referring to enum ‘POINT_AWARDED’.

- Allocated_points = 100 [populated from the points_exclusive column of the points_awarded table in the source ] against the bill_id.

### POINTS_AWARDED_BILL_PROMOTION

- Promotional points given on top of regular point at transaction level

Promotional points given on top of regular point at transaction level

- Scenario:Customer made a txn of Rs.1000 on 1st Feb and got 100 points.Also got 50 bonus points through a promotion running.

Scenario:

- Customer made a txn of Rs.1000 on 1st Feb and got 100 points.

- Also got 50 bonus points through a promotion running.

- Effect:Entry in the points fact on EI side with granularity at  awarded_ref_id level.Each entry refers to a unique event of points awarded at transaction level.The column dim_points_awarded_type_id will be 2 referring to enum POINT_AWARDED_BILL_PROMOTION.Allocated_points = 100 [populated from the points_exclusive column of the points_awarded table in thesource ] against the bill_id in the points fact.Allocated_points = 50[populated from the points_value column of points_awarded_bill_promotions  table inthe source ] against the bill_id in the points fact

Effect:

- Entry in the points fact on EI side with granularity at  awarded_ref_id level.

- Each entry refers to a unique event of points awarded at transaction level.

- The column dim_points_awarded_type_id will be 2 referring to enum POINT_AWARDED_BILL_PROMOTION.

- Allocated_points = 100 [populated from the points_exclusive column of the points_awarded table in thesource ] against the bill_id in the points fact.

- Allocated_points = 50[populated from the points_value column of points_awarded_bill_promotions  table inthe source ] against the bill_id in the points fact

### POINTS_AWARDED_LINEITEM

- Regular points awarded for purchasing a specific product

Regular points awarded for purchasing a specific product

- Scenario:Customer made a txn of Rs. 1000, containing 3 items of Rs. 200, Rs. 350 and Rs. 450,He gets 20 points on item 1, 35 points on item 2 and 45 points on item 3.Also gets 40 bonus points on item 1 through a promotion running on that SKU

Scenario:

- Customer made a txn of Rs. 1000, containing 3 items of Rs. 200, Rs. 350 and Rs. 450,

- He gets 20 points on item 1, 35 points on item 2 and 45 points on item 3.

- Also gets 40 bonus points on item 1 through a promotion running on that SKU

- Effect:Entry in the points fact on EI side with granularity at  awarded_ref_id level.Each entry refers to a unique event of points awarded at transaction level.-The column dim_points_awarded_type_id will be 3 referring to enum POINT_AWARDED_LINEITEM.

Effect:

- Entry in the points fact on EI side with granularity at  awarded_ref_id level.

- Each entry refers to a unique event of points awarded at transaction level.-The column dim_points_awarded_type_id will be 3 referring to enum POINT_AWARDED_LINEITEM.

- On source side there would be an entry against each line itempoints_exclusive column of points_awarded_lineitems table  will have 20 points against first bill_lineitem, (idwill be in bill_lineitem_id column)points_exclusive column of points_awarded_lineitems table  will have 35 points against second bill_lineitem,(id will be in bill_lineitem_id column)points_exclusive column will have 45 points against thrift bill_lineitem, (id will be in bill_lineitem_id column)event_log_id in all 3 records with id generated in the event_log table

On source side there would be an entry against each line item

- points_exclusive column of points_awarded_lineitems table  will have 20 points against first bill_lineitem, (idwill be in bill_lineitem_id column)

- points_exclusive column of points_awarded_lineitems table  will have 35 points against second bill_lineitem,(id will be in bill_lineitem_id column)

- points_exclusive column will have 45 points against thrift bill_lineitem, (id will be in bill_lineitem_id column)event_log_id in all 3 records with id generated in the event_log table

- In customer_points_summary  table, against that point category,current_points will become x + 100 (x is the current_points before this event)cumulative_points will become x +100event_log_id with id generated in the event_log table

In customer_points_summary  table, against that point category,

- current_points will become x + 100 (x is the current_points before this event)

- cumulative_points will become x +100

- event_log_id with id generated in the event_log table

- If Ledger is enabled, points_ledger table will have anentry of 100 points with entry_type as CREDITcps_id which got affected in the above CPSevent_log_id with id generated in the event_log table

If Ledger is enabled, points_ledger table will have an

- entry of 100 points with entry_type as CREDIT

- cps_id which got affected in the above CPS

- event_log_id with id generated in the event_log table

### POINTS_AWARDED_LINEITEM_PROMOTION

- Promotional points given on top of regular point at line item level

Promotional points given on top of regular point at line item level

- Scenario:Customer made a txn of Rs. 1000, containing 3 items of Rs. 200, Rs. 350 and Rs. 450,He gets 20 points on item 1, 35 points on item 2 and 45 points on item 3.Also gets 40 bonus points on item 1 through a promotion running on that SKU

Scenario:

- Customer made a txn of Rs. 1000, containing 3 items of Rs. 200, Rs. 350 and Rs. 450,

- He gets 20 points on item 1, 35 points on item 2 and 45 points on item 3.

- Also gets 40 bonus points on item 1 through a promotion running on that SKU

- Effect:Entry in the points fact on EI side with granularity at  awarded_ref_id level.Each entry refers to a unique event of points awarded at transaction/line item/promotion level.The column dim_points_awarded_type_id will be 4 referring to enum

Effect:

- Entry in the points fact on EI side with granularity at  awarded_ref_id level.

- Each entry refers to a unique event of points awarded at transaction/line item/promotion level.

- The column dim_points_awarded_type_id will be 4 referring to enum

### POINTS_AWARDED_LINEITEM_PROMOTION.

- In the event_log table, an event record will be inserted with event_type_id as 15.

In the event_log table, an event record will be inserted with event_type_id as 15.

- The id generated here is event_log_id.

The id generated here is event_log_id.

- In points_awarded_lineitems table, there will be 3 entriespoints_exclusive column will have 20 points against first bill_lineitem (id will be   in bill_lineitem_id column),points_exclusive column will have 35 points against second bill_lineitem (id will be in bill_lineitem_idcolumn),points_exclusive column will have 45 points against thrift bill_lineitem (id will be in bill_lineitem_id column),event_log_id in all 3 records with id generated in the event_log table

In points_awarded_lineitems table, there will be 3 entries

- points_exclusive column will have 20 points against first bill_lineitem (id will be   in bill_lineitem_id column),

- points_exclusive column will have 35 points against second bill_lineitem (id will be in bill_lineitem_idcolumn),

- points_exclusive column will have 45 points against thrift bill_lineitem (id will be in bill_lineitem_id column),

- event_log_id in all 3 records with id generated in the event_log table

- In points_awarded_lineitem_promotion table, there will a single entrypoints_value column will have 40 points against the first bill_lineitem.

In points_awarded_lineitem_promotion table, there will a single entry

- points_value column will have 40 points against the first bill_lineitem.

- In customer_points_summary table, against that point category,current_points will become x + 140 (x is the current_points before this event)cumulative_points will become x +140event_log_id with id generated in the event_log table

In customer_points_summary table, against that point category,

- current_points will become x + 140 (x is the current_points before this event)

- cumulative_points will become x +140

- event_log_id with id generated in the event_log table

- If Ledger is enabled, points_ledger table will have anentry of 140 points with entry_type as CREDITcps_id which got affected in the above CPSevent_log_id with id generated in the event_log table

If Ledger is enabled, points_ledger table will have an

- entry of 140 points with entry_type as CREDIT

- cps_id which got affected in the above CPS

- event_log_id with id generated in the event_log table

### POINTS_AWARDED_CUSTOMER_PROMOTION

- Promotional points given on top of regular points at customer level.

Promotional points given on top of regular points at customer level.

- Scenario:Customer gets 100 bonus points while enrolling/registering in the program.

Scenario:

- Customer gets 100 bonus points while enrolling/registering in the program.

- Effect:Entry in the points fact on EI side with granularity at  awarded_ref_id level.Each entry refers to a unique event of points awarded at transaction/line item/promotion level.The column dim_points_awarded_type_id will be 4 referring to enum

Effect:

- Entry in the points fact on EI side with granularity at  awarded_ref_id level.

- Each entry refers to a unique event of points awarded at transaction/line item/promotion level.

- The column dim_points_awarded_type_id will be 4 referring to enum

### POINTS_AWARDED_CUSTOMER_PROMOTION.

- In the event_log table, an event record will be inserted with event_type_id as 2.

In the event_log table, an event record will be inserted with event_type_id as 2.

- The id generated here is event_log_id

The id generated here is event_log_id

- In points_awarded_customer_promotion table,points_value column will have 100 points,event_log_id with id generated in the event_log table

In points_awarded_customer_promotion table,

- points_value column will have 100 points,

- event_log_id with id generated in the event_log table

- In customer_enrollment table, against that point category,a new entry will be created for the customerevent_log_id with id generated in the event_log table

In customer_enrollment table, against that point category,

- a new entry will be created for the customer

- event_log_id with id generated in the event_log table

- In customer_points_summary table, against that point category,a new entry will be created for the customercurrent_points will become 100cumulative_points will become 100event_log_id with id generated in the event_log table

In customer_points_summary table, against that point category,

- a new entry will be created for the customer

- current_points will become 100

- cumulative_points will become 100

- event_log_id with id generated in the event_log table

- If Ledger is enabled, points_ledger table will have anentry of 100 points with entry_type as CREDITcps_id which got affected in the above CPSevent_log_id with id generated in the event_log table

If Ledger is enabled, points_ledger table will have an

- entry of 100 points with entry_type as CREDIT

- cps_id which got affected in the above CPS

- event_log_id with id generated in the event_log table

The dimension table for Point Fact which gives info regarding the points deducted scenario is deduction_type.

## Values for deduction_type and their context:

### EXPIRED

- Points awarded to the user are expired and deducted.

Points awarded to the user are expired and deducted.

- Scenario:Customer made a transaction of Rs.1000 on 1st feb and was awarded 100 points.The above awarded points expired on 10th feb.

Scenario:

- Customer made a transaction of Rs.1000 on 1st feb and was awarded 100 points.

- The above awarded points expired on 10th feb.

- Effect:All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which thepoints have expired.Points shall appear in the ‘deducted_points’ column. Effect is reduction in user’s point balance.The column dim_deduction_type_id will be 2 referring to enum EXPIRED.Till 9th feb, the flow will be usual like the above awarded scenarios, because the points will be in awardedtables.

Effect:

- All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which thepoints have expired.

- Points shall appear in the ‘deducted_points’ column. Effect is reduction in user’s point balance.

- The column dim_deduction_type_id will be 2 referring to enum EXPIRED.

- Till 9th feb, the flow will be usual like the above awarded scenarios, because the points will be in awardedtables.

- On 10th feb, the following will happen :In event_log table  new entry will be created with event_type_id as 2

On 10th feb, the following will happen :

- In event_log table  new entry will be created with event_type_id as 2

- In PA table,points_exclusive column will stay 100expired_exclusive_value column will become 100status column will change from AVAILABLE to EXPIRED

In PA table,

- points_exclusive column will stay 100

- expired_exclusive_value column will become 100

- status column will change from AVAILABLE to EXPIRED

- In CPS tablecurrent_points column will reduce by 100cumulative_points column will stay the samepoints_expired column will become x+100

In CPS table

- current_points column will reduce by 100

- cumulative_points column will stay the same

- points_expired column will become x+100

- If Ledger is Enabled,an entry_type column with DEBIT will be createdpoints column will be 100event_log_id column will have the id generated in the above event_log table

If Ledger is Enabled,

- an entry_type column with DEBIT will be created

- points column will be 100

- event_log_id column will have the id generated in the above event_log table

- In PD  table,an entry will be created with deduction_type as EXPIREDpoints_deducted column will have 100.event_log_id will the id generated in the above event_log tablepoints_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD  table,

- an entry will be created with deduction_type as EXPIRED

- points_deducted column will have 100.

- event_log_id will the id generated in the above event_log table

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

### REDEEMED

- User redeems the points allocated to him for any transaction

User redeems the points allocated to him for any transaction

- Scenario:Customer made a txn of Rs.1000 on 1st Feb and got 100 points.The points are redeemed by the customer on 8th Feb.

Scenario:

- Customer made a txn of Rs.1000 on 1st Feb and got 100 points.

- The points are redeemed by the customer on 8th Feb.

- Effect:All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against whichthe points have redeemed.The column dim_deduction_type_id will be 4 referring to enum REDEEMED.

Effect:

- All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against whichthe points have redeemed.

- The column dim_deduction_type_id will be 4 referring to enum REDEEMED.

- On 8th Feb, In event_log tablenew entry will be created with event_type_id as 3

On 8th Feb, In event_log table

- new entry will be created with event_type_id as 3

- In PA table,points_exclusive column will stay 100redeemed_exclusive_value column will become 100status column will change from AVAILABLE to REDEEMED

In PA table,

- points_exclusive column will stay 100

- redeemed_exclusive_value column will become 100

- status column will change from AVAILABLE to REDEEMED

- In CPS table,current_points column will reduce by 100cumulative_points column will stay the samepoints_redeemed column will become x+100

In CPS table,

- current_points column will reduce by 100

- cumulative_points column will stay the same

- points_redeemed column will become x+100

- If Ledger is Enabled,an entry_type column with DEBIT will be createdpoints column will be 100event_log_id column will have the id generated in the above event_log table

If Ledger is Enabled,

- an entry_type column with DEBIT will be created

- points column will be 100

- event_log_id column will have the id generated in the above event_log table

- In PD  table,an entry will be created with deduction_type as REDEEMEDpoints_deducted column will have 100.event_log_id will the id generated in the above event_log tablepoints_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD  table,

- an entry will be created with deduction_type as REDEEMED

- points_deducted column will have 100.

- event_log_id will the id generated in the above event_log table

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- In PRS table,an entry will be created with redemption_type column as REDEEMEDpoints_redeemed column will have 100redemption_id column will have a unique id generated by loyaltybill_id / bill_number column will have the bill against which points were redeemed(if passed in thepayload)event_log_id will the id generated in the above event_log table

In PRS table,

- an entry will be created with redemption_type column as REDEEMED

- points_redeemed column will have 100

- redemption_id column will have a unique id generated by loyalty

- bill_id / bill_number column will have the bill against which points were redeemed(if passed in thepayload)

- event_log_id will the id generated in the above event_log table

### RETURN

- Points are allocated to the user on a transaction.

Points are allocated to the user on a transaction.

- Before the points are redeemed or expired, the user returns the transaction.

Before the points are redeemed or expired, the user returns the transaction.

- The points awarded on these transaction are then deducted

The points awarded on these transaction are then deducted

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.The expiry date of the points is 10th Feb.txn 1 is returned by the customer on 5th Feb.

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.

- The expiry date of the points is 10th Feb.

- txn 1 is returned by the customer on 5th Feb.

- Effect:All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which thepoints have been returned.The column dim_deduction_type_id will be 5 referring to enum RETURN.

Effect:

- All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which thepoints have been returned.

- The column dim_deduction_type_id will be 5 referring to enum RETURN.

- On 5th Feb, In event_log tablenew entry will be created with event_type_id as 5

On 5th Feb, In event_log table

- new entry will be created with event_type_id as 5

- In PA table,points_exclusive column will stay 100returned_exclusive_value column will become 100status column will change from AVAILABLE to RETURNED

In PA table,

- points_exclusive column will stay 100

- returned_exclusive_value column will become 100

- status column will change from AVAILABLE to RETURNED

- In CPS table,current_points column will reduce by 100cumulative_points column will stay the samepoints_returned column will become x+100

In CPS table,

- current_points column will reduce by 100

- cumulative_points column will stay the same

- points_returned column will become x+100

- If Ledger is Enabled,an entry_type column with DEBIT will be createdpoints column will be 100event_log_id column will have the id generated in the above event_log table

If Ledger is Enabled,

- an entry_type column with DEBIT will be created

- points column will be 100

- event_log_id column will have the id generated in the above event_log table

- In PD  table,an entry will be created with deduction_type as RETURNpoints_deducted column will have 100.event_log_id will the id generated in the above event_log tablepoints_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD  table,

- an entry will be created with deduction_type as RETURN

- points_deducted column will have 100.

- event_log_id will the id generated in the above event_log table

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

### REDEMPTION_REVERSAL

- User redeems the points for a transaction ,

User redeems the points for a transaction ,

- later he decides not to use those points and reverse the redemption

later he decides not to use those points and reverse the redemption

- OR the transaction on which he redeemed the points is reverted.

OR the transaction on which he redeemed the points is reverted.

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.The expiry date of the points is 10th Feb.Customer makes another txn 2 of Rs 2000 on 3rd Feb and redeems 100 points.Customer returns txn 2 on 5th Feb

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.The expiry date of the points is 10th Feb.

- Customer makes another txn 2 of Rs 2000 on 3rd Feb and redeems 100 points.

- Customer returns txn 2 on 5th Feb

- Effect:All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which theredeemed points have been reversed.The column dim_deduction_type_id will be 7 referring to enum REDEMPTION_REVERSAL.

Effect:

- All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which theredeemed points have been reversed.

- The column dim_deduction_type_id will be 7 referring to enum REDEMPTION_REVERSAL.

- On 3rd Feb, In event_log tablefirst entry will be created with event_type_id as 3 for Redeem---- e12nd entry will be created with event_type_id as 15 for transaction/add------e2

On 3rd Feb, In event_log table

- first entry will be created with event_type_id as 3 for Redeem---- e1

- 2nd entry will be created with event_type_id as 15 for transaction/add------e2

- In PA table,The PA created for the 1st transaction will be updated withredeemed_exclusive_value column will become x+100status column will become REDEEMED

In PA table,

- The PA created for the 1st transaction will be updated with

- redeemed_exclusive_value column will become x+100

- status column will become REDEEMED

- In CPS Table,points_redeemed column will become x + 100current_points will reduce by 100 (x-100)

In CPS Table,

- points_redeemed column will become x + 100

- current_points will reduce by 100 (x-100)

- If Ledger is enabled, Points Ledger table will have,DEBIT entry of 100 will be created against e1 event_log_idcps_id will be the one that is affected above

If Ledger is enabled, Points Ledger table will have,

- DEBIT entry of 100 will be created against e1 event_log_id

- cps_id will be the one that is affected above

- In PD table,an entry will be created with deduction_type as REDEEMEDpoints_deducted column will have 100.event_log_id will the id as e1points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD table,

- an entry will be created with deduction_type as REDEEMED

- points_deducted column will have 100.

- event_log_id will the id as e1

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- In PRS table,When redemption occurredan entry will be created with redemption_type column as REDEEMEDpoints_redeemed column will have 100redemption_id column will have a unique id generated by loyaltybillNumber / billId will be -1event_log_id will the id generated as e1

In PRS table,When redemption occurred

- an entry will be created with redemption_type column as REDEEMED

- points_redeemed column will have 100

- redemption_id column will have a unique id generated by loyalty

- billNumber / billId will be -1

- event_log_id will the id generated as e1

- When 2nd transaction occurs, If unique redemption id is passed in the payload,billNumber / billId column will get updated to bill_number_2 / bill_id_2

When 2nd transaction occurs, If unique redemption id is passed in the payload,

- billNumber / billId column will get updated to bill_number_2 / bill_id_2

- After 5thFeb, when Txn2 is returned,

After 5thFeb, when Txn2 is returned,

- In event_log table,an entry will be created with event_type_id as 5 ----- e3

In event_log table,

- an entry will be created with event_type_id as 5 ----- e3

- In PA Table,redeemed_exclusive_value will become x-100status column will change from REDEEMED to AVAILABLEpoints_exclusive stay as it is.

In PA Table,

- redeemed_exclusive_value will become x-100

- status column will change from REDEEMED to AVAILABLE

- points_exclusive stay as it is.

- In CPS Table,points_redeemed column will become x - 100current_points will increase by 100 (x+100)

In CPS Table,

- points_redeemed column will become x - 100

- current_points will increase by 100 (x+100)

- If Ledger is enabled, Points Ledger table will have,CREDIT entry of 100 will be created against e3 event_log_idcps_id will be the one that is affected above

If Ledger is enabled, Points Ledger table will have,

- CREDIT entry of 100 will be created against e3 event_log_id

- cps_id will be the one that is affected above

- In PD table,an entry will be created with deduction_type as REDEMPTION_REVERSALpoints_deducted column will have 100.event_log_id will the id as e3points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD table,

- an entry will be created with deduction_type as REDEMPTION_REVERSAL

- points_deducted column will have 100.

- event_log_id will the id as e3

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- In PRS table, When redemption occurredan entry will be created with redemption_type column as REVERSAL_ON_RETURNpoints_redeemed column will have 100redemption_id column will have a unique id generated by loyaltybillNumber / billId will be -1event_log_id will the id generated as e3

In PRS table, When redemption occurred

- an entry will be created with redemption_type column as REVERSAL_ON_RETURN

- points_redeemed column will have 100

- redemption_id column will have a unique id generated by loyalty

- billNumber / billId will be -1

- event_log_id will the id generated as e3

### REDEMPTION_REVERTED

- Points are allocated to the user on a transaction and he redeems these points.

Points are allocated to the user on a transaction and he redeems these points.

- Later, the transaction on which he earned these points is returned.

Later, the transaction on which he earned these points is returned.

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.The expiry date of the points is 10th Feb.Customer makes another txn 2 of Rs 2000 on 3rd Feb and redeems 100 points.Customer returns txn 1 on 5th Feb

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.The expiry date of the points is 10th Feb.

- Customer makes another txn 2 of Rs 2000 on 3rd Feb and redeems 100 points.

- Customer returns txn 1 on 5th Feb

- Effect:All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which theredeemed points have been reverted.The column dim_deduction_type_id will be 9 referring to enum REDEMPTION_REVERTED .

Effect:

- All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which theredeemed points have been reverted.

- The column dim_deduction_type_id will be 9 referring to enum REDEMPTION_REVERTED .

- On 5th Feb, when Txn2 is returned,

On 5th Feb, when Txn2 is returned,

- In event_log table,an entry will be created with event_type_id as 5 ----- e3

In event_log table,

- an entry will be created with event_type_id as 5 ----- e3

- In PA Table,redeemed_exclusive_value will become x-100status column will change from REDEEMED to RETURNEDpoints_exclusive stay as it is.returned_exclusive_value will become x+100

In PA Table,

- redeemed_exclusive_value will become x-100

- status column will change from REDEEMED to RETURNED

- points_exclusive stay as it is.

- returned_exclusive_value will become x+100

- In PABP Table,New entry will be created withpoints_value column will be 0redeemed_value column will be x+100status column will be CONSUMEDevent_log_id will be e3promotion_id will be the id of the promotion mapped to ReturnBillPromotion

In PABP Table,New entry will be created with

- points_value column will be 0

- redeemed_value column will be x+100

- status column will be CONSUMED

- event_log_id will be e3

- promotion_id will be the id of the promotion mapped to ReturnBillPromotion

- In CPS Table,Assuming x is the points before this event camepoints_redeemed column will stay as it ispoints_returned column will become x+100current_points will become x-100cumulative_points will become x-100

In CPS Table,Assuming x is the points before this event came

- points_redeemed column will stay as it is

- points_returned column will become x+100

- current_points will become x-100

- cumulative_points will become x-100

- If Ledger is enabled, Points Ledger table will have,DEBIT entry of 100 will be created against e3 event_log_idcps_id will be the one that is affected above

If Ledger is enabled, Points Ledger table will have,

- DEBIT entry of 100 will be created against e3 event_log_id

- cps_id will be the one that is affected above

- In PD table,For the points that were awarded on txn1one entry will be created with deduction_type as RETURN and points_deducted column will have 100.one entry will be created with deduction_type as REDEMPTION_REVERTED and points_deducted column willhave 100points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)event_log_id will the id as e3

In PD table,For the points that were awarded on txn1

- one entry will be created with deduction_type as RETURN and points_deducted column will have 100.

- one entry will be created with deduction_type as REDEMPTION_REVERTED and points_deducted column willhave 100

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- event_log_id will the id as e3

- For the PABP negative points that was createdone entry will be created with deduction_type as REDEEMED and points_deducted column will have 100.points_awarded_ref_id will point to the PABP_id which got affectedpoints_awarded_ref_type will be POINT_AWARDED_BILL_PROMOTIONevent_log_id will the id as e3

For the PABP negative points that was created

- one entry will be created with deduction_type as REDEEMED and points_deducted column will have 100.

- points_awarded_ref_id will point to the PABP_id which got affected

- points_awarded_ref_type will be POINT_AWARDED_BILL_PROMOTION

- event_log_id will the id as e3

### EXPIRY_REVERTED

- The points allocated to the user for any transaction are expired .

The points allocated to the user for any transaction are expired .

- After this the user returns the transaction on which he had earned these points

After this the user returns the transaction on which he had earned these points

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.The points expired on 10th Feb.Customer returns txn1 on 12th Feb

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.

- The points expired on 10th Feb.

- Customer returns txn1 on 12th Feb

- Effect:All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which theexpired  points have been reverted.The column dim_deduction_type_id will be 8  referring to enum EXPIRY_REVERTED

Effect:

- All points that expire will appear in the Point Fact at the granularity of the awarded_ref_id against which theexpired  points have been reverted.

- The column dim_deduction_type_id will be 8  referring to enum EXPIRY_REVERTED

- On 12th Feb ,In event_log tablenew entry will be created with event_type_id as 5 ---- e3.

On 12th Feb ,In event_log table

- new entry will be created with event_type_id as 5 ---- e3.

- In PA Table,expired_exclusive_value will become x-100returned_exclusive_value will become x+100status column will change from EXPIRED to RETURNEDpoints_exclusive stay as it is.

In PA Table,

- expired_exclusive_value will become x-100

- returned_exclusive_value will become x+100

- status column will change from EXPIRED to RETURNED

- points_exclusive stay as it is.

- In CPS Table,Assuming x is the points before this event camepoints_expired column will become x-100points_returned column will become x+100current_points will stay as it iscumulative_points will stay as it is

In CPS Table,Assuming x is the points before this event came

- points_expired column will become x-100

- points_returned column will become x+100

- current_points will stay as it is

- cumulative_points will stay as it is

- If Ledger is enabled, Points Ledger table will have,DEBIT entry of 100 will be created against e3 event_log_idcps_id will be the one that is affected above

If Ledger is enabled, Points Ledger table will have,

- DEBIT entry of 100 will be created against e3 event_log_id

- cps_id will be the one that is affected above

- In PD table,For the points that were awarded on txn1one entry will be created with deduction_type as RETURN and points_deducted column  will have 100.one entry will be created with deduction_type as EXPIRY_REVERTED and points_deducted column will have100points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)event_log_id will the id as e3

In PD table,For the points that were awarded on txn1

- one entry will be created with deduction_type as RETURN and points_deducted column  will have 100.

- one entry will be created with deduction_type as EXPIRY_REVERTED and points_deducted column will have100

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- event_log_id will the id as e3

### REDEEMED_BY_TRANSFER

- One user (sender) transfers the points to another user (receiver).

One user (sender) transfers the points to another user (receiver).

- Points are deducted from the sender's entry

Points are deducted from the sender's entry

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.Customer transfers 100 points to his friend on 5th Feb

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.

- Customer transfers 100 points to his friend on 5th Feb

- Effect:

Effect:

- On 5th Feb,

On 5th Feb,

- In event_log tablenew entry will be created with event_type_id as 24  -->Sender is c1, Receiver is c2.

In event_log table

- new entry will be created with event_type_id as 24  -->Sender is c1, Receiver is c2.

- In PA table,points_exclusive column for c1 will stay 100redeemed_exclusive_value column for c1 will become 100status column for c1 will change from AVAILABLE to REDEEMED

In PA table,

- points_exclusive column for c1 will stay 100

- redeemed_exclusive_value column for c1 will become 100

- status column for c1 will change from AVAILABLE to REDEEMED

- In PACP tablenew entry will be created for c2points_value column will be 100status will be AVAILABLEpromotion_id will be DefaultPointsTransferPromotionevent_log_id column will have the id generated in above event_log table

In PACP table

- new entry will be created for c2

- points_value column will be 100

- status will be AVAILABLE

- promotion_id will be DefaultPointsTransferPromotion

- event_log_id column will have the id generated in above event_log table

- In CPS table,

In CPS table,

- For c1,current_points column will reduce by 100cumulative_points column will stay the samepoints_redeemed column will become x+100

For c1,

- current_points column will reduce by 100

- cumulative_points column will stay the same

- points_redeemed column will become x+100

- For c2current_points column will increase by 100cumulative_points will become x+100

For c2

- current_points column will increase by 100

- cumulative_points will become x+100

- If Ledger is Enabled,

If Ledger is Enabled,

- For c1an entry_type column with DEBIT will be createdpoints column will be 100event_log_id column will have the id generated in the above event_log table

For c1

- an entry_type column with DEBIT will be created

- points column will be 100

- event_log_id column will have the id generated in the above event_log table

- For c2an entry_type column with CREDIT will be createdpoints column will be 100event_log_id column will have the id generated in the above event_log table

For c2

- an entry_type column with CREDIT will be created

- points column will be 100

- event_log_id column will have the id generated in the above event_log table

- In PD  table,

In PD  table,

- For c1an entry will be created with deduction_type as REDEEMED_BY_TRANSFERpoints_deducted column will have 100.event_log_id will the id generated in the above event_log tablepoints_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

For c1

- an entry will be created with deduction_type as REDEEMED_BY_TRANSFER

- points_deducted column will have 100.

- event_log_id will the id generated in the above event_log table

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- In PRS table,

In PRS table,

- For c1an entry will be created with redemption_type column as REDEEMEDpoints_redeemed column will have 100redemption_id column will have a unique id generated by loyaltybill_id  column will be -1 / bill_number column will be emptyevent_log_id will the id generated in the above event_log table

For c1

- an entry will be created with redemption_type column as REDEEMED

- points_redeemed column will have 100

- redemption_id column will have a unique id generated by loyalty

- bill_id  column will be -1 / bill_number column will be empty

- event_log_id will the id generated in the above event_log table

- In PTS table, a new entry will be createdfrom_customer_id column will be c1to_customer_id column will be c2points_deducted column will have 100points_credited column will have 100event_log_id will the id generated in the above event_log table

In PTS table, a new entry will be created

- from_customer_id column will be c1

- to_customer_id column will be c2

- points_deducted column will have 100

- points_credited column will have 100

- event_log_id will the id generated in the above event_log table

### REDEEMED_BY_TRANSFER_REVERTED

- This appears when there is a points transfer made from an account, following which the transaction where the points were awarded is returned.

This appears when there is a points transfer made from an account, following which the transaction where the points were awarded is returned.

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.Customer transfers 100 points to his friend on 5th FebCustomer returns txn 1 on 7th Feb

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb and got 100 points.

- Customer transfers 100 points to his friend on 5th Feb

- Customer returns txn 1 on 7th Feb

- Effect:

Effect:

- On 7th Feb,

On 7th Feb,

- In event_log table,an entry will be created with event_type_id as 5 ----- e3

In event_log table,

- an entry will be created with event_type_id as 5 ----- e3

- In PA Table,redeemed_exclusive_value will become x-100status column will change from REDEEMED to RETURNEDpoints_exclusive column will stay as itsreturned_exclusive column will become x+100

In PA Table,

- redeemed_exclusive_value will become x-100

- status column will change from REDEEMED to RETURNED

- points_exclusive column will stay as its

- returned_exclusive column will become x+100

- In CPS Table,current_points will become x-100points_returned wil become x+100cumulative_points will become x-100

In CPS Table,

- current_points will become x-100

- points_returned wil become x+100

- cumulative_points will become x-100

- If Ledger is enabled, Points Ledger table will have,DEBIT entry will be created with 100 against e3 event_log_idcps_id will be the one that is affected above

If Ledger is enabled, Points Ledger table will have,

- DEBIT entry will be created with 100 against e3 event_log_id

- cps_id will be the one that is affected above

- In PD table,

In PD table,

- For the points that were transferredone entry will be created with deduction_type as RETURN and points_deducted column will have 100.one entry will be created with deduction_type as REDEEMED_BY_TRANSFER_REVERTED and points_deductedcolumn will have 100points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)event_log_id will the id as e3

For the points that were transferred

- one entry will be created with deduction_type as RETURN and points_deducted column will have 100.

- one entry will be created with deduction_type as REDEEMED_BY_TRANSFER_REVERTED and points_deductedcolumn will have 100

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- event_log_id will the id as e3

- For the PABP negative points that was createdone entry will be created with deduction_type as REDEEMED_BY_TRANSFER and points_deducted column willhave 100.points_awarded_ref_id will point to the PABP_id which got affectedpoints_awarded_ref_type will be POINT_AWARDED_BILL_PROMOTIONevent_log_id will the id as e3

For the PABP negative points that was created

- one entry will be created with deduction_type as REDEEMED_BY_TRANSFER and points_deducted column willhave 100.

- points_awarded_ref_id will point to the PABP_id which got affected

- points_awarded_ref_type will be POINT_AWARDED_BILL_PROMOTION

- event_log_id will the id as e3

### REDEEMED_BY_CONVERSION

- This scenario is used when delayed accrual is enabled.

This scenario is used when delayed accrual is enabled.

- When the delay is over, a bulk job runs and converts promised points into regular points.

When the delay is over, a bulk job runs and converts promised points into regular points.

- This is when a RBC entry is made in the deduction table pointing to the PA entry of those points, but withpoints category Promised Points .

This is when a RBC entry is made in the deduction table pointing to the PA entry of those points, but withpoints category Promised Points .

- After this, a new PA entry is made in the PA table but with points category Regular points.

After this, a new PA entry is made in the PA table but with points category Regular points.

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb which has a return period of 5 days and got 100 points in hispromised points accountCustomer has not returned the txn till 6th Feb midnight100 points get converted on 7th Feb morning

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb which has a return period of 5 days and got 100 points in hispromised points account

- Customer has not returned the txn till 6th Feb midnight

- 100 points get converted on 7th Feb morning

- Effect:

Effect:

- On 7th Feb,

On 7th Feb,

- In event_log table,an event record will be inserted with event_type_id as 16. The id generated here is event_log_id

In event_log table,

- an event record will be inserted with event_type_id as 16. The id generated here is event_log_id

- In PA table,For the existing record with DelayedAccrualPointCategory:points_exclusive column will have 100 points,redeemed_exclusive_value column will become 100 pointsstatus column will be marked as CONSUMED_BY_CONVERSIONA new record will be created in PA for Main Point Category:points_exclusive column will have 100event_log_id with id generated in the event_log table abovestatus will be AVAILABLErest all columns will be copied from the existing record of DelayedAccrualPointCategory

In PA table,For the existing record with DelayedAccrualPointCategory:

- points_exclusive column will have 100 points,

- redeemed_exclusive_value column will become 100 points

- status column will be marked as CONSUMED_BY_CONVERSION

A new record will be created in PA for Main Point Category:

- points_exclusive column will have 100

- event_log_id with id generated in the event_log table above

- status will be AVAILABLE

- rest all columns will be copied from the existing record of DelayedAccrualPointCategory

- In CPS table, For the DelayedAccrualPointCategory,current_points will become x - 100 (x is the current_points before this event)cumulative_points won't changepoints_redeemed will become x + 100For the Main Point Category,current_points will become x + 100 (x is the current_points before this event)cumulative_points column will become x + 100

In CPS table, For the DelayedAccrualPointCategory,

- current_points will become x - 100 (x is the current_points before this event)

current_points will become x - 100 (x is the current_points before this event)

- cumulative_points won't change

cumulative_points won't change

- points_redeemed will become x + 100For the Main Point Category,

points_redeemed will become x + 100

For the Main Point Category,

- current_points will become x + 100 (x is the current_points before this event)

current_points will become x + 100 (x is the current_points before this event)

- cumulative_points column will become x + 100

cumulative_points column will become x + 100

- If Ledger is enabled, PL table will have anFor DelayedAccrualPointCategoryentry of 100 points with entry_type as DEBITcps_id which got affected in the above CPSevent_log_id with id generated in the event_log tableFor Main Point Categoryentry of 100 points with entry_type as CREDITcps_id which got affected in the above CPSevent_log_id with id generated in the event_log table

If Ledger is enabled, PL table will have anFor DelayedAccrualPointCategory

- entry of 100 points with entry_type as DEBIT

- cps_id which got affected in the above CPS

- event_log_id with id generated in the event_log table

For Main Point Category

- entry of 100 points with entry_type as CREDIT

- cps_id which got affected in the above CPS

- event_log_id with id generated in the event_log table

- In PD table, an entry will be created withdeduction_type column as REDEEMED_BY_CONVERSIONpoints_deducted will be 100event_log_id with id generated in the event_log tablepoints_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD table, an entry will be created with

- deduction_type column as REDEEMED_BY_CONVERSION

- points_deducted will be 100

- event_log_id with id generated in the event_log table

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

### RETURN_HISTORICAL

- This is used to adjust for partial returns that happen to promised points prior to conversion

This is used to adjust for partial returns that happen to promised points prior to conversion

- Scenario:Customer made a txn 1 of Rs.1000 on 1st Feb which has a return period of 5 days and got 100 points in hispromised points accountCustomer has returned Rs. 500 for the txn on 4th Feb50 points get converted on 7th Feb morning50 points get returned as RETURN_HISTORICAL

Scenario:

- Customer made a txn 1 of Rs.1000 on 1st Feb which has a return period of 5 days and got 100 points in hispromised points account

- Customer has returned Rs. 500 for the txn on 4th Feb

- 50 points get converted on 7th Feb morning

- 50 points get returned as RETURN_HISTORICAL

- Effect:

Effect:

- On 4th Feb,

On 4th Feb,

- In event_log tablenew entry will be created with event_type_id as 5, with id as e1

In event_log table

- new entry will be created with event_type_id as 5, with id as e1

- In PA table,points_exclusive column will stay 100returned_exclusive_value column will become 50status column will stay as AVAILABLE

In PA table,

- points_exclusive column will stay 100

- returned_exclusive_value column will become 50

- status column will stay as AVAILABLE

- In CPS table,current_points column will reduce by 50cumulative_points column will stay the samepoints_returned column will become x+50

In CPS table,

- current_points column will reduce by 50

- cumulative_points column will stay the same

- points_returned column will become x+50

- If Ledger is Enabled,an entry_type column with DEBIT will be createdpoints column will be 50event_log_id column will have e1

If Ledger is Enabled,

- an entry_type column with DEBIT will be created

- points column will be 50

- event_log_id column will have e1

- In PD  table,an entry will be created with deduction_type as RETURNpoints_deducted column will have 50.event_log_id will the id as e1points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD  table,

- an entry will be created with deduction_type as RETURN

- points_deducted column will have 50.

- event_log_id will the id as e1

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

- On 7th Feb,

On 7th Feb,

- In event_log tablenew entry will be created with event_type_id as 5, with id as e2

In event_log table

- new entry will be created with event_type_id as 5, with id as e2

- In PA table, For the existing record with DelayedAccrualPointCategory:points_exclusive column will stay as 100,returned_exclusive_column will stay as 50redeemed_exclusive_value column will change to 50 pointsstatus column will be marked as CONSUMED_BY_CONVERSIONA new record will be created in PA for Main Point Category:points_exclusive column will have 100returned_exclusive_value column will have 50event_log_id with id as e2status will be AVAILABLErest all columns will be copied from the existing record of DelayedAccrualPointCategory

In PA table, For the existing record with DelayedAccrualPointCategory:

- points_exclusive column will stay as 100,

- returned_exclusive_column will stay as 50

- redeemed_exclusive_value column will change to 50 points

- status column will be marked as CONSUMED_BY_CONVERSION

A new record will be created in PA for Main Point Category:

- points_exclusive column will have 100

- returned_exclusive_value column will have 50

- event_log_id with id as e2

- status will be AVAILABLE

- rest all columns will be copied from the existing record of DelayedAccrualPointCategory

- In CPS table, For the DelayedAccrualPointCategory,current_points will become x - 50 (x is the current_points before this event)cumulative_points won't changepoints_returned column will stay as it ispoints_redeemed will become x + 50For the Main Point Category,current_points will become x + 50 (x is the current_points before this event)cumulative_points column will become x + 100points_returned column will become x + 50

In CPS table, For the DelayedAccrualPointCategory,

- current_points will become x - 50 (x is the current_points before this event)

current_points will become x - 50 (x is the current_points before this event)

- cumulative_points won't change

cumulative_points won't change

- points_returned column will stay as it is

points_returned column will stay as it is

- points_redeemed will become x + 50For the Main Point Category,

points_redeemed will become x + 50

For the Main Point Category,

- current_points will become x + 50 (x is the current_points before this event)

current_points will become x + 50 (x is the current_points before this event)

- cumulative_points column will become x + 100

cumulative_points column will become x + 100

- points_returned column will become x + 50

points_returned column will become x + 50

- If Ledger is enabled, PL table will have anFor DelayedAccrualPointCategoryentry of 50 points with entry_type as DEBIT (mapped to delayed point category)cps_id which got affected in the above CPSevent_log_id with id as e2For Main Point Categoryentry of 50 points with entry_type as CREDITcps_id which got affected in the above CPS (mapped to main point category)event_log_id with id as e2

If Ledger is enabled, PL table will have an

For DelayedAccrualPointCategory

- entry of 50 points with entry_type as DEBIT (mapped to delayed point category)

- cps_id which got affected in the above CPS

- event_log_id with id as e2

For Main Point Category

- entry of 50 points with entry_type as CREDIT

- cps_id which got affected in the above CPS (mapped to main point category)

- event_log_id with id as e2

- In PD table, For the existing DelayedAccrualPointsCategory entrydeduction_type column as REDEEMED_BY_CONVERSIONpoints_deducted will be 50event_log_id with id as e2points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)For the Main Point Categorydeduction_type column as RETURN_HISTORICALpoints_deducted will be 50event_log_id with id as e2points_awarded_ref_id will point to the PA_id which got affectedpoints_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

In PD table, For the existing DelayedAccrualPointsCategory entry

- deduction_type column as REDEEMED_BY_CONVERSION

- points_deducted will be 50

- event_log_id with id as e2

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

For the Main Point Category

- deduction_type column as RETURN_HISTORICAL

- points_deducted will be 50

- event_log_id with id as e2

- points_awarded_ref_id will point to the PA_id which got affected

- points_awarded_ref_type will be POINTS_AWARDED (if points were on bill)

Updatedabout 1 year ago
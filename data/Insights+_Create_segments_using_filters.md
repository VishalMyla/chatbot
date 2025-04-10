# Create segments using filters

## Introduction

Segments are equipped with predefined rules using which you can set conditions for each partition. The segment details are updated automatically based on the ruleset. Rule-based segments are usually SCD and activity-based.

For example, you can have a segment based on RFM (Recency, Frequency, Monetary) and have partitions as explained below:

- Champions:  High spending customers who purchased recently and also shop quite often(Last Txn Date in the last 10 days) AND (Latency < 25) AND (Lifetime Purchased > 500)

Champions:  High spending customers who purchased recently and also shop quite often(Last Txn Date in the last 10 days) AND (Latency < 25) AND (Lifetime Purchased > 500)

- Loyal Customers: A frequent shopper and responsive to promotions.(Last Txn Date in the last 30 days) AND (Latency between 25 and 45) AND (Lifetime Purchased between 200 and 500)

Loyal Customers: A frequent shopper and responsive to promotions.(Last Txn Date in the last 30 days) AND (Latency between 25 and 45) AND (Lifetime Purchased between 200 and 500)

> 📘NoteEach org unit can create a maximum of 20 SCD segments. So if you want to create a new one thereafter, you need to deactivate an existing SCD segment and create a new one. If the brand requires more than 20 SCD segments, they can request additional segments by contacting the product sustenance team.There is no limit on non-SCD segments.

## 📘Note

Note

Each org unit can create a maximum of 20 SCD segments. So if you want to create a new one thereafter, you need to deactivate an existing SCD segment and create a new one. If the brand requires more than 20 SCD segments, they can request additional segments by contacting the product sustenance team.

There is no limit on non-SCD segments.

### To create a rule-based segment:

1. On the EI navigation pane, clickUser Segments>Create Segment.

2. InSegment Name, specify a name for the group.

3. InDescription, specify a short description of the segment.

4. InType, selectSCDto keep a track of customers' behavior for the current segment. SelectNon-SCDto save only the current snapshot.

5. InMethod, chooseConditionsfor creating based on rule conditions.

6. ClickNextto continue.

![966](https://files.readme.io/fb9f75a--XNN4AV52Xqd6Ep9mgVTISxEyJSG2vZvjQ.png)

1. InUpdate, choose your preferred frequency for updating the segment data.

- Manually: To update the partition values manually. The list will be updated only if the list is refreshed manually on the segment details page.

![](https://files.readme.io/41264353bfb325e9c6f7e0ddc6b0d12c7bec1ef5a061c3f9b16fb73b13233be8-Refresh.png)

- Daily: To update the segment values on a daily basis.

- Weekly: To update the list on a weekly basis.

- Monthly: To update the list on a monthly basis.

1. InPartition name, specify a name for the partition.

![885](https://files.readme.io/91c6572-M4hZE0u2I5n5syieKSLqw9diYodA8e0njA.png)

1. InDescription, specify a short description for the partition.

2. Click+Add rule> Customer summary KPIs and choose the desired option on which you want to define the condition.

![199](https://files.readme.io/d49acc1-9aX9_Xeyj66PsUsC1kz3X7G4dbVLvSbo5A.png)

![832](https://files.readme.io/c9553ef-FHqnMxA3s5nZjqW65DKGhQS9KZ6JCSAvfg.png)

| FILTER | DESCRIPTION |

| --- | --- |

| Average Spent Per SKU | Get customers based on their average item value (Total items purchased/total transaction amount) |

| Average Spent Per Visit | Get customers based on their average transaction value per visit (Total transaction amount/No. of visits) |

| Canceled Points | Get customers by the number of reverted points. That is, issued points that were reverted due to reasons like transaction return. |

| Expired Points | Get customers by their expired points (points that are expired for not redeeming within the expiry period) |

| First Visit Basket Size | Get customers by the number of items purchased during their first visit (line-item count) |

| First Visit Bill Amount | Get customers by their transaction amount during their first visit (line-item count) |

| Has Spike Bill | Used to get Fraud bills. Gets customers whose bills have a sudden spike. For example, spiked 2 times, spiked greater than 5 times, and so on |

| Last Visit Bill Amount | Get customers by their recent bill amount |

| Latency | Get customers by their average duration between two transactions |

| Lifetime Points | Get customers by their total loyalty points earned (considering from the registration date) |

| Lifetime Purchased | Get customers by their lifetime purchases amount (Total transaction amount after becoming a member) |

| Line Item Count | Get customers by the total number of line-items purchase |

| Loyalty Points | Get customers by their current or active loyalty points |

| Max Bill Amount | Get customers by the maximum bill amount recorded |

| Max Bill Count In Day | Get customers by their maximum number of transactions in a day |

| Max Bill Count In Week | Get customers by their maximum number of transactions in a week |

| Max Zones With Billing On Same Day | Get customers based on their transactions recorded in one or more zones on the same day (fraud customers) |

| Number Of Visits | Get customers by their total number of visits  (visited and made transactions) |

| Number Of Visit Days | Get customers by the unique number of days visited |

| Points Awarded Days | Get customers by the unique number of days loyalty points were awarded |

| Redeemed Points | Get customers by the number of loyalty points redeemed |

| Redeemed Rate | Get customers by the percentage of points redemption - (Points Redeemed/Points Awarded) * 100 |

| Redeemed Visits | Get customers by the unique number of days customers redeemed their points |

| Redeemed Visit Days | Get customers by the unique number of days customers redeemed their coupons |

| Redeemed Voucher Count | Get customers by the number of coupons redemption |

| Redemption Latency | Get customers by the average gap (in days) between two consecutive redemption |

| Returned Bill Amount | Get customers by the total amount of return transactions |

| Returned Bill Count | Get customers by the number of transactions returned |

| SKUs Returned | Get customers by the total number of items (SKUs) returned |

| SKU Purchased | Get customers by the total number of items (SKUs) purchased |

| Total Bill Amount | Get customers by their total transaction amount |

| Total Bill Count | Get customers by their transactions count |

| Total Line Item Amount | Get customers by the total amount of line items purchased in their transactions |

| Total Points Redeemed | Get customers by the total number of points redeemed |

| Total Returned Line Item Amount | Get customers by the total amount of returned line items |

| Conversion Date | Get customers by their loyalty conversion date (loyalty registration date) during a specified period |

| DOB Date | Get customers by their birth date (day, month) |

| First Points Awarded Date | Get customers based on the date when points were first awarded |

| First Points redemption date | Get customers based on the date when points were first redeemed  (relative days or during a specified period) |

| First coupon redemption date | Get customers based on the date when a coupon was first redeemed (relative days or during a specified period) |

| Lapsation Date | Get customers by their lapsation date (did not shop for a specific duration) |

| First Txn Date | Get customers whose first transaction is in a specified period |

| Last Txn Date | Get customers whose recent transaction date is in a specified period |

| Last Points Redemption Date | Get customers whose recent points redemption is in a specific period |

| Last Coupon Redemption Date | Get customers whose recent coupons redemption is in a specific period |

| Wedding Date | Get customers by their wedding anniversary date. That is, anniversary in a specific duration |



1. To validate more than one condition, click+ Add rulethat uses OR operator - In this, a customer is added to the partition, if any of the specified conditions are satisfied.

![838](https://files.readme.io/a90a3e0-o7MVYoqtTiYHbxHpygpU3SfZYBWVkoCFgQ.png)

1. To validate multiple rules (and), click+Rule Set(AND) >+ Add Rule. In this, a customer is added to the partition only if both conditions are satisfied

![840](https://files.readme.io/d1cb690-M7r04JCFKflh5_4TNJenauVfg_4vnmR7xg.png)

1. ClickSave.

> 📘TheDescriptionfield is mandatory along with other fields.  The save button will not be enabled if the Description is left blank.

## 📘

- TheDescriptionfield is mandatory along with other fields.  The save button will not be enabled if the Description is left blank.

1. Similarly, multiple partitions are required, and clickCompute & Proceed. You will see the Processing bar.

![892](https://files.readme.io/4ee0804-r8DJ_YYZmt8P9gCpUFZTx1_M7bwc2wCoBQ.png)

![878](https://files.readme.io/a7e30c0-Ojn7RSdBJ0q0_dt1H8AECdFeGagb-KTrGQ.png)

1. ClickCreateto complete creating the segment. Else, it will be in the draft state

![902](https://files.readme.io/4ae9fc0-2gLJMNY_q4ZvGPLXwXhqUkYXWOr1j5Zj5A.jpg)

The segment will be inInprogressstatus initially and once processed, the status label will disappear automatically.

- Inprogress: The segment creation is being processed

Note:

- Draft: Signifies draft state where the recent changes were not saved. If you open the segment, you will see Draft available: Save changes to see the partition values. You can save or Deactivate draft segments

- Active segment: Only active segments will appear on the service that consumes Segments. You can either edit or deactivate active segments

- Inactive segment: These segments will be inactive and will not appear in any service that consumes segments. You can edit and activate inactive segments

## Editing an existing rule-based segment

You can modify a segment to add new partitions or modify rules for existing partitions.

### To edit a segment

1. On the Segments summary page, click on the segment that you want to edit.  You can filter the summary list by Type (SCD, Non-SCD, or All) and Method (Condition, Upload, or All) and also search for a specific filter in the Search box

2. Click on the drop-down box that appears on the top and choosesEdit Segment.

![916](https://files.readme.io/62dc10d-e1C2kk_aGJFlYjiXUGsxtjnXh0U-qyZXHg.png)

1. ClickEdit Partitions.

2. To add a new partition, clickAdd Partition. If you want to update the rule of an existing partition, click on theMoreoptions icon>Edit. Modify rules as needed and clickSave.

![883](https://files.readme.io/13280b4-qV4L19NBBSYnvcP9iDqlcGYgmhru_0g-mg.png)

1. ClickCompute & Proceed. You will see the Processing bar

2. ClickUpdateto complete creating the segment. Else, it will be in the draft state.

> 📘If you try to edit the draft version, you will see the following prompt . Click Continue editing draft version to start editing the previously saved version, click Discard draft and edit current state to discard the previously saved draft version and edit

## 📘

- If you try to edit the draft version, you will see the following prompt . Click Continue editing draft version to start editing the previously saved version, click Discard draft and edit current state to discard the previously saved draft version and edit

![274](https://files.readme.io/28b728d-mxA8TxLph6CbyCcI5Q0qcg4qvBPM9RUy1g.png)

Deactivate: You can click theDeactivatebutton to inactivate a segment and vice versaRefresh:  This lets you update the segment manually. This can be used for segments with the manual update. However, if you have a segment that is set to update monthly or any other frequency, you can get the updated list whenever required by clicking this manual Refresh. The time to complete the process depends on the rules to be evaluated and the data size.

![881](https://files.readme.io/ef9b485-2ZRiB9WtFPc6bwjPM1t5IFqfT_Wv92CY0g.png)

- Limit of only 20 SCD segments: You can create up to 20 SCD segments only. If you want to create a new SCD segment thereafter, you need to deactivate an existing one and create new one.

Updated6 months ago
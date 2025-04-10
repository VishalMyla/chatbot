# Schedule Trigger

This block enables you to schedule the time at which the dataflow should be triggered.

You can configure the dataflow activity to execute daily, hourly, or on a minute basis.

> 🚧The minimum triggering interval for the dataflow is set at 5 minutes, meaning that even if a value less than that, such as 1 minute, is entered, the dataflow will still trigger at 5-minute intervals.

## 🚧

The minimum triggering interval for the dataflow is set at 5 minutes, meaning that even if a value less than that, such as 1 minute, is entered, the dataflow will still trigger at 5-minute intervals.

## Schedule trigger at specified minutes

SelectMinutesto schedule a trigger at specific minute intervals The minimum duration allowed is 5 minutes.

![](https://files.readme.io/1beb266-Minutes.png)

## Schedule hourly trigger

- SelectEvery hour(s)to schedule the dataflow trigger at regular intervals, such as every 2 hours. Specify the frequency in the "Every ___ hour(s)" field.

- SelectAtto set a specific time for dataflow execution, such as 13:00. Configure the time using the provided hour and minute drop-down menus.

![](https://files.readme.io/415f949-hourly_trigger.jpg)

## Schedule daily trigger

- SelectEvery day(s)to schedule the dataflow trigger at regular intervals, such as every 2 days. Specify the frequency in the "Every  ___ day(s)" field.

- SelectEvery week dayto set a specific time in a week day for dataflow execution, such as 13:00. Configure the time using the provided hour and minute drop-down menus.

![](https://files.readme.io/0eb9d92-daily_trigger.jpg)

# 

Updated29 days ago
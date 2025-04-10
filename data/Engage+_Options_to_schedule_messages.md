# Options to schedule messages

So, to schedule any message we have these 3 options-

# Immediately after approval

The message will be immediately delivered after its approval.

> Currently, for campaigns that are set to run Immediately on Approval or Scheduled on a future date, the current state of the lists is used. However, if the user can manually refresh the list in Audience Manager before using the message.

Currently, for campaigns that are set to run Immediately on Approval or Scheduled on a future date, the current state of the lists is used. However, if the user can manually refresh the list in Audience Manager before using the message.

![](https://files.readme.io/df15cc6-image.png)

# On a specific date

The message will be delivered only on the selected date and time. Select a specific date and time, and then click Done.

![](https://files.readme.io/af529c8-image.png)

> Currently, for campaigns that are set to run Immediately on Approval or Scheduled on a future date, the current state of the lists is used. However, if the user can manually refresh the list in Audience Manager before using the message.

Currently, for campaigns that are set to run Immediately on Approval or Scheduled on a future date, the current state of the lists is used. However, if the user can manually refresh the list in Audience Manager before using the message.

# Repeat periodically

The message will be delivered at a repeated frequency within the campaign duration. Select a repeat frequency from the available options, enable audience sync confirmation if required and then clickDone.

> Currently, for the recurring campaigns, the audience list (filter-based) attached will be refreshed at the time of campaign execution.

Currently, for the recurring campaigns, the audience list (filter-based) attached will be refreshed at the time of campaign execution.

![](https://files.readme.io/4f7db3c-image.png)

- Every day: Select a message delivery time. The message will be delivered every day at the same time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

- Every week: Select a day of the week and time for message delivery. The message will be delivered on a particular day of the weekday and at a particular time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

- Every month: Select a date and time for message delivery. The message will be delivered on a particular date of the month and at a particular time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

- Custom:Select a date and time for message delivery. The message will be delivered on a specific date of the month and at a particular time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

## Scheduling messages post audience sync confirmation

You can enable "Execute message only after audience sync completion" in the campaign message delivery setting and ensure that the campaign proceeds only after confirming the EI sync completion and verifying the audience refresh's up-to-date status.

By enabling this option, the system avoids disruptions caused by technical challenges that delay the EI sync and audience refresh.

To enable, perform the following:

1. After you define and schedule the recurring period (repeats periodically) for the campaign messages, select the check boxExecute message only after audience sync completion.

2. If required, select the check boxWait for Sync completion untiland define the time until which the system should wait for the audience sync. If the audience sync is not completed by this time, the recurring messages are sent without waiting for the audience sync. For instance, if you set this time as 9 pm, the system will wait until 9 pm for the sync to complete. If the sync is not completed by 9 pm, the campaign will execute regardless.The recurring messages are not sent if you do not define a sync cut-off time and the audience sync is not completed.

![](https://files.readme.io/a8267b2-Scheduling_message_post_sync.png)

# Setting an alert for recurring messages

You can set alerts for recurring messages in the campaign settings. For information, refer to thecampaign alert documentation.

Updated12 months ago
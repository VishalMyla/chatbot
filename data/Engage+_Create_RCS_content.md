# Create RCS content

## Create an RCS template

Once RCS is configured for your brand, you can start with creating RCS message as mentioned in the following.

1. In the Content section, clickAdd creative.

2. Navigate to theRCStab and clickCreate New

> 📘If you want to duplicate an existing template instead of creating from scratch, navigate toCreatives>RCStab > Navigate to the respective template > Click more options (...) > ClickDuplicate.

## 📘

If you want to duplicate an existing template instead of creating from scratch, navigate toCreatives>RCStab > Navigate to the respective template > Click more options (...) > ClickDuplicate.

![1276](https://files.readme.io/da59625-RCS1.png)

1. InCreative name, enter a name for the template.

2. InMedia, choose the desired media type.None: To create a plain text message.Image: To create an image message and upload the image from your local system or Gallery.

- None: To create a plain text message.

- Image: To create an image message and upload the image from your local system or Gallery.

![1411](https://files.readme.io/98ce0c2-RCS3.png)

1. InTitle, enter the title of the message if needed (supports up to 200 characters). You will see the title preview on the right side as you type.

InTitle, enter the title of the message if needed (supports up to 200 characters). You will see the title preview on the right side as you type.

2. InText message, enter the message content. Insert dynamic text in the message wherever required using+Add labels.  It supports up to 2000 characters. You can preview the message on the right-side as you type. You can also use Liquid language in the messages.

InText message, enter the message content. Insert dynamic text in the message wherever required using+Add labels.  It supports up to 2000 characters. You can preview the message on the right-side as you type. You can also use Liquid language in the messages.

3. CheckButtonsto add CTA option in the message. Set theButton textandButton linkof the CTA accordingly. Currently, you can have only one CTA.

CheckButtonsto add CTA option in the message. Set theButton textandButton linkof the CTA accordingly. Currently, you can have only one CTA.

4. InSMS message, you can set the fallback message for customers who could not receive RCS message. Fallback message allows sending  an SMS to customers who could not receive RCS. It could be because Google Communication App is not installed in their device, or using Non-Android phones like iPhone.Use dynamic text in the message wherever required using+Add Labels.For DLT enabled brands, you will see an option toAdd SMS creative.  Just choose an approved template. However, for this you need to log on to the _Karix _portal and upload the DLT template for your brand as currently Google does not support DLT Compliance configurations.ClickPreviewto see how the SMS looks like and make necessary changes if required.

InSMS message, you can set the fallback message for customers who could not receive RCS message. Fallback message allows sending  an SMS to customers who could not receive RCS. It could be because Google Communication App is not installed in their device, or using Non-Android phones like iPhone.

- Use dynamic text in the message wherever required using+Add Labels.

Use dynamic text in the message wherever required using+Add Labels.

- For DLT enabled brands, you will see an option toAdd SMS creative.  Just choose an approved template. However, for this you need to log on to the _Karix _portal and upload the DLT template for your brand as currently Google does not support DLT Compliance configurations.

For DLT enabled brands, you will see an option toAdd SMS creative.  Just choose an approved template. However, for this you need to log on to the _Karix _portal and upload the DLT template for your brand as currently Google does not support DLT Compliance configurations.

- ClickPreviewto see how the SMS looks like and make necessary changes if required.

ClickPreviewto see how the SMS looks like and make necessary changes if required.

8. ClickDoneto save.

ClickDoneto save.

> 📘To edit an existing template, on theCreatives>RCStab, navigate to the respective template and clickEdit.To delete an existing template, on theCreatives>RCStab > Navigate to the respective template > Click more options (...) > ClickDelete.

## 📘

- To edit an existing template, on theCreatives>RCStab, navigate to the respective template and clickEdit.

- To delete an existing template, on theCreatives>RCStab > Navigate to the respective template > Click more options (...) > ClickDelete.

## Configure an RCS campaign

The steps involved in creating an RCS campaign is very similar to other types of campaigns except in _Content _and _Delivery _settings.

1. Create a campaign as mentionedCreate a Campaign.

2. InContent, select an RCS template that you wish to add.

![376](https://files.readme.io/33bc643-RCS_Content.png)

1. InDelivery settings, you can change the sender ID for Fallback SMS. RCS sender ID is selected by default. By default, it will have the default SMS sender ID configured for the brand.

![1206](https://files.readme.io/6317d0d-RCS_DeliverySettings.png)

## View RCS reports

#### Message level report

To see the summary report

Open the campaign and navigate to the RCS message for which you want to see the performance report.

![1267](https://files.readme.io/0f140fd-RCS_Report.png)

| Metric | Description |

| --- | --- |

| Contacted customers | Total number of customers contacted through the message. |

| Delivery rate | Percentage of messages delivered - (Total messages delivered/Total messages sent) * 100. |

| Hit rate | The percentage ratio of the total responders to the total contacted. |

| Responder sales | The total sales generated by the recipients of the message during the campaign period. |

| Opens | The total number of unique recipients that opened the message. |

| Clicks | Out of the total messages delivered, the number of unique recipients that clicked on the link sent in the message. |

| Incremental sales | Additional sales generated by the target group in comparison with the control group. |



Currently, you can generate detailed report on RCS using Databricks Notebook. For this, you would need Org ID, campaign name, and the message name.

You can view two types of report:

1. RCS message level report

2. Campaign level report

Updated6 months ago
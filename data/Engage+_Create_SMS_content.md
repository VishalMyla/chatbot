# Create SMS content

## Add SMS Content

To create SMS content, refer to the following.

1. Navigate to theSMStab.

2. In the Content section, clickCreate New.

3. Enter theMessage. Click+Add Labelto use appropriate dynamic tags in your message. You can also use Liquid language in the messages.

4. If you want to include special characters in your message content, select theAllow Unicode characterscheckbox.

5. Preview or Test messages to ensure the format of the message is as intended.

- Preview: You can see the message of how it is sent to recipients. Check if the text and formatting are as intended.

- Test message: You can send a text message to a test group for review by adding mobile numbers, email ids, or test user groups. If required, you can enable the support for Liquid language to send personalised messages, messages based on conditions, product recommendations based on last purchase, etc. For more information, refer to the detaileddocumentation on Liquid language.The virtual screen of a mobile phone displays the words as you type them. As you start typing text. You can also see the number of characters entered.

1. ClickSave.

![763](https://files.readme.io/ae12597-1pZEZe-oTlBHttyFIurkmqizRn5LgRSN0g.png)

> 📘You can see a sample view of your message on the right panel.Optout tag is compulsory to include. To know more about each tag, see theMessage content section.

## 📘

- You can see a sample view of your message on the right panel.Optout tag is compulsory to include. To know more about each tag, see theMessage content section.

- Optout tag is compulsory to include. To know more about each tag, see theMessage content section.

## Enable link tracking for SMS

To understand the usage of links sent out through SMS campaigns, tracking of links in SMS is essential. Link tracking lets orgs capture metrics that state how many users have clicked on a link sent in SMS and the total number of clicks on a link.

Link tracking is not enabled by default. You need to create a ticket assigning it to the Capillary support team.

Due to the DLT compliance restrictions in India, you need to add the link through a variable tag only so that the whitelisted template does not get affected.

Once enabled, you can insert the link in SMS using the respective variable tag{#var#}.

This is applicable for

- One-time SMS campaign

- Recurring SMS campaign

- Coupon expiry reminders and messages resend

> 📘Adding links outside the {#var#} tag will result in the template mismatch leading to delivery failure.

## 📘

- Adding links outside the {#var#} tag will result in the template mismatch leading to delivery failure.

The system replaces the mentioned link with an internal tiny URL. The link added by the user would be transformed.

For example, if the link iswww.google.com, it could be changed to s.cplry.com/7383936D89.

Changing the link would also affect the characters of the SMS script.

For example, if the replaced link is 20-22 characters in length, the SMS character count can be changed by 15 characters (either add or remove).

### Track SMS links on Insights+

Once the SMS is sent, you can track the link metrics using Insights+ as explained in the following.

1. Log on to InTouch navigate to Menu >Insights+.

2. Navigate to the report that you want to track.

3. For your chart, you will be able to track the following metrics of SMS links.

- Unique Click Count- Get the number of unique clicks on the link.

- Total Click Count- Get the number of total clicks on the link.

1. Add a communication channel, if required, as a dimension to get data for each communication channel.

Updated6 months ago
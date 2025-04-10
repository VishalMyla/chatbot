# Configuration

Once you have set up your LINE developer account and created a Provider, Channel and Webhook, configure Capillary to work with LINE.

The configuration procedure includes the following steps:

- Setting up LINE Source Account on InTouch

- Registering a LINE User on InTouch

- Creating a LINE Gateway

- Registering a User Without a LINE Profile on Capillary

- Setting Up a Webhook in the LINE Developer Account

## Setting Up a LINE Source Account on InTouch

Setting up a LINE source account on InTouch involves configuring the LINE channel details obtained from the LINE developer platform.

This step is required to establish a functional connection between your LINE account and Capillary.

To set up a LINE source account, follow these steps:

1. Log in to InTouch and navigate to Organization Settings >Channel Configurations.

Log in to InTouch and navigate to Organization Settings >Channel Configurations.

![](https://files.readme.io/c185ab2-image8.png)

2. From theChannel List, select LINE.

From theChannel List, select LINE.

> 👍TipUse the search function to find it quickly .

## 👍Tip

Tip

Use the search function to find it quickly .

1. Click onAdd Accountin the top right and enter anAccount Name.

Click onAdd Accountin the top right and enter anAccount Name.

![](https://files.readme.io/f096afe-image11.png)

2. Enter theSource Account ID,Channel ID, andChannel Secretfrom the channel created on the LINE Developers Console.

Enter theSource Account ID,Channel ID, andChannel Secretfrom the channel created on the LINE Developers Console.

3. ClickSubmitto save the changes.

ClickSubmitto save the changes.

![](https://files.readme.io/d1ad1c1-image.png)

## Registering a LINE User on InTouch

To register a LINE user on InTouch, set up the LINE app, create an account if you don’t already have one, and scan the channel's QR code to connect with the LINE channel.

Ensuring that both sources are correctly mapped is crucial for integration between LINE and InTouch.

To register a LINE user on InTouch, follow these steps:

1. Download and install the LINE app.

2. Create an account by providing your mobile number, if you do not have an existing LINE account.

3. Scan the QR code for the target LINE channel using the LINE app.

> 📘NoteThe QR code for the channel is available on theLINE Developer Platform.

## 📘Note

Note

The QR code for the channel is available on theLINE Developer Platform.

![](https://files.readme.io/f9dd8e4-image9.png)

1. On your mobile device, clickAddto send a request to the LINE channel when prompted.

> 📘NoteThe request can be viewed using the Webhook URL.useridis the unique identifier of a LINE account for the user.

## 📘Note

Note

The request can be viewed using the Webhook URL.useridis the unique identifier of a LINE account for the user.

1. On InTouch, register a customer using thecustomer registration APIand the mobile number associated with the LINE app. Set the source asINSTORE.

On InTouch, register a customer using thecustomer registration APIand the mobile number associated with the LINE app. Set the source asINSTORE.

2. Once the INSTORE profile for the customer is created, use thecustomer registration V2 APIto register the same user with the source set as LINE.

Once the INSTORE profile for the customer is created, use thecustomer registration V2 APIto register the same user with the source set as LINE.

3. Check the Member Care section for the registered customer to confirm that both sources (INSTORE and LINE) are mapped to the same customer.

Check the Member Care section for the registered customer to confirm that both sources (INSTORE and LINE) are mapped to the same customer.

![](https://files.readme.io/66cdb8a-image.png)

> 📘NoteThe addition of a LINE user on InTouch can be automated as needed.

## 📘Note

Note

The addition of a LINE user on InTouch can be automated as needed.

## Creating a LINE Gateway

Creating a LINE Gateway is required for managing message delivery through the LINE channel

To create a LINE gateway on InTouch, follow these steps:

1. Login to InTouch and navigate to theGatewayspage.

2. Under Gateway Settings, chooseLINEfrom the Gateway drop-down menu.

3. Define the Gateway Weight (the ratio in which messages will be delivered).

4. Define the Start and End Time.

5. Click onSubmitto create a LINE Gateway.

![](https://files.readme.io/fa1328f-image10.png)

You can now include the customer in any campaign lists and contact them via the LINE channel.

## Setting Up a Webhook on the LINE Developer Platform

To set up a webhook on the LINE developer platform, follow these steps:

1. Configure the WebhookSetup the webhook URLfor the specific LINE channel. This webhook will capture events for when the user opts in or out of the channel.

2. Manage Subscription StatusUse the LINE user ID from the API response toupdate the subscription statuson Capillary via middleware.If the user does not exist in the system create an INSTORE and LINE profile using thecustomer registration API.

- Use the LINE user ID from the API response toupdate the subscription statuson Capillary via middleware.

- If the user does not exist in the system create an INSTORE and LINE profile using thecustomer registration API.

![](https://files.readme.io/82b8695-image.png)

Updated8 months ago

- Sending Campaign Messages
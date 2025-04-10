# WhatsApp setup

## WhatsApp Client Onboarding

![](https://files.readme.io/e627697-image.png)

Above mentioned is a5 step processin which a client is onboarded on WhatsApp and is required before even being able to send the first message through this channel.

## Step 1:

Requirement of documents to be shared with the client to capture the required information from them and share it with the BSP. Here is thelinkto a folder containing all the required documents, pricing and checklists to be asked from your brand.

## Step 2:

Configuration through Meta account.

## Step 3:

OTP confirmation.

## Step 4:

Raise a ticket with the backend or sustenance team to enable the integration and provide them with the following three parameters:

1. WABA ID or Account SID

2. Auth token or API Key

3. WhatsApp Sender ID or Messaging Service ID

1. WABA ID / ACCOUNT SID:To be requested from and shared by the BSP's (Tanla/Twilio/other) POC to the CSMs, mostly on a mail.

2. Auth token / API Key:Following are the steps to retrieve auth token for Karix/Tanla:

- Visit theKarix lounge

- Input the username, which is the Account name as received from the BSP's mail.

- Click on Forgot Password. Enter your Capillary mail and brand phone number to generate the password.

- Thereafter, generating the password login into the Karix Lounge and click on API Keys as shown below,

![](https://files.readme.io/deece20-image.png)

- The Alphanumeric mentioned under Keys is the Auth Token/API Key, while the Key Name should be saved for later use (For adding DLT Endpoint).

![](https://files.readme.io/b3b35f6-image.png)

3. WhatsApp Sender ID / Messaging SID:This is the WhatsApp phone number of the client's official account and it is the same shared to the BSP's (Tanla/Twilio/other) POC when filling in the onboarding details.

## Step 5:

Add the Connection IDs

Org settings -> Channel configurations -> Search for Whatsapp -> Add relevant Connection IDs as provided by BSP

1. Access token

2. Source Account ID

Complete the account setup through the organisation settings in the product UI.

Adding the DLT Endpoint in the Karix UI

1. Go to theKarix Portal.

2. Use the same credentials for login as used above for the Karix Lounge.

3. On the left-hand side choose WhatsApp Campaigns > Webhook Config > Delivery Rule > Create New.

4. Click on Create New and add the DLT end point URL in the first space bar. URL to add: "https://dlrs.incrm.ccdelivery.capillarytech.com/karixwhatsappbulk"

5. Under Header, add the Key retrieved above from the Karix Lounge and Value would be the Auth Token/API Key.

6. Next choose the following settings and save them,

![](https://files.readme.io/5b0ea33-image.png)

## Note

For a better understanding of WhatsApp, watch the easy-to-learn training on ouracademy.

# Gupshup integration for Whatsapp communication

You can use integrate and use GupshupWhatsapp BSPto send communications through Whatsapp from Capillary platform.

To integrate, perform the following:

## Onboarding

1. Enter the below details in theonboarding details form.Business name and FB manager IDCountry Details and Use casesWhatsApp Phone numbers ( UAT and PROD )WhatsApp Business profile setup - Display name, Type of company, Industry etc.Callback URLsBusiness Contact Details

- Business name and FB manager ID

- Country Details and Use cases

- WhatsApp Phone numbers ( UAT and PROD )

- WhatsApp Business profile setup - Display name, Type of company, Industry etc.

- Callback URLs

- Business Contact Details

8. If the Live Agent Dashboard feature is required, enter the following details in theLive Agent Dashboard form:Primary use cases and WhatsApp numberURL PreferenceEmail id of the adminWhether the Gupshup bot is enabled on the clients number. If yes, API key and bot name should be mentionedCRM used by the business

- Primary use cases and WhatsApp number

- URL Preference

- Email id of the admin

- Whether the Gupshup bot is enabled on the clients number. If yes, API key and bot name should be mentioned

- CRM used by the business

14. If the Instant Bot Enablement feature is required, enter the required details in theKeyword based Responses form. This feature allows businesses to interact with their clients via WhatsApp 2-way messaging. This feature is intended to reduce the time for a business to configure a bot to interact with its customers.

Updated8 months ago
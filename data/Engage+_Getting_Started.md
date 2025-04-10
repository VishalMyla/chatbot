# Getting Started

# Prerequisites

Before integrating LINE into Capillary, ensure the following prerequisites are met:

- Create a LINE account:A LINE account is the primary account used to login to the LINE Developer Platform.

[Create a LINE account](/docs/line-prerequisites#creating-a-line-account)

- Create a LINE Developer Platform Account:The LINE Developer Platform is the portal to connect and utilize the LINE API.

[Create a LINE Developer Platform Account](/docs/line-prerequisites#creating-a-line-developer-platform-account)

- Create a Provider:A provider is an individual developer or organization that provides services and acquires user information on the LINE Developers platform.

[Create a Provider](/docs/line-prerequisites#creating-a-provider)

- Create a Channel:A channel is a communication path for providers to use the LINE platform's features.

[Create a Channel](/docs/line-prerequisites#creating-a-channel)

- Create a Bot:A bot allows you to send messages to users and leverage features such as rich menus and quick replies.

[Create a Bot](/docs/line-prerequisites#creating-a-bot)

- Create a Webhook:A webhook allows you to receive real time information from LINE.

[Create a Webhook](/docs/line-prerequisites#creating-a-webhook)

- Configure the LINE Message API:The Messaging API lets you develop two-way communication between your service and LINE users.

[Configure the LINE Message API](/docs/line-prerequisites#configuring-the-line-message-api)

- Channel ID and Secret Keys:The Channel ID and Secret Keys are identifiers used when integrating your LINE account with Capillary.

[Channel ID and Secret Keys](/docs/line-prerequisites#channel-id-and-channel-secret-keys)

## Creating a LINE Account

Download and install the LINE app andcreate an accountif not already done.

## Creating a LINE Developer Platform Account

Create a LINE developer account on theLINE Developers platformusing your LINE account.

On the LINE Developers Console, you can manage Developers, Providers, and Channels.

## Creating a Provider

To create a provider on the LINE Developer Platform, refer to theLINE Developer Console documentationon creating a provider.

> ❗️ImportantThe provider name should be an official name such as the company name as it is used to verify your identity.

## ❗️Important

Important

The provider name should be an official name such as the company name as it is used to verify your identity.

## Creating a Channel

The channel is the hub through which your messages are sent. Users can join your channel and receive promotional content and announcements through LINE.

To create a channel on the LINE Developer Platform, refer to theLINE Developer Console documentationon creating a channel.

> 📘NoteChoose Messaging API as the channel type while creating a channel.

## 📘Note

Note

Choose Messaging API as the channel type while creating a channel.

## Creating a Bot

Once you have created the provider and channel, you will need to create and configure a bot. This allows you to send messages to users. Additionally, you can configure the bot to use rich menus, and quick replies for a personalized experience.

To create a bot on the LINE Developer Platform, refer to theLINE Developer Console documentationon creating a bot.

## Creating a Webhook

For detailed steps, refer to theCapillary Developer Documentationon creating a webhook.

> 📘NoteThe generated webhook URL can then be used for integration on LINE.

## 📘Note

Note

The generated webhook URL can then be used for integration on LINE.

## Setting the Webhook URL

Once the webhook URL has been created, you need to set the webhook onto the LINE developer platform.

For detailed steps to set the webhook URL on the Line Developer Platform, refer to theLINE Developer Console Documentation.

## Configuring the LINE Message API

To connect your LINE account with Capillary, you need to enable the Messaging API for your account.

Follow these steps to enable Messaging API:

1. Log in to your LINE developer account and select your target account.

2. ClickSettingsin the top right and go to the settings screen.

3. SelectMessaging APIfrom the menu on the left.

4. Click on theEnable Messaging APIbutton.

![](https://files.readme.io/1cac609-image12.png)

1. Select the provider you want to associate with and click onAgree.

When the Channel information appears on the screen, the Messaging API activation is complete.

## Channel ID and Channel Secret Keys

These are required while setting up a LINE source account on InTouch.

Channel IDis a unique identifier of the channel.

Channel Secret Keyis a unique secret key used to grant an app access to your channel.

> 📘NoteFind the Channel ID and Channel Secret Keys on the LINE Developer Platform under Settings > Messaging API > Channel Info.

## 📘Note

Note

Find the Channel ID and Channel Secret Keys on the LINE Developer Platform under Settings > Messaging API > Channel Info.

Updated8 months ago

- Configuration
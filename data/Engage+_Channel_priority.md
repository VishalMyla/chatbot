# Channel priority

Channel Priority helps increase productivity by reaching out to customers based on their availability on each channel without having to create multiple messages or campaigns. This can also minimize the cost of communication by reaching out to cheap communication channels and maximize the probability of conversion by prioritizing channels that could give better ROI.

There are two different sequences of Channel Priority strategies supported.

![725](https://files.readme.io/59150ef-3f5Kil11PkvEy1QYYSSuwFcl7ML3UE3diw.png)

1. C1 /C2 / C3(Only one channel in the sequence of availability)All customers are first contacted on Channel 1. If a customer is not reachable on C1, then we try to contact them on Channel 2. If a customer is not even available on Channel 2, then we try to contact them on Channel 3, and so on. In this, you need to configure at least two channels.

C1 /C2 / C3(Only one channel in the sequence of availability)All customers are first contacted on Channel 1. If a customer is not reachable on C1, then we try to contact them on Channel 2. If a customer is not even available on Channel 2, then we try to contact them on Channel 3, and so on. In this, you need to configure at least two channels.

2. C1 + C2 / C3 (One mandatory channel and any other remaining channel in the sequence of availability )All customers are contacted on Channel 1 and additionally, you can try to contact on any other channels in the sequence of availability Channel 2, Channel 3, and so on. If a customer is not available on Channel 2, then we can target on Channel 3 and so on. In this, you need to configure at least three channels one mandatory channel and another channel in the sequence of availability.

C1 + C2 / C3 (One mandatory channel and any other remaining channel in the sequence of availability )All customers are contacted on Channel 1 and additionally, you can try to contact on any other channels in the sequence of availability Channel 2, Channel 3, and so on. If a customer is not available on Channel 2, then we can target on Channel 3 and so on. In this, you need to configure at least three channels one mandatory channel and another channel in the sequence of availability.

## Configuring C1/C2/C3

To configure for the first type of channel priority option, follow these steps.

1. In Content, selectC1/C2/C3and clickNext.

![961](https://files.readme.io/4ae92b5-w6MGbXS8VpzXUkfE0j1XU5Hl8EXcKEu2Og.png)

1. According to the sequence in which you want to prioritize channels, set channels in each box. Channel 1 will have the highest priority, whereas, Channel 3 is the lowest.

2. ClickAdd Creativeand configure a template for each Channel according to your preference (SMS/Email, Push Notifications, Live). You need to configure at least two channels (Channel 1 and Channel 2).

3. ClickAdd more content, to configure more channels.

![903](https://files.readme.io/eaf1151-ixEzbohBnz0QkSsN4XEj9aF3fxtraAF0Ng.png)

The following screenshot has the channel priority set as follows:SMS>Mobile Push>Line.

![777](https://files.readme.io/497472a-gUu7vBpbE-VTdqs56wpy1TxfreLoNQ1uBg.png)

To send incentives on a specific channel, click the respective+Add Incentives. You can add an offer or a points strategy.

## Configuring C1+C2/C3

To configure for the second type of channel priority option, follow these steps.

1. In Content, selectC1+C2/C3and clickNext.In Channel 1, you need to configure a default channel and additionally, you can configure Channel 2 and Channel 3 in the order of priority. Here, Channel 2 will have the first priority and Channel 3 is second, and so on.

![965](https://files.readme.io/90cf2ec-8kXnHPLFsULFEnQRzQDVI9Lwr_kqgSI-jA.png)

1. ClickAdd Creativeand configure a template for each Channel according to your preference (SMS/Email, Push Notifications, Live). You need to configure at least two channels (Channel 1 and Channel 2).

2. ClickAdd more content, to configure more channels.

3. To add incentives for a channel, clickAdd Incentive. You can add an offer or points.

4. ClickContinueto proceed.

## Channel priority in Journey

You can also use the channel priority feature when configuring a Journey. The Journey cannot be sent for approval, and an error message will be displayed if the channel priority is not configured properly.

A Journey will not be saved, and an error message will be displayed in the following scenarios:

- Both channels in the channel priority are the same. For example, if you configure SMS as C1 and C2 in the channel priority configuration, the system will not allow you to save the Journey, and an error message will be displayed.

- You have added the Channel Priority block but have not configured the channels properly.

> 📘NotesIf the customer is not reachable on any of the configured channels, no error will be displayed, and the Journey will progress to the next block.At the time of executing this journey for any customer if the customer has unsubscribed from any channel, the communication is not sent on that particular channel.

## 📘Notes

Notes

- If the customer is not reachable on any of the configured channels, no error will be displayed, and the Journey will progress to the next block.

- At the time of executing this journey for any customer if the customer has unsubscribed from any channel, the communication is not sent on that particular channel.

Updated9 months ago
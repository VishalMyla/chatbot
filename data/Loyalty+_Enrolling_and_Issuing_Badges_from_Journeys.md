# Enrolling and Issuing Badges from Journeys

# Use cases

## Use Case 1: New Member Welcome

Objective:Welcome and encourage new customers to make their first purchase.

### Journey Overview:

- Trigger:A new customer signs up.

- Condition Check:The system checks if the customer has made their first purchase.

#### Path 1: First Purchase Completed

- Action:Issue a "New Member Welcome Badge."

- Journey End:Concludes after badge issuance.

#### Path 2: First Purchase Not Completed

- Action 1:Send an email with a 10% discount coupon to encourage the first purchase.

- Action 2:Wait for 7 days.

- Condition Check:Has the customer made a purchase within this period?If Yes:Issue a "First Purchase Badge" and end the journey.If No:The journey ends without issuing a badge.

- If Yes:Issue a "First Purchase Badge" and end the journey.

- If No:The journey ends without issuing a badge.

### Journey Overview:

- Trigger:Select the Inactive Audience.

- Action:Send a re-engagement email with a 15% discount coupon.

- Wait:The system waits for 10 days.

- Condition Check:Has the customer made a purchase?If Yes:Issue a "Win-back Champion Badge" and end the journey.If No:The journey ends without issuing a badge.

- If Yes:Issue a "Win-back Champion Badge" and end the journey.

- If No:The journey ends without issuing a badge.

## Use Case 3: Product Review Campaign

Objective:Encourage customers to provide product reviews.

### Journey Overview:

- Trigger:A customer makes a purchase.

- Action 1:Enroll the customer in the badge system.

- Action 2:Send a follow-up email requesting a product review.

- Wait:The system waits for 7 days.

- Condition Check:Has the customer written a review?If Yes:Issue a "Review Rockstar Badge" and end the journey.If No:The journey ends without issuing a badge.

- If Yes:Issue a "Review Rockstar Badge" and end the journey.

- If No:The journey ends without issuing a badge.

## Use Case 4: Gamification Adventure

Objective:Engage customers through a gamified experience.

### Journey Overview:

- Trigger:A customer signs up for the gamification adventure event.

- Action 1:Issue a "Quest Starter Badge."

- Condition Check:Has the customer completed the first level of the game?If Yes:Issue a "Level 1 Champion Badge."If No:The journey pauses until the first level is completed.

- If Yes:Issue a "Level 1 Champion Badge."

- If No:The journey pauses until the first level is completed.

- Final Condition Check:Has the customer completed all levels of the game?If Yes:Issue a "Game Master Badge" and end the journey.If No:The journey ends without further badges.

- If Yes:Issue a "Game Master Badge" and end the journey.

- If No:The journey ends without further badges.

# Enrol customers in badges or issue badges to customers from Journeys

1. Log in to InTouch of your cluster and navigate toEngage+from the menu.

2. Click onJourneys. You will see the Journeys homepage.

![1088](https://files.readme.io/d554f5e-jNXxmLv6XStl8huxbwBSmkH1xfX_djWo5Q.png)

1. Click onCreate new.

2. In theJourney nametext box, enter a name for your journey.

![1351](https://files.readme.io/d824f1d-EK5zAdphdgI-0WcrnqNnaXQGgYfZAgtpLw.png)

1. You can create a journey from scratch or choose one of the existing templates to configure your journey.When configuring thejourney, add the building blockIssue incentiveto the customer journey path.SelectAdd Incentives > Enrol badgestoenrolorIssue badgestoissue a badge.

1. When configuring thejourney, add the building blockIssue incentiveto the customer journey path.

2. SelectAdd Incentives > Enrol badgestoenrolorIssue badgestoissue a badge.

![](https://files.readme.io/108a742-Enrol_Issue_badge.png)

1. Select an existing badge or create a new badge and clickClaim.  Expired badges cannot be attached to a journey. Ensure that the badge does not expire before the Journey ends.Notes:

- Only Enrol & Issue badges can be created when enrolling customers to badges, and owner type can be any.

- When issuing badges to customers, only Direct Issue badges can be created and owner type can be only Audience Campaigns.

- For Enrol, all the badges, regardless of ownership, are displayed. The ownership of badges indicates the module where the badge will be used. For example, Loyalty, Loyalty Promotion, Journeys, etc. This is defined during the creation of a badge.

- For Issue badges action, only "Direct Issue" type badges are displayed.

![](https://files.readme.io/b546928-Select_badge.png)

## Adding badges information through the communication channel

1. Add the desired communication block to the Journey.

Add the desired communication block to the Journey.

2. SelectAdd Incentives>Add badges>Enrol badgesto enrol orIssue badgesto issue a badge.

SelectAdd Incentives>Add badges>Enrol badgesto enrol orIssue badgesto issue a badge.

3. To include information about the badges in the message, selectAdd Creatives> Select template >Add label>Badgeand select the desired tags. If you have added multiple badges, you need to include multiple tags. For example, the expiry information of each badge. If the badges do not have any expiry, select No expiry tags.

To include information about the badges in the message, selectAdd Creatives> Select template >Add label>Badgeand select the desired tags. If you have added multiple badges, you need to include multiple tags. For example, the expiry information of each badge. If the badges do not have any expiry, select No expiry tags.

![](https://files.readme.io/17c2007-Add_label.png)

Updated7 months ago
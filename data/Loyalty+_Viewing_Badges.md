# Viewing Badges

# Viewing badges list (Badge universe)

The badges home page lists all the badges configured for the brand along with their details such as badge name, owner of the badge, duration, status, issue expiry, badges issued, last updated on and last updated by.

![](https://files.readme.io/7cdfe2216c915badfcaeda843617cc599d43694629721aa52459a856672d33d0-image.png)

Below is the description of all the fields on the above screen:

| Column No | Description |

| --- | --- |

| 1 | Nameof the badgeOwnerof the badge : The module for which the badge is created. It can be Loyalty, Loyalty Promotions, Milestones, Campaigns, Journeys. Defining an owner is mandatory |

| 2 | Duration: Start date and end date of the badgeStatus: Status of the badge based on the duration of the badge, it can be upcoming, live and ended |

| 3 |

| 4 | Issue expiry: This is the expiry of the badge once the badge is issued to the customer. This expiry is specific to the customer based on the type of issue expiry (fixed date/along with badge end date/relative/never expires) |

| 5 | Badges issued :No of badges issued from the badge series. This data is synced every 2 hours. |

| 6 | Last updated on :The date on which badge was last updatedLast updated by :User by which badge was last updated |



Column No

Description

1

Nameof the badge

Ownerof the badge : The module for which the badge is created. It can be Loyalty, Loyalty Promotions, Milestones, Campaigns, Journeys. Defining an owner is mandatory

2

Duration: Start date and end date of the badge

Status: Status of the badge based on the duration of the badge, it can be upcoming, live and ended

3

4

Issue expiry: This is the expiry of the badge once the badge is issued to the customer. This expiry is specific to the customer based on the type of issue expiry (fixed date/along with badge end date/relative/never expires)

5

Badges issued :No of badges issued from the badge series. This data is synced every 2 hours.

6

Last updated on :The date on which badge was last updated

Last updated by :User by which badge was last updated

Badges on the listing page can be filtered by the below parameters:

| Filter | Description |

| --- | --- |

| Status | Status of the badge based on the duration of the badge, it can be upcoming, live and ended |

| Activation Status | This is the activation status of the badge on top of the status of the badge. A badge can be active or inactive. Live, upcoming, ended badges can be active but only live and upcoming badges can be inactive. |



Filter

Description

Status

Status of the badge based on the duration of the badge, it can be upcoming, live and ended

Activation Status

This is the activation status of the badge on top of the status of the badge. A badge can be active or inactive. Live, upcoming, ended badges can be active but only live and upcoming badges can be inactive.

![](https://files.readme.io/dab1404a941efecf250f64af506b65bae771f05c757e0cb3fb8047953f8d8d99-Documenting_the_Flow.gif)

You can filter badges based on theBadge issue type,Owned byandClaimed byby selecting theAdvanced filtersicon.

![Advanced filters](https://authorphilpartington.wordpress.com/wp-content/uploads/2013/09/copywriting-guide-hyphen-dash.jpg?w=15)

![](https://files.readme.io/7436d8043690fea0cc47da8bb984f7efa8fe5ebf2138a84be9146fc1eaff0fbc-image.png)

To view the the owner and claim details for a particular badge,  click  on theiicon against the badge owner

- For a badge to be claimed by a particular module, first the owner has to be defined and then that module can claim it.

- A badge can have multiple owners and claims

- Once an owner is defined, it can’t be removed or replaced, but more owners can be added to the badge.

- Once a claim has been added for a badge, it can’t be removed or replaced, but other modules can still claim it.

- The claim gives the information of exactly where the badge is being used/claimed. For example, in the below screenshot, the badge has been claimed in supermarket loyalty program : TransactionAdd and CustomerRegistration events

![](https://files.readme.io/5d502f0b94b85388aebc21c50dfe4acb4f3916af40c1be47d6e84fd76e0c269f-image.png)

If a badge owner is defined, but claims are not yet added then it will be shown as below :Not claimed

![](https://files.readme.io/e6a3af3f36be6b3900f752d0b4caf0e54e26f4890a38f41e64854fc21fe868b4-image.png)

- We can see the list of badges that were claimed from Audience Campaigns and Journeys using the tooltip and the 'View Badge' option.

![](https://files.readme.io/08ae7b57e32e66d55ba4fae20fcbd53c20bc33d855486079cf77dc38d560d233-image.png)

## Viewing badge detail

You can click on a badge to view all the details of the particular badge.

In the Configuration tab, there are three sections:

1. Basic detailsImages : Unissued, In progress and IssuedName : Name for the badge. This is a mandatory field.Description : Detailed description of the badge. This is an optional field.Durationstart date of the badge. Once a badge is live, start date of the badge can’t be changed. This is a mandatory field and has to be in the future only as per current date and time.expiresOn : Expiry of the badge which defines by when can the badge be issued. This can be changed even when the badge is live. This is a mandatory field.Badge issue typeEnrol & Issue : Selected customers are enrolled for these badges, which are then issued once they fulfil the issual conditionDirectly issued without enrolment : Badges are not restricted to any specific audience. They can be issued directly to anyone who fulfils the issuance criteriaEnrolment expiry : This is the duration within which a customer must complete the activity for the badgeOwner and Claimed by :Owner : The module(s) for which the badge has been createdClaimed by : Module(s) which have claimed/used the badge

1. Images : Unissued, In progress and Issued

2. Name : Name for the badge. This is a mandatory field.

3. Description : Detailed description of the badge. This is an optional field.

4. Durationstart date of the badge. Once a badge is live, start date of the badge can’t be changed. This is a mandatory field and has to be in the future only as per current date and time.expiresOn : Expiry of the badge which defines by when can the badge be issued. This can be changed even when the badge is live. This is a mandatory field.

1. start date of the badge. Once a badge is live, start date of the badge can’t be changed. This is a mandatory field and has to be in the future only as per current date and time.

2. expiresOn : Expiry of the badge which defines by when can the badge be issued. This can be changed even when the badge is live. This is a mandatory field.

7. Badge issue typeEnrol & Issue : Selected customers are enrolled for these badges, which are then issued once they fulfil the issual conditionDirectly issued without enrolment : Badges are not restricted to any specific audience. They can be issued directly to anyone who fulfils the issuance criteria

1. Enrol & Issue : Selected customers are enrolled for these badges, which are then issued once they fulfil the issual condition

2. Directly issued without enrolment : Badges are not restricted to any specific audience. They can be issued directly to anyone who fulfils the issuance criteria

10. Enrolment expiry : This is the duration within which a customer must complete the activity for the badge

11. Owner and Claimed by :Owner : The module(s) for which the badge has been createdClaimed by : Module(s) which have claimed/used the badge

1. Owner : The module(s) for which the badge has been created

2. Claimed by : Module(s) which have claimed/used the badge

![](https://files.readme.io/546c99a-image14.png)

1. Issue badgesIssue expiry : The is the duration until which the customer will have the badge once issued to themBadges Issued : No of badges issued to the customers from the badge seriesIssue limit: You can set an individual or across all customer limit for issuing the badge within a fixed or moving window.Customer limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the combination of the below options.Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.Across Customer Limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

Issue badges

1. Issue expiry : The is the duration until which the customer will have the badge once issued to them

Issue expiry : The is the duration until which the customer will have the badge once issued to them

2. Badges Issued : No of badges issued to the customers from the badge series

Badges Issued : No of badges issued to the customers from the badge series

3. Issue limit: You can set an individual or across all customer limit for issuing the badge within a fixed or moving window.Customer limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the combination of the below options.Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.Across Customer Limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

Issue limit: You can set an individual or across all customer limit for issuing the badge within a fixed or moving window.

1. Customer limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the combination of the below options.Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

Customer limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the combination of the below options.

1. Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.

2. Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

4. Across Customer Limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

Across Customer Limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.

1. Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.

2. Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

![](https://files.readme.io/3c7d88e4aab244188c68abe163a3e2c2dc59a04f50da554c58a9b74bcffd42a3-image.png)

In the Information tab in view mode, you can find the Badge ID, creation date and creator of the badge. You can also copy the badge ID directly from here like below.

![](https://files.readme.io/c73321c-image19.png)

Updated5 months ago
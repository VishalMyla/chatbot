# User-Created Challenges

User-created challenges let people set their own goals. Unlike milestones set by brands, this puts users in control. They create challenges for themselves and earn rewards for completing them.

For example, a fitness brand has an app that lets users create personal challenges. For instance, a user might set a goal to drink eight glasses of water every day. They log their water intake in the app. When they reach their goal consistently for a week, they earn points. These points can be used for discounts on fitness gear or healthy snacks. This way, users feel accomplished and get rewarded for taking care of their health.

![](https://files.readme.io/9cf395cc5191799c306a08f9881537f225c6c2bbdc6cf616ebc7df9de572e4ab-UCC_WF_3.png)

> 📘NotesRaise a JIRA ticket to enable user-created challenges for your organisation.

## 📘Notes

Notes

Raise a JIRA ticket to enable user-created challenges for your organisation.

> 🚧AttentionOnce a user-created target group is created, it cannot be changed to a default target.Currently, a maximum of one Target Rule (expression) can be configured for a user-created target group.The Target Rules created must be of theenrolmentMethodIMPORTfor a user-created target group.

## 🚧Attention

Attention

- Once a user-created target group is created, it cannot be changed to a default target.

- Currently, a maximum of one Target Rule (expression) can be configured for a user-created target group.

- The Target Rules created must be of theenrolmentMethodIMPORTfor a user-created target group.

`enrolmentMethod`

`IMPORT`

The following table list the APIs that can be used to create and get details of user-created challenges:

| Objective | API | Notes |

| --- | --- | --- |

| Create behavioral event | Create event | Create and publish a new behavioural event or use an existing event. |

| Create a user-created target | Create target groups | Create the target for the behavioural event. Set the default values for the target as 2 fortargetType=COUNT. |

| Create a promotion | Create promotion for UCC | While creating the promotion, set the value ofidto-1under thepromotion,rulesetInfosandrules. This indicates that a new promotion request is being made in the backend. |

| Enroll a user on a user-created target | Enroll a user to a milestone or streak | Enrolling a user on a user-created target can be done using the enrol API. Set thetargetGroupIdandtargetIDof the user-created target. |

| Unenroll a user from a user-created target | Unenroll a user from a milestone or streak | Enrolling a user on a user-created target can be done using the enrol API. Set thetargetGroupIdandtargetIDof the user-created target. |

| Get all milestones in an organisation | Get all milestones | Set theincludeUserCreatedTargetGroupsparameter in the request body astrueto get data related to UCC. |

| Get promotion data | Get Promotion Data | Set thesourceTypeasUSER_CREATEDto filter filter promotions created for UCC. |

| Get all user-created target groups | Get target groups based on ID | Set theincludeUserCreatedTargetGroupsparameter in the request body astrueto get data related to UCC. |

| Get user created target groups by tracking type | Get all milestones | Set theincludeUserCreatedTargetGroupsparameter in the request body astrueto get data related to UCC. |

| Get all active targets of a customer | Get active targets | Set theincludeUserCreatedTargetGroupsparameter in the request body astrueto get data related to UCC. |



[Create event](/reference/create-event-custom-be)

[Create target groups](/reference/create-target-groups)

`targetType=COUNT`

[Create promotion for UCC](/reference/create-promotion-for-ucc)

`id`

`-1`

`promotion`

`rulesetInfos`

`rules`

[Enroll a user to a milestone or streak](/reference/enrol-customer-to-a-milestone)

`targetGroupId`

`targetID`

[Unenroll a user from a milestone or streak](/reference/un-enrol-users-into-a-milestonestreak)

`targetGroupId`

`targetID`

[Get all milestones](/reference/get-all-milestones)

`includeUserCreatedTargetGroups`

`true`

[Get Promotion Data](/reference/get-promotion-data-new)

`sourceType`

`USER_CREATED`

[Get target groups based on ID](/reference/get-target-groups-id)

`includeUserCreatedTargetGroups`

`true`

[Get all milestones](/reference/get-all-milestones)

`includeUserCreatedTargetGroups`

`true`

[Get active targets](/reference/get-active-targets)

`includeUserCreatedTargetGroups`

`true`
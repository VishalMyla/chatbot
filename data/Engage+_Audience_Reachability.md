# Audience Reachability

Reachability refers to whether a user can be contacted via a specific communication channel. It helps determine if a particular user can receive messages or notifications sent through that channel.

You can view the reachability status in the audience view detail page.

![](https://files.readme.io/b82a4f1-Audience_reachability.gif)

# Reachability Categories

| Category | Reachability Status | Description |

| --- | --- | --- |

| VALID | ✅ | The user is reachable and valid. |

| SUBSCRIBED | 🟢 | The user is reachable and has subscribed. |

| UNABLE_TO_VERIFY | ❓ | Unable to verify the user’s reachability. |

| SOFT_BOUNCED | 🔄 | There were soft bounces. More may lead to HARD_BOUNCED. |

| CONTACT_UNAVAILABLE | 🚫 | The user’s registered contact is not available. |

| UNSUBSCRIBED | 🔕 | The user has unsubscribed from communications. |

| INVALID | ❌ | The user’s registered contact is invalid. |

| HARD_BOUNCED | 🛑 | Previous communications have HARD_BOUNCED. |



# When is Reachability Calculated?

- Immediate and Specific Date Messages:Reachability is computed before campaign creation.

- Recurring Campaigns:Reachability for the filter list is calculated at the pre-execution stage.

# Reachability computation

The audience reachability is computed based on the whitelisting (valid mobile or email IDs) and their subscription status. For WhatsApp, the customers who have unsubscribed to a particular brand on WhatsApp are excluded and if the WhatsApp number is not available, the fall back channel will be considered. If a user's subscription status is not available, they are considered available.

Updatedabout 1 month ago
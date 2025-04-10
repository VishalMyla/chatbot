# Unified subscription

The Unified subscription introduces additional configurations and serves as an additional layer atop the existing subscription logic, Single, Restricted, and Double. This enables it to analyze subscription permissions across source profiles and make decisions on whether to send communications. For details about Single, Restricted, and Double subscription types, please refer to ourSubscription managementdocumentation and search for 'Single,' 'Restricted,' or 'Double'.

> 📘Note:All existing subscription settings remain in effect when you enable unified subscription. For example, if you've configured synchronization of subscription status across OUs, this setting will also be applied to the unified subscription.

## 📘Note:

Note:

All existing subscription settings remain in effect when you enable unified subscription. For example, if you've configured synchronization of subscription status across OUs, this setting will also be applied to the unified subscription.

With Unified subscription configuration, you can set up additional configurations as follows:

1. Recently Granted Consent:The most recent consent given by the customer is considered to decide whether a communication can be sent. This is the default unified subscription settings.📘Note:If no consent is present (consent status is not-set on all sources), the existing subscription type (single, restricted single, or double) is used to make this decision.Example:The below table explains a scenario where unified subscription status is enabled with the type "Recently granted consent":

> 📘Note:If no consent is present (consent status is not-set on all sources), the existing subscription type (single, restricted single, or double) is used to make this decision.Example:The below table explains a scenario where unified subscription status is enabled with the type "Recently granted consent":

## 📘Note:

Note:

If no consent is present (consent status is not-set on all sources), the existing subscription type (single, restricted single, or double) is used to make this decision.Example:The below table explains a scenario where unified subscription status is enabled with the type "Recently granted consent":

| Date | Source profile & recent consent status | Existingsubscription type | Can communication be sent? |

| --- | --- | --- | --- |

| Today | Instore: Not setWebEngage: Not set | Single | YesThe existing subscription type is considered as the recent unified subscription type is not available. |

| Today | Instore: Not setWebEngage: Not set | Restricted | NoThe existing subscription type is considered as the recent unified subscription type is not available. |

| Tomorrow | Instore: Not setWebEngage: Opt-out | Single | NoThe existing subscription type is ignored here as the recent unified subscription type is available. |

| Day After Tomorrow | Instore: Opt-inWebEngage: Opt-out | Single | NoThe existing subscription type is ignored here as the recent unified subscription type is available. |



1. Liberal Approach:Communication will be sent if the customer has agreed to receive communications on any of the source profiles. If the communication status is marked as "Yes" on at least one profile, messages will be allowed to be sent.Example:The below table explains a scenario where unified subscription status is enabled with the type "Liberal":

| Source profile & consent status | Existingsubscription type | Can communication be sent? |

| --- | --- | --- |

| Instore: Not setWebEngage: Not set | Single | YesThe existing subscription type is considered as consent statuses are not available. |

| Instore: Not setWebEngage: Not set | Restricted | NoThe existing subscription type is considered as consent statuses are not available. |

| Instore: Not setWebEngage: Opt-out | Single | Yes. The consent status on Instore is considered as Yes.The existing subscription type is ignored here as the consent statuses are available |

| Instore: Opt-inWebEngage: Opt-out | Single | Yes. The consent status of the Instore profile is Yes.The existing subscription type is ignored here as the recent unified subscription type is available |



1. Strict approach:Communication will be sent only if the customer has agreed to receive communications on all source profiles. Messages will be allowed to be sent only if the communication status is marked as "Yes" on all profiles.The below table explains a scenario where unified subscription status is enabled with the type "Strict". The existing subscription type is ignored.

| Source profile & consent status | Existingsubscription type | Can communication be sent? |

| --- | --- | --- |

| Instore: Not setWebEngage: Not set | Single | Yes,  because both consent statuses are Not set and the system considers the existing subscription type. In Single, Not set is considered as 'Yes' |

| Instore: Not setWebEngage: Not set | Restricted | No,  because both consent statuses are Not set and the system considers the existing subscription type. In Restricted, only Opt-in is considered as 'Yes'. |

| Instore: Not setWebEngage: Opt-out | Single | No, because one of the consent statuses is No.The existing subscription type is ignored here as the consent statuses are available. |

| Instore: Opt-inWebEngage: Opt-out | Single | No, because one of the consent statuses is No.The existing subscription type is ignored here as the consent statuses are available. |



# Enabling unified subscription

You can raise a ticket with the sustenance team and enable configurationCONF_UNIFIED_SUBSCRIPTION_ENABLEDto enable the unified subscription.

`CONF_UNIFIED_SUBSCRIPTION_ENABLED`

Sample tickets:

- Enabling unified subscription at org level

- Enabling unified subscription at OU level

The turnaround time is five days.

# How this is different from the existing subscription setup?

In the current subscription setup, complications arise when subscription settings vary across source profiles. Refer to the image below for an illustration:

![](https://files.readme.io/301b54f-Subscription_setting.gif)

In the above image, you can see that subscription permission for each source is different.

The Unified subscription resolves this complexity and makes informed decisions regarding the sending of promotional or transactional messages.

Updatedover 1 year ago
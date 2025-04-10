# Profile : Current Event

CurrentEvent: The current event profile returns the event that is triggered by the event listener, i.e., the event on which the rule is created.

The following table consists of the descriptions of all the attributes of currentEvent.

## Attributes - Target based

| Attribute | Definition | Link |

| --- | --- | --- |

| targetAchieved | Provides the numeric value of the actual achievement of the customer for the given target. | Learn More |

| targetDefined | Provides the numerical target value that is defined by the brand |  |

| targetExists | Verifies whether the current event contains information about the target.Example:currentEvent.targetExists("ABC") |  |

| targetName | Verifies whether the current event is talking about the target whose name contains the given string.Example:currentEvent.targetName.contains("AB") |  |

| isTargetAchievedEvent | Verifies whether the current event is for the achievement of a target.Example:currentEvent.isTargetAchievedEvent |  |

| isUnifiedTargetAchievedEvent | Verifies whether the current event is for the achievement of a unified target.Example:currentEvent.isUnifiedTargetAchievedEvent. |  |

| isStreakAchievedEvent | Verifies whether the current event is for the achievement of a streak level.Example:currentEvent.isStreakAchievedEvent |  |

| isSubTargetAchievedEvent | Verifies whether the current event is for the achievement of a sub-targetExample:currentEvent.isSubTargetAchievedEvent |  |

| targetMilestoneTrigger | Verifies whether the current event is about the specific sub-target.Example:currentEvent.targetMilestoneTrigger.contains("name of sub-target") |  |

| streakName | Verifies whether the current event is about the specific streak-level.Example:currentEvent.streakName("name of streak level") |  |

| streakExists | Verifies whether the current event contains information about the streak-level mentioned.Example:currentEvent.streakExists("name of streak level") |  |



[Learn More](/docs/attribute-target-based)

## Attributes - Loyalty Information

| Attribute | Definition | Link |

| --- | --- | --- |

| previousLoyaltytype | Checks the loyalty status of the customer before the current event. Supported only for CustomerUpdate event | Learn More |

| currentLoyaltytype | Checks the loyalty status of the customer during the current event. Supported only for CustomerUpdate event | Learn More |



[Learn More](/docs/attribute-loyalty-information#previousloyaltytype)

[Learn More](/docs/attribute-loyalty-information#currentloyaltytype)

## Attribute - Custom Field

| Attribute | Definition | Link |

| --- | --- | --- |

| currentCustomFieldValue | Value of custom field after updating | Learn More |

| previousCustomFieldValue | Customer's mobile number before updating | Learn More |



[Learn More](/docs/attributes-custom-field-1#currentcustomfieldvalue)

[Learn More](/docs/attributes-custom-field-1#previouscustomfieldvalue)

Updated8 months ago
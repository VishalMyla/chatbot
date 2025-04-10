# Attribute - Loyalty Information

## previousLoyaltytype

Profile : currentEventAttribute : previousLoyaltytypeType : BooleanMeaning : Checks the loyalty status of the customer before the current event. Supported only for CustomerUpdate eventSub-Attribute: NAValues: LOYALTY/NON_LOYALTYExample:currentEvent.previousLoyaltyType=="LOYALTY" or currentEvent.previousLoyaltyType=="NON_LOYALTY"

| Example: Write a rule to check that the current customer loyalty before the event  was Non-loyalty customer and currently it's a loyalty customer. |

| --- |

| currentEvent.previousLoyaltyType.matches("NON_LOYALTY")&&(currentEvent.currentLoyaltyType.matches("LOYALTY")) |



## currentLoyaltytype

Profile : currentEventAttribute : currentLoyaltytypeType : BooleanMeaning : Checks the loyalty status of the customer in the current event.Sub-Attribute: NAValues: LOYALTY/NON_LOYALTYExample:currentEvent.currentLoyaltyType=="LOYALTY" or currentEvent.currentLoyaltyType=="NON_LOYALTY"

| Example: Write a rule to check that the current customer loyalty before the event  was Non-loyalty customer and currently it's a loyalty customer. |

| --- |

| currentEvent.previousLoyaltyType.matches("NON_LOYALTY")&&(currentEvent.currentLoyaltyType.matches("LOYALTY")) |



Updatedover 1 year ago
# Attribute - Target Based

## Attribute: targetAchieved.

Profile :currentEvent &Event in workflow:Target CompletedAttribute :Target Achieved (targetAchieved)Type :Integer(int)Meaning :Provides the numeric value of the actual achievement of the customer for the given target.Sub-Attribute:NASyntax: currentTxn.targetAchieved(“Target Name”)

| Example: Write a rule to check if the target value achieved for a VNBrand4 is greater than the defined value of the VNBrand5 Target. |

| --- |

| Rule: Condition1 > condition 2Condition1:Profile: current EventAttribute: target achievedTarget Name: VNTeamPilotBrandCondition2:Profile: current EventAttribute: target achievedTarget Name: VNTeamPilotBrandRule: currentEvent.targetAchieved("VNBrand4")>currentEvent.targetDefined("VNBrand5") |



Updatedover 1 year ago
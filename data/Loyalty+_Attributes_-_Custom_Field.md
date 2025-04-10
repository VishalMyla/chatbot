# Attributes - Custom Field

## currentCustomFieldValue

Profile :currentEventEvent in workflow :Customer Update**Attribute :currentCustomFieldValueType :BooleanMeaning :Value of custom field after updatingSub-Attribute:Custom Field Name and Field ValueSyntax: currentEvent.currentCustomFieldValue("Custom Field Name","Field Value")**Example: currentEvent.currentCustomFieldValue("age","26")**

| Example: If the event is "Customer Update", Write a rule to check that the custom field "gstin" number value is changed from 342WER to "8932FHDKS" |

| --- |

| Profile: currentEventAttribute: currentCustomFieldValuecustom field name: gstinUpdated custom field value : "8932FHDKS"Rule: currentEvent.currentCustomFieldValue("gstin","8932FHDKS") |



## previousCustomFieldValue

Profile :currentEvent &Event in workflow:Customer UpdateAttribute :previousCustomFieldValueType :BooleanMeaning :Customer's mobile number before updatingSub-Attribute:Custom Field Name and Field ValueSyntax: currentEvent.previousCustomFieldValue("Custom Field Name","Field Value")Example: currentEvent.previousCustomFieldValue("age_group","value")**

| Example: Example: If the event is "Customer Update", Write a rule to check that the custom field "gstin" number value is changed from 342WER to "8932FHDKS" |

| --- |

| Profile: currentEventAttribute: currentCustomFieldValuecustom field name: gstinPrevious custom field value : "342WER"Rule: currentEvent.currentCustomFieldValue("gstin","8932FHDKS") |



Updatedover 1 year ago
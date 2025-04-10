# Attributes - Customer Identity

## Attributes on Customer Name

String Operators widely used with name attributes

The basic range of string operations serves to resolve the string attribute into a boolean outcome. These operators are inserted after the string attribute using the (.) notation e.g. currentCustomer.email.contains(".com")

| Operator | Definition |

| --- | --- |

| contains | Used to see if the string contains the defined value |

| Matches | This is used to perform regular expression-based matching on the string |

| Exists | Some proper value exists for this string (i.e. source passed a value that was not an empty string) |

| notExists | The string is either Null or Empty |

| isNull | checks if the string is Null i.e. it was not passed from the source |

| isNotNull | checks if the string is NOT Null |



## Name

Profile: currentCustomerAttribute:nameMeaning:Customer's Full Name [ name = firstName + " " + lastName ]Type:StringSub-Attribute :NAFormat: currentCustomer.[(Attribute).(Sub Attribute)].[ Operators ][VALUE]**Syntax : currentCustomer.name[Operator][Value]

| Profile | Attributes | Sub- Attributes | Operator | Example |

| --- | --- | --- | --- | --- |

| currentCustomer | Name | NA | contains | currentCustomer.name.contains("akhil reddy") |

| currentCustomer | Name | NA | matches | currentCustomer.name.matches("sak") |

| currentCustomer | Name | NA | == | currentCustomer.name == "tripti" |



| Example 1 |

| --- |

| Write an Expression to check if the customer name has substring “nar”.Expression:currentCustomer.name.matches(“naresh silla”)Here, Profile -> currentCustomerAttribute -> nameSub Attributes -> NAString Operators -> matchesValue -> naresh silla |



| Example 2 |

| --- |

| Write an Expression to check if the customer name is “Santosh kumar”Expression:currentCustomer.contains("Santosh kumar") |



| Example 3 |

| --- |

| Write an Expression to check if the customer name contains “shreya”Expression:currentCustomer.name.contains==“Shreya” |



## First Name & Last Name

Profile: currentCustomerAttribute:firstNameMeaning:Customer's First Name [ name = firstName ]Attribute :lastNameMeaning:Customer's Last Name [name = " "+lastName]Type: StringSub-Attribute : NA

Format: currentCustomer.[(Attribute).(Sub Attribute)].[ Operators ][VALUE]Syntax for First Name Attribute:currentCustomer.firstname[Operator][Value]Syntax for last Name Attribute :currentCustomer.lastname[Operator][Value]

| Example 1 |

| --- |

| Example 1: Write an Expression to check if the customer name has the substring “nar”.Expression:currentCustomer.firstname.matches(“nar”)Here, Profile -> currentCustomerAttribute -> nameSub Attributes -> NAString Operators -> matchesValue -> nar |



| Example 2: |

| --- |

| Write an Expression to check if the customer name is “Santosh kumar”Expression:currentCustomer.firstname.contains("Santosh") |



| Example 3: |

| --- |

| Write an Expression to check if the customer last name contains “desai”Expression:currentCustomer.lastname==“ desai”)* |



## Email

Profile :currentCustomerAttribute :EmailType :StringSub-Attributes :NAOperator:contains, exists, isEmpty, isNotNull, isNull, matches, notExists, “==”Meaning :Customer's email id or checks which organization is in the email of CustomerSyntax : currentCustomer.email[Operators][Value]**

| Attribute | SubAttribute | Operator | Example |

| --- | --- | --- | --- |

| email | NA | contains | Contains - used to see if the string contains the defined value.Example:currentCustomer.email.contains("ashish.chelikani") |

| email | NA | exists | Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)currentCustomer.email.exists() |

| email | NA | isEmpty | isEmpty - Similar to notExistscurrentCustomer.email.isEmpty(“”) |

| email | NA | isNotNull | isNotNull - checks if the the string is NOT Null i.e. some value was passed from is equal to 1source (even an empty string counts)currentCustomer.email.isNotNull(“”) |

| email | NA | isNull | isNull - checks if the string is Null i.e. it was not passed from sourcecurrentCustomer.email.isNull(“”) |

| email | NA | notExists | notExists - The string is either Null or Empty |

| email | NA | == | ( == ) returns true if both operands have the same value; otherwise, it returns false . The not-equal-to operator ( != ) returns true if the operands don't have the same value; otherwise, it returns false .currentCustomer.email=="[email protected]" |

| email | NA | matches | Matches - this is used to perform regular expression-based matching on the string.currentCustomer.email.matches("[email protected]") |



[[email protected]](/cdn-cgi/l/email-protection#196a717678282e2e212a597e74787075377a7674)

[[email protected]](/cdn-cgi/l/email-protection#2c5f4d4258435f446c58494f44024f4341)

| Example: Write a condition to check if the customer email contains the string “SHR” |

| --- |

| Profile: Current CustomerAttribute: EmailSub-Attribute: NAOperator: containsRule: currentCustomer.email.contains(“SHR”) |



| Example: Write a rule to check if the current customer number of visits is equals to 1 and current customer email is not null. |

| --- |

| Profile: Current CustomerAttribute: numberOfVisits and emailOperator : == & isNotNullRule: currentCustomer.numberOfVisits==1&&(currentCustomer.email.is.NotNull(“”)) |



## External ID (externalId)

Profile :currentCustomerAttribute :externalIdType :integer/AlphanumericSub-Attributes :NAOperator:contains, exists, isEmpty, isNotNull, isNull, matches,notExists, “==”Meaning :Lets say to issue coupons to customers whose external ID contains a certain serial numbers (say 1234), use the following condition: customerCustomer.externalId.contains("1234")Syntax : currentCustomer.externalId[Operators][Value]

| Profile | Attribute | Sub-Attribute | Operator | Meaning |

| --- | --- | --- | --- | --- |

| currentCustomer | externalId | NA | contains | Contains - used to see if the string contains the defined valueExample: currentCustomer.externalId.contains("") |

| currentCustomer | externalId | NA | exists | Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)currentCustomer.externalId.exists() |

| currentCustomer | externalId | NA | isEmpty | isEmpty - Similar to notExistscurrentCustomer.externalId.isEmpty(“”) |

| currentCustomer | externalId | NA | isNotNull | isNotNull - checks if the the string is NOT Null i.e. some value was passed from source (even an empty string counts)currentCustomer.externalId.isNotNull(“”) |

| currentCustomer | externalId | NA | isNull | isNull - checks if the string is Null i.e. it was not passed from sourcecurrentCustomer.externalId.isNull() |

| currentCustomer | externalId | NA | notExists | notExists - The string is either Null or Empty |

| currentCustomer | externalId | NA | == | ( == ) returns true if both operands have the same value; otherwise, it returns false . The not-equal-to operator ( != ) returns true if the operands don't have the same value; otherwise, it returns false .currentCustomer.externalID=="17783"currentCustomer.externalId!="" |

| currentCustomer | externalId | NA | matches | Matches - this is used to perform regular expression based matching on the string.currentCustomer.internalId.matches("abc1223") |



| Example: Write a rule to check if the current customer number of visits is equals to 1 and current customer externalId is not null. |

| --- |

| Profile: Current CustomerAttribute: numberOfVisits and externalIdOperator : == & isNotNullRule:currentCustomer.numberOfVisits==1&&(currentCustomer.externalId.NotNull(“”)) |



| Example: Write a rule to check if the current customer contains a string “TRN13” |

| --- |

| Profile: Current CustomerAttribute: externalIdOperator : contains()Rule:currentCustomer.externalId.contains(“TRN13”) |



| Example: Write a rule to check if the current customer externalID exists |

| --- |

| Profile: Current CustomerAttribute: externalIdOperator : exists()Rule:currentCustomer.externalId.exists() |



## Mobile

Profile :currentCustomerAttribute :mobileType :integerMeaning :Mobile number of a customer.Sub-Attribute:NAOperators:contains, exists, isEmpty, isNotNull, isNull, matches,notExists, “==”Syntax:currentCustomer.mobile.[Operators][Value]

| Example: Write a rule to check if the mobile number of the current customer contains 98939756. |

| --- |

| Profile: Current CustomerAttribute: mobileOperator : contains()Rule: currentCustomer.mobile.contains(“98939756”) |



| Example: write a rule to check if the current customer's mobile number exists. |

| --- |

| Profile: Current CustomerAttribute: mobileOperator : existsRule: currentCustomer.mobile.exists() |



## hasInstoreProfile

Profile :currentCustomerAttribute :hasInstoreProfileType :BooleanMeaning :returns True, if the current customer is registered and has a instore ProfileSub-Attribute:NASyntax:currentCustomer.hasInstoreProfile()Example: currentCustomer.hasInstoreProfile==true

| Example: write a rule to check if the current has a Instore Profile |

| --- |

| Profile: Current CustomerAttribute: hasInstoreProfileType: BooleanRule: currentCustomer.hasinstoreProfile() |



## hasWeChatProfile

Profile :currentCustomerAttribute :hasWeChatProfileType :BooleanMeaning :returns True, if the current customer has a WeChat ProfileSub-Attribute:NASyntax: currentCustomer.hasWeChatProfile()**

| Example: write a rule to check if the current has a Instore Profile |

| --- |

| Profile: Current CustomerAttribute: hasWeChatProfileType: BooleanRule: currentCustomer.hasWeChatProfile() |



Updatedover 1 year ago
# Attributes - discount & discPercentage

## discount

Profile:CurrentLineItem (Current Line Item)Attribute:discountData Type:Integer/Big DecimalSub-Attribute:NAOperator:<,>,<=,>=,==Description:Discount at line-item level, Absolute Value of the discount.Syntax: currentLineItem.discount[Operators][VALUE]Example: currentLineItem.discount != 0

| Example: Write an expression to check if the current Line Item level discoun value is greater than 300. |

| --- |

| Rule: currentLineItem.discount > 300 |



## discPercentage (Line Item Level Discount Percentage)

Profile:CurrentLineItem (Current Line Item)Attribute: discPercentageData Type:integerSub-Attribute: NAOperators-> =,<=,>=,>,<Description:lineitem discount % = (discount/amount * 100)Discount value needs to be passed in api request payloadThe description specified for the line-item in the inventory, passed in the payloads.Syntax: currentLineItem.discountPercentage[OPERATORS][VALUE]

| Example: Write a condition to check if the line Item discount is greater than 15. |

| --- |

| Rule: currentLineitem.discPercentage>15 |



Updatedover 1 year ago
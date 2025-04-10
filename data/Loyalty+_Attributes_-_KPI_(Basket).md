# Attributes - KPI (Basket)

Attributes based on Basket/Cart of currentTxn:

| Attributes | Data Type | Description |

| --- | --- | --- |

| basketSum | BigDecimal | Sum of value of the items matching the inventory attribute |

| basketSumRegex | `BigDecimal | Sum of value of the items matching the inventory attribute - regular expression |

| basketQty | BigDecimal | Total quantity of items in the bill matching the inventory. For instance, if 2 items of a given line-item are bought, then the basket quantity is 2 |

| basketQtyRegex | BigDecimal | Quantity of items in the bill matching the regular expression |

| basketcount | int | Number of products in the transaction of the given inventory type - irrespective of quantity |

| basketcountRegex | int | Number of products whose item attribute matches the given regular expression |

| basketIncludes | Boolean | Products contained in the transaction. |

| basketExcludes | Boolean | Products not contained in the transaction |

| basketIncludesRegex | Boolean | If the bill includes products whose item attribute does not match the given regular expression |

| basketExcludesRegex | Boolean | If the bill does not include products whose item attribute does not match the given regular expression |

| basketSumIf | BigDecimal | Returns the sum of amount of line items (in basket) that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket. |

| basketCountIf | BigDecimal | Returns the count of line items of the basket that satisfies a specific condition. You can define condition based on the amount, discount, quantity, rate, or value of line items in the basket. |

| basketQtyIf | BigDecimal | Return the sum of quantities of qualifying line items in the basket. The qualifying condition could be on the amount, discount, quantity, rate, or value of the line item. |

| basketSize | int | Total number of items in the bill - irrespective of quantity of each item |

| basketSumGross | BigDecimal | Returns the sum of the gross amount of each line items in a basket whose attribute name matches with a specific value. Supported attribute names: product name, short description, SKU number, category, and subcategory. |

| basketSumRegexGross | BigDecimal | Returns the sum of gross amount of each line item in the basketwhose product attribute values match the given regular expression. |



## basketSum

Profile: Current Transaction (currentTxn)Data Type: BigDecimalSub-Attributes: Attribute Name and Inventory ValueDescription: sum of amount of all line items which are matching input inventory attribute and their inventory  attribute value matches exactly with input attribute valueSyntax: currentTxn.basketSum(“Attribute Name”,”Attribute Inventory Value”)Example :- currentTxn.basketSum("company_code","PETRON"), this will give the sum of all the amount of petron products of company_code inventory.

| Example 1: write a condition to check if the current transaction value for product “blue socks” exceeds 1000. |

| --- |

| currentTxn.basketSum(“Socks”,”Blue”)>1000 |



| Example 2 : “Buying Products of a Particular Brand”Suppose you want to issue coupons to customers who purchase products of a specific brand exceeding a certain transaction amount i.e 2000. |

| --- |

| To issue coupons for customers purchasing items of the Puma brand for more than 2000, use the following condition:Profile: currentTxn, Attribute:basketSum, Inventory Attribute Name: BrandName, Inventory Value: Puma, Transaction Value: 2000Syntax: currentTxn.basketSum(“Attribute Name”,”Inventory Attribute Value”)[operator][Value]currentTxn.basketSum("BrandName","Puma")>2000 |



| Example 3: As a marketing manager I want to allocate points based on basked Sum Value of a particular product category i.e shirting, if value exceeds 3000 but only to the customers who are in crosssale cluster and sub cluster value is solsuiting. |

| --- |

| Rule : [Condition 1] AND [Condition 2]Condition 1:basketSum value of product category i.e shirting should be greater than 3000Profile: currentTxnAttribute: basketSumInventory Attribute name : Product CategoryInventory Attribute Value: ShirtingCondition1: currentTxn.basketSum(“Product Category”,”Shirting”)>3000Condition 2 :Customer should belong to crosssale cluster and sub cluster value is solsuitting.Profile: currentCustomerAttribute : clusterValueIncludesCluster Name:crosssale clusterCluster Value:solsuitting.Condition2 : currentCustomer.clusterValueIncludes(“crosssale”,”solsuitting”)Overall rule => currentCustomer.clusterValueIncludes(“crosssale”,”solsuitting”)&&(currentTxn.basketSum(“Product Category”,”Shirting”)>3000) |



| Example 4: Write a rule for a customer transaction to check if the customer belongs to “diwali cluster: valueseeker16” and buy from the gents section with a sum value greater than 2999. |

| --- |

| currentCustomer.clusterValueIncludes("Diwali_Cluster","valueseeker16")&&(currentTxn.basketSum("Section","GENTS")>2999 |



## basketSumRegex

Profile: Current Transaction (currentTxn)Data Type: BigDecimalSub-Attributes: Attribute Name and Inventory ValueDescription:sum of the amount of all line items which are matching input inventory attribute and their inventory attribute value matches with input regex.Syntax: currentTxn.basketSumRegex("Inventory Attribute Name","Inventory Attribute Regex")Example:- currentTxn.basketSumRegex("company_code","PET.*")

| Example1: Write an expression to check if the inventory commodities amount sum of the inventory attribute “SUMMER” and value “shirts”, “shorts”, is greater than 3000. |

| --- |

| Profile: Current Transaction(currentTxn)Attribute: basketSumRegexInventory Attribute Name: SUMMERInventory Attribute Value : SHIRTS & SHORTSInventory attribute matching Regex: “SH.*”Rule: currentTxn.basketSumRegex(“SUMMER”,”SH.*”) |



| Example2: Write an expression to check if the current Transaction Value is less than 5000 and inventory items belonging to footwear, kids boy, kids girl, kids infant, ladies ethnic, ladies western,Mens ethnic, Mens Lower, Mens Upper is equal to or greater than 2999. |

| --- |

| Profile: Current Transaction(currentTxn)Attribute: basketSumRegexInventory Attribute Name: DivisionInventory Attribute Value : FOOTWEAR|KIDS BOY|KIDS GIRL|KIDS GIRL|KIDS INFANT|LADIES ETHNIC|LADIES WESTERN|MENS ETHNIC|MENS LOWER|MENS UPPERRule: currentTxn.value<5000&&(currentTxn.basketSumRegex("Division","FOOTWEAR|KIDS BOY|KIDS GIRL|KIDS INFANT|LADIES ETHNIC|LADIES WESTERN|MENS ETHNIC|MENS LOWER|MENS UPPER"))>2999 |



## basketQty

Profile: Current Transaction (currentTxn)Data Type: BigDecimalSub-Attributes: Attribute Name and Inventory Attribute ValueDescription: sum of quantity of all line items which are matching input inventory attribute and their inventory attribute value exactly matches with input attribute value.Syntax: currentTxn.basketQty("Attribute Name","Attribute Value")[OPERATORS][VALUE]Example: currentTxn.basketQty("product","TROUSER")>=2

| Example: Write an expression to check if the count of product in the inventory is from attribute name : company_code and attribute value is PETRON, is greater than 6. |

| --- |

| Profile: currentTxn()Attribute: basketQty()Sub-Attribute: Attribute Name: Company_code and Inventory Attribute Value: PetronExample: currentTxn.basketQty(“company_code”:”PETRON”)>6 |



## basketQtyRegex

Profile: Current Transaction (currentTxn)Data Type: BigDecimalSub-Attributes:Attribute Name and Inventory Attribute Value Regex.Description:sum of quantity of all line items which are matching input inventory attribute and their inventory attribute value matches with input regex.Syntax: currentTxn.basketQtyRegex("Attribute Name","Attribute Value Regex")[OPERATORS][VALUE]Example: currentTxn.basketQtyRegex("product","TR.*?")>=2

| Example: Write an expression to check if the count of product in the inventory is from attribute name : company_code and attribute value is SHIRT and SHORTS, is greater than 7. |

| --- |

| Profile: currentTxn()Attribute: basketQty()Sub-Attribute: Attribute Name: Company_code and Inventory Attribute Value: Shirts and Shorts.Example: currentTxn.basketQty(“company_code”:”SH.*”)>6 |



## basketCount

Profile: Current Transaction (currentTxn)Data Type:BigDecimalMeaning:count of line items from request payload which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value.Sub-Attributes: Attribute name and Attribute valueSyntax:currentTxn.basketCount(“Attribute Name”,”Attribute Value”)Example: currentTxn.basketCount(“Brand”,”Puma”)

| Example: Write a condition to check if the count of PUMA shoes in the transaction is equal to the total basket Size. |

| --- |

| Profile: current Transaction (currentTxn)Attribute: basketCountSubAttribute Name: PUMASubAttribute Value: ShoesCondition2:Profile: currentTransactionAttribute: basketSizeRule: currentTxn.basketCount(“PUMA”,”Shoes”) == currentTxn.basketSize |



| Example: Write a condition to check that the basket contains at least one product of “Trouser_AW15” from “Product” Attribute and slab Number is greater than 1. |

| --- |

| Rule: currentTxn.basketCount("product","Trouser_AW15")>=1&&(currentCustomer.slabNumber>1) |



## basketIncludes

Profile: Current Transaction (currentTxn)Data Type: BigDecimalOutput Type:BooleanMeaning:return true if any line item matches input inventory attribute and their inventory attribute value matches exactly with input attribute value, basically it returns true if the line item contains a particular Product.Sub-Attributes:Inventory Attribute Name and Inventory Attribute Value.Syntax: currentTxn.basketIncludes(“Attribute Name”,”Attribute Value”)Example:currentTxn.basketIncludes(“Brand”,”Puma”)

| Example 1: Let’s say a transaction bill contains 3 items from a particular brand. For example a Tshirt, shoes and Cap from Sports Brand “Adidas”. Now we need to write a rule to check if the current Transaction bill contains the shoes from Adidas or not. |

| --- |

| Condition:Profile: current Transaction (currentTxn)Attribute: basketIncludesSubAttribute Name: AdidasSubAttribute Value: ShoesRule: currentCustomer.basketIncludes(“Attribute Name”,”Attribute Value”)Example: currentCustomer.basketIncludes(“Adidas”,”Shoes”) |



| Example 2: Write a rule to check if the basket contains the product of a specific product code261010009/ 261010010 and excludes 261010006. |

| --- |

| (currentTxn.basketIncludes("MC_CODE","261010009")||currentTxn.basketIncludes("MC_CODE","261010010"))&&(currentTxn.basketExcludes("MC_CODE","261010006")) |



| Example 3: Write a rule to check if the basket Includes “Shirts” and excludes “Women Trousers” from the inventory attribute name “Product” |

| --- |

| currentTxn.basketIncludes("PRODUCT","Shirts")&&(currentTxn.basketExcludes("PRODUCT","WOMEN TROUSERS")) |



## basketExcludes

Profile: Current Transaction (currentTxns)Data Type:BigDecimalOutput Type:BooleanMeaning:return false if any lineitem matches input inventory attribute and their inventory attribute value matches with input regex or the bill does not include products whose item attribute does not match the given regular expression it returns False.Sub-Attributes:Inventory Attribute Name and Inventory Attribute Value.Syntax:currentTxn.basketExcludes(“Attribute Name”,”Attribute Value”)Example:currentTxn.basketExcludes("Jeans","Levis002")

| Example 1: Write a rule to check if the basket contains the product of a specific product code261010009/ 261010010 and excludes 261010006. |

| --- |

| (currentTxn.basketIncludes("MC_CODE","261010009")||currentTxn.basketIncludes("MC_CODE","261010010"))&&(currentTxn.basketExcludes("MC_CODE","261010006") |



| Example2: Write a condition where the current Customer belongs to Adventure-seeker cluster from behavioral segments  and current transaction basket excludes Nike shoes and current transaction value is less than 5000. |

| --- |

| Rule: Condition1 AND Condition2 AND Condition3(currentCustomer.clusterValueIncludes("Behavioral Segment","Adventure-seeker"))&&(currentTxn.basketExcludes("nike","shoes"))&&(currentTxn.value<5000) |



## basketSumIf

Profile: Current Transaction (currentTxn)Data Type:BigDecimal

Meaning: Returns the sum of the amount of line items (in basket) that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket. For example, sum of line items amount in the basket whose quantity is more than 2.

Sub-Attributes:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE.

Supported Operators:GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO

Syntax: currentCustomer.basketSumIf(“{Sub-Attribute}”, “{expression}”,"{value}")[operator]{value})Example : currentTxn.basketSumIf("DISCOUNT","GREATER_THAN","10")>4

Examples of Rules for basketSumIf() Attribute.

| Profile | Attribute | Sub-Attribute | Operator | Expression and Example |

| --- | --- | --- | --- | --- |

| currentTxn | basketSumif() | AMOUNT | GREATER_THAN | (currentTxn.basketSumIf("AMOUNT","GREATER_THAN","1000")>5000)) |

| currentTxn | basketSumif() | DISCOUNT | LESS_THAN | (currentTxn.basketSumIf("DISCOUNT","LESS_THAN","10")>90)) |

| currentTxn | basketSumif() | QUANTITY | LESS_THAN_EQUALS_TO | (currentTxn.basketSumIf("QUANTITY","LESS_THAN_EQUALS_TO","10")>3)) |

| currentTxn | basketSumif() | RATE | GREATER_THAN_EQUALS_TO | (currentTxn.basketSumIf("RATE","GREATER_THAN_EQUALS_TO","500")>7)) |

| currentTxn | basketSumif() | VALUE | EQUALS_TO | (currentTxn.basketSumIf("VALUE","EQUALS_TO","200")>400)) |



## basketCountIf

Profile: Current Transaction (currentTxn)Data Type:BigDecimal

Meaning:Returns the count of line items of the basket that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket.

Sub-Attributes:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE.Supported EXPRESSION:GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO

Syntax:currentTxn.basketCountIf(“{parameter}”, “{expression}”,"{value}")[operator]{value})Example :- currentTxn.basketCountIf("DISCOUNT","GREATER_THAN","10")<5

| Profile | Attribute | Sub-Attribute | Operator | Expression and Example |

| --- | --- | --- | --- | --- |

| currentTxn | basketCountif() | AMOUNT | GREATER_THAN | (currentTxn.basketCountIf("AMOUNT","GREATER_THAN","1000")>5)) |

| currentTxn | basketCountif() | DISCOUNT | LESS_THAN | (currentTxn.basketCountIf("DISCOUNT","LESS_THAN","10")>9)) |

| currentTxn | basketCountif() | QUANTITY | LESS_THAN_EQUALS_TO | (currentTxn.basketCountIf("QUANTITY","LESS_THAN_EQUALS_TO","10")>4)) |

| currentTxn | basketCountif() | RATE | GREATER_THAN_EQUALS_TO | (currentTxn.basketCountIf("RATE","GREATER_THAN_EQUALS_TO","500")>4)) |

| currentTxn | basketCountif() | VALUE | EQUALS_TO | (currentTxn.basketCountIf("VALUE","EQUALS_TO","200")>3)) |



## basketQtyIf

Profile: Current Transaction (currentTxn)Data Type: BigDecimalMeaning:Return the sum of quantities of qualifying line items in the basket. The qualifying condition could be on the amount, discount, quantity, rate, or value of the line item.For example,quantity of all line items in the basket whose discount is less or equals to $10.currentTxn.basketQtyIf("DISCOUNT","LESS_THAN_EQUALS_TO","10")>20

Sub-Attributes:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE.Supported EXPRESSION:GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO

Syntax: currentTxn.basketCountIf(“{parameter}”, “{expression}”,"{value}")[operator]{value})Example :- currentTxn.basketCountIf("DISCOUNT","GREATER_THAN","10")<5

| Profile | Attribute | Sub-Attribute | Operator | Expression and Example |

| --- | --- | --- | --- | --- |

| currentTxn | basketQtyif() | AMOUNT | GREATER_THAN | (currentTxn.basketQtyIf("AMOUNT","GREATER_THAN","1000")>5)) |

| currentTxn | basketQtyif() | DISCOUNT | LESS_THAN | (currentTxn.basketQtyIf("DISCOUNT","LESS_THAN","10")>9)) |

| currentTxn | basketQtyif() | QUANTITY | LESS_THAN_EQUALS_TO | (currentTxn.basketQtyIf("QUANTITY","LESS_THAN_EQUALS_TO","10")>4)) |

| currentTxn | basketQtyif() | RATE | GREATER_THAN_EQUALS_TO | (currentTxn.basketQtyIf("RATE","GREATER_THAN_EQUALS_TO","500")>4)) |

| currentTxn | basketQtyif() | VALUE | EQUALS_TO | (currentTxn.basketQtyIf("VALUE","EQUALS_TO","200")>3)) |



## basketSumGross

Profile: Current Transaction (currentTxn)Data Type: BigDecimalMeaning: Returns the sum of the gross amount of each line item in a basket whose attribute name matches with a specific value. Supported attribute names: product name, short description, SKU number, category, and subcategory.Standard expression: currentTxn.basketSumGross{("[Attribute Name]","[Inventory Value]")[Operator][Value]}

| Write an expression If the total gross amount of line items in the basket with attribute name value is "demoname", exceeds 2000, then execute a specific action. |

| --- |

| currentTxn.basketSumGross("name","demoname")>2000 |



## basketSumRegexGross

Profile: Current Transaction (currentTxn)Data Type: BooleanMeaning:Returns the sum of gross amount of each line item in the basket whose product attribute values match the given regular expression.

Standard expression: currentTxn.basketSumRegexGross{("[Attribute Name]","[Attribute Regex]") [Operator] [Value]}

| Example: If the sum of the gross amount of line items of the basket, whose attribute name (brand) starts with purple, exceeds 5000 execute a specific action. |

| --- |

| Expression: currentTxn.basketSumRegexGross("brand","^purple")>5000 |



## basketSumRegexBrandGross

Profile: Current Transaction (currentTxn)Data Type:BooleanMeaning:Returns the sum of the gross amount of each line item in the basket whose brand name matches with the given regular expression.

Standard expression:currentTxn.basketSumRegexCategoryGross{("[Regex]")[Operator][Value]}

| Example:If the sum of the gross amount of line items of the basket with brand names containing “demo” exceeds 1000 execute a specific action. |

| --- |

| currentTxn.basketSumRegexCategoryGross("demo*")>1000 |



## basketSize

Profile: currentTxnAttribute :basketSizeType: StringMeaning: Total number of items in the bill - irrespective of quantity of each item or number of line items passed in payloadSub-Attribute: NAOperators:<,>,<=,>=,==Syntax: currentTxn.basketSize.[Operators][Value]Example: currentTxn.basketSize >= 10.

| Example: write a rule for a current customer to check if the customer is a part of “CrownFeb2019” cluster and speaks English (sub segment) and current transaction done by the customer has line item count is less than 10. |

| --- |

| Rule: condition 1 && condition 2currentCustomer.clusterValueIncludes("CrownFeb2019","English")&&(currentTxn.basketSize<10) |



Updatedover 1 year ago
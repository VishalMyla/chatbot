# Profiles & attributes

## Expressions on customer profile (currentCustomer)

This profile consists of attributes related to fetching customers' profile information and loyalty details as listed in the table below. Use this profile to execute actions based on loyalty information and profile details of customers when they make transactions.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | DESCRIPTION | SYNTAX AND EXAMPLE | DETAILED DOCUMENTATION |

| --- | --- | --- | --- | --- | --- |

| name | Customer's full nameData Type : StringMeaning : Customer's full namename = firstName + "" "" + lastName | NA | NA | Syntax:[currentCustomer.name == "customer full name"]Example: currentCustomer.name == "Shreya Badia"currentCustomer.name.contains("santhosh kumar") | Learn More |

| firstname | Customer's first nameData Type : StringCustomer's first namename = firstName | NA | NA | Syntax: [currentCustomer.name == "customer first name"]Example: currentCustomer.firstname=="prakhar"currentCustomer.firstname=="Raj"currentCustomer.firstname.matches("santhosh") | Learn More |

| lastname | Customer's last nameData Type : StringCustomer's last namename = "" "" + lastName | NA | NA | Syntax: [currentCustomer.name == "customer Last name"]currentCustomer.lastname=="verma"currentCustomer.lastname.matches("kumar") | Learn More |

| avgBasketSize | Data type : Int (Integer)The ratio of total items purchased to the number of transactions of a customer basically on an average how many items are there in a customer's Cart.avgBasketSize = (Sum of total lineitems)/Number of Transaction (aka Count of transaction) or sum of (number of lineitems) in all bills / number of bill | NA | NA | Syntax: [currentCustomer.avgBasketSize (opeprators like <.>,==,>=,<=) Value]Example: currentCustomer.avgBasketSize>1 | Learn More |

| avgSpendPerVisit | Return Data Type: BigDecimalAttribute Label: Avg. Spend per VisitMeaning: Average purchases amount of a customer per visit.AvgSpendPerVisit = lifetimePurchase / numberOfVisits | NA | NA | Syntax: [currentCustomer.avgSpendPerVisit(operators like <.>,==,>=,<=) Value ]Example: currentCustomer.avgBasketSize==10&&(currentCustomer.avgSpendPerVisit==10) | Learn More |

| clusterValueIncludes() | return data type: BooleanAttribute Label: User Segment (cluster name)and sub-segmentsMeaning: To check customers of a particular cluster (segment) aka checks If customer belongs to particular segment | clusterValueIncludes(String clusterName, String clusterValue) | cluster Name: Name of the cluster and Sub Segment/cluster Value of the cluster where the current customer might belongs to. | Syntax: currentCustomer.clusterValueIncludes("cluster name","cluster sub components")Example : currentCustomer.clusterValueIncludes("Behavioral Segment","Adventure-seeker") | Learn More |

| clusterValueExcludes() | return data type: BooleanAttribute Label: User SegmentMeaning: To check customers who are not part of a particular cluster or returns False If the current customer is not a part of the cluster passed in the attribute and sub-attribute. | clusterValueExcludes(String clusterName, String clusterValue) | cluster Name: Name of the cluster and Sub Segment/cluster Value of the cluster where the current customer might belongs to. | Syntax: currentCustomer.clusterValueExcludes("cluster name","cluster sub components")Example: currentCustomer.clusterValueExcludes("Behavioral Segment","Adventure-seeker") | Learn More |

| currentPoints | Data type: BigDecimalMeaning: customer's current redeemable points.current points = overall earned points - overall returned points - overall redeemed points - overall expired points | Values like isNull, isNotNull, Interval . | isNull - checks if the value is Null i.e. the value was not passed from source isNotNull - checks if the the Value is NOT Null. | Syntax: [currentCustomer.currentPoints (Operators like >,<, ==, >=, <= VALUE)]Example : currentCustomer.currentPoints>500 | Learn More |

| currentNonRedeemablePoints | Data type: BigDecimalcustomer's current promised pointscurrent promised points = overall earned points - overall returned points - overall expired points | Values like isNull, isNotNull, Interval . | isNull - checks if the value is Null i.e. the value was not passed from source isNotNull - checks if the the Value is NOT Null. |  |  |

| customFieldValueExcludes() | Data Type: BooleanMeaning: Returns False If customer has some custom field present with particular value.Example: currentCustomer.customFieldValueExcludes(""area"",""XYZ""), where area is a custom field and XYZ id one of the value of the Custom Field. | customFieldValueExcludes("Field","Value")Sub-Attributes: Custom field name and Custom field value. | Custom Field Name: The name of the custom Field generated.Custom Field Value: The value of the custom field passed as a sub-attribute. | currentCustomer.customFieldValueExcludes(String clusterName, String clusterValue)Example: currentCustomer.customFieldValueExcludes("gender","Male") | Learn More |

| customFieldValueIncludes() | Data Type: BooleanMeaning: checks If customer has some custom field present with particular value.Example:currentCustomer.customFieldValueIncludes(""area"",""XYZ""), where area is a custom field and XYZ id one of the value of the Custom Field. | customFieldValueIncludes("Field","Value")Sub-Attributes: Custom field name and Custom field value. | Custom Field Name: The name of the custom Field generated.Custom Field Value: The value of the custom field passed as a sub-attribute. | currentCustomer.customFieldValueIncludes(String clusterName, String clusterValue)Example: currentCustomer.customFieldValueIncludes("gender","Male") | Learn More |

| email | Data type: StringMeaning: Customer's email ID or checks which organization is in the email of Customer. | NA | NA | Syntax: currentCustomer.email.matched(""customer email id"") Or currentCustomer.email.contains(""@companyX.com"")Example: currentCustomer.email.matches("[email protected]") | Learn More |

| externalId | Data type: StringCustomer's external id : Let's say to issue coupons to customers whose external ID contains a certain serial number (say 1234), use the following condition: customerCustomer.externalId.contains("1234") | NA | NA | Syntax: currentCustomer.externalId.matches("....")currentCustomer.externalId.contains(".....")Example: customerCustomer.externalId.contains("1234") | Learn More |

| initialCurrentPoints | Data Type: BigDecimalMeaning: customer's current redeemable points before current event or Active points of a customer before evaluating the eventinitial current points = overall earned points (before evaluating a event) - overall returned points(before evaluating a event) - overall redeemed points(before evaluating a event) - overall expired points(before evaluating a event) | NA | NA | Syntax: [currentCustomer.initialCurrentPoints (Operators like >,<,==,>=,<=,!=) Value]Example: currentCustomer.initialCurrentPoints > 500 orExample -> currentCustomer.initialCurrentPoints != currentCustomer.currentPoints | Learn More |

| initialLifetimePoints | Data Type: BigDecimalMeaning: customer's lifetime redeemable points before current eventinitialLifetimePoints = customer lifetime earned redeemable points - returned points since start(before evaluating an event) | NA | NA | Syntax: [currentCustomer.initialLifetimePoints (Operators like >,<,==,>=,<=,!=) Value]Example : Suppose you want to issue coupons to those customers whose lifetime purchase is greater than 5000. Then use the following condition: currentCustomer.lifetimePurchase>5000 | Learn More |

| initialSlabName | Return type: Booleandata type: stringCustomer's tier name before evaluating the event or before current event | NA | NA | Syntax: currentCustomer.initialSlabName("SLAB NAME")Example ->(currentCustomer.initialSlabName=="Normal"||currentCustomer.initialSlabName=="Silver"||currentCustomer.initialSlabName=="Bronze"||currentCustomer.initialSlabName=="Gold") | Learn More |

| initialSlabNumber | Data type: IntCustomer's tier number before evaluating the event | NA | NA | Syntax: [currentCustomer.initialSlabNumber(Operators like >,<,==,>=,<=,!=) Value ]Example :- lets say you want to give reward points only when current slab number is greater than initial slab number and current Slab Number is equals 3 then  ==> ((currentCustomer.slabNumber > currentCustomer.initialSlabNumber) && (currentCustomer.slabNumber == 3)) | Learn More |

| joinDate | Data Type: DateRegistration date of a customer | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and yearFor examples on using date formats, see the Date Format section on Using Operators in Rule Expressions |  | Example :currentTxn.date.dateDiff(currentCustomer.joinDate)<=7&&(currentTxn.value>=250) | Learn More |

| lifetimePoints | Data Type: BigDecimalTotal points earned by a customer from the date of registrationlifetime points = overall redeemable points earned - overall returned points | NA | NA | Syntax: [currentCustomer.lifetimePoints(Operators like >,<,==,>=,<=,!=) Value]Example :- currentCustomer.initialLifetimePoints<500&&(currentCustomer.lifetimePoints>=500Example:- currentCustomer.lifetimePoints>30 | Learn More |

| lifetimeNonRedeemablePoints | Data Type: BigDecimalcustomer earned promised points - returned points since startlifetime non redeemable points = overall non redeemable  points earned - overall non redeemable returned points | NA | NA | Syntax: [currentCustomer.lifetimeNonRedeemablePoints.(Operators like >,<,==,>=,<=,!=) Value]Example:- currentCustomer.lifetimeNonRedeemablePoints>30 | Learn More |

| lifetimePurchases | data type: BigDecimalcustomer's purchase since start including current transaction's purchaselifetime purchase = sum of all purchase - sum of refund amount | NA | NA | Syntax: currentCustomer.lifetimePurchase[Operators][value]Example: currentCustomer.lifetimePurchase<=1000 | Learn More |

| mobile | Data Type : IntegeMobile number of a customer(Passed in the request Payload) | NA | NA |  | Learn More |

| numberOfTxns | Data type: intTotal number of transactions made by a customer from the date of registration | NA | NA |  | Learn More |

| numberOfTxnsToday | Data type : intNumber of transactions made by a customer the current day | NA | NA | Syntax: currentCustomer.numberofTxnsToday (Operators like >,<,>=,<=,==) ValueExample: (currentCustomer.numberOfTxnsToday == 1)Example: currentCustomer.slabNumber==5&&(currentCustomer.numberOfVisits==1)&&(currentCustomer.numberOfTxnsToday==1) | Learn More |

| numberOfVisits | Data type : intnumber of unique days when customer made transactionTotal number of times a loyalty customer visited your stores (made transactions in different days lets say customer visited the store 7 times in a week but made a transaction in 5 days so total visits == 5) | NA | NA | Syntax: currentCustomer.numberOfVisits (Operators like >,<,>=,<=,==) Value(Example: currentTxn.basketIncludes("RetekClass","T Shirt")&&(currentTxn.value>3000)&&(currentCustomer.numberOfVisits==1) | Learn More |

| SlabName | Data type: StringName of the current loyalty tier of a customer | NA | NA | Syntax: currentCustomer.SlabName (Operators like ==, matches, contains)"SLAB NAME"Example : currentTxn.value>100&&(currentCustomer.slabName.matches("SILVER))currentCustomer.slabName=="Priviledged" | Learn More |

| SlabNumber | Data Type: IntegerSerial number of the current tier | NA | NA | Syntax: currentCustomer.SlabNumber(Operators =,>,<,>=,<=)ValueExample : currentCustomer.SlabNumber >4 | Learn More |

| isLoyal | Output type: BooleanChecks if the current customer is registered in the brand's loyalty program | NA | NA | Example: currentCustomer.isLoyal==true | Learn More |

| hasInstoreProfile | Output type: BooleanChecks if the current customer has InStore profile | NA | NA | Example: currentCustomer.hasInstoreProfile==true | Learn More |

| hasWeChatProfile | Output type: BooleanChecks if the current customer has WeChat profile | NA | NA | Example: currentCustomer.hasWeChatProfile==true | Learn More |

| doesProfileExists | Output type: BooleanChecks if a specific profile | NA | NA | Example: currentCustomer.doesProfileExists==true | Learn More |



[Learn More](/docs/currentcustomer-namefirst-namelast-name-expressions#attribute-name)

[Learn More](/docs/currentcustomer-namefirst-namelast-name-expressions#attribute-name)

[Learn More](/docs/currentcustomer-namefirst-namelast-name-expressions#attribute-name)

[Learn More](/docs/attributes-kpis#1-avgbasketsize)

[Learn More](/docs/attributes-kpis#2-avgspendpervisit)

[Learn More](/docs/user-segment-ei-attributes)

[Learn More](/docs/user-segment-ei-attributes)

[Learn More](/docs/attributes-on-points#attribute-currentpoints)

[Learn More](/docs/custom-field#customfieldvalueexcludes)

[Learn More](/docs/custom-field)

[[email protected]](/cdn-cgi/l/email-protection#91e2f0ffe5d1f2f0e1f8fdfdf0e3e8e5f4f2f9bff2fefc)

[Learn More](/docs/currentcustomer-attributes#email)

[Learn More](/docs/currentcustomer-attributes#external-id-externalid)

[Learn More](/docs/attributes-on-points#attribute-initialcurrentpoints)

[Learn More](/docs/attributes-on-points#intiallifetimepoints)

[Learn More](/docs/slab-attributes-for-currentcustomer-profile#5-attributes-based-on-slab-information)

[Learn More](/docs/slab-attributes-for-currentcustomer-profile#5-attributes-based-on-slab-information)

[Learn More](/docs/currentcustomer-attributes#joindate)

[Learn More](/docs/attributes-on-points#lifetimepoints)

[Learn More](/docs/attributes-on-points#lifetimenonredeemablepoints)

[Learn More](/docs/lifetime-purchase)

[Learn More](/docs/currentcustomer-attributes#mobile)

[Learn More](/docs/attributes-kpis#3-numberoftxns)

[Learn More](/docs/attributes-kpis#4-numberoftxnstoday)

[Learn More](/docs/attributes-kpis#5-numberofvisits)

[Learn More](/docs/attribute-slab-information#slabname)

[Learn More](/docs/attribute-slab-information#slabnumber)

[Learn More](/docs/currentcustomer-attributes#isloyal)

[Learn More](/docs/currentcustomer-attributes#hasinstoreprofile)

[Learn More](/docs/currentcustomer-attributes#haswechatprofile)

## Expressions on current transaction profile (currentTxn)

The currentTxn profile returns the details of a transaction. Use this profile to write rules on transactions, basket size, custom fields, and so on. Refer to the table below for all the supported attributes of customerTxn.Learn More

> 📘Value = Gross amount (rate*quantity)Rate = Gross price of a line itemAmount = Value-discoun

## 📘

- Value = Gross amount (rate*quantity)

- Rate = Gross price of a line item

- Amount = Value-discoun

| ATTRIBUTE | DESCRIPTION OF ATTRIBUTE | SUB ATTRIBUTES | DESCRIPTION OF SUB-ATTRIBUTE | SYNTAX AND EXAMPLE | DETAILED DOCUMENTATION |

| --- | --- | --- | --- | --- | --- |

| number | Transaction number of the current transaction | NA | NA |  | Learn More |

| basketSum() | Type: BigDecimalMeaning: sum of amount of all lineitems which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value | currentTxn.basketSum("Attribute Name","Inventory Value") | Attribute Name : The custom Field NameAttribute Value: Custom Field Value | Example currentTxn.basketSum("company_code","PETRON"), this will give the sum of amount of all the petron products of company_code inventory. | Learn More |

| basketSumRegex() | Data type : BigDecimalMeaning:- sum of amount of all lineitems which are matching input inventory attribute and their inventory attribute value matches with input regex.example :- currentTxn.basketSumRegex("company_code","PET.*") | currentTxn.basketSumRegex("Attribute Name","Attribute  Regex") | 1.Attribute Name : The custom Field Name.2. Sub Attribute Value Regex: Regex to check the match with the Value. | currentTxn.basketSumRegex("company_code","PET.*") | Learn More |

| basketQtyRegex() | Type : BigDecimalMeaning:- sum of quantity of all lineitems which are matching input inventory attribute and their inventory attribute value matches with input regexExample :- currentTxn.basketQtyRegex(""company_code"",""PET.*"") | currentTxn.basketQtyRegex("Attribute Name","Attribute Field Value Regex") | 1. Sub Attribute Name : The custom Field Name.2. Sub Attribute Value Regex: Regex to check the match with the Value. | Syntax: currentTxn.basketQtyRegex("Attribute Name","Attribute Field Value Regex")Example: currentTxn.basketQtyRegex("company_code","PET.*") | Learn More |

| basketCount() | Type :- intMeaning :- count of lineitems from request payload which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value.Example :- currentTxn.basketCount(""company_code"",""PETRON"") | currentTxn.basketCount("Attribute Name","Attribute Field Value") | 1. Sub Attribute Name : The custom Field Name2. Sub Attribute Value: Value of the sub-Attribute. | Example: currentTxn.basketCount("Dvs","DVS_Flag")>1 | Learn More |

| basketCountRegex() | Type:- intMeaning:- count of lineitems from request payload which are matching input inventory attribute and their inventory attribute value matches with input regexcurrentTxn.basketCountRegex(""company_code"",""PET.*"") | Pass attribute and regex of the attribute that you want to validatecurrentTxn.basketCountRegex("Inventory Attribute","Regex") | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value Regex: Regex to check the value match. | Syntax: currentTxn.basketCountRegex("Inventory Attribute","Regex")Example: currentTxn.basketCountRegex(""company_code"",""PET.*"") |  |

| basketIncludes() | Type :- BooleanMeaning: return true if any lineitem matches input inventory attribute and their inventory attribute value matches exactly with input attribute value | Pass attribute and value pair.currentTxn.basketIncludes("Attribute Name","Attribute Value") | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value: Inventory attribute value | Syntax: currentTxn.basketIncludes("Attribute Name","Attribute Value")Example : currentTxn.basketIncludes(""company_code"",""PETRON"") | Learn More |

| basketExcludes() | Type :- BooleanMeaning:- return false if any lineitem matches input inventory attribute and their inventory attribute value matches exactly with input attribute value | Pass attribute and value pair.currentTxn.basketExcludes("Attribute Name","Attribute Value" | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value: Inventory attribute value | Syntax: currentTxn.basketExcludes("Attribute Name","Attribute Value")Example: currentTxn.basketExcludes(""company_code"",""PETRON"") | Learn More |

| basketIncludesRegex() | Type:- BooleanMeaning:- return true if any lineitem matches input inventory attribute and their inventory attribute value matches with input regex. | Pass attribute and value pair.currentTxn.basketIncludesRegex("Attribute Name","Attribute Regex") | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value Regex: Regex to check the value match. | Syntax: currentTxn.basketIncludesRegex("Attribute Name","Attribute Regex")Example:- currentTxn.basketIncludesRegex(""company_code"",""PET.*"") |  |

| basketExcludesRegex() | Type:- BooIeanMeaning:-return false if any lineitem matches input inventory attribute and their inventory attribute value matches with input regex or the bill does not include products whose item attribute does not match the given regular expression it returns False | Pass attribute and value pair.currentTxn.basketExcludesRegex("Inventory Attribute Name","Inventory Attribute value regex) | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value Regex: Regex to check the value match. | Syntax: currentTxn.basketExcludesRegex("Inventory Attribute Name","Inventory Attribute value regex)Example: currentTxn.basketExcludes("Jeans","XXX") |  |

| basketSumIf | "Type : BooleanMeaning:-Returns the sum of amount of line items (in basket) that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket. For example, sum of line items amount in the basket whose quantity is more than 2.Example : currentTxn.basketSumIf(""DISCOUNT"",""GREATER_THAN"",""10"")currentTxn.basketSumIf(""RATE"",""GREATER_THAN_EQUAL_TO"",""60"")" | Supported Sub-Attribute:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE | Supported parameters:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUESupported Operators:GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO | Standard expression:basketSumIf(“{parameter}”, “{expression}”,"{value}")[operator]{value})Example: From the basket items, calculate the total amount of line items whose quantity is greater than or equal to 3. If this value is greater than 100, then execute a specific action.currentTxn.basketSumIf("QUANTITY","GREATER_THAN_EQUAL_TO","3")>100 | Learn More |

| basketCountIf | type:- BigDecimalMeaning :-Returns the count of line items of the basket that satisfies a specific condition. You can define condition based on the amount, discount, quantity, rate, or value of line items in the basket.Example :- currentTxn.basketCountIf("DISCOUNT","GREATER_THAN","10") | Supported Sub-Attribute:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE | Supported parameters:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUESupported Operators:GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO | expression:basketCountIf(“{parameter}”, “{expression}”,"{value}")[operator]{value})Example: Count of line items from the basket whose amount is less than 50. If this count exceeds 3, then execute an action.currentTxn.basketCountf("AMOUNT","LESS_THAN","50")>3 | Learn More |

| basketQtyIf | type:- BigDecimalMeaning:-Total number of items in the bill - irrespective of quantity of each item or we can say that its a number of lineitems passed in payloadcurrentTxn.basketQtyIf("DISCOUNT", "LESS_THAN", "10") | Supported Sub-Attribute:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE | Supported parameters:AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUESupported Operators:GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO | Standard expression:basketQtyIf(“{attribute}”, “{expression}”,"{value}")[operator]{value})Example : Calculate the sum of the quantity of all line items in the basket whose discount value is $10 or above. If the quantity of those line items is more than 20, execute an  action.currentTxn.basketQtyIf("DISCOUNT","LESS_THAN_EQUALS_TO","10")>20 | Learn More |

| basketSize | Type: IntMeaning:number of lineitems passed in payload or Total number of items in the bill - irrespective of quantity of each item | NA | NA | currentTxn.basketSize<10 | Learn More |

| basketSumGross | Type:- BigDecimalMeaning:-sum of gross amount(value) of all lineitems which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value  Supported attribute names: product name, short description, SKU number, category, and subcategory.Example :- currentTxn.basketSumGross("company_code","PETRON") | Sub Attributes: Inventory Attribute Name and Inventory Attribute Value. | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value: Inventory attribute value | Standard expression:currentTxn.basketSumGross{("[Attribute Name]","[Inventory Value]")[Operator][Value]}Sample expression: If the total gross amount of line items in the basket with attribute name value is "demoname", exceeds 2000, then execute a specific action.currentTxn.basketSumGross("name","demoname")>2000 | Learn More |

| basketSumRegexGross | Type:- BigDecimalMeaning:-sum of gross amount(value) of all lineitems which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value or Returns the sum of gross amount of each line item in the basket whose product attribute values match the given regular expression.Example :- currentTxn.basketSumGross("company_code","PETRON") |  | 1. Sub Attribute Name : The Inventory Attribute name.2. Sub Attribute Value Regex: Regex to check the value match. | Standard expression:currentTxn.basketSumRegexGross{("[Attribute Name]","[Attribute Regex]")[Operator][Value]}Sample expression: If the sum of gross amount of line items of the basket, whose attribute name (brand) starts with purple, exceeds 5000 execute a specific action.currentTxn.basketSumRegexGross("brand","^purple")>5000 | Learn More |

| basketSumRegexBrandGross | Returns the sum of the gross amount of each line item in the basket whose brand name matches with the given the regular expression. Calculates the total gross amount of basket items whose brand name contains xyz.Example: currentTxn.basketSumGrossRegex("company_code","PET.*") | Only one sub-Attribute i.e the Regex. | Regex: Brand name Regex. | Standard expression:currentTxn.basketSumRegexCategoryGross{("[Regex]")[Operator][Value]}Sample expression: If the sum of gross amount of line items of the basket with brand names containing 'demo', exceeds 1000 execute a specific action.currentTxn.basketSumRegexCategoryGross("demo*")>1000 | Learn More |

| basketSumRegexCategoryGross | Returns the total gross amount of line items in the basket whose category names matches with the given regular expression.currentTxn.basketSumRegexCategoryGross{("[Regex]")[Operator][Value]}Example expression: currentTxn.basketSumRegexCategoryGross("^shirt")>1000 If the sum of gross amount of line items of the basket whose category names that start with shirt, exceeds 1000 execute a specific actio | Only one sub-Attribute i.e the Regex. | Regex: Product Category Regex | Standard expression:currentTxn.basketSumRegexCategoryGross{("[Regex]")[Operator][Value]}Sample expression:  If the sum of gross amount of line items of the basket whose category names that start with shirt, exceeds 1000 execute a specific action.currentTxn.basketSumRegexCategoryGross("^shirt")>1000 |  |

| customFieldValueExcludes | Type: BooleanMeaning:returns False if input custom field value matches with bill's custom fieldsExample Expression : currentTxn.customFieldValueExcludes("bank","SBI") | customFieldValueExcludes("Field","Value")Sub-Attribute: Custom-Field Name and Custom Field Value | Sub-Attribute: Custom-Field NAME and Custom Field Value | Expression: currentTxn.customFieldValueExcludes(“Brand”,”Puma”) | Learn More |

| customFieldValueIncludes() | Type: BooleanMeaning:returns true if input custom field value matches with bill's custom fields or Check if customer's transaction level custom field value includes the given valueExample Expression : currentTxn.customFieldValueIncludes("bank","SBI") | customFieldValueIncludes("Field","Value")Sub-Attribute: Custom-Field NAME and Custom Field Value | Sub-Attribute: Custom-Field NAME and Custom Field Value | Expression: currentTxn.customFieldValueIncludes(“Brand”,”Puma”) | Learn More |

| discount | Type: BigDecimalDiscount availed for a transaction | NA | NA | currentTxn.discount>200 | Learn More |

| date | Data Type : DateMeaning:Date of current transaction under evaluation | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year | Link | Example of year Attribute :returns the year from the date e.g.currentTxn.date.year( )>=1981 | Learn More |

| points | Type: BigDecimalMeaning :Total points issued for a transaction; (Points = Promoised points + redeemable points) | NA | NA |  |  |

| totalQty | Type: IntegerTotal quantity of all items in a transaction. For instance, if 2 items of a given line item are bought, then the 2 is added to the basket quantity. | NA | NA | Syntax: currentTxn.totalQty[Operator][Value]CcurrentTxn.totalQty>4 |  |

| value | Total value of the transaction | interval | NA | Syntax: currentTxn[Operator][value]currentTxn.value>8000 | [Learn More](https://docs.capillarytech.com/docs/attribute-transaction-valu |

| notes | Transaction level notes specified by the cashier during transaction | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists | NA | currentTxn.notes.exists("Special discount") | Learn More |



[Learn More](/docs/attributes-based-on-customer-identity)

[Learn More](/docs/a#basketsum)

[Learn More](/docs/a#basketsumregex)

[Learn More](/docs/profile-current-transactioncurrenttxn#basketqtyregex)

[Learn More](/docs/a#basketcount)

[Learn More](/docs/a#basketincludes)

[Learn More](/docs/a#basketexcludes)

[Learn More](/docs/a#basketsumif)

[Learn More](/docs/a#basketqtyif)

[Learn More](/docs/a#basketqtyif)

[Learn More](/docs/a#basketsize)

[Learn More](/docs/a#basketsumgross)

[Learn More](/docs/a#basketsumregexgross)

[Learn More](/docs/profile-current-transactioncurrenttxn#basketsumregexbrandgross)

[Learn More](/docs/profile-current-transactioncurrenttxn#customfieldvalueexcludes)

[Learn More](/docs/profile-current-transactioncurrenttxn#customfieldvalueincludes)

[Learn More](/docs/profile-current-transactioncurrenttxn#discount)

[Link](/docs/rule-writing#date-operations)

[Learn More](/docs/attribute-date-transactionpurchase-date)

[https://docs.capillarytech.com/docs/attribute-transaction-valu](/docs/attribute-transaction-valu)

[Learn More](/docs/profile-current-transactioncurrenttxn#attribute--note)

## Current Line Item (currentLineItem)

The currentLineItem profile returns line-items of a current transaction. You can use this profile only on forward cases and when transaction unroll is enabled. Use this profile to check line-item level details of the current transaction as provided in the table below.Learn More

| ATTRIBUTE | DESCRIPTION OF ATTRIBUTE | SUB ATTRIBUTE | DESCRIPTION OF SUB-ATTRIBUTE | SYNTAX AND EXAMPLE | DETAILED DOCUMENTATION |

| --- | --- | --- | --- | --- | --- |

| code | Item code of the line-item as assigned in the inventory | NA | NA | Syntax: currentLineItem.code[Operator][Value]currentLineItem.code!="2"currentLineItem.code.contains("8907411447726") | Learn More |

| description | The description specified for the of the line-item in the inventory | NA | NA | Syntax: currentLineItem.description[Operator][Value]Rule: currentLineItem.description.isNotNull() | Learn More |

| discountPercentage | lineitem discount % = (discount/amount * 100)Meaning: Discount value needs to be passed in api request payloadThe description specified for the line-item in the inventory, passed in the payloads. | NA | NA | Syntax: Syntax: currentLineItem.discountPercentage[OPERATORS][VALUE]Example : currentLineitem.discPercentage>15 | Learn More |

| doesItemMatch() | Check if an item code matches with the given code | doesItemMatch("","") | 1. Attribute Name2. Attribute Value | Syntax: currentLineItem.doesItemMatch(“custom field Name”,”custom field Value”)(currentLineItem.doesItemMatch("BarcodeExclusionNew2020","No")(currentLineItem.doesItemMatch("H2_new","DIS-DISCONTINUE") | Learn More |

| qty | Quantity of a line-item purchased | NA | NA | Syntax: currentLineItem.qty [Operators][VALUE]currentLineItem.qty<6 | Learn More |

| rate | Actual price of a line-item | NA | NA | Syntax: currentLineItem.rate >1000currentLineItem.rate<100000&&(currentLineItem.discount==0) |  |

| value | Selling price of a line-item | NA | NA | Syntax: currentLineItem.value[operator][Value]currentLineItem.value<100000&&(currentLineItem.discount==0) | Learn More |



[Learn More](/docs/profile-current-line-item#1attribute-code)

[Learn More](/docs/profile-current-line-item#2attribute-description)

[Learn More](/docs/profile-current-line-item#3-attribute-discpercentage-line-item-level-discount-percentage)

[Learn More](/docs/profile-current-line-item#4attribute-doesitemmatch)

[Learn More](/docs/profile-current-line-item#5-attribute-qty)

[Learn More](/docs/profile-current-line-item#7-attribute-value)

## Current Tracker Condition (currentTrackerCondition)

This currentTrackerCondition is used to write rules based on the recent tracker condition.Learn More

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | EXAMPLE | Detailed Documentation |

| --- | --- | --- | --- | --- |

| numberOfVisits | returns number of visits tracked by current tracker. works only for customer visit tracker. | NA | currentTrackerCondition.numberOfVisits>5 | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-numberofvisits |

| trackedValue | returns tracked value in the tracker for current event. | NA | currentTrackerCondition.trackedValue>5000 | Learn More |

| trackerConditionName | returns current tracker condition name | NA | currentTrackerCondition.trackerConditionName=="Cond1" | Learn More |

| trackerConditionPeriod | returns tracking period value | NA | currentTrackerCondition.trackerConditionPeriod>15 | Learn More |

| trackerCurrAggr | returns aggregate tracked value in current tracking period for all events including current event | NA | currentTrackerCondition.trackerCurrAggr>5000 | Learn More |

| trackerInitialPrevAggr | returns aggregate tracked value in current tracking period for all events excluding current event | NA | currentTrackerCondition.trackerInitialPrevAggr>4000 | Learn More |

| trackerName | returns tracker name | NA | currentTrackerCondition.trackerName=="Tracker1" | Learn More |

| trackerPrevAggr | returns aggregate tracked value in current tracking period for all events excluding current event | NA | currentTrackerCondition.trackerPrevAggr>4000 |  |



[https://docs.capillarytech.com/docs/profile-currenttracker#attribute-numberofvisits](/docs/profile-currenttracker#attribute-numberofvisits)

[Learn More](/docs/profile-currenttracker#attribute-trackedvalue-tracked-value)

[Learn More](/docs/profile-currenttracker#attribute-trackerconditionname)

[Learn More](/docs/profile-currenttracker#attribute-trackerconditionperiod)

[Learn More](/docs/profile-currenttracker#attribute-trackercurraggr)

[Learn More](/docs/profile-currenttracker#attribute-trackerinitialprevaggr)

[Learn More](/docs/profile-currenttracker#attribute-trackername)

## Current Event (currentEvent)

The current event profile returns the event that is triggered by the event listener, i.e., the event on which the rule is created. The following table consists of the descriptions of all the attributes of currentEvent.

| ATTRIBUTE | DESCRIPTION OF ATTRIBUTE | SUB ATTRIBUTES | Detailed Documentation |

| --- | --- | --- | --- |

| eventType | Name of the event | NAExample:currentEvent.eventType=="TransactionAdd" |  |

| previousCustomFieldValue() | Value of custom field before updating | currentEvent.previousCustomFieldValue("Custom Field Name","Field Value")Example:currentEvent.previousCustomFieldValue("age_group","value") | Learn More |

| currentCustomFieldValue() | Value of custom field after updating | currentEvent.currentCustomFieldValue("Custom Field Name","Field Value")Example:currentEvent.currentCustomFieldValue("age_group","value") | Learn More |

| previousMobile | Customer's mobile number before updating | NA |  |

| previousEmail | Customer's email ID before updating | NA |  |

| previousExternalID | Customer's external ID before updating | NA |  |

| previousName | Customer's full name before updating | NA |  |

| previousFirstName | Customer's first name before updating | NA |  |

| previousLastName | Customer's last name before updating | NA |  |

| currentMobile | Customer's mobile number after updating | NA |  |

| currentEmail | Customer's email id after updating | NA |  |

| currentExternalID | Customer's external id after updating | NA |  |

| currentName | Customer's first name after updating | NA |  |

| currentFirstName | Customer's first name after updating | NA |  |

| currentLastName | Customer's last name after updating | NA |  |

| previousLoyaltyType | Checks the loyalty status of the customer before the current event. Supported only for CustomerUpdate event | Values: LOYALTY/NON_LOYALTYExample:currentEvent.previousLoyaltyType=="LOYALTY" or currentEvent.previousLoyaltyType=="NON_LOYALTY" | Learn More |

| currentLoyaltyType | Checks the current loyalty status of the customer. Supported only for CustomerUpdate event | Values: LOYALTY/NON_LOYALTY | Learn More |

| targetAchieved | Provides the numeric value of the actual achievement of the customer for the given target. | currentEvent.targetAchieved("Target Name") | Learn More |

| targetDefined | Provides the numeric value of the target set by the marketing/org user for that customer. | currentEvent.targetDefined("Target Name") |  |

| targetExists | Checks if a target value exists or set by the marketing user for that customer. | currentEvent.targetExists("Target Name") |  |

| targetGroup | Returns the name of the target group for which the current event is being executed. This is used to target customers in different groups. | currentEvent.targetGroup |  |

| targetPeriod | Returns the name of the target period for which the current event is being executed. This is used to target customers across different groups. | currentEvent.targetPeriod |  |

| isTargetAchievedEvent | Verifies whether a customer has completed the allotted target before the target period ends.Applicable only to Target period elapses event. | currentEvent.isTargetAchievedEvent |  |

| isUnifiedTargetAchievedEvent | Verifies whether the event that arrived to loyalty promotions is a unified target achieved event.Applicable only for target-period elapsed event | currentEvent.isUnifiedTargetAchievedEvent |  |

| isStreakAchievedEvent | Verifies whether the event that arrived at loyalty promotions is a streak-level achieved event.Applicable only for target-period elapsed event | currentEvent.isStreakAchievedEvent |  |

| isSubTargetAchievedEvent | Verifies whether the event that arrived at loyalty promotions is a sub-target achievement by a user.Applicable only for target-periods elapsed event | currentEvent.isSubTargetAchievedEvent |  |



[Learn More](/docs/current-event#attribute-previouscustomfieldvalue)

[Learn More](/docs/current-event#attribute-currenteventcurrentcustomfieldvalue)

[Learn More](/docs/current-event#attribute-previousloyaltytype)

[Learn More](/docs/current-event#attribute-previousloyaltytype)

[Learn More](/docs/current-event#attribute-targetachieved)

## Current Store (currentStore)

The currentStore profile is used to check store level details. You can write rules based on the attributes provided in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | Detailed Document |

| --- | --- | --- | --- |

| code | Unique code of the store | NA | Learn More |

| name | Name of the store | NA |  |



[Learn More](/docs/profile-current-store)

## Tender Profile (tenderProfile)

This tenderProfile is used to write rules based on the payment mode combinations.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | DESCRIPTION OF SUB-ATTRIBUTE | OPERATORS | SYNTAX AND EXAMPLE |

| --- | --- | --- | --- | --- | --- |

| amount | Data Type: BigDecimalThe amount paid for a transaction using the payment mode | NA | NA | > ,<,>=,<=,== | Syntax: tenderProfile.amount[Operator][Value] |

| code | Data Type: StringReturns code or name of the combination created in loyalty for the payment mode | NA | NA | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists | tenderProfile.code[Operator][Value] |

| notes | Data Type: StringReturns notes described for the tender | NA | NA | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists | tenderProfile.notes[Operator][Value] |



## Return Bill (returnBill)

The returnBill profile is used to return the bill amount of a current transaction. You can use this profile only on forward cases and when transaction unroll is enabled. Use this profile to check line-item level details of the current transaction as provided in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |

| --- | --- | --- |

| basketCount | Number of products in the transaction of the given inventory type - irrespective of quantity | NA |

| basketCountRegex() | Number of products whose item attribute matches the given regular expression | returnBill.basketCountRegex("Inventory Attribute","Regex") |

| basketCountRegexBrand | Number of products whose brand name matches the given regular expression | returnBill.basketCountRegexBrand("Brand Name","Regex") |

| basketCountRegexCategory | Number of products whose category name matches the given regular expression | returnBill.basketCountRegexCategory("Category Name","Regex") |

| basketExcludes() | Products not contained in the transaction | Example:returnBill.basketExcludes("MkmMakeCode","M0081") |

| basketIncludes() | Products contained in the transaction | Example:returnBill.basketIncludes("MkmMakeCode","M0081") |

| basketExcludesRegex() | To check if the transaction includes products whose item attribute does not match the given regular expression | Example:returnBill.basketExcludesRegex("MC","KI_AC.*") |

| basketIncludesRegex() | To check if the transaction includes products whose item attribute matches the given regular expression | Example:returnBill.basketIncludesRegex("MC","KI_AP.*") |

| basketIncludesRegexBrand() | To check whether the transaction contains items of a specific brand | returnBill.basketIncludesRegexBrand("Brand Regex")returnBill.basketIncludesRegexBrand("LS") |

| basketIncludesRegexCategory() | To check whether the transaction contains items of a specific category | returnBill.basketIncludesRegexCategory("Category Regex") |

| basketQty() | To check number of items in a transaction | returnBill.basketQty("Attribute Name","Attribute Value") |

| basketQtyRegex() | Quantity of items in the bill matching the regular expression | returnBill.basketQty("Attribute Name","Attribute Value") |

| basketQtyRegexBrand() | Number of quantities of a specific item whose brand name matches the given regular expression | returnBill.basketQtyRegexBrand("Brand Name","Regex") |

| basketQtyRegexCategory() | Number of quantities of a specific item whose category name matches the given regular expression | returnBill.basketQtyRegexCategory("Category Name","Regex") |

| basketSize | Total number of items in the bill - irrespective of quantity of each item | NA |

| basketSum() | Sum of value of the items matching the inventory attribute | Example:returnBill.basketSum("Product","Shirt") |

| basketSumRegex() | Sum of value of the items matching the inventory attribute - regular expression | Example:returnBill.basketSum("Product","Regex") |

| customFieldValueExcludes() | Transaction custom field excludes the given value | Pass the custom field value that you want to validate as shown belowcustomFieldValueExcludes("Field","Value")Example:returnBill.customFieldValueExcludes("a_customertype","Loyalty") |

| customFieldValueIncludes() | Check if customer's transaction level custom field value includes the given value | Pass the custom field value that you want to validate as shown belowcustomFieldValueIncludes("Field","Value")Example:returnBill.customFieldValueIncludes("a_customertype","Loyalty") |

| date | Date of transaction | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and yearFor examples on using date formats, see the Date Format section on Using Operators in Rule Expressions |

| discount | Discount availed for a transaction | NA |

| notes | Transaction level notes specified by the cashier during transaction | contains, exists, isEmpty, isNotNull , isNull , isValidDate, matches, and notExists |

| number | Transaction number of the current transaction | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists |

| points | Total points issued for a transaction | NA |

| totalQty | Date of transaction | NA |



## Current Customer Partner (currentCustomerPartner)

This currentCustomerPartner consists of attributes related to fetching customer partner's profile information and loyalty details as listed in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |

| --- | --- | --- |

| additionalBenefitsInMembershipCycle | Additional benefits available during the membership life cycle | NA |

| benefitsAvailedInActiveMembership | Benefits that are available with the active membership | NA |

| benefitsAvailedInEventCycle | Benefits available during the event cycle | NA |

| benefitsLimit | The maximum or minimum limit of benefit that can be availed | NA |

| countBillsCurrentCycle | Calculate the number of bills generated during the current cycle | NA |

| countPromotionPointsIssuedCurrentCycle | Calculate the number of points issued during the current cycle | NA |

| daysElapsedInCurrentCycle | Number of days elasped in current cycle for customer partner | NA |

| isLinkedOnSpecificDate | Checks if the current cutomer partner is linked on a specific date or not. | NA |

| isLinkedTo | Checks if the current cutomer partner is linked to a loyalty program or not | NA |

| sumPurchaseValueCurrentCycle | Sum of all purchase value during current cycle | NA |



## Group Primary Customer (groupPrimaryCustomer)

This groupPrimaryCustomer is used to write rules for the primary customer.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |

| --- | --- | --- |

| avgBasketSize | Lets you evaluate conditions on the average basket size of the primary customer.(The ratio of the total quantities of line items purchased to the total number of transactions made). | isNotNull and isNull |

| avgSpendPerVisit | Lets you evaluate conditions on the average spend per visit by the primary customer.(Total purchases amount)/ (Total number of transactions made). | interval, isNotNull and isNull |

| clusterValueExcludes |  | NA |

| clusterValueIncludes |  | NA |

| countActiveCouponsInCouponSeries | Lets you evaluate conditions on the count of active coupons of the primary customer. | NA |

| currentAllPoints |  | interval, isNotNull and isNull |

| currentNonRedeemablePoints | Lets you evaluate conditions on the current points that are not redeemable by the primary customer. | interval, isNotNull and isNull |

| currentPoints | Lets you evaluate conditions on the active points of the primary customer. | interval, isNotNull and isNull |

| customFieldValueExcludes | Lets you evaluate conditions on a custom field value of the customer. (Any value other than the value you mention here). | NA |

| customFieldValueExists | Lets you evaluate conditions on a custom field value of the primary member ( if a specific custom field value exists for the member). | NA |

| customFieldValueIncludes | Lets you evaluate conditions on a custom field value of the primary member (if a specific custom field value exists for the member). | NA |

| doesProfileExists | Lets you evaluate conditions on the availability of the primary member's profile/account. | NA |

| email | Lets you evaluate conditions on email of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| extField |  | NA |

| externalId | Lets you evaluate conditions on the external ID values of the primary member. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| firstname | Lets you evaluate conditions on the first name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| hasInstoreProfile | Lets you evaluate conditions based on the primary customer's Instore profile. | isNotNull and isNull |

| hasWeChatProfile | Lets you evaluate conditions based on the primary customer's WeChat profile. | isNotNull and isNull |

| includesLabelRegex |  | NA |

| initialCurrentAllPoints |  | interval, isNotNull and isNull |

| initialCurrentPoints |  | interval, isNotNull and isNull |

| initialLifetimePoints |  | interval, isNotNull and isNull |

| initialLifetimePurchase |  | interval, isNotNull and isNull |

| initialSlabName |  | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| initialSlabNumber |  | isNotNull and isNull |

| isControl |  | isNotNull and isNull |

| isGroupMember |  | isNotNull and isNull |

| isLoyal |  | isNotNull and isNull |

| isPrimary |  | isNotNull and isNull |

| isRegisteredOn |  | NA |

| isSecondary |  | isNotNull and isNull |

| isTest |  | isNotNull and isNull |

| joinDate | Lets you evaluate conditions based on the registration date of the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |

| lastname | Lets you evaluate conditions based on the last name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| lifetimeAllPoints |  | interval, isNotNull and isNull |

| lifetimeNonRedeemablePoints |  | interval, isNotNull and isNull |

| lifetimePoints | Lets you evaluate conditions on lifetime points of the primary customer. | interval, isNotNull and isNull |

| lifetimePurchase | Lets you evaluate conditions on lifetime purchases of the primary customer. | interval, isNotNull and isNull |

| mobile | Lets you evaluate conditions on the mobile number of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| name | Lets you evaluate conditions based on the name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| numberOfRedemptionsInCalendarMonth | Lets you evaluate conditions based on the number of times points are redeemed in the current calendar month. | isNotNull and isNull |

| numberOfRedemptionsInCalendarWeek | Lets you evaluate conditions based on the number of times points are redeemed in the current calendar week. (Monday to Sunday) | isNotNull and isNull |

| numberOfRedemptionsInPastDays | Lets you evaluate conditions based on the number of times points are redeemed in the last x days. | NA |

| numberOfRedemptionsToday | Lets you evaluate conditions based on the number of times points are redeemed on the present day. | isNotNull and isNull |

| numberOfTxns | Lets you evaluate conditions on the total number of transactions by a primary customer. | isNotNull and isNull |

| numberOfTxnsToday | Lets you evaluate conditions on the number of transactions made by the primary customer on the current day. | isNotNull and isNull |

| numberOfVisits | Lets you evaluate conditions on the number of visit primary customer. | isNotNull and isNull |

| pointsRedeemedInCalendarMonth | Lets you evaluate conditions on points redeemable by a primary customer in the calendar month. | interval, isNotNull and isNull |

| pointsRedeemedInCalendarWeek | Lets you evaluate conditions on points redeemable by a primary customer in the current calendar week. | interval, isNotNull and isNull |

| pointsRedeemedInPastDays | Lets you evaluate conditions on points redeemable by a primary customer in the last x days. | NA |

| pointsRedeemedToday | Lets you evaluate conditions on points redeemable by a primary customer on the present day. | interval, isNotNull and isNull |

| slabChangeDate | Lets you evaluate conditions based on the tier change date by the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |

| slabExpiryDate | Lets you evaluate conditions based on the tier expiry date of the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |

| slabName | Lets you evaluate conditions on the tier name of a primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

| slabNumber | Lets you evaluate conditions on the tier number of the primary customer. | isNotNull and isNull |



## Referrer Code (referrerCode)

This referrerCode is used to write rules based on the referrer code details.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |

| --- | --- | --- |

| refereeRegCount | Total number of registered referee | isNotNull and isNull |

| refereeTxnCount | Number of transactions done by the referee | isNotNull and isNull |



Updated8 months ago
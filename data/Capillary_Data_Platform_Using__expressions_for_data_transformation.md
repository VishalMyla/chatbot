# Using  expressions for data transformation

Connect+ uses two kinds of expressions:spelExpressionfor the transformation block andNiFi expressionfor other fields.

# Creating expression

The table below provides sample expressions along with additional information to assist you in understanding and creating new expressions as needed.

## Arithmetic expressions

| Supported Operators | Expression Format | Example |

| --- | --- | --- |

| +-*/ | exp{hdr{header 1} [operator] hdr{header 2}}Note:Ensure that the braces are matched properly (opened and closed). | Example 1: Calculate net amountHeaders: LineItem_Amount, LineItem_DiscountExpression: exp{hdr{LineItem_Amount} - hdr{LineItem_Discount}} |

|  |  | Example 2: Calculate net amount based on quantityHeaders: LineItem_Amount, QuantityExpression: exp{hdr{LineItem_Amount} * hdr{Quantity}} |

|  |  | Example 3: Currency conversion (INR to USD)Headers: LineItem_AmountExpression: exp{hdr{LineItem_Amount} / 74} |



## String operations

| Supported Operators | Expression Format | Example |

| --- | --- | --- |

| startsWithendsWithconcatsubstring | exp{string expression1.concat(string expression2)} | Example 1: Concatenate headers for descriptionHeaders: Item_Name, Item_PurposeExpression: exp{hdr{Item_Name}.concat(hdr{Item_Purpose})} |

|  |  | Example 2: Concatenate headers with fixed info for itemHeaders: Item_Name, Item_PurposeExpression: exp{hdr{Item_Name}.concat(' is used for ').concat(hdr{Item_Purpose})} |

|  |  | Example 3: Remove '+' prefix from mobile numberHeaders: Mobile_NoExpression: exp{('hdr{Mobile_No}'.startsWith('+')) ? 'hdr{Mobile_No}'.substring(1) : 'hdr{Mobile_No}'} |



## Conditional Operations

| Operator | Expression Format | Example |

| --- | --- | --- |

| ? : | exp{(conditional expression) ? expression1 : expression2} | Example 1: Add country code +91 to the mobile number if the length of the number is 10, otherwise return the existing value.Headers: Mobile_NoExpression:  exp{('hdr{Mobile_No}'.length() == 10) ? '+91'.concat('hdr{Mobile_No}') : 'hdr{Mobile_No}' } |

|  |  | Example 2: Check if an item is returned. If yes, set transaction type value as 'RETURN' else  set it to 'REGULAR'.Headers: Is_Returned (Possible values 'true' / 'false')Expression: exp{ ('yes'.equalsIgnoreCase('hdr{Is_Returned}')) ? 'RETURN' : 'REGULAR' } |



## Complex expressions

| Example |

| --- |

| Scenario: Calculating non-fractional qualified quantity based on product categoryDescription: In this scenario, we want to compute the qualified quantity based on the product category. If the product category is one of FUEL, JEWEL, or METAL, then the qualified quantity is determined by taking the difference between LineItem_Amount and LineItem_Discount and dividing it by LineItem_Rate. However, if the product category falls outside of these categories, the qualified quantity defaults to LineItem_Qty.Headers: Product_Category, LineItem_Discount, LineItem_Amount, LineItem_Rate, LineItem_QtyExpression:exp{ ({'FUEL','JEWEL','METAL'}.contains('hdr{Product_Category}') ) ? T(Math).floor( (hdr{LineItem_Amount} - hdr{LineItem_Discount}) / hdr{LineItem_Rate}) : T(Math).floor(hdr{LineItem_Qty}) }This expression employs conditional logic to ensure accurate calculation of the qualified quantity based on the specified conditions and input data. |



# 

# Using SpEL expressions in data transformation

In the data transformation block, you can use expressions for the following:

- Filtering data

- Mapping attribution identifier type

- Mapping header that has consistent values

## Filtering data

You can use filter expression to filter the data that needs to be processed.

Consider a transaction dataflow that includes aFinancial statusheader with values such as paid, refunded, or not paid.

![](https://files.readme.io/1d86b69-Financial_status.png)

To exclusively process dataflow for transactions that are either paid or not paid, in the Transformation block, you can use the filter expression${header_value:equals('paid'):or(${header_value:equals('not paid')})}. This expression should be entered in theFilter tabwithin thetransformationtext box.

```
${header_value:equals('paid'):or(${header_value:equals('not paid')})}
```

![](https://files.readme.io/4c28e6f-Filter_data.png)

## Mapping attribution identifier type

Every transaction or customer addition is linked to a specific store or till. The details of these stores or tills are configured in the attribution block. Here, you have the flexibility to use expressions to define constant values for the identifier type.

For example, consider the scenario of a customer addition dataflow and the store code information is found under the 'SC_NUMBER' column in the source file. Here, you would set the identifierType as 'STORE_CODE' and map the identifierValue to the 'SC_NUMBER' column.

![](https://files.readme.io/390e3be-Identifier_type.png)

In this case, use the expression const{STORE_CODE} in the identifierType field and specify 'SC_NUMBER' as the identifierValue. This setup ensures that the attribution of 'STORE CODE' is consistently associated with the 'SC_NUMBER' column in your data.

![](https://files.readme.io/64b86b9-Attribution.png)

## Mapping header that has consistent values

Consider a scenario where you're adding transaction data using the "add transaction dataflow," and all the transactions share the same currency code, INR. The challenge here is that there's no specific header column in the source file indicating the currency code; instead, this information was conveyed via email.

In this situation, you can map the header to the API field by performing the following:

1. Add a new column to your source file with the header "Currency Code".

2. Populate this new column with the value "INR" for all transactions.

3. Map this "Transaction Type" header to the API fieldcurrencyCode.

This way, you explicitly specify that the currency code for all transactions is INR. However, there's a more efficient way to achieve this using an expression.

### Simplify with expressions

You can streamline this process by using the expression const{INR} in the API fieldcurrencyCode. This expression communicates that the value for the API fieldcurrencyCodeis consistently "INR" for all transaction data. This approach eliminates the need for additional columns and simplifies the mapping process.

![](https://files.readme.io/5c2e0d3-Expression_for_consistent_values.png)

# Avoiding common errors in expression

The examples below can help you to avoid errors when working with the MVEL expressions.

| Challenge | Issue | Solution | Example |

| --- | --- | --- | --- |

| Syntax errors | Incorrect syntax can lead to parsing errors. | Ensure correct syntax with proper placement of brackets, quotes, and operators. | exp{'hdr{to_change}'.equals('1')} |

| Variable scope | Referencing variables outside their scope can be risky. | Declare and access variables within the appropriate scope. | exp{var1 = 'Hello'}followed byexp{var2 = hdr{to_change}.equals(var1)} |

| Null handling | Mishandling null values can lead to errors. | Use null-safe operators to handle potential null values. | exp{hdr{to_change} != null && hdr{to_change}.equals('1')} |

| Property access | Incorrect property access syntax can cause issues. | Access properties with the correct syntax, such ashdr['to_change']. | N/A |

| Function calls | Improper usage of function calls can lead to errors. | Follow the correct function call syntax with parentheses and parameters. | exp{toUpperCase('hello')} |

| String concatenation | Incorrect string concatenation syntax can be problematic. | Use the '+' operator for string concatenation. | exp{'Hello ' + 'world'} |

| Operator precedence | Incorrect operator order can yield unexpected results. | Use parentheses to control the order of evaluation. | exp{(1 + 2) * 3} |

| Type conversion | Mismatched data types can cause issues. | Ensure data types match or perform conversions when needed. | exp{Integer.parseInt(hdr{to_change}) == 1} |

| Collection handling | Mishandling collections can result in errors. | Understand collection operations, including indexing. | exp{myList[0]} |

| Complex expressions | Overcomplicated expressions can hinder readability. | Keep expressions concise and organized. | `exp{(a && b |



`exp{'hdr{to_change}'.equals('1')}`

`exp{var1 = 'Hello'}`

`exp{var2 = hdr{to_change}.equals(var1)}`

```
exp{hdr{to_change} != null && hdr{to_change}.equals('1')}
```

`hdr['to_change']`

`exp{toUpperCase('hello')}`

`exp{'Hello ' + 'world'}`

`exp{(1 + 2) * 3}`

```
exp{Integer.parseInt(hdr{to_change}) == 1}
```

`exp{myList[0]}`

Updatedover 1 year ago
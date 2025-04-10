# Punches Calculator Extension

The Punches Extension enables travel and hospitality companies to calculate the number of punches by their customers, assign loyalty points accordingly and manage tier upgrades.

The word Punches derives from the loyalty punch card which is a marketing tool and loyalty program often used by businesses to encourage repeat business from customers. It typically involves a physical or digital card that customers carry and present at each purchase. Each purchase earns the customer a "punch" or a mark on the card, and after a certain number of punches, the customer becomes eligible for a reward or discount.

> 👍NoteThis is an organisation specific extension. To enable, Contact your CSR (Customer Support Representative).

## 👍Note

Note

This is an organisation specific extension. To enable, Contact your CSR (Customer Support Representative).

Features:

- Tier upgrade logic:The extension provides a flexible framework for determining tier upgrades. It calculates punches based on predefined rules and criteria, such as the type of property or category and the duration of a customer's stay. For instance, a customer's stay at a regular property might earn them more punches than a stay at a budget property.

Tier upgrade logic:The extension provides a flexible framework for determining tier upgrades. It calculates punches based on predefined rules and criteria, such as the type of property or category and the duration of a customer's stay. For instance, a customer's stay at a regular property might earn them more punches than a stay at a budget property.

- Customizable configuration:The format for punch calculation is customizable and can be easily adjusted to meet the specific needs of organizations in the travel and hospitality industry. It supports the assignment of multipliers and punch values based on various attributes, such as property type. For example, you can configure the punch calculation in such a way that if a customer books a night at a budget accommodation, they earn one punch on their loyalty card. Alternatively, if they stay in a luxury hotel, they earn 4 punches per night. After accumulating twenty-four punches within a specific timeframe, they will be eligible for an upgrade to the next tier of benefits.

Customizable configuration:The format for punch calculation is customizable and can be easily adjusted to meet the specific needs of organizations in the travel and hospitality industry. It supports the assignment of multipliers and punch values based on various attributes, such as property type. For example, you can configure the punch calculation in such a way that if a customer books a night at a budget accommodation, they earn one punch on their loyalty card. Alternatively, if they stay in a luxury hotel, they earn 4 punches per night. After accumulating twenty-four punches within a specific timeframe, they will be eligible for an upgrade to the next tier of benefits.

# Configuring punch calculation

To configure punches, perform the following

1. From the Extensions home page, open the Punch Calculator Extension.

2. Click theConfiguretab.

3. From theSelect the field to use for property categorisationdrop-down, select the property category. For example, Regular, Premium etc.These values need to be configured as custom fields under the Store entity.

4. From theSelect the field to use for Punch Multiplier, select the multiplier value.These values need to be configured as custom fields under the Store entity.

5. From theSelect the field to use for duration of stay at the hotel, select the duration of the stay.These values need to be configured as extended fields under the Transaction entity.

6. ClickSave.

![](https://files.readme.io/4d3728d-Configure_extension.png)

During a transaction add API call, the system calculates the punches according to the values for the above fields entered. The punches are displayed in the Member Care under transaction details.

![](https://files.readme.io/672e1ce-Transaction.png)

Example calculation:If the Punch multiplier value is 2 and the duration of the stay is 4, then the number of punches is 2 * 4 = 8.

Further, the system triggers loyalty events and provides reward points accordingly.

Updated13 days ago
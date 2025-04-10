# Add Dynamic Content Using Liquid

# Introduction to Liquid

Liquid is a templating language used to add dynamic content. It lets you personalize your messages based on user data, making your communications more relevant and engaging. For instance, you can use liquid language to define the date format according to the customer's locale, send product recommendations based on the customer's interest, etc.

> 📘NoteBy default, the Liquid language is not enabled. You need to raise a Jira ticket to the sustenance team and enable the LiquidFeature config.

## 📘Note

Note

By default, the Liquid language is not enabled. You need to raise a Jira ticket to the sustenance team and enable the LiquidFeature config.

# Basic Syntax

Liquid uses two types of markup:

1. Output markup (denoted by {{ }}): Used to output content.

2. Tag markup (denoted by {% %}): Used for logic and control flow.

# Variables

Variables allow you to insert dynamic content into your templates. Common variables might include:

- {{ customer.first_name }}: The customer's first name

`{{ customer.first_name }}`

- {{ customer.email }}: The customer's email address

`{{ customer.email }}`

- {{ customer.total_purchases }}: The total number of purchases made by the customer

`{{ customer.total_purchases }}`

Usage example:

`Hello {{ customer.first_name }},`

`Hello {{ customer.first_name }},`

# Variable Formatting

Formatting modify the output of Liquid objects. They are used with the pipe character ( | ).

Common filters include:

- capitalize: Capitalizes the first letter of a string

`capitalize`

- downcase: Converts a string to lowercase

`downcase`

- upcase: Converts a string to uppercase

`upcase`

- date: Formats a date (seeDate Formattingsection)

`date`

- money: Formats a number as currency (seeCurrency Formattingsection)

`money`

Usage example:

```
Welcome back, {{ customer.first_name | capitalize }}!
Your last purchase was on {{ customer.last_purchase_date | date: "%B %d, %Y" }}.
```

```
Welcome back, {{ customer.first_name | capitalize }}!
Your last purchase was on {{ customer.last_purchase_date | date: "%B %d, %Y" }}.
```

# Control Flow

Control flow tags create conditions that decide whether blocks of Liquid code should be executed.

Common control flow tags:

- if,elsif,else: Conditional statements

`if`

`elsif`

`else`

- unless: Negative conditional statement

`unless`

Usage example:

```
{% if customer.vip_status == true %}
  Enjoy your exclusive VIP offer!
{% elsif customer.total_purchases > 5 %}
  Thanks for being a loyal customer!
{% else %}
  Check out our latest products!
{% endif %}
```

```
{% if customer.vip_status == true %}
  Enjoy your exclusive VIP offer!
{% elsif customer.total_purchases > 5 %}
  Thanks for being a loyal customer!
{% else %}
  Check out our latest products!
{% endif %}
```

# Date Formatting

Dates can be formatted using thedatefilter. Here are some common format specifiers:

`date`

- %B: Full month name (e.g., "January")

`%B`

- %b: Abbreviated month name (e.g., "Jan")

`%b`

- %d: Day of the month, zero-padded (01-31)

`%d`

- %e: Day of the month (1-31)

`%e`

- %Y: Four-digit year (e.g., 2024)

`%Y`

- %y: Two-digit year (e.g., 24)

`%y`

- %H: Hour in 24-hour format (00-23)

`%H`

- %I: Hour in 12-hour format (01-12)

`%I`

- %M: Minute (00-59)

`%M`

- %S: Second (00-59)

`%S`

- %p: AM/PM

`%p`

Example:

```
{{ order_date | date: "%B %d, %Y at %I:%M %p" }}
```

```
{{ order_date | date: "%B %d, %Y at %I:%M %p" }}
```

This might output: "September 26, 2024 at 02:30 PM"

## Locale-Specific Date Formatting

For international audiences, you may need to format dates according to specific locales here are some common approaches:

1. Locale parameter in date filter:Liquid{{ order_date | date: "%B %d, %Y", locale: "fr" }}

Locale parameter in date filter:

```
{{ order_date | date: "%B %d, %Y", locale: "fr" }}
```

```
{{ order_date | date: "%B %d, %Y", locale: "fr" }}
```

2. Localize (l) or translate (t) filters:Liquid{{ order_date | l: "date.formats.long" }}

Localize (l) or translate (t) filters:

`l`

`t`

```
{{ order_date | l: "date.formats.long" }}
```

```
{{ order_date | l: "date.formats.long" }}
```

3. System-wide locale setting:Liquid{{ order_date | date: "long" }}

System-wide locale setting:

`{{ order_date | date: "long" }}`

`{{ order_date | date: "long" }}`

4. Locale-aware time zones:Liquid{{ event_date | date: "%B %d, %Y at %I:%M %p %Z", locale: "de" }}

Locale-aware time zones:

```
{{ event_date | date: "%B %d, %Y at %I:%M %p %Z", locale: "de" }}
```

```
{{ event_date | date: "%B %d, %Y at %I:%M %p %Z", locale: "de" }}
```

# Currency Formatting

Liquid typically provides filters for formatting monetary values according to different currencies and locales.

Common currency filters include:

- money: Formats a number as currency

`money`

- money_with_currency: Formats a number as currency and includes the currency symbol or code

`money_with_currency`

Usage examples:

1. Basic currency formatting:Liquid{{ product.price | money }}This might output: "$10.00"

Basic currency formatting:

`{{ product.price | money }}`

`{{ product.price | money }}`

This might output: "$10.00"

2. Currency formatting with symbol:Liquid{{ product.price | money_with_currency }}This might output: "$10.00 USD"

Currency formatting with symbol:

```
{{ product.price | money_with_currency }}
```

```
{{ product.price | money_with_currency }}
```

This might output: "$10.00 USD"

3. Locale-specific currency formatting:Liquid{{ product.price | money: locale: "fr" }}This might output: "10,00 €"

Locale-specific currency formatting:

```
{{ product.price | money: locale: "fr" }}
```

```
{{ product.price | money: locale: "fr" }}
```

This might output: "10,00 €"

4. Specifying a different currency:Liquid{{ product.price | money: currency: "EUR" }}This might output: "€10.00"

Specifying a different currency:

```
{{ product.price | money: currency: "EUR" }}
```

```
{{ product.price | money: currency: "EUR" }}
```

This might output: "€10.00"

5. Combining locale and currency:Liquid{{ product.price | money_with_currency: currency: "JPY", locale: "ja" }}This might output: "¥1,000 JPY"

Combining locale and currency:

```
{{ product.price | money_with_currency: currency: "JPY", locale: "ja" }}
```

```
{{ product.price | money_with_currency: currency: "JPY", locale: "ja" }}
```

This might output: "¥1,000 JPY"

# Loops

Loops are used to iterate over collections like arrays or hashes.

Common loop tags:

- for: Iterate over an array

`for`

- break: Exit a loop

`break`

- continue: Skip the current iteration

`continue`

Usage example:

```
Your recent purchases:
{% for product in customer.recent_purchases limit:3 %}
  - {{ product.name }}
{% endfor %}
```

```
Your recent purchases:
{% for product in customer.recent_purchases limit:3 %}
  - {{ product.name }}
{% endfor %}
```

## Best Practices

1. Always test your templates with sample data before sending.

2. Use meaningful variable names for clarity.

3. Implement fallback content for missing data:Liquid{{ customer.first_name | default: "Valued Customer" }}

```
{{ customer.first_name | default: "Valued Customer" }}
```

```
{{ customer.first_name | default: "Valued Customer" }}
```

4. Keep your templates simple and readable.

5. Use comments to explain complex logic:Liquid{% comment %}Check if customer is eligible for discount{% endcomment %}

```
{% comment %}Check if customer is eligible for discount{% endcomment %}
```

```
{% comment %}Check if customer is eligible for discount{% endcomment %}
```

6. Be mindful of different locales when formatting dates and currencies.

7. Use appropriate error handling to prevent broken personalization:Liquid{% if customer.first_name %}Hello {{ customer.first_name }}{% else %}Hello there{% endif %}

```
{% if customer.first_name %}Hello {{ customer.first_name }}{% else %}Hello there{% endif %}
```

```
{% if customer.first_name %}Hello {{ customer.first_name }}{% else %}Hello there{% endif %}
```

## Examples

1. Personalized Email Greeting:LiquidDear {{ customer.first_name | default: "Valued Customer" }},

Personalized Email Greeting:

```
Dear {{ customer.first_name | default: "Valued Customer" }},
```

```
Dear {{ customer.first_name | default: "Valued Customer" }},
```

2. Conditional Content based on Purchase History:Liquid{% if customer.total_purchases > 10 %}
  As a loyal customer, enjoy 20% off your next purchase!
{% elsif customer.total_purchases > 5 %}
  Thanks for your continued support. Here's 10% off your next order!
{% else %}
  Shop now and start earning rewards!
{% endif %}

Conditional Content based on Purchase History:

```
{% if customer.total_purchases > 10 %}
  As a loyal customer, enjoy 20% off your next purchase!
{% elsif customer.total_purchases > 5 %}
  Thanks for your continued support. Here's 10% off your next order!
{% else %}
  Shop now and start earning rewards!
{% endif %}
```

```
{% if customer.total_purchases > 10 %}
  As a loyal customer, enjoy 20% off your next purchase!
{% elsif customer.total_purchases > 5 %}
  Thanks for your continued support. Here's 10% off your next order!
{% else %}
  Shop now and start earning rewards!
{% endif %}
```

3. Product Recommendations with Price:LiquidBased on your interests, we recommend:
{% for product in recommended_products limit:3 %}
  - {{ product.name }}: {{ product.price | money_with_currency }}
{% endfor %}

Product Recommendations with Price:

```
Based on your interests, we recommend:
{% for product in recommended_products limit:3 %}
  - {{ product.name }}: {{ product.price | money_with_currency }}
{% endfor %}
```

```
Based on your interests, we recommend:
{% for product in recommended_products limit:3 %}
  - {{ product.name }}: {{ product.price | money_with_currency }}
{% endfor %}
```

4. Abandoned Cart Reminder with Total:Liquid{% if customer.abandoned_cart %}
  Don't forget about the items in your cart:
  {% for item in customer.abandoned_cart.items %}
    - {{ item.name }}: {{ item.price | money }}
  {% endfor %}
  Total: {{ customer.abandoned_cart.total | money_with_currency }}
{% endif %}

Abandoned Cart Reminder with Total:

```
{% if customer.abandoned_cart %}
  Don't forget about the items in your cart:
  {% for item in customer.abandoned_cart.items %}
    - {{ item.name }}: {{ item.price | money }}
  {% endfor %}
  Total: {{ customer.abandoned_cart.total | money_with_currency }}
{% endif %}
```

```
{% if customer.abandoned_cart %}
  Don't forget about the items in your cart:
  {% for item in customer.abandoned_cart.items %}
    - {{ item.name }}: {{ item.price | money }}
  {% endfor %}
  Total: {{ customer.abandoned_cart.total | money_with_currency }}
{% endif %}
```

5. Event Countdown with Localized Date:Liquid{% assign days_until_event = event_date | date: "%s" | minus: "now" | date: "%s" | divided_by: 86400 %}
Only {{ days_until_event }} days until our big sale!
Mark your calendar: {{ event_date | date: "long", locale: customer.locale }}

Event Countdown with Localized Date:

```
{% assign days_until_event = event_date | date: "%s" | minus: "now" | date: "%s" | divided_by: 86400 %}
Only {{ days_until_event }} days until our big sale!
Mark your calendar: {{ event_date | date: "long", locale: customer.locale }}
```

```
{% assign days_until_event = event_date | date: "%s" | minus: "now" | date: "%s" | divided_by: 86400 %}
Only {{ days_until_event }} days until our big sale!
Mark your calendar: {{ event_date | date: "long", locale: customer.locale }}
```

6. International Pricing:LiquidOur new product is now available!
Price in your region: {{ product.price | money_with_currency: locale: customer.locale }}

International Pricing:

```
Our new product is now available!
Price in your region: {{ product.price | money_with_currency: locale: customer.locale }}
```

```
Our new product is now available!
Price in your region: {{ product.price | money_with_currency: locale: customer.locale }}
```

Updated6 months ago
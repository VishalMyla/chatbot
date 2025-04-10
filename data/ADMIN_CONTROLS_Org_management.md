# Org management

## Create or Modify Organization Profile Information

Capillary admin users set up your organization in the Capillary InTouch platform and create admin users for your organization. These admin users can modify the organization's information such as profile details, time zone, currency, language, country, and much more. This section helps you to create/modify your organization's information based on valid data.

### Access Organization Profile Page

To access the organization profile page, follow these steps.

1. Log on to InTouch of your cluster (India/US/EU/APAC2)

2. Click theProfileicon and then clickOrganization Settings.

![](https://files.readme.io/662cc89-6AplWpj69fAiVQKvB8-jKPD0ZLJ51iAPgQ.jpg)

The category expands as shown below.

1. ClickOrganization Profile. You will see the following page.

![](https://files.readme.io/d41d8a7-w2VWKUsHKYwzLR_oOLKm8m5bjj6dn4ySdg.jpg)

1. Click theEditbutton to modify the profile information. You will see the following page.

### Organization Profile Tab

In this tab, you can edit or select the profile information of an organization. Configure all the information with valid data such as address, starting month of the fiscal year, website URL, logo URL, and location of the organization.

> 📘NoteOrganization Name is selected by default. To change org name, contact the access team.

## 📘Note

Note

Organization Name is selected by default. To change org name, contact the access team.

![](https://files.readme.io/8e5a95a-JCu6pfiPP-OT_qWWymnEWGtb16si6debNA.jpg)

To create/modify the organization’s profile information, follow these steps.

1. InAddress, enter the geographical address of the organization. This is usually the address of the headquarter or the home branch of an organization.

2. InFiscal Year Start, select the starting month of the fiscal year using the drop-down list. A fiscal year can start from April or January depending on organization terms and conditions.

3. InOrg Website, enter the valid web address of the organization.

4. InOrg Logo, enter the valid URL of the organization’s logo.

5. InOrg Locale, select the user interface language for InTouch and other Capillary products using the drop-down list. You can configure the user interface language of Capillary applications InTouch by selecting the option, en_US (US English), or zh_CH (Chinese).

6. ClickSubmit.

### Set Org TimeZone Tab

This tab lets you set the organization’s default and supported time zones.

> 📘The base time zone is the time zone of the headquarter or the home branch of the organization. All reporting and data are saved in the Capillary system with the base time zone.

## 📘

The base time zone is the time zone of the headquarter or the home branch of the organization. All reporting and data are saved in the Capillary system with the base time zone.

![](https://files.readme.io/5a6ea53-es4GdBRyHTUf-iwCG0ATJnm8XlWPaIwr8g.jpg)

Tocreate/modifythe organization’s time zone, follow these steps.

1. InTime Zone, select each time zone that the organization supports and click add. To remove a selected time zone,  select the time zone from the {right box} and click remove.

2. InBase Time Zone, select the base time zone from the drop-down list.

3. ClickSubmit.

### Org Currency Tab

In this tab, you can configure the currency information of an organization using a currency data list.

> 📘All the transactional information gets converted into the base currency. Capillary shows reporting (where the currency is involved) in the base currency of an organization.

## 📘

All the transactional information gets converted into the base currency. Capillary shows reporting (where the currency is involved) in the base currency of an organization.

![](https://files.readme.io/6e28dc4-tlERkJrGIU98OWw075ydRyBGW6I8yU9SRg.jpg)

To create/modify supported currencies of the organization, follow these steps.

1. InCurrency Available, select each supported currency from the list, and click add. To remove a selected currency, select the currency from the right box, and click remove.

2. InBase Currency, select the base currency from the drop-down list.

> 📘Steps to enable currency conversion for an organization:Enable currency conversion with CONF_CURRENCY_CONVERSION_ENABLE on the Billing Configuration page.Add all base currency and supported currencies for the org as mentioned here (Set Org Currency Tab).Add base currencies to stores as mentioned in Setup Organization Hierarchy.Update currency conversion ratio for the base currency and supported currencies either through the /v2/currencyratio API or Org Currency Ratio profile (Import Framework).

## 📘

Steps to enable currency conversion for an organization:

1. Enable currency conversion with CONF_CURRENCY_CONVERSION_ENABLE on the Billing Configuration page.

2. Add all base currency and supported currencies for the org as mentioned here (Set Org Currency Tab).

3. Add base currencies to stores as mentioned in Setup Organization Hierarchy.

4. Update currency conversion ratio for the base currency and supported currencies either through the /v2/currencyratio API or Org Currency Ratio profile (Import Framework).

1. InDecimal Places for Base Currency(CONFDECIMAL_PLACES_FOR_BASE_CURRENCY), set the appropriate decimal places for the currency using the drop-down list. This configuration determines the number of decimal places allowed for the base currency. You can set it to a maximum of 3 decimal places. For example, if you configure it to 2 decimal places and a transaction value is 100.567, the system will round it to 100.57 and store it in the database. If set to 0 decimal places, the value will be rounded to 101._Note: Currencies like Kuwaiti Dinar and Jordanian Dinar support up to 3 decimals; many currencies like the US dollar and European Pound support up to 2 decimal places; whereas, Ariary (Currency of Madagascar) does not support any decimal.Note:This is also applicable for line-item level transactional values.

2. ClickSubmit.

### Organization Languages/Countries Tab

In this tab, you can configure the language, base language, country, base country, and other country information of the organization. You can use languages to create custom fields and store their values in your preferred language if required.

> 📘The language that is used by the headquarter or the home branch of an organization is considered as a base language.The base country is usually where the home branch of the organization is located and supported countries are those in which the organization operates its business. When registering a customer, the mobile number of a customer is validated first with the base country and then with the supported countries.

## 📘

- The language that is used by the headquarter or the home branch of an organization is considered as a base language.

- The base country is usually where the home branch of the organization is located and supported countries are those in which the organization operates its business. When registering a customer, the mobile number of a customer is validated first with the base country and then with the supported countries.

![](https://files.readme.io/70ce673-IpUKx1NYMilh-0fbRg3RLthycda3Xv5bkQ.jpg)

To create/modify supported languages and countries of the organization, follow these steps.

1. InLanguage Available, select each supported language from the list, and click add. To remove a selected language,  select the language from the right box, and click remove.

2. InBase Language, select the base language using the drop-down list.

3. InCountries Available, select each supported country from the list and click add.

Supported countries are those in which the organization is operating its business or supports customers to enroll in the loyalty program. When registering a customer in the organization, our system validates whether the mobile number provided matches with the Regex (regular expression) of any of the supported countries or the base country. To remove a selected country,  select the country from the right box, and clickremove.

1. InBase Country, select the base country using the drop-down list. By default, the base country is considered for registering customers.

2. CheckInclude other Countryto support registering customers from any country irrespective of base or available countries set on this page.

3. ClickSubmit.

### Parent Organization Setup Tab

In this tab, you can set the parent organization for a child organization. Leave the option to default for a parent organization.

![](https://files.readme.io/883ffab-upFbuaHGvamHMQsrBt390fls1aBT_F-nYA.jpg)

To create/modify the parent organization for the profile, follow these steps.

1. InSelect Parent Organization, select the organization name from the drop-down list.

2. ClickSubmit.

### Organization Point of Contact Tab

In this tab, you can select Capillary’s point of contact(s) for the organization. These POCs can monitor and manage the organizational account and associated products.

![](https://files.readme.io/f029981-upFbuaHGvamHMQsrBt390fls1aBT_F-nYA.jpg)

To create/modify the point of contact, follow these steps.

1. InCapillary POC, select the contacts from the list that you want to add, and click add. To remove a selected contact,  select the contact from the {right box} and click remove.

2. ClickSubmit.

### Social Tab

In this tab, you can edit the social media platform URLs of the organization.

![](https://files.readme.io/487fd97-zksSdK2G2wG8-FExF6ED3JJylT29DK2nvg.jpg)

To create/modify social media URLs, follow these steps.

1. ForTwitter, Facebook, Google +, LinkedIn, RSS, Foursquare, Yelp!, Flickr, enter the valid URLs of the social media platforms required.

2. ClickSubmit.

To create/modify social media URLs, follow these steps.  For Twitter, Facebook, Google +, LinkedIn, RSS, Foursquare, Yelp!, Flickr, enter the valid URLs of the social media platforms required. Click Submit.

This topic provides information to admin users on how to modify their profile information and change the language for their InTouch account.

Even though there is a language setting option at an organization level, admin users are provided with a privilege to see the Capillary applications of their account in the language they prefer.

For example, if your organization's language is set to Chinese and for your account, as an admin user), the language is set to English, then you will see the applications of your account in English irrespective of your organization's language. However, only admin users have this privilege.

To modify your profile information and language:

1. Log on to InTouch of your cluster (India/US/EU/APAC2)

2. Click theSettingsicon and then clickOrganization Setup. The category expands showing the available options.

![](https://files.readme.io/35dcca9-Org_Setup1.png)

1. ClickAdministrative Users. You will see the Admin Users page as shown below

![](https://files.readme.io/f84aa2e-Admin_Users1.png)

1. Scroll down to your account and click the respective Edit  option. You will see the profile information.

![](https://files.readme.io/ecaf0c9-Admin_Users2.png)

1. Modify the fields as required and click Create. The purpose for each option is provided in the following table.

| OPTION | PURPOSE |

| --- | --- |

| Title | Addressing the user (Mr./Mrs./Miss.) |

| First Name | First name of the user |

| Middle Name | Middle name of the user |

| Last Name | Last name of the user |

| Mobile | Mobile number of the user |

| Email | Email id of the user |

| User Role | Designation/Access level of the user |

| User Locale | Default Language of all the UI elements of Capillary applications for the user. |



Updated10 months ago
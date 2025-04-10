# Org entities

## Admin Users

Lets you import admin users for the organization in bulk.

- Username (email ID)*

- Firstname

- Last name

- Middle Name

- Title

- User Role

- Manager

- Password

- Accessible entities or Entity codes (Semicolon Separated)

- Entities Code

> 👍NoteFor adding users in bulk with access group permission, use the Onboarding users to Intouch Connect+ template. For more information, refer to theConnect+ documentation.

## 👍Note

Note

For adding users in bulk with access group permission, use the Onboarding users to Intouch Connect+ template. For more information, refer to theConnect+ documentation.

Template Configuration

![](https://files.readme.io/cc0e05f-2MuvugDzUdBAZ_uWBXJFvuXTlMcddTaHgA.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Select fields to be updated | Add the fields that you want to allow updating for the current template |

| Disable existing data updation | Check this box to not allow updating existing details |

| Disable existing accessible entities |  |

| Append the country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |



## Attribution Lookup Import

Lets you import lookup codes for WeChat and mobile trigger. The combination of lookup code and lookup type should be unique across the org and org IDs should be valid and active.

- Store Code

- Lookup Code

- Lookup TypeLookup type could be WECHAT and MOBILE_TRIGGER

Example:store_code,lookup_code,lookup_typebbk,QR001,WECHAT,bbky,QR002,MOBILE_TRIGGER

Template Configuration

![](https://files.readme.io/8579f0c-F5lUDyJ91nkl0wY_-fzbZgpRfkOqGkdnkw.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details |

| Denote stores by external ids | Check this box if stores of the organization use store external ids as store codes |



## Concepts

Data Exchange Framework provides an easy way for creating store entities like zones, concepts, stores and store TILLs. You can only add new concepts but cannot modify existing concepts through Data Import Framework.

The CSV file for bulk concepts should contain the following fields

Concept CodeConcept NameParent Concept CodeTime Zone IDLanguage IDCurrency ID

Template Configuration

![](https://files.readme.io/bfe4534-8yvD-IWlNlSDb1TW7Lpt78g5dbSA_1lCzw.png)

| Option | Description |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details |

| Select fields to be updated | Add the fields that you want to update through the import. |



## Org Currency Ratio Import

This profile lets you update the currency ratio of your organization.

The CSV file for Currency Conversion should contain the following fields:

- Currency Code

- Currency Ratio with respect to INR

For example:

| Currency Code | Conversion Ratio |

| --- | --- |

| SGD | 53.25 |

| USD | 75.68 |

| EUR | 82.66 |



> 📘Steps to enable currency conversion for an organization:Enable currency conversion with CONF_CURRENCY_CONVERSION_ENABLE on the Billing Configuration page.Add the base currency and supported currencies for the org as mentioned in Create or Modify Organization Profile Information.Add base currencies to stores as mentioned in the Setup Organization Hierarchy.Update currency conversion ratio for the base currency and supported currencies either through the Org 5. Currency Ratio profile (Import Framework) or /v2/currency ratio API.After these steps, wait for one hour. When the server clears the cache, you can see the values.

## 📘

Steps to enable currency conversion for an organization:

1. Enable currency conversion with CONF_CURRENCY_CONVERSION_ENABLE on the Billing Configuration page.

2. Add the base currency and supported currencies for the org as mentioned in Create or Modify Organization Profile Information.

3. Add base currencies to stores as mentioned in the Setup Organization Hierarchy.

4. Update currency conversion ratio for the base currency and supported currencies either through the Org 5. Currency Ratio profile (Import Framework) or /v2/currency ratio API.After these steps, wait for one hour. When the server clears the cache, you can see the values.

You need to provide a valid currency code as per the ISO standard as shown below:

|  |  |  |

| --- | --- | --- |

| Code | Currency Name | Symbol |

| ALL | Albanian lek | L |

|  | Alderney pound | £ |

| DZD | Algerian dinar | دج |

| EUR | Euro | € |

| AOA | Angolan kwanza | Kz |

| XCD | East Caribbean dollar | $ |

| ARS | Argentine peso | $ |

| AWG | Aruban florin | ƒ |

| SHP | Ascension pound | £ |

| AUD | Australian dollar | $ |

| BSD | Bahamian dollar | $ |

| BHD | Bahraini dinar | .د.ب |

| BDT | Bangladeshi Taka | ৳ |

| BBD | Barbadian dollar | $ |

| BYR | Belarusian ruble | p. |

| BZD | Belize dollar | BZ$ |

| XOF | West African CFA franc | CFA |

| BMD | Bermudian dollar | $ |

| BTN | Bhutanese ngultrum | Nu. |

| INR | Indian Rupee | ₹ |

| BOB | Bolivian boliviano | Bs. |

| USD | United States dollar | $ |

| BAM | Bosnia and Herzegovina convertible mark | KM |

| BWP | Botswana pula | P |

| BRL | Brazilian real | R$ |

| USD | British Virgin Islands dollar | $ |

| BND | Brunei dollar | $ |

| BGN | Bulgarian lev | лв |

| MMK | Myanma kyat | K |

| BIF | Burundian franc | FBu |

| KHR | Cambodian riel | ៛ |

| XAF | Central African CFA franc | FCFA |

| CAD | Canadian dollar | $ |

| CVE | Cape Verdean escudo | $ |

| KYD | Cayman Islands dollar | $ |

| CLP | Chilean peso | $ |

| CNY | Chinese yuen | ¥ |

| COP | Colombian peso | $ |

| KMF | Comorian franc | CF |

| CDF | Congolese franc | FC |

| NZD | New Zealand dollar | $ |

| CRC | Costa Rican colón | ₡ |

| HRK | Croatian kuna | kn |

| CUP | Cuban convertible peso | ₱ |

| ANG | Netherlands Antillean guilder | ƒ |

| CZK | Czech koruna | Kč |

| DKK | Danish krone | kr |

| DJF | Djiboutian franc | Fdj |

| DOP | Dominican peso | RD$ |

| EGP | Egyptian pound | £ |

| ERN | Eritrean nakfa | Nfk |

| ETB | Ethiopian birr | Br |

| FKP | Falkland Islands pound | £ |

| FJD | Fijian dollar | $ |

| XPF | CFP franc | ₣ |

| GMD | Gambian dalasi | D |

| GEL | Georgian lari | ₾ |

| GHS | Ghanaian cedi | GH₵ |

| GIP | Gibraltar pound | £ |

| GTQ | Guatemalan quetzal | Q |

| GBP | British pound | £ |

| GNF | Guinean franc | FG |

| GYD | Guyanese dollar | $ |

| HTG | Haitian gourde | G |

| HNL | Honduran lempira | L |

| HKD | Hong Kong dollar | $ |

| HUF | Hungarian forint | Ft |

| ISK | Icelandic króna | kr |

| IDR | Indonesian rupiah | Rp |

| IRR | Iranian rial | ﷼ |

| IQD | Iraqi dinar | ع.د |

| ILS | Israeli new shekel | ₪ |

| JMD | Jamaican dollar | J$ |

| JPY | Japanese yen | ¥ |

| KZT | Kazakhstani tenge | ₸ |

| KES | Kenyan shilling | KSh |

| KPW | North Korean won | ₩ |

| KRW | South Korean won | ₩ |

| KWD | Kuwaiti dinar | KD |

| LAK | Lao kip | ₭ |

| LVL | Latvian lats | Ls |

| LBP | Lebanese pound | £ |

| LSL | Lesotho loti | M |

| LRD | Liberian dollar | $ |

| LYD | Libyan dinar | LD |

| CHF | Swiss franc | Fr. |

| LTL | Lithuanian litas | Lt |

| MOP | Macanese pataca | MOP$ |

| MGA | Malagasy ariary | Ar |

| MWK | Malawian kwacha | MK |

| MYR | Malaysian ringgit | RM |

| MVR | Maldivian rufiyaa | Rf |

| MRO | Mauritanian ouguiya | UM |

| MUR | Mauritian rupee | ₨ |

| MXN | Mexican peso | $ |

| USD | Micronesian dollar | $ |

| MDL | Moldovan leu | lei |

| MNT | Mongolian tögrög | ₮ |

| MZN | Mozambican metical | MT |

| AMD | Armenian dram | AMD |

| NAD | Namibian dollar | $ |

| NPR | Nepalese rupee | ₨ |

| ‎NI | Nicaraguan córdoba | C$ |

| NGN | Nigerian naira | ₦ |

| TRY | Turkish lira | ₺ |

| NOK | Norwegian krone | kr |

| PKR | Pakistani rupee | ₨ |

| USD | Palauan dollar | $ |

| PAB | Panamanian balboa | B/. |

| PGK | Papua New Guinean kina | K |

| PYG | Paraguayan guaraní | Gs |

| PEN | Peruvian nuevo sol | S/. |

| PHP | Philippine peso | ₱ |

| PLN | Polish zoty | zł |

| QAR | Qatari riyal | ﷼ |

| RON | Romanian leu | lei |

| RUB | Russian ruble | ₽ |

| RWF | Rwandan franc | R₣ |

| SHP | Saint Helena pound | £ |

| WST | Samoan tala | WS$ |

| STD | São Tomé and Príncipe dobra | Db |

| SAR | Saudi riyal | ﷼ |

| RSD | Serbian dinar | Дин. |

| SCR | Seychellois rupee | ₨ |

| SLL | Sierra Leonean leone | Le |

| SBD | Solomon Islands dollar | $ |

| SOS | Somali shilling | S |

| SOS | Somaliland shilling | S |

| ZAR | South African rand | R |

| LKR | Sri Lankan rupee | ₨ |

| SDG | Sudanese pound | ج.س. |

| SRD | Surinamese dollar | $ |

| SZL | Swazi lilangeni | E |

| SEK | Swedish krona | kr |

| SYP | Syrian pound | £ |

| TWD | New Taiwan dollar | NT$ |

| TJS | Tajikistani somoni | SM |

| TZS | Tanzanian shilling | TSh |

| THB | Thai baht | ฿ |

| TOP | Tongan Paʻanga | T$ |

| PRB | Transnistrian ruble | руб |

| TTD | Trinidad and Tobago dollar | TT$ |

| TMT | Turkmenistani manat | T |

| UGX | Ugandan shilling | USh |

| UAH | Ukrainian hryvnia | ₴ |

| AED | United Arab Emirates dirham | د.إ |

| UYU | Uruguayan peso | $U |

| UZS | Uzbekistani som | лв |

| VUV | Vanuatu vatu | VT |

| VEF | Venezuelan bolívar | Bs |

| VND | Vietnamese Dong | ₫ |

| YER | Yemeni rial | ﷼ |

| ZMW | Zambian kwacha | ZK |

| OMR | Omani Riyal | ﷼ |

| SGD | SGD | $ |



## Zones

This profile allows you to create multiple zones for an organization using direct file importing. You cannot modify existing zones using Data Exchange; however, you can create multiple zones at once.

The CSV file for zones should contain the following fields

- Zone Code

- Zone Name

- Parent Zone Code

- Time Zone ID

- Language ID

- Currency ID

Template Configuration

![](https://files.readme.io/47946a4-hYZr-gX0kqPaixkXTcEEFkIhfSquUjICKA.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details |

| Select fields to be updated | Add the fields that you want to allow updating for the current template |



## Stores

This profile allows you to create multiple stores for an organization using direct file importing. You cannot modify existing stores using Data Exchange; however, you can create multiple zones at once.

The CSV file for stores should contain the following fields. The mandatory fields can be configured as required.

- Store code

- Store name

- Store external id (up to 3 ids)

- Store id

- City id

- Area id

- Mobile number of the store

- Email id of the store

- Zone code

- Concept code

- Latitude

- Longitude

- Time zone id

- Language id

- Currency id

- Store name denoted in SMS

- Store mobile number denoted in SMS

- Store email id denoted in emails

- Store name denoted in emails

- Store mobile no. denoted in emails

Template Configuration

![](https://files.readme.io/6899bd0-Configure_template.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details |

| Select fields to be updated | Add the fields that you want to allow updating for the current template |

| Disable updation of custom fields with empty values | Check this box to not allow updating custom field values with null values |

| Replace invalid zone code with | Choose the default zone to replace with instead of the invalid zones in the file. |

| Replace invalid concept code names with | Choose the default concept to replace with instead of invalid concepts in the file. |

| Store access group | Make sure that the default access group is selected. If not, navigate to the access group section and set the default access group for all stores under the organisation. If required, after the data import, you can also assign a specific access group for a store. For more information on access groups, seeAccess group. |



[Access group](/docs/access-group)

## Store Server

This profile lets you add/update multiple store servers to the organization. You can also make a store server billable (value:1) or nonbillable (value: 0) with the new column Is Billable. This is basically used for accounting purposes.

- Store Server Code (Username)*

- Store Server Name*

- Store Code

- Store External ID

- Description

- Established on

- Password

- Is Billable (values: 0 for nonbillable and 1 for billable)

> 📘How to check whether a store server is billable or not?On InTouch, navigate to Settings > Master Data Management > Stores Masters > Store Servers and click the store server to see its details. You can see the billable status in Is Billable field.

## 📘How to check whether a store server is billable or not?

How to check whether a store server is billable or not?

On InTouch, navigate to Settings > Master Data Management > Stores Masters > Store Servers and click the store server to see its details. You can see the billable status in Is Billable field.

Template Configuration

![](https://files.readme.io/1eac343-3TMfGiWvdWlxohnrYPbbX_gBv1nYSfLF8A.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details |

| Select fields to be updated | Add the fields that you want to allow updating for the current template |

| Replace invalid store names with | Choose the default store to replace with instead of invalid stores in the file. |



## Store Tills

his profile allows you to add/modify multiple TILLs for stores. You cannot modify existing TILLs using Data Import Framework. You can also make a TILL billable (1) or nonbillable (1) with the new column Is Billable. This is basically used for accounting purposes.

The CSV file for store-tills should contain the following fields. The mandatory fields can be configured as required.

- Store Code

- External

- Store Server Code

- Till Code

- User Name

- Till Name

- First Name

- Last Name

- Email

- Mobile

- Established On

- Description

- Is Billable (values: 0 for nonbillable and 1 for billable)

> 📘How do I check whether a store TILL is billable or not?On InTouch, navigate to Settings > Master Data Management > Stores Masters > Store Tills and click the Till to see its details. You can see the billable status in Is Billable field.

## 📘How do I check whether a store TILL is billable or not?

How do I check whether a store TILL is billable or not?

On InTouch, navigate to Settings > Master Data Management > Stores Masters > Store Tills and click the Till to see its details. You can see the billable status in Is Billable field.

Template Configuration

![](https://files.readme.io/1594dc1-G36wFv8uBErX6188Pn3cdmRaEBzwxlZf6g.png)

| OPTION | DESCRIPTION |

| --- | --- |

| Disable existing data updation | Check this box to not allow updating existing details. |

| Select fields to be updated | Add the fields that you want to allow updating for the current template. |

| Replace invalid store names with | Choose the default store to replace with instead of invalid stores in the . |



Updatedover 1 year ago
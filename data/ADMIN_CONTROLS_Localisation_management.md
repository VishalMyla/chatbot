# Localisation management

# Overview

The localisation feature in the Capillary platform enables one to view the content of any of the Capillary products in the desired language and also helps to display the terminologies according to the industry. For example in the airline industry “miles” is the preferred term for “points”. Localisation management is done through a localisation management tool. Customer Success Managers (CSM) can get access to the tool and handle labelling/translations by themselves.

![](https://files.readme.io/ab86997-Overview.jpeg)

# Setting language

The language preferences are set in the organization settings. You can set the language at:

1. User level

2. Organization level

3. Multi-organization level

4. Custom namespace

## User level

To set user-level locale, perform the following:

1. On Intouch, navigate toOrganization Settings->My Account->Profile->Edit.

2. From the User locale drop-down list, select the desired language. You can raise a ticket and add the desired language. Seesample ticket.

3. ClickCreate.If appropriate translations are available in the translation management tool, the UI language is changed to the selected language.

![](https://files.readme.io/43de8b7-User_locale.png)

## Organization level

The organization-level language settings define the default language in which the organization administrator wants the organization’s users to view the Intouch UI.

Note:This section is accessible only to Intouch organization administratorsTo set an organization-level locale, perform the following:

1. On Intouch, navigate toOrganisation Setup->Organisation Profile->Edit.

2. From theOrganisation localedrop-down list, select the desired language for the organization. You can raise a ticket and add the desired language. Seesample ticket.

![](https://files.readme.io/09cf552-Org_locale.png)

1. ClickSubmit.The language displayed in the Intouch UI is set to the selected language. However, if a user-level locale is specified, the UI will be shown in the corresponding language for that specific user, regardless of the organization-level setting. In cases where neither the organization-level nor user-level language is specified, the UI will be displayed in the default language (English).

## Multi-organisation level

If a user has access to multiple organizations, the language set in the Capillary Technologies org (Org zero) is considered for displaying the UI text and for translation.

## Industry-specific language/keyword setting

This is an organization-level language setting. ACustom spaceis used to customize the UI text for a specific industry. To set a custom namespace, perform the following:

1. On Intouch, navigate toOrganisation Setup->Organisation Profile->Edit.

![](https://files.readme.io/9295549-Create_new_custom_namespace.png)

1. In theCreate new custom Namespacetext box, add a name for the custom namespace.

In theCreate new custom Namespacetext box, add a name for the custom namespace.

2. ClickSubmit.

ClickSubmit.

3. In Locize, perform the following:Select the language and custom namespace.

In Locize, perform the following:

- Select the language and custom namespace.

![](https://files.readme.io/ddd7b96-Custom_Namespace_demo.gif)

- Enter the appropriate industry-specific text/keywords for the selected language, against the applicable keys and save.

![](https://files.readme.io/a8b1c91-En-US_to_airmiles_Custom.png)

1. On Intouch, navigate toOrganisation Setup -> Organisation Profile -> Edit.

2. Select Enable custom namespace checkbox and from the drop-down, select the custom namespace/industry.

![](https://files.readme.io/2124718-Custom_namespace.png)

1. ClickSubmit.The UI is updated automatically within 24 hrs.

### Example

Member care UI before applying a custom namespace

![](https://files.readme.io/1e03916-Before_custom_namespace.png)

Member care UI after applying custom namespace

![](https://files.readme.io/eeecdf1-After_custom_namespace.png)

Notes:

- If an organisation from a  specific industry wants to create a custom namespace specific to their company, a new custom namespace can be created and applied.

- The primary language for the organisations that uses custom namespace is set based on the user locale or the org locale. The custom namespace is set based on the selection of custom namespaces within the respective org/user locale. Seelanguage priorityfor more information.

# Translation management tool

The localization management in Intouch is done through a localization management tool called Locize. By providing translations to Locize,  it translates the text in the UI according to the language preferences set for the user or organization.In Locize, we can define the translations for each static text in the UI. According to the language preferences set in the Intouch settings, the Locize tool translates the UI language and displays the UI in the selected language. For example, if the language preference is set to Russian by a specific user, the UI for the user is displayed in Russian. The default language is English.

> 📘Locize does not translate the content. Translation needs to be provided to Locize.Translations/relabelling for dynamic text (data coming from API and getting displayed on UI) is not available.

## 📘Locize does not translate the content. Translation needs to be provided to Locize.

- Locize does not translate the content. Translation needs to be provided to Locize.

- Translations/relabelling for dynamic text (data coming from API and getting displayed on UI) is not available.

To use Locize for translation management, you need to perform the following:

1. Set language preferences in organization settings

2. Define the translations in Locize.

The primary components of the Locize tool are:

1. Projects-  Each product module UI is available as a project. For example, Membercare, Insights+, Engage+ etc.

2. Keys- Keys are the identifier names for each text element in the UI. The words in a sentence do not have separate keys and are identified with a single key.

![](https://files.readme.io/cf51f66-Key_element.png)

1. Namespaces- These are the logical segregation of the keys under each language. For every language such as en-US (English US), bg-BG (Bulgarian - Bulgaria), there is a default namespace called Production and it can have also multiple custom namespaces.

![](https://files.readme.io/9a87f88-Namespace.png)

- Production namespace:All common keys of a specific language are in a namespace calledProduction. For the default language en-US, the text displayed against the respective key is only in en-US.

![](https://files.readme.io/aaebb5d-En_US_Production.png)

However, for other languages, the translated text for the respective key is displayed alongside the default language (en-US).

![](https://files.readme.io/28ce020-bg-BG_production.png)

- Custom namespaceThe custom namespace allows you to add industry-specific keys. For instance, if there are 100 keys in the English language under the Production namespace and you want to use organization-specific terms for 25 keys, you can create a custom namespace for those 25 keys. The applicable terms can then be entered for each respective key. Only those 25 keys from the custom namespace will be used for that language, while the rest of the keys will use the text from the production namespace.

![](https://files.readme.io/ff4c8f9-En-US_to_airmiles_Custom.png)

## Adding keys

The UI's static text elements are defined as keys in the Production namespace within the Locize project. These keys represent the existing text elements in the default language, en-US (English, US).Whenever a new feature is added, the new keys are generated for the new text elements and are also added to the Production namespace automatically.The text elements that are based on the API response are not added automatically and you need to raise a ticket and get those added manually.

> 📘Production namespace key labels are set by Capillary and cannot be changed for any language.

## 📘Production namespace key labels are set by Capillary and cannot be changed for any language.

Production namespace key labels are set by Capillary and cannot be changed for any language.

## Adding translations

For non-English languages, the content translation is managed in the Production namespace. UI text translation does not happen if there is no translation added to the production namespace.For any language, all the translations/re-labelling to meet requirements specific to an org or vertical are done in the custom namespace.

You can add translations to Locize in two ways:

Adding translation for individual keysIf the content for translation is less, in the production namespace, you can select the desired language and add the translations for the keys. The en-US text box displays the text in English (default language) and the translation for that can be provided in the selected language's text box.

![](https://files.readme.io/42e33a3-Production_namespace.png)

Uploading translations in bulkIf the transaction list is more, you can use the template, enter the translations and upload it. For information on how to import translation to Locize, seeLocize documentation.

![](https://files.readme.io/4bcd814-Bulk_data.png)

> ⚠️In the translation template, do  not modify the contents in key and en_US column. This can result in improper functioning of the translation.

## ⚠️In the translation template, do  not modify the contents in key and en_US column. This can result in improper functioning of the translation.

In the translation template, do  not modify the contents in key and en_US column. This can result in improper functioning of the translation.

> 📘It takes 24 hours to reflect the translation changes.

## 📘It takes 24 hours to reflect the translation changes.

It takes 24 hours to reflect the translation changes.

# Language priority

By default, the Intouch UI language is English. If you set a user locale, org locale, or custom namespace, the priority for displaying the UI language is as follows:

## First priority:

First priority is always given to the user locale. For example, if the organisation-level language is set to Russian and the user has set the user locale to English, the UI will be displayed in English to the respective user. For other users within the organisation who have not set the user locale, the UI will be displayed in Russian.

## Second priority

If a user locale is not set and the org locale is set, the UI will be displayed in the language set in the Org locale.

## Language priority in the custom namespace

Custom namespace works with the default language, user locale, and org locale.See the below table to understand how the custom namespace works with each of them.

| User language preference (User Locale) | Org language preference (Org Locale) | Custom namespace Enabled/Disabled | Is language available in  custom namespace? | UI language & Custom namespace changes |

| --- | --- | --- | --- | --- |

| No | No | Enabled | Yes | English (default language). Applies custom namespace under the English language |

| Yes | Yes | Yes | Yes | User language. Applies custom namespace under the selected user language |

| No | Yes | Yes | Yes | Org language. Applies custom namespace under the selected org language |

| Yes | Yes | Enabled | No | User language. Does not apply any custom namespace as it is not available. |



# FAQ

1. How do relabel member care ui with airline-specific terms in English?You can add an airline-specific custom namespace and use it. SeeCustom namespacesection.

How do relabel member care ui with airline-specific terms in English?

You can add an airline-specific custom namespace and use it. SeeCustom namespacesection.

2. How to view Member Care in a particular language?From your org settings, select the desired locale. Make sure that translations are available for the selected language in Locize. SeeLanguage preferencessection.

How to view Member Care in a particular language?From your org settings, select the desired locale. Make sure that translations are available for the selected language in Locize. SeeLanguage preferencessection.

3. How to re-label a few terms only on Member Care UI in EnglishUse custom namespace. SeeCustom namespacesection.

How to re-label a few terms only on Member Care UI in EnglishUse custom namespace. SeeCustom namespacesection.

4. How to get access to Locize?You can raise aticketto get access to Locize.

How to get access to Locize?You can raise aticketto get access to Locize.

5. How to add a new language to Locize?Whenever a new language is added in the org settings, the same language is added to Locize automatically.

How to add a new language to Locize?Whenever a new language is added in the org settings, the same language is added to Locize automatically.

6. What is the process for translating content?Translation content is provided by the customer or is managed by the Capillary POC.

What is the process for translating content?Translation content is provided by the customer or is managed by the Capillary POC.

7. How to add new keys to the Production namespace?New keys are added automatically whenever new UI additions happen.

How to add new keys to the Production namespace?New keys are added automatically whenever new UI additions happen.

8. How to add a new user locale or org locale?You can raise a ticket and get desired locale added to your profile. See the sample tickethere.

How to add a new user locale or org locale?You can raise a ticket and get desired locale added to your profile. See the sample tickethere.

Updatedover 1 year ago
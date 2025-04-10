# Single Sign On (SSO)

Single Sign-On (SSO) is an authentication process that allows you to access multiple applications and systems with one set of login credentials (username and password). With Capillary SSO integration, you can log into Intouch using the same identity information that your organization uses for SSO login.

Capillary usesOktato enable and integrate SSO.

> 👍Get in touch with[email protected]for enabling and integrating SSO.

## 👍Get in touch with[email protected]for enabling and integrating SSO.

Get in touch with[email protected]for enabling and integrating SSO.

# Prerequisites

- SSO metadata

- IdP signature certificate

- Domain list

- Okta admin account

# Enabling SSO

To enable Single Sign-On (SSO), you must activate theEnable Single Sign On (SSO)configuration.

`Enable Single Sign On (SSO)`

![](https://files.readme.io/5b6f1ed-Enable_SSO.png)

To enable and for assistance in integrating SSO, send an e-mail to[email protected].

`[email protected]`

[[email protected]](/cdn-cgi/l/email-protection)

> 📘NoteYou can enable SSO for only single organisation. Hence, this is not recommended for multi-org users.

## 📘Note

Note

You can enable SSO for only single organisation. Hence, this is not recommended for multi-org users.

# Integrating SSO

To integrate, perform the following:

1. From the Okta admin page, navigate toSecurity > Identifiers > Add identity providerand selectSAML.

![](https://files.readme.io/4d5eb2d-SAML.png)

Note:Capillary supports SSO with SAML 2.0 authentication only (SAML 2.0IdP).

1. ClickNext.

2. In theConfigure SAML 2.0 IdPpage, enter the following details:Name:Enter the customer name.Prerequisite:Anattributemust be defined and mapped. See step 5 for information on attribute and mapping.Idp username- Specify the name of the attribute that contains the user's email address. This enables Okta to authenticate the user based on the email address. For example, you may define this attribute as "appuser.emailaddress" in the Profile Editor and map it to the user's email address.Match against- SelectOkta Username or Email. This matches and authenticates users to an IdP based on their user name on Okta or their defined email address.Account Link Policy- Select Automatic.Group Assignments- SelectAssign to specific groupand from theSpecific Groups, selectSSO Users. Users who are newly created on the IdP will be added to this group after their verification has been confirmed through metadata.IdP User URI- Search and find entityID in the metadata file and enter the entityID URI.IdP Single Sign-On URL- Search and find the location in the metadata file and enter the location URL information.IdP Signature Certificate- Upload the IdP signature certificate. This should be in.pemformat.Destination- Search the location in the metadata file and enter the location URL information. This is the location to send the SAML Response.Use the default values for the remaining fields.

- Name:Enter the customer name.

- Prerequisite:Anattributemust be defined and mapped. See step 5 for information on attribute and mapping.Idp username- Specify the name of the attribute that contains the user's email address. This enables Okta to authenticate the user based on the email address. For example, you may define this attribute as "appuser.emailaddress" in the Profile Editor and map it to the user's email address.

- Match against- SelectOkta Username or Email. This matches and authenticates users to an IdP based on their user name on Okta or their defined email address.

- Account Link Policy- Select Automatic.

- Group Assignments- SelectAssign to specific groupand from theSpecific Groups, selectSSO Users. Users who are newly created on the IdP will be added to this group after their verification has been confirmed through metadata.

- IdP User URI- Search and find entityID in the metadata file and enter the entityID URI.

- IdP Single Sign-On URL- Search and find the location in the metadata file and enter the location URL information.

- IdP Signature Certificate- Upload the IdP signature certificate. This should be in.pemformat.

- Destination- Search the location in the metadata file and enter the location URL information. This is the location to send the SAML Response.Use the default values for the remaining fields.

12. ClickFinish.

![](https://files.readme.io/a4dc3c1-Attributes.gif)

1. Navigate toDirectory > Profile Editor>customer>Add Attributesand enter the attributes:Display name- Enter a valid display name. This is a label that appears on the UI.Variable name- Enter the name of the attribute that can be referred to in mappings.External name- Enter the SAML standard URL.Enable Attributes- Select the checkbox and enable the attributes.Use the default values for the remaining fields.

- Display name- Enter a valid display name. This is a label that appears on the UI.

- Variable name- Enter the name of the attribute that can be referred to in mappings.

- External name- Enter the SAML standard URL.

- Enable Attributes- Select the checkbox and enable the attributes.Use the default values for the remaining fields.

![](https://files.readme.io/1d7a707-Profile_Attributes.gif)

1. ClickSave.

2. In theProfile Editor, clickMappingand map the attributes. To map the attributes, selectCapillary SSO to Okta User, and select the defined attributes against the respective Okta user attributes.

![](https://files.readme.io/2c79f0e-Mapping.gif)

1. Navigate toSecurity > Identity Providers > Routing rulesand define theRouting rules. Enter the following details:Rule Name- Enter the customer name.Note:Make sure that the customer name entered in the identity provider and routing rules are the same.User is accessing- SelectIntouch.User matches- SelectDomain list on loginand enter the domain names. For example, abc.com, abc.in etc.Use the default values for the remaining fields.

- Rule Name- Enter the customer name.Note:Make sure that the customer name entered in the identity provider and routing rules are the same.

- User is accessing- SelectIntouch.

- User matches- SelectDomain list on loginand enter the domain names. For example, abc.com, abc.in etc.Use the default values for the remaining fields.

5. ClickCreate Rule.

![](https://files.readme.io/15f2f6a-Routing_rules.gif)

The SSO integration is now fully complete. You can select the SSO option to sign into Intouch using your SSO login credentials.

![](https://files.readme.io/a5697f3-SSO_login.png)

# Disabling SSO

To disable SSO,  navigate toOrganisation settings > Authentication configurationsand clear theEnable Single Sign On (SSO)check box. If you do not have access to organisation settings, send an e-mail to `[email protected].

# SSO login scenarios and errors

The table below provides information on error messages that occur in various scenarios.

| Scenario | Error Message |

| --- | --- |

| A user from an SSO-enabled org tries to log in using SSO without an Intouch account created by Capillary access team | "User does not have access to Intouch." |

| A user from an SSO-enabled org tries to login using SSO after the Capillary access team has created an account but has not defined the access level | "User does not have access level defined." |

| A user from an SSO-enabled org tries to log in using SSO after the Capillary access team has created an account but the account is inactive (the user has been disabled) | "User does not have access to the org." |

| SSO for an org was enabled earlier but is now disabled | All SSO-related changes are rolled back, allowing users to reset their passwords and log in using Intouch credentials. |

| A user from an SSO-enabled org with Intouch credentials tries to log in using Intouch credentials. | "The email ID or password entered is incorrect". The user will be allowed to log in only using SSO. |



Updatedover 1 year ago
# Getting Started

This section covers essential concepts, setup prerequisites, access roles, application setup steps, internationalization and enabling RBAC for Vulcan API calls, enabling you to get started with Vulcan.

# Terms and Abbreviations

| Acronym | Full Form |

| --- | --- |

| UI | User Interface |

| UX | User Experience |

| UAT | User Acceptance Testing |

| CLI | Command Line Interface |

| SDK | Software Development Kit |

| TDD | Test-Driven Development |

| QA | Quality Assurance |

| API | Application Programming Interface |

| GTM | Google Tag Manager |

| GA | Google Analytics |



[Google Tag Manager](https://support.google.com/tagmanager/answer/6102821?hl=en)

[Google Analytics](https://support.google.com/analytics/topic/14089939?hl=en&ref_topic=14090456&sjid=7662243895788080453-AP)

## Application Types

| Type | Description |

| --- | --- |

| Global Application | Applications accessible to all organizations. They are not editable after creation. |

| Native Application | Applications accessible to a specific organization, shareable with other brands. |

| External Application | Applications developed as standalone React projects with Capillary UX dependencies. [Currently Unsupported] |



# Prerequisites

Before setting up your application on Vulcan, ensure that you have the following prerequisites:

- Mac or Linux system.

- Node.js 14 (preferably usingnvm).You can also install npm using the following command:

```
curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh> | bash
```

```
curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh> | bash
```

- React 18 with Webpack 5: Prior knowledge of React is required.

- Vulcan module for your organization. For access, raise a JIRA request to the Capillary product support team.

- Read-only npm token for the Capillary organization NPM registry. For access, raise a JIRA request to the Capillary product support team.

- User accessto Vulcan UI.

- Vulcansetup scriptwith execution permissions.

- Vulcan SDK v.2.4.0.

> 📘Note:The setup script is used to automate the setup of a Vulcan application executing a few tasks.The setup script does the following:Requests npm token.Configures npm settings.Runs the command to create the Vulcan application with the provided name.

## 📘Note:

Note:

The setup script is used to automate the setup of a Vulcan application executing a few tasks.

The setup script does the following:

- Requests npm token.

- Configures npm settings.

- Runs the command to create the Vulcan application with the provided name.

# Accessing Vulcan UI

The Vulcan UI lets you access and manage your applications within the Vulcan platform. Users have different permission levels to view and access Vulcan applications. Refer toAccess Rolesfor information on the access roles. For access, create a JIRA ticket to the Capillary product support team. For more information, refer to the user management documentationhere.

To access the Vulcan UI, follow these steps:

1. On the InTouch portal, click onHomein the left-hand corner.

2. SelectVulcanfrom the sidebar menu.

## Access Roles

Accessing Vulcan involves various permission levels tailored to specific roles within the development and management process.

The roles are as follows:

| Role | Description |

| --- | --- |

| VULCAN VIEWER | This access level is for users to view the application without making any changes.Users with this level cannot modify or manage the application. |

| VULCAN DEVELOPER | This access level is for developers actively working on application development and testing.Users with DEV access can upload new builds to the platform and enable or disable User Acceptance Testing (UAT) mode. |

| VULCAN ADMIN | This access level is for administrators managing the overall application.Users with ADMIN access can create new applications, enable or disable User Acceptance Testing (UAT) mode, enable or disable production (PROD) mode, and delete applications. |

| VULCAN SUPERADMIN | This access level is for super administrators.Users with SUPERADMIN access can delete applications, setup, modify, and delete cluster CF configurations, and override Member Care UI.This is currently restricted to the Capillary engineering team. |



# Application Setup

Setting up an application on Vulcan involves two steps:

- Creating and configuring the application on Vulcan UI.

- Initializing the project on your local machine.

Start by configuring the application on the Vulcan UI. This includes entering the basic details, selecting the appropriate application type, and configuring internationalization settings.

After completing the setup on Vulcan UI, initialize the project on your local machine. This includes setting up the development environment, providing necessary credentials, and configuring project details and endpoints.

## Application Setup in Vulcan UI

To create and configure your application on the Vulcan UI, follow these steps:

1. Access the Vulcan UI pagefrom InTouch.

2. ClickCreate applicationon the Vulcan UI.

![](https://files.readme.io/228f845-image.png)

1. In the Basic Details section, define the basic details for the application, validate the name and prefix path and set the application type.Refer to the section Basic Details.

![](https://files.readme.io/0fce1de-image10.png)

1. Enter the Authentication details. This is applicable for external applications and is currently unsupported.

2. If localization is required for the application, enter the Internationalization details.Refer to the section on Internationalization Details.

![](https://files.readme.io/4917693-image.png)

### Basic Details

The details of each field are as follows:

| Field | Description |

| --- | --- |

| Name | Name of the application + Organization ID. |

| Application ID | Unique ID specific to the application. |

| Description | Short description explaining the basic functions of the application. |

| Readme | Details on the features and functions of the application. |

| Prefix Path | The public URL path points to the entry point where the application will be loaded on the Vulcan UI. |

| Application Type | The type of Vulcan application. |

| Share with other organisations | Share the Vulcan application with other organisations the user has access to.Refer to the document onSharing Member Care Replica Apps Across Organizationsfor more information on sharing with other organisations. |



[Sharing Member Care Replica Apps Across Organizations](/reference/customizing-the-member-care-ui#sharing-member-care-replica-apps-across-organizations)

> 📘Note:The name and its associated Organization ID and Prefix Path must be unique across the entire cluster. No two applications can have the same name, Organization ID and Prefix Path within the same cluster.

## 📘Note:

Note:

The name and its associated Organization ID and Prefix Path must be unique across the entire cluster. No two applications can have the same name, Organization ID and Prefix Path within the same cluster.

#### Types of Vulcan applications

There are three types of applications available on Vulcan:

| Type | Description |

| --- | --- |

| Global | Accessible to all organizations and clusters and not editable once created. |

| Native | Accessible to a specific organization and shareable with other organizations. |

| External Apps | Not currently supported. |



> 📘NotesCreating global applications requires Capillary Organization access and Vulcan ADMIN permissions.Native and external applications can be edited or deleted by users with Vulcan ADMIN access.Global and native apps are embedded in Member Care, they use InTouch authentication by default  and do not require additional authentication.

## 📘Notes

Notes

- Creating global applications requires Capillary Organization access and Vulcan ADMIN permissions.

- Native and external applications can be edited or deleted by users with Vulcan ADMIN access.

- Global and native apps are embedded in Member Care, they use InTouch authentication by default  and do not require additional authentication.

### Internationalization Details

The internationalization (I18n) setup in Vulcan allows developers to configure applications to support multiple languages and regional settings.

> 📘Note:Vulcan provides built-in support for InTouch (Locize) or the option to implement a custom API-based solution for internationalization.

## 📘Note:

Note:

Vulcan provides built-in support for InTouch (Locize) or the option to implement a custom API-based solution for internationalization.

To enable internationalization for your application, follow these steps:

1. Navigate to theInternationalization Detailssection.

2. ChooseYesunder Enable I18n.

3. Choose the I18n Type.

> 📘Note:The types are as follows:InTouch:Through LocizeCustom:External I18n provider or API

## 📘Note:

Note:

The types are as follows:

InTouch:Through LocizeCustom:External I18n provider or API

1. Enter the details for internationalization.

> 📘Note:You can find your Locize Project Id and Project Key in your projects settings under your Locize account.To get started and configure Locize, refer to the Locize developer documentation.

## 📘Note:

Note:

You can find your Locize Project Id and Project Key in your projects settings under your Locize account.

To get started and configure Locize, refer to the Locize developer documentation.

1. Click onTestto validate the details.

2. ClickCreate Applicationto register the app on the Vulcan platform.

The details of each field are as follows:

| Field | Description |

| --- | --- |

| Locize Project Name | The name of your translation project in Locize, used to organize translation resources for your application. |

| Locize Project ID | A unique identifier for your Locize project, ensuring your app pulls the correct translations. |

| Locize Project Key | A unique key provided by Locize, used to authenticate and access your specific translation project. |

| Test Locale | The locale code (en-US, fr-FR) used for testing your app's internationalization setup. |



> 📘Note:To manually setup internationalization during application development refer to theSetting Up Internationalization During Developmentsection.

## 📘Note:

Note:

To manually setup internationalization during application development refer to theSetting Up Internationalization During Developmentsection.

### RBAC Details

Role-Based Access Control (RBAC) allows you to configure and whitelist Vulcan APIs used within a microsite, ensuring secure and structured access. When RBAC is enabled for a Vulcan application, API access is restricted by app ID, and only users with the required permissions (through a membership group or permission set) can access and execute the whitelisted Vulcan APIs. When RBAC is disabled for an application, all Vulcan APIs are accessible to all users. Refer to the documentation onManaging User Permissionsfor more information on managing permissions.

> 📘Note:This feature is supported for native Vulcan applications only. Refer to the documentation for more information on thetypes of Vulcan applications.

## 📘Note:

Note:

This feature is supported for native Vulcan applications only. Refer to the documentation for more information on thetypes of Vulcan applications.

#### Key Features of RBAC for Vulcan

1. Enhanced Security: RBAC ensures that only the necessary APIs are accessible to users, restricting unauthorised API calls and defining clear access scopes to improve application security.

2. Permission Enforcement: API access is controlled by assigned RBAC permissions. If a user lacks the required permissions, they cannot access or execute the API.

> 🚧Note:Duringapplication development, it is recommended to disable RBAC initially, complete the UI implementation, and then enable RBAC to whitelist the required APIs.

## 🚧Note:

Note:

Duringapplication development, it is recommended to disable RBAC initially, complete the UI implementation, and then enable RBAC to whitelist the required APIs.

To enable RBAC for a Vulcan microsite, follow these steps:

1. Navigate to theRBAC Detailssection.

Navigate to theRBAC Detailssection.

2. Enable RBAC by selectingYesunderEnable RBAC.

Enable RBAC by selectingYesunderEnable RBAC.

3. Map a permission to the Vulcan API call by selecting the appropriate permission in thePermissiondrop-down and mapping it to the corresponding Vulcan API endpoint. Permissions define specific actions a user can perform within the system. For example, theVULCAN_DELETE_APPLICATIONpermission allows a user to delete a Vulcan application on the Vulcan UI.📘Note:Creating an individual permission is currently unsupported. You can only choose from the list of existing permissions available on the Capillary platform.

Map a permission to the Vulcan API call by selecting the appropriate permission in thePermissiondrop-down and mapping it to the corresponding Vulcan API endpoint. Permissions define specific actions a user can perform within the system. For example, theVULCAN_DELETE_APPLICATIONpermission allows a user to delete a Vulcan application on the Vulcan UI.

`VULCAN_DELETE_APPLICATION`

> 📘Note:Creating an individual permission is currently unsupported. You can only choose from the list of existing permissions available on the Capillary platform.

## 📘Note:

Note:

Creating an individual permission is currently unsupported. You can only choose from the list of existing permissions available on the Capillary platform.

![](https://files.readme.io/2e8bec66af8c82d549408030639325231e0f20b0fe6930cf97995288f39a2115-image.png)

The required fields are as follows:

| Field Name | Description |

| --- | --- |

| Permission | Permission to map to the Vulcan API. |

| Method | Type of API call. |

| URL | Endpoint of the Vulcan API. You can find the list of URLs to whitelist from theapi.jsfile in the project folder. |

| Description | Description for the API-permission map. |



`api.js`

1. In the user management UI, create a permission set with the mapped permissions and assign it to a user. Refer to the documentation for more information oncreating a permission setandassigning a permission set to a user.

RBAC for the Vulcan application is successfully created. If a user has the required permissions, they can access and use the whitelisted APIs.

## Local Project Initialization

Once you have created an application in the Vulcan UI, you can start initializing the project on your local machine.

1. In a new terminal window, run the following command and press Enter on the keyboard. Use the same application name as provided during the application creation.

`sh create-vulcan-app.sh <app-name>`

`sh create-vulcan-app.sh <app-name>`

> 📘Note:Thecreate-vulcan-appis a required setup script. Ensure you have appropriate system permissions to run the script.

## 📘Note:

Note:

Thecreate-vulcan-appis a required setup script. Ensure you have appropriate system permissions to run the script.

1. Provide the npm token (required to pull Capillary-specific modules from the NPM registry) and press Enter on the keyboard.

2. Enter the required details: name, email ID, project description, repository type, and repository URL.

3. Answer the questions (Yes or No) when prompted.

4. Enter yourVulcan application ID(generated when creating the application on Vulcan UI).

[Vulcan application ID](/reference/vulcan-getting-started#basic-details)

5. Enter the cluster where the application is created. This action sets up the endpoints for the specified cluster.

![](https://files.readme.io/655ff1a-image8.png)

1. Open the generated project folder through your code editor.

![](https://files.readme.io/c22e582-image_2.png)

1. On the Vulcan UI, hover over the meatballs menu and selectDownload configurationto download theapp-config.jsfile.

On the Vulcan UI, hover over the meatballs menu and selectDownload configurationto download theapp-config.jsfile.

`app-config.js`

![](https://files.readme.io/913773a0af0c077b9779bd737f8b98c93d4a4cc8efb582e971a177c340d0ebdd-image.png)

2. Move theapp-config.jsfile to the root folder of your Vulcan project.

Move theapp-config.jsfile to the root folder of your Vulcan project.

`app-config.js`

![](https://files.readme.io/941f97d1784a1a4296841b85315bfd2b222a65ca5b889a1e79c7ef1eb1d67221-image.png)

The Vulcan app has been initialised. You can begin the application development process.
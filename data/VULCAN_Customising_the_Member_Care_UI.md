# Customising the Member Care UI

# Overview

A brand may need to customise Member Care to fit their specific requirements. Vulcan enables the building of UI customisations and enable these apps as Member Care overrides specific to the organization.

Customising the UI allows brands to see their version instead of the standard Capillary application.

# Prerequisites

To get started ensure that you have the following prerequisites:

- VULCAN SUPERADMINaccess

- Node.js 14.21.3 (preferrably usingnvm).You can install the specific node.js version using the following command:nvm install 14.21.3

`nvm install 14.21.3`

`nvm install 14.21.3`

- Member Care UI replicatemplate. For access, raise a JIRA request to the Capillary UI team.

- Pre-built Vulcan application

- Application configuration file

The following procedure outlines how to set up the Vulcan application and create a Member Care UI replica :

1. Set up the Vulcan application.Access the Vulcan UI.Create the application on Vulcan UI.Enter thebasic detailsandinternationalization details(if required) for the application.❗️Important:For customised member care overrides, create your app name in the given format:member-care-ui-<orgID>.Example:If your Organization ID is "1231", the application name should be in the following format:member-care-ui-1231

### Set up the Vulcan application.

[Set up the Vulcan application](/reference/vulcan-getting-started#application-setup)

1. Access the Vulcan UI.

2. Create the application on Vulcan UI.

3. Enter thebasic detailsandinternationalization details(if required) for the application.❗️Important:For customised member care overrides, create your app name in the given format:member-care-ui-<orgID>.Example:If your Organization ID is "1231", the application name should be in the following format:member-care-ui-1231

> ❗️Important:For customised member care overrides, create your app name in the given format:member-care-ui-<orgID>.Example:If your Organization ID is "1231", the application name should be in the following format:member-care-ui-1231

## ❗️Important:

Important:

For customised member care overrides, create your app name in the given format:member-care-ui-<orgID>.

`member-care-ui-<orgID>`

Example:If your Organization ID is "1231", the application name should be in the following format:member-care-ui-1231

`member-care-ui-1231`

5. Download the App ConfigurationNavigate to the Vulcan UI and click the three dots underActions.ClickDownload Configurationto download theapp-config.jsfile.Move the downloaded file to the downloaded template repository folder.

### Download the App Configuration

1. Navigate to the Vulcan UI and click the three dots underActions.

2. ClickDownload Configurationto download theapp-config.jsfile.

`app-config.js`

![](https://files.readme.io/79272db-image.png)

1. Move the downloaded file to the downloaded template repository folder.

Move the downloaded file to the downloaded template repository folder.

![](https://files.readme.io/f9c1d6f0f10c3aa48130ceba4104b8557ca66c9e0ea9d25df28945d0a8abd046-image.png)

9. Initialize the project on the local machine.Runcreate-vulcan-appon a new terminal.Provide the required details as prompted by the system.Open the generated folder on your code editor.

### Initialize the project on the local machine.

[Initialize the project on the local machine](/reference/vulcan-getting-started#local-project-initialization)

1. Runcreate-vulcan-appon a new terminal.

`create-vulcan-app`

2. Provide the required details as prompted by the system.

3. Open the generated folder on your code editor.

13. Begin the React app development using a code editor.Run the command following command to update your project'sindex.htmlandglobal-styles.jsfiles with the app-specific details. This command fetches app info fromapp-configand updates the index files for your React app.npm run initBuild the application following the React app development process. Use the Member Care UI replicatemplateas the base code to begin customising.

### Begin the React app development using a code editor.

[Begin the React app development using a code editor](/reference/application-development-process)

1. Run the command following command to update your project'sindex.htmlandglobal-styles.jsfiles with the app-specific details. This command fetches app info fromapp-configand updates the index files for your React app.npm run init

`index.html`

`global-styles.js`

`app-config`

`npm run init`

`npm run init`

2. Build the application following the React app development process. Use the Member Care UI replicatemplateas the base code to begin customising.

16. Generate thebuild.zipfile.Navigate to your project directory and open a terminal interface.Run the following command to build the application for deployment and hosting:npm run buildIdentify thebuild.zipfile under your project folder.

### Generate thebuild.zipfile.

[Generate thebuild.zipfile](/reference/application-development-process#starting-and-building-your-application)

`build.zip`

1. Navigate to your project directory and open a terminal interface.

2. Run the following command to build the application for deployment and hosting:npm run build

`npm run build`

`npm run build`

3. Identify thebuild.zipfile under your project folder.

`build.zip`

20. Host your application on the InTouch platform.Access theVulcan UIand open the application.ClickDeploymentsandUpload Build.Enter the build description for your application.ClickSelect Zipand choose thebuild.zipfile from your device.ClickConfirm uploadto upload the build and save changes.Enable UAT or Prod mode for your build.Identify the UAT/Prod URL generated and displayed in the Application Details section. This URL can be used for testing or accessing your application.

### Host your application on the InTouch platform.

[Host your application on the InTouch platform](/reference/application-development-process#hosting-a-vulcan-app)

1. Access theVulcan UIand open the application.

2. ClickDeploymentsandUpload Build.

3. Enter the build description for your application.

4. ClickSelect Zipand choose thebuild.zipfile from your device.

`build.zip`

5. ClickConfirm uploadto upload the build and save changes.

6. Enable UAT or Prod mode for your build.

7. Identify the UAT/Prod URL generated and displayed in the Application Details section. This URL can be used for testing or accessing your application.

28. Override the Member Care UIAccess theVulcan UIand open the application.Click onOverride with UAT versionorOverride with Prod versiondepending on your development stage. The custom Member Care UI is now active.📘Note:If another app is already overriding Member Care for your organization, the following message will appear:

### Override the Member Care UI

1. Access theVulcan UIand open the application.

Access theVulcan UIand open the application.

2. Click onOverride with UAT versionorOverride with Prod versiondepending on your development stage. The custom Member Care UI is now active.📘Note:If another app is already overriding Member Care for your organization, the following message will appear:

Click onOverride with UAT versionorOverride with Prod versiondepending on your development stage. The custom Member Care UI is now active.

![](https://files.readme.io/7e1271a-image.png)

> 📘Note:If another app is already overriding Member Care for your organization, the following message will appear:

## 📘Note:

Note:

If another app is already overriding Member Care for your organization, the following message will appear:

![](https://files.readme.io/55c46cb-image.png)

# Updating the project

Updates to the Member Care UI replicatemplateare notified on the Slack group for Vulcan users.

To pull the latest changes to your project, follow these steps:

1. Run the following command on a terminal, in the directory your repository is stored at to add the template to your repo asremote:git remote add template https://github.com/Capillary/cap-member-care-vulcan-replica

```
git remote add template https://github.com/Capillary/cap-member-care-vulcan-replica
```

```
git remote add template https://github.com/Capillary/cap-member-care-vulcan-replica
```

2. Run the following command to fetch all branches from the remote repository:git fetch --all

`git fetch --all`

`git fetch --all`

3. Run the following command to merge:git merge template/<branch to merge> --allow-unrelated-histories

```
git merge template/<branch to merge> --allow-unrelated-histories
```

```
git merge template/<branch to merge> --allow-unrelated-histories
```

> ❗️Note:Carefully resolve conflicts and merge code to ensure proper updating.

## ❗️Note:

Note:

Carefully resolve conflicts and merge code to ensure proper updating.

# Sharing Member Care Replica Apps Across Organizations

Member Care replica apps can be shared across multiple organisations. Once shared the organisation must enable the Member Care override from the Vulcan UI.

To share a Member Care replica app across multiple organizations, follow these steps:

1. In the Vulcan UI, go to the Vulcan application you want to share.

In the Vulcan UI, go to the Vulcan application you want to share.

2. In edit mode, navigate to the basic details section and select the organizations to share to.

In edit mode, navigate to the basic details section and select the organizations to share to.

![](https://files.readme.io/92e7bab010bfec78a787c6f8995788e5732947c1b5a44b7ca7809ff1f600cf50-image.png)

3. SelectUpdate applicationto apply the changes. The application is shared in view-only mode with the recipient organisation.

SelectUpdate applicationto apply the changes. The application is shared in view-only mode with the recipient organisation.

4. Override the Member Care UI with the shared application in the recipient organisation.

Override the Member Care UI with the shared application in the recipient organisation.

> 📘NoteShared Vulcan apps are view-only for recipient organisations and can’t be edited, deleted, or disabled. If Member Care override is enabled, recipient organisations cannot change which organizations have access to the original app.Vulcan applications can be shared with organisations that the user has access to.

## 📘Note

Note

- Shared Vulcan apps are view-only for recipient organisations and can’t be edited, deleted, or disabled. If Member Care override is enabled, recipient organisations cannot change which organizations have access to the original app.

- Vulcan applications can be shared with organisations that the user has access to.

# Additional UI Customisations

## Adding a new route in the left navigation menu

The replica template comes preconfigured with the default Member Care navigation options. Using Vulcan, you can customise these options and add custom navigations links.

To enable the collapsible left navigation, ensure thatuseLatestLeftNavigationis set tofalseis set in theapp-configfile on your project.

`useLatestLeftNavigation`

`app-config`

Thenavigation.jsfile includes the customisation for the collapsible left navigation bar on Member Care.

`navigation.js`

![](https://files.readme.io/f7e5d74-image.png)

To add a new route in the left navigation menu, follow these steps:

1. Navigate to your project directory and open a terminal interface.

Navigate to your project directory and open a terminal interface.

2. Generate a new page using the following command:npm run generate

Generate a new page using the following command:

`npm run generate`

`npm run generate`

3. Choosepagesas the type of component when prompted.

Choosepagesas the type of component when prompted.

4. Give an appropriate name for the page when prompted.

Give an appropriate name for the page when prompted.

5. Follow the remaining setup procedure as prompted by the system.

Follow the remaining setup procedure as prompted by the system.

![](https://files.readme.io/8378209-image2.png)

6. Start the page development by following thereact development process.

Start the page development by following thereact development process.

7. Add the following code to theroutes.jsfile to test your changes as a page:{
   exact: true,
   path: `/loadWhateverYouWant`,
   type: 'newRoute',
   component: NewPage,
 },

Add the following code to theroutes.jsfile to test your changes as a page:

`routes.js`

```
{
   exact: true,
   path: `/loadWhateverYouWant`,
   type: 'newRoute',
   component: NewPage,
 },
```

```
{
   exact: true,
   path: `/loadWhateverYouWant`,
   type: 'newRoute',
   component: NewPage,
 },
```

> 📘Note:The details of the fields are as follows:FieldDescriptionpathThe route path URL.componentName of the component use during the generation process.

## 📘Note:

Note:

The details of the fields are as follows:

| Field | Description |

| --- | --- |

| path | The route path URL. |

| component | Name of the component use during the generation process. |



1. Add the new route to thenavigation.jsfile to view it as a left navigation link.

`navigation.js`

```
{
    label: 'Your OWN route',
    value: 'newRoute',
    route: '/loadWhateverYouWant',
    icon: '',
    defaultExpanded: false,
    children: [],
},
```

```
{
    label: 'Your OWN route',
    value: 'newRoute',
    route: '/loadWhateverYouWant',
    icon: '',
    defaultExpanded: false,
    children: [],
},
```

> 📘Note:The details of the fields are as follows:FieldDescriptionlabelThe name of the route path.routeThe route path URL.iconCustom icon that is displayed on the left navigation menu.defaultExpandedThe default state of the navigation menu.childrenThe properties related to child pages of the menu.

## 📘Note:

Note:

The details of the fields are as follows:

| Field | Description |

| --- | --- |

| label | The name of the route path. |

| route | The route path URL. |

| icon | Custom icon that is displayed on the left navigation menu. |

| defaultExpanded | The default state of the navigation menu. |

| children | The properties related to child pages of the menu. |



## Adding a custom link in the left navigation menu

To enable the collapsible left navigation, ensure thatuseLatestLeftNavigationis set tofalseis set in theapp-configfile on your project.

`useLatestLeftNavigation`

`app-config`

Thenavigation.jsfile includes the customisation for the collapsible left navigation bar on Member Care.

`navigation.js`

Add the following to thenavigation.jsfile along with the custom URL:

`navigation.js`

```
{
  label: ( // define custom markup and label for your left nav item here
   <>
     <CapTooltip
       title={
         <FormattedMessage
           {...messages.requestTooltip}
         />
       }
     >
       Google Link
       <CapImage src={OpenInIcon} alt="Open In Icon" />
     </CapTooltip>
   </>
 ),
 value: 'google_customUrlLink', // this value should always be of pattern <sometext>_customUrlLink in order for this feature to work
 route: '', // this will be empty always
 url: 'https://www.google.com/' // specify the custom URL to open on click
}
```

```
{
  label: ( // define custom markup and label for your left nav item here
   <>
     <CapTooltip
       title={
         <FormattedMessage
           {...messages.requestTooltip}
         />
       }
     >
       Google Link
       <CapImage src={OpenInIcon} alt="Open In Icon" />
     </CapTooltip>
   </>
 ),
 value: 'google_customUrlLink', // this value should always be of pattern <sometext>_customUrlLink in order for this feature to work
 route: '', // this will be empty always
 url: 'https://www.google.com/' // specify the custom URL to open on click
}
```

> 📘Note:Replace theurlfield with your custom URL.

## 📘Note:

Note:

Replace theurlfield with your custom URL.

`url`

![](https://files.readme.io/d78176c-image7.png)

## Embed a pre-developed Vulcan application component

You can embed a pre-developed Vulcan application component from the Vulcan platform into another Vulcan application. This allows you to import and add multiple Vulcan application components to a new Vulcan application in development.

To embed a  Vulcan application component onto another Vulcan application, follow these steps:

1. On the Vulcan UI, navigate to the Vulcan application that contains the components to be embedded.

On the Vulcan UI, navigate to the Vulcan application that contains the components to be embedded.

2. Host and enable UAT or Prod modefor the application if it is not already done.

Host and enable UAT or Prod modefor the application if it is not already done.

3. Select theicon next to the UAT or Prod URL. This action lists the exported components for the application for the particular build (UAT or PROD).

Select theicon next to the UAT or Prod URL. This action lists the exported components for the application for the particular build (UAT or PROD).

![Flaticon Image](https://dev.intouch.capillarytech.com/vulcan/ui/c2c6d25f0e2c00ea2763.png)

![](https://files.readme.io/cb521ca5cc5665ae48364c23c7974777133455ad0df46527871f5b5b100eb704-image.png)

4. Select theicon next to the component to copy the component configuration code to the clipboard.

Select theicon next to the component to copy the component configuration code to the clipboard.

![Flaticon Image](https://cdn-icons-png.flaticon.com/128/9428/9428873.png)

![](https://files.readme.io/3aaa646baedac58da0e0225dc1055e224552b2faa84d6d5458428aa933489f0c-image.png)

5. Navigate to the local project folder of the Vulcan application in development, and paste the code into the required section. For example, if you want to import a component to customer search, paste the copied code under the respectiveCustomerSearch.jssection.

Navigate to the local project folder of the Vulcan application in development, and paste the code into the required section. For example, if you want to import a component to customer search, paste the copied code under the respectiveCustomerSearch.jssection.

`CustomerSearch.js`

![](https://files.readme.io/8f2bfa4a7fac7a8d9a135c319c51a2335c4078ae6c838ce7382cd197138d6b87-image.png)

6. Import the required components according to the instructions provided in the comments.

Import the required components according to the instructions provided in the comments.

![](https://files.readme.io/dccfd0c4e3fd73f9d15e7888ae55a51500a8ecd968cf0c0f9bb6dd9903a9fb5f-image.png)

7. Navigate toapp.jsin the project directory and paste thescopeunderVulcanSDKSetup>importedScopes. This ensures that the required flags are set to the local storage during app load up on the browser.

Navigate toapp.jsin the project directory and paste thescopeunderVulcanSDKSetup>importedScopes. This ensures that the required flags are set to the local storage during app load up on the browser.

`app.js`

`VulcanSDKSetup`

`importedScopes`

![](https://files.readme.io/72d8bafb7140f9d058bd0590b685ef9ea9d58c276c8574e778e74ddd8d391275-image6.png)

> 📘Note:The copied code can be used for any React 18-based project using the Vulcan SDK (Vulcan application or product UI) provided by the Capillary tech team.

## 📘Note:

Note:

The copied code can be used for any React 18-based project using the Vulcan SDK (Vulcan application or product UI) provided by the Capillary tech team.

1. Hostthe new application and enable UAT or Prod mode to view the changes.

> 📘Note:Enabling UAT or Prod for the application is necessary to prevent errors and to view and copy modules that are exported from the components.

## 📘Note:

Note:

Enabling UAT or Prod for the application is necessary to prevent errors and to view and copy modules that are exported from the components.

# Enabling Sharingan functionality

To enable Sharingan functionality on a Member Care replica, follow these steps:

1. Open the project folder on your local machine.

Open the project folder on your local machine.

2. Navigate to the filewebapp/app/components/molecules/IdentifiersOptions/IdentifierOptions.js.

Navigate to the filewebapp/app/components/molecules/IdentifiersOptions/IdentifierOptions.js.

3. Find the section of the code that contains{actionsContainerName}and uncomment the line.

Find the section of the code that contains{actionsContainerName}and uncomment the line.

![](https://files.readme.io/b6ff34597fcdd6c9a40db507c64720aa0555211f9e46cb0d2052e1da1a06d94f-image.png)

4. Build and host the application on the Vulcan platform. Once hosted, the Sharingan app is visible on the UI if configured for the organization.

Build and host the application on the Vulcan platform. Once hosted, the Sharingan app is visible on the UI if configured for the organization.

> 📘NoteThe rendering of the Sharingan app in the UI is managed within the code.

## 📘Note

Note

The rendering of the Sharingan app in the UI is managed within the code.
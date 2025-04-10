# Application Development Process

After installing the necessary dependencies, navigate to your project directory and begin theReact application development process. You can use a code editor like Visual Studio Code (VS Code) for writing and managing code.

The development process also includes the following steps:

- Generating a React Container

- State Transitions with React Router

- Setting Up Internationalization

- Pushing Data to Google Tag Manager

- Starting and Building your Application

- Hosting a Vulcan Application

> 📘Note:All Vulcan components are based on Ant Design. Refer to theAnt Design component librarywhen developing react components using the Vulcan component library.

## 📘Note:

Note:

All Vulcan components are based on Ant Design. Refer to theAnt Design component librarywhen developing react components using the Vulcan component library.

# Generating a React Container

This process sets up a container and generates the entire component with index, messages, styles, reducer, saga, actions and constants files, allowing you to develop and add UI elements easily. This eliminates the need to refer to or copy other boilerplate components.

To generate a react component, follow these steps:

1. Navigate to your project directory and open a terminal interface.

2. Run the following command:npm run generate

`npm run generate`

`npm run generate`

3. Choose the generator type from the options.

> 📘Note:The types of generators available are:GeneratorDescriptionExampleOrganismsLarger UI components composed of smaller components.A header with a search bar and navigation linksPagesContainers that include various elements and other components to form a complete page.A dashboard page containing charts, tables, and other widgets.TemplatesPredefined layouts or structures with placeholders for content.An analytics dashboard template with sections for graphs, user metrics, and recent activities.

## 📘Note:

Note:

The types of generators available are:

| Generator | Description | Example |

| --- | --- | --- |

| Organisms | Larger UI components composed of smaller components. | A header with a search bar and navigation links |

| Pages | Containers that include various elements and other components to form a complete page. | A dashboard page containing charts, tables, and other widgets. |

| Templates | Predefined layouts or structures with placeholders for content. | An analytics dashboard template with sections for graphs, user metrics, and recent activities. |



1. Provide a name for the container.

2. Follow the setup procedure to complete the generation process.

![](https://files.readme.io/ab151a6-image15.png)

# State Transitions with React Router

Page containers created while generating a react container have a history property that uses React Router to do state transitions.

Sample:history.push('/state/route');

`history.push('/state/route');`

> 📘Note:Only use the part of the path that defines the state. For example, just /contact, and not the full URL likehttps://example.com/contact.Refer toroutes.jsfor the state route paths.

## 📘Note:

Note:

Only use the part of the path that defines the state. For example, just /contact, and not the full URL likehttps://example.com/contact.

Refer toroutes.jsfor the state route paths.

# Setting Up Internationalization During Development

The setup and files required for internationalization are created while generating a React container. To manually set up internationalization in the development process, follow these steps:

1. ImportinjectIntlfrom thereact-intlpackage using the following:import { injectIntl } from 'react-intl';

`injectIntl`

`react-intl`

`import { injectIntl } from 'react-intl';`

> 📘Note:TheinjectIntlpackage will be imported if you have already set up a React container.

## 📘Note:

Note:

TheinjectIntlpackage will be imported if you have already set up a React container.

`injectIntl`

1. Use injectIntl to wrap the component while exporting it, using the following:(withRouter(injectIntl(clearDataOnUnmount(Listing))));

```
(withRouter(injectIntl(clearDataOnUnmount(Listing))));
```

> 📘Note:Wrapping theinjectIntlcomponent will enableintlin the props section.

## 📘Note:

Note:

Wrapping theinjectIntlcomponent will enableintlin the props section.

`injectIntl`

`intl`

![](https://files.readme.io/5d06853-image13.png)

1. Create themessages.jsfile in your project folder for defining the messages.

`messages.js`

Sample:

```
import { defineMessages } from 'react-intl';  
export const scope = 'vulcanWebapp.components.pages.Listing';  
export default defineMessages({  
       searchPlaceholder: {  
         id: `${scope}.searchPlaceholder`,  
         defaultMessage: 'Enter appname to search...',  
        },  
     });
```

```
import { defineMessages } from 'react-intl';  
export const scope = 'vulcanWebapp.components.pages.Listing';  
export default defineMessages({  
       searchPlaceholder: {  
         id: `${scope}.searchPlaceholder`,  
         defaultMessage: 'Enter appname to search...',  
        },  
     });
```

![](https://files.readme.io/9571d1c-image4.png)

> 📘Note:Once the messages.js file has been created, you can use these in your component by using:<p>{formatMessage(messages.searchPlaceholder)}</p>

## 📘Note:

Note:

Once the messages.js file has been created, you can use these in your component by using:

<p>{formatMessage(messages.searchPlaceholder)}</p>

```
<p>{formatMessage(messages.searchPlaceholder)}</p>
```

> 📘Note:Themessages.jsfile will be created if you have already set up a React container.

## 📘Note:

Note:

Themessages.jsfile will be created if you have already set up a React container.

`messages.js`

1. ExtractformatMessageusing the following lines:

`formatMessage`

```
const { intl } = props;  
const { formatMessage } = intl;
```

```
const { intl } = props;  
const { formatMessage } = intl;
```

![](https://files.readme.io/d7663bd-image17.png)

1. From theintlprops use theformatMessagemethod that includes the ID and default message of the object.

`intl`

`formatMessage`

For example:

```
{formatMessage(messages.vulcanApplications)}
```

```
{formatMessage(messages.vulcanApplications)}
```

![](https://files.readme.io/5bf4a69-image9.png)

1. Once the development process is completed, run the following command:

`npm run extract-int`

`npm run extract-int`

> 📘Note:This will scan all the files namedmessages.jsand extract all strings, pasting them in theen.jsonfile.

## 📘Note:

Note:

This will scan all the files namedmessages.jsand extract all strings, pasting them in theen.jsonfile.

`messages.js`

`en.json`

Sample:

```
{  
	'vulcanWebapp.components.pages.Listing.searchPlaceholder': 'Enter appname to search.'  
}
```

```
{  
	'vulcanWebapp.components.pages.Listing.searchPlaceholder': 'Enter appname to search.'  
}
```

## Importing to Locize

Once you have generated the language .json file, you will need to import it to Locize.

Refer to theLocize documentationto import the file into your project.

# Pushing Data to Google Tag Manager

To facilitateFullStoryintegration, you can push data toGoogle Tag Manager(GTM).

- During the project setup, specify the Google Analytics (GA) and GTM tracking IDs when prompted by the CLI tool. This will configure the tracking IDs in the code.

- Use thepushDataToGTMutility orwindow.dataLayer.push(Ex. Cap.js) to push events with data to GTM.

![](https://files.readme.io/df0fa21-image7.png)

![](https://files.readme.io/a1d016c-image3.png)

# Starting and Building your Application

Once you have built the application you can test your application on localhost and build the application to be hosted on Vulcan.

To start or build the application, follow these steps:

1. Navigate to your project directory and open a terminal interface.

2. Run the following command tostartthe application on localhost:

`npm run start`

`npm run start`

![](https://files.readme.io/18ec36b-image1.png)

1. Run the following command tobuildthe application for deployment and hosting:

`npm run build`

`npm run build`

![](https://files.readme.io/1c8338c-image11.png)

![](https://files.readme.io/4524904-image5.png)

> 📘Note:Ensure the Vulcan app is created on the Vulcan UI platform first. The app ID is needed to validate:Authentication (vulcan_endpoint)Translation messages (if enabled during setup) (vulcan_endpoint)Intouch API calls (vulcan_endpoint)XAJA API calls (vulcan_endpoint)API extension calls (vulcan_endpoint)CRM node API calls (arya_endpoint)

## 📘Note:

Note:

Ensure the Vulcan app is created on the Vulcan UI platform first. The app ID is needed to validate:

- Authentication (vulcan_endpoint)

- Translation messages (if enabled during setup) (vulcan_endpoint)

- Intouch API calls (vulcan_endpoint)

- XAJA API calls (vulcan_endpoint)

- API extension calls (vulcan_endpoint)

- CRM node API calls (arya_endpoint)

> 📘Note:Theendpoints.jsfile is used to manage all API calls from the UI. Configure the local UI to point to any production environment for local testing (absoluteURLs).Third-party APIs can be called by defining them as endpoints. These need to be defined as full URLs in absoulteURLs and partialURLs. All endpoints are referenced in theapi.jsfile, where functions are defined to handle API calls for sagas.Export components via themfe-exposed-components.jsfile for embedding in other UIs, such as Member Care.

## 📘Note:

Note:

Theendpoints.jsfile is used to manage all API calls from the UI. Configure the local UI to point to any production environment for local testing (absoluteURLs).

`endpoints.js`

Third-party APIs can be called by defining them as endpoints. These need to be defined as full URLs in absoulteURLs and partialURLs. All endpoints are referenced in theapi.jsfile, where functions are defined to handle API calls for sagas.

`api.js`

Export components via themfe-exposed-components.jsfile for embedding in other UIs, such as Member Care.

`mfe-exposed-components.js`

# Hosting a Vulcan App

After completing application development and the build, the next steps involve uploading the build file to the Vulcan UI.

To upload and host your app, follow these steps:

1. Access the Vulcan UI.

2. Click the application to open the page.

3. ClickDeploymentsand thenUpload Build.

4. Enter the build description for your application.

5. ClickSelect zipand choose thebuild.zipfile from your device.

`build.zip`

> 📘Note:The maximum supported size is 50 MB.

## 📘Note:

Note:

The maximum supported size is 50 MB.

1. ClickConfirm uploadto upload the build and save changes.

2. After the upload is complete, enable UAT by clicking on the three dots under the Actions tab.

3. Identify the UAT URL generated and displayed in the Application Details section. This URL can be used for testing.

> 📘Note:Refer to the tutorialvideofor more information.

## 📘Note:

Note:

Refer to the tutorialvideofor more information.

1. After testing the application, enable Prod by clicking on the three dots under the Actions tab.

2. Identify the Prod URL generated and displayed in the Application Details section. This URL can be used to access your application after testing.

## Embedding Vulcan Application to Member Care UI

Embedding a Vulcan application into the native Member Care UI is currently unsupported and requires assistance from the Capillary UI team.

Developers can integrate Vulcan applications on the new Member Care, built on the Vulcan Framework, and embed the Vulcan Application within it.

Refer to the documentation onCustomizing the Member Care UI.

> 📘Note:For reference on embedding the application into Member Care, watch the demovideo.To embed a Vulcan app natively on Member Care, raise a JIRA request to the Capillary UI team.

## 📘Note:

Note:

For reference on embedding the application into Member Care, watch the demovideo.

To embed a Vulcan app natively on Member Care, raise a JIRA request to the Capillary UI team.

# Updating the Vulcan SDK

Updating the Vulcan SDK is essential to ensure that your project benefits from the latest features, performance enhancements, and bug fixes.

To update the Vulcan SDK follow these steps:

1. Open the project folder on your local machine and navigate to thepackage.jsonfile in the root folder.

`package.json`

2. Update the version number under the@capillarytech/vulcan-react-sdkpackage.

`@capillarytech/vulcan-react-sdk`

3. Open a terminal in your project directory and run the following command:Shellnpm install

`npm install`

`npm install`

The Vulcan SDK is now updated to the specified version.
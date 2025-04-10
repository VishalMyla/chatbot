# Getting started

# Prerequisites

- Know about terminologies used in Connect+-  Refer to documentation onConnect+ terminologies.

- OAuth credentials, API client secret and key- Connect+ supports only OAuth authentication. For information on how to create a client secret and key, refer to the documentationCreating an API client key and secret.

- Access to the relevant access groups- If you do not have sufficient access group permission, the API will not run successfully. For more information on setting access group permissions, refer to our documentation onaccess groups.

- Access to workspace- To get access to your Workspace, send an email to the access team ([email protected]) with the name of the Workspace that you want to access.

- FTP server for file transfer with appropriate access. Move access is required for uninterrupted movement of the files between folders.

# Creating dataflow

Dataflow is a defined sequence of steps or operations that you set up to collect data from a defined source, transform, or process data, and transfer it to a defined location.

To create a dataflow, follow the steps below:

1. On the Connect+ homepage, from the drop-down, select the workspace to add your dataflow.

![](https://files.readme.io/c9677f9-Select_workspace.gif)

1. Click onAdd dataflow.

![](https://files.readme.io/51f4ecb-add.gif)

1. In theDataflow nametext box, enter the name for the dataflow.

![](https://files.readme.io/9da1fae-dataflow_new.gif)

1. In theTemplatesection, clickSelect templateand from theDataflow templateswindow, select your preferred template.

![](https://files.readme.io/71b1087-save.gif)

1. ClickDone.

2. ClickContinue.

![](https://files.readme.io/2188740-Click_continue.gif)

The blocks to configure the template appear.

> 🚧NoteThese are based on the template selected and can differ from template to template.

## 🚧Note

Note

These are based on the template selected and can differ from template to template.

1. Refer to the documentation of the respective block and enter the details:

- Connect to Source- Data source information action block

- Decrypt-data- Encryption details action block

- Transform-data- Mapping header action block.

- Connect to Destination- API details action block

- Trigger- Schedule trigger action block

![](https://files.readme.io/964e6e0-Action_block.png)

1. ClickSave and continue

If all the inputs are valid, Connect + will successfully create the data flow. For monitoring the performance of dataflow, navigate to thePerformancepage. For more information, refer to thedocumentationon analysing dataflow.

![](https://files.readme.io/5329393-success.png)

# Viewing dataflow configuration

To view the configured dataflow details, perform the following:

1. From the home page, click on the dataflow you want to view.

2. Click theConfigurationtab.The tab displays the configuration details.

![](https://files.readme.io/16c05a3-Configuration_tab.png)

# Editing dataflow

At any point in time, you can navigate to the Connect+ home page, search for the dataflow and edit it. You cannot edit a live data flow. To edit a dataflow, follow the steps below:

1. Navigate to the home and search for the dataflow. Click on the kebab menu and selectEdit.

![](https://files.readme.io/6cfcde4-Search.png)

1. Click on any of the action blocks you wish to edit.

![](https://files.readme.io/0332c42-image.png)

1. Make the required changes.

2. ClickSave and continue.

![](https://files.readme.io/97fa140-image.png)

![](https://files.readme.io/20fcf8f-image.png)

# Stop and restart dataflow

## Stop dataflow

To stop a dataflow, perform the following steps:

1. On the Connect+ homepage, click on the kebab menu corresponding to the dataflow you wish to stop.

![](https://files.readme.io/2be9ddc-image.png)

1. ClickStop.

![](https://files.readme.io/9ca3288-image.png)

1. ClickYes, stopto stop the dataflow.

![](https://files.readme.io/ec300b9-image.png)

1. From theStatusdropdown, click onStoppedto view the stopped dataflow.

![](https://files.readme.io/6a85107-image.png)

The dataflow stops and the status changes toStopped.

## Restart dataflow

To start a stopped workflow, perform the following steps:

1. On the Connect+ homepage, click on the kebab menu corresponding to the template you wish to start.

![](https://files.readme.io/76f46ae-image.png)

1. ClickStart.

![](https://files.readme.io/e8e96b2-image.png)

The dataflow starts and the status changes toLive.

# Deleting dataflow

To delete a dataflow, perform the following steps:

1. On the Connect+ homepage, choose the dataflow you wish to delete and click on the corresponding kebab menu.

![](https://files.readme.io/2be9ddc-image.png)

1. ClickDelete.

![](https://files.readme.io/06e094c-image.png)

1. ClickYes, delete.

![](https://files.readme.io/03a98a4-image.png)

The dataflow is deleted and the status is changed toDeleted.

# Analyze dataflow performance

The Connect+ home page displays the list of dataflows running along with their performance status for the last 24 hours.

![](https://files.readme.io/0f44001-Home_page_Connectplus.png)

For a detailed dataflow analysis, click on the respective dataflow to view the detailed performance and error data.  Refer to theAnalyse dataflowfor documentation and dataflow analysis and refer toTroubleshooting guidefor troubleshooting steps.

Updatedabout 1 year ago
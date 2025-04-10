# Execution & Monitoring

# Execution of a Dataflow

After creating a dataflow, you can integrate it into applications. You can also import it to any API testing tool and execute or test it.

## Copying a Dataflow cURL

To copy the dataflow cURL,

1. Identify the Dataflow Scope:Go to theDataflowspage and select the tab based on the dataflow’s scope:My Dataflows→ For dataflows within your organization.Global Dataflows→ For dataflows at the global level.

Identify the Dataflow Scope:Go to theDataflowspage and select the tab based on the dataflow’s scope:

- My Dataflows→ For dataflows within your organization.

My Dataflows→ For dataflows within your organization.

- Global Dataflows→ For dataflows at the global level.

Global Dataflows→ For dataflows at the global level.

![](https://files.readme.io/822892a81b21e98b9053e7dc5251f22b991a9a055f89843f3cc38d133879f0a9-Dataflow_execution_my_global_dataflow.png)

4. Select the Dataflow:

Select the Dataflow:

- Click the dataflow you want to execute.

Click the dataflow you want to execute.

- Choose the version you want to run.

Choose the version you want to run.

1. Copy the cURL:On the dataflow composition page, hover overCopy curland click to copy the required cURL.B2B cURL → Use this when one system interacts with another (business to business).B2C cURL → Use this for customer-facing interactions where the system communicates directly with end users.📘NoteB2B cURL: Uses OAuth or Basic authorization.B2C cURL: Uses mobile OTPs or social logins for authorization.

Copy the cURL:On the dataflow composition page, hover overCopy curland click to copy the required cURL.

- B2B cURL → Use this when one system interacts with another (business to business).

- B2C cURL → Use this for customer-facing interactions where the system communicates directly with end users.

> 📘NoteB2B cURL: Uses OAuth or Basic authorization.B2C cURL: Uses mobile OTPs or social logins for authorization.

## 📘Note

Note

- B2B cURL: Uses OAuth or Basic authorization.

- B2C cURL: Uses mobile OTPs or social logins for authorization.

![](https://files.readme.io/e6dd96501e5f5770acc2df22346caf222208f85c343e84ec09878ac9784b00b1-copy_curl_dataflow_execution.png)

## Executing a Cross-Organizational Dataflow

Cross-organizational dataflows allow execution across different organizations.

### Execution Scope

- Global Dataflows:Defined at the global organization level and accessible to all organizations.

- Parent Dataflows:Defined in a parent organization and accessible to both self and its child organizations. Applicable for Connected Organizations.

- Organization Dataflows: Defined in your organization and available only for your organization.

> 📘NoteGlobal dataflows execute within the context of the calling organization, even though they are globally defined.Context Switching: Execution can switch from a parent organization to its child organization using a "context switch" block. However, execution cannot switch from a child organization to its parent.A parent organization cannot execute a dataflow from a child organization.

## 📘Note

Note

- Global dataflows execute within the context of the calling organization, even though they are globally defined.

- Context Switching: Execution can switch from a parent organization to its child organization using a "context switch" block. However, execution cannot switch from a child organization to its parent.

- A parent organization cannot execute a dataflow from a child organization.

### Testing a Cross-Organizational Dataflow

1. Copy the dataflow cURL.

Copy the dataflow cURL.

2. Import the cURL Command into an API testing tool.

Import the cURL Command into an API testing tool.

3. Set thex-cap-neo-dag-scopeHeader.global: Executes a dataflow from the global organization.parent: Executes a dataflow from the parent organization.org: Executes a dataflow from your organization.

Set thex-cap-neo-dag-scopeHeader.

`x-cap-neo-dag-scope`

- global: Executes a dataflow from the global organization.

`global`

- parent: Executes a dataflow from the parent organization.

`parent`

- org: Executes a dataflow from your organization.

`org`

7. Enter Body ParametersForPOSTandPUTmethods, provide the necessary request body parameters.

Enter Body Parameters

- ForPOSTandPUTmethods, provide the necessary request body parameters.

`POST`

`PUT`

9. Execute the DataflowRun the cURL command from the API testing tool.

Execute the Dataflow

- Run the cURL command from the API testing tool.

# Observibility & Monitoring

You can view and analyze the performance of your Neo API, the APIs used in the Neo dataflow, view the logs, etc, using theDev Console. The Dev Console helps in the monitoring and debugging process for the dataflow.

Updated6 days ago
# Save Extension Configurations

The Extension Configuration, also known asSecret Manageror the Configuration Manager, securely manages organization-specific configurations. This is primarily applicable to the Neo extension. It stores sensitive information such as API keys, passwords, and other configuration details and helps to eliminate the need to hardcode these values in Neo dataflows.

# Key Benefits and Features

- Centralized Configuration ManagementProvides a single location to view, request, and manage configurations for each organization.

Centralized Configuration ManagementProvides a single location to view, request, and manage configurations for each organization.

- Enhanced SecurityStores sensitive values securely to prevent exposure in dataflows. Values marked as secret remain masked for additional protection.

Enhanced SecurityStores sensitive values securely to prevent exposure in dataflows. Values marked as secret remain masked for additional protection.

- Request-Approval WorkflowRequires all modifications—adding, updating, or rejecting configurations—to follow a secure request-approval process, ensuring controlled and auditable updates.

Request-Approval WorkflowRequires all modifications—adding, updating, or rejecting configurations—to follow a secure request-approval process, ensuring controlled and auditable updates.

- Org-Specific ConfigurationsManages configurations specific to the selected organization in DevConsole.

Org-Specific ConfigurationsManages configurations specific to the selected organization in DevConsole.

- Real-Time Integration with Neo WorkflowsDynamically accesses and utilizes approved configurations within Neo workflows.

Real-Time Integration with Neo WorkflowsDynamically accesses and utilizes approved configurations within Neo workflows.

- Access via DAOUses Data Access Object (DAO) functions such asgetValueByKey()andgetParentValueByKey()to fetch stored values in dataflows.

Access via DAOUses Data Access Object (DAO) functions such asgetValueByKey()andgetParentValueByKey()to fetch stored values in dataflows.

`getValueByKey()`

`getParentValueByKey()`

- Config Request Management SectionAllows you to track the status of their submitted configuration requests.

Config Request Management SectionAllows you to track the status of their submitted configuration requests.

# How to Use the Secret Manager

1. Navigate toLogs and Metrics>Extensions Configurationsfrom the left pane of the Dev Console.

Navigate toLogs and Metrics>Extensions Configurationsfrom the left pane of the Dev Console.

![Secret Manager or Config Manager](https://files.readme.io/b634beb3c47a93fb32c1514c6b45049b09abc05414e0035c4c8f7dcfe61eff40-secret_manager_dev_console.png)

2. From the dropdown in the top-right corner, choose the organization whose configurations you want to manage.

From the dropdown in the top-right corner, choose the organization whose configurations you want to manage.

3. To submit new configurations,On theExtensions Configurationpage, clickAdd Config.Enter the configuration name underConfig Nameand its value underConfig Value.If required, enable theisSecretoption to mask sensitive information.ClickSubmitto complete the request.

To submit new configurations,

1. On theExtensions Configurationpage, clickAdd Config.

2. Enter the configuration name underConfig Nameand its value underConfig Value.

3. If required, enable theisSecretoption to mask sensitive information.

4. ClickSubmitto complete the request.

8. To edit an existing configuration, enter the configuration name underConfig Nameand the new value underConfig Value.

To edit an existing configuration, enter the configuration name underConfig Nameand the new value underConfig Value.

![Adding a config](https://files.readme.io/40969790f2885588d28c0afb8fdfa5c8bc4fd9f495d423afc73d7e3b1b9ed1d4-dev_console_add_config.gif)

Adding a config

1. To monitor the status of your submitted requests, clickConfig Requests. Requests remain in aPendingstate until approved.

`Pending`

![Config Requests](https://files.readme.io/43a80c0d97f23db1507fe578e9bf8b45e9765919a033a9c20e3239a7230b9689-dev_console_config_request.png)

Config Requests

# Configuration Approval Process

All newly added configurations require approval before use. You can also edit the value of an existing configuration, but any changes must go through the approval process. An approver with the necessary permissions reviews and approves configuration requests.

Overview of the Approval Flow

1. Submit Request – After you add a configuration, the request is automatically send for approval.

2. Reviewal and approval – The requests are sent to admins for approval.  If approved, the configuration is stored and becomes available for use in dataflows.

To approve,

1. From the DevConsole, navigate to theExtensions Configurationssection.

From the DevConsole, navigate to theExtensions Configurationssection.

![](https://files.readme.io/736cc9ff5a7ce610c60ac2f07cfe80b4616bd23e08281f28c3c12a2ead74ad6d-secret_manager_dev_console.png)

2. From the dropdown in the top-right corner, choose the organization whose configurations you want to manage.

From the dropdown in the top-right corner, choose the organization whose configurations you want to manage.

3. ClickConfig Requests.The configuration details are displayed.

ClickConfig Requests.The configuration details are displayed.

![Config Requests](https://files.readme.io/43a80c0d97f23db1507fe578e9bf8b45e9765919a033a9c20e3239a7230b9689-dev_console_config_request.png)

4. In the configuration modal, clickApprove.

In the configuration modal, clickApprove.

![](https://files.readme.io/247808f1924fa7438042fcdb3063e07bc716b54c34561213fca7cfdef491c95a-approve_config_secret_manager.png)

Once approved, the configuration request becomes available for use.

Updated9 days ago
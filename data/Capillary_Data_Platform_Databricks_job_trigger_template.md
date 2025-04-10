# Databricks job trigger template

The data bricks job trigger template allows you to trigger a data bricks notebook job that is already created. This template can be used to validate a set of records and further process the records that meet the validation requirements. The validation rules are defined in the Databricks notebook.

# Use case

A brand wants to ensure the accuracy and integrity of the data before processing them further. They decide to implement batch feed validations using Databricks.

The brand's data engineering team develops validation rules using Databricks. These rules include checks for data completeness, consistency, and accuracy. For example, they may check if each order contains valid customer information, product details, and payment information.

Further, the brand can use the Connect+ template to trigger the Databricks notebook at regular intervals.

# Configuring databricks job trigger template

To configure the Databricks job trigger dataflow, perform the below steps/actions:

1. In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

In theConnect-to-source sectionBlockenter the source server details where the sourcedata is present and the location for saving the processed file. SeeConnect to source.

2. In theDatabricks-Job-trigger-and-statusblock, enter the following information:Job ID: Enter the job ID of the Databricks job that needs to be triggered.Max retries:  This parameter defines the maximum number of attempts a file undergoes processing before it is marked as failed. By default, the maximum retries value is set to 10. When a Databricks job is triggered, and while it is running, subsequent job triggers must wait until the ongoing job is completed. The system periodically checks the status of the job every minute until either the job completes successfully or reaches the maximum retry count. If the job is still running after one minute, the system enters a retry loop, repeatedly checking the job status until it either completes or reaches the maximum retry count. If the maximum retry count is exceeded without successful completion, the file in the queue is considered unprocessed.dataBricks Processed Files Path:  This parameter specifies the destination file path where Databricks stores the files after executing the job. Regardless of whether the job succeeds or fails, the resulting files are stored at this location. Databricks uses the credentials entered in the "Connect to source" section to add the files to this location.dataBricksToken:  This parameter specifies the Databricks token used to secure authentication for the Databricks API instead of using passwords.In Databricks, user permissions and roles determine who can create personal access tokens. The workspace administrator sets these permissions and can create custom roles and groups with specific permissions. If you belong to a role or group with the right permissions, you can create access tokens by navigating to User Settings > Developer > Access Tokens in Databricks.dataBricksUrl- This parameter specifies the Databricks URL. If the URL is null, it retrieves the default value configured under Properties in the Processor Details of Databricks.Syntax: https://${DATABRICKS_HOST}/api/${DATABRICKS_API_VERSION}/jobsExample:https://capillary-scrum.cloud.databricks.com/api/2.1/jobs, where:DATABRICKS_HOST -https://capillary-scrum.cloud.databricks.comDATABRICKS_API_VERSION - 2.1

In theDatabricks-Job-trigger-and-statusblock, enter the following information:

![](https://files.readme.io/9e1b25b-image.png)

1. Job ID: Enter the job ID of the Databricks job that needs to be triggered.

Job ID: Enter the job ID of the Databricks job that needs to be triggered.

![](https://files.readme.io/2383cbb-Job_ID.png)

2. Max retries:  This parameter defines the maximum number of attempts a file undergoes processing before it is marked as failed. By default, the maximum retries value is set to 10. When a Databricks job is triggered, and while it is running, subsequent job triggers must wait until the ongoing job is completed. The system periodically checks the status of the job every minute until either the job completes successfully or reaches the maximum retry count. If the job is still running after one minute, the system enters a retry loop, repeatedly checking the job status until it either completes or reaches the maximum retry count. If the maximum retry count is exceeded without successful completion, the file in the queue is considered unprocessed.

Max retries:  This parameter defines the maximum number of attempts a file undergoes processing before it is marked as failed. By default, the maximum retries value is set to 10. When a Databricks job is triggered, and while it is running, subsequent job triggers must wait until the ongoing job is completed. The system periodically checks the status of the job every minute until either the job completes successfully or reaches the maximum retry count. If the job is still running after one minute, the system enters a retry loop, repeatedly checking the job status until it either completes or reaches the maximum retry count. If the maximum retry count is exceeded without successful completion, the file in the queue is considered unprocessed.

3. dataBricks Processed Files Path:  This parameter specifies the destination file path where Databricks stores the files after executing the job. Regardless of whether the job succeeds or fails, the resulting files are stored at this location. Databricks uses the credentials entered in the "Connect to source" section to add the files to this location.

dataBricks Processed Files Path:  This parameter specifies the destination file path where Databricks stores the files after executing the job. Regardless of whether the job succeeds or fails, the resulting files are stored at this location. Databricks uses the credentials entered in the "Connect to source" section to add the files to this location.

4. dataBricksToken:  This parameter specifies the Databricks token used to secure authentication for the Databricks API instead of using passwords.In Databricks, user permissions and roles determine who can create personal access tokens. The workspace administrator sets these permissions and can create custom roles and groups with specific permissions. If you belong to a role or group with the right permissions, you can create access tokens by navigating to User Settings > Developer > Access Tokens in Databricks.

dataBricksToken:  This parameter specifies the Databricks token used to secure authentication for the Databricks API instead of using passwords.In Databricks, user permissions and roles determine who can create personal access tokens. The workspace administrator sets these permissions and can create custom roles and groups with specific permissions. If you belong to a role or group with the right permissions, you can create access tokens by navigating to User Settings > Developer > Access Tokens in Databricks.

![](https://files.readme.io/d5ea981-databricks.png)

5. dataBricksUrl- This parameter specifies the Databricks URL. If the URL is null, it retrieves the default value configured under Properties in the Processor Details of Databricks.Syntax: https://${DATABRICKS_HOST}/api/${DATABRICKS_API_VERSION}/jobsExample:https://capillary-scrum.cloud.databricks.com/api/2.1/jobs, where:DATABRICKS_HOST -https://capillary-scrum.cloud.databricks.comDATABRICKS_API_VERSION - 2.1

dataBricksUrl- This parameter specifies the Databricks URL. If the URL is null, it retrieves the default value configured under Properties in the Processor Details of Databricks.Syntax: https://${DATABRICKS_HOST}/api/${DATABRICKS_API_VERSION}/jobsExample:https://capillary-scrum.cloud.databricks.com/api/2.1/jobs, where:

- DATABRICKS_HOST -https://capillary-scrum.cloud.databricks.com

- DATABRICKS_API_VERSION - 2.1

10. In theTriggerblock, enter the details to schedule the trigger. Refer toTriggerfor more information.

In theTriggerblock, enter the details to schedule the trigger. Refer toTriggerfor more information.

For troubleshooting information, refer totroubleshooting section.

Updated7 months ago
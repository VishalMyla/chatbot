# Steps to connect to BI Tool (PowerBi, Tableau)

## Steps to flow your Databricks data (handback data) in BI Tool (PowerBI, Tableau)

- PrerequisitesDatabricks licensefor the organisation, reach out to Databricks admin for more information.If you need to create an account reach out toAccess ControlTeam.Access/Licenseto client's third-party visualization tool.

Prerequisites

- Databricks licensefor the organisation, reach out to Databricks admin for more information.

- If you need to create an account reach out toAccess ControlTeam.

- Access/Licenseto client's third-party visualization tool.

- Steps to Connect PowerBi:Follow these instructions to connect to a databricks cluster with Power BI Desktop.Get the Server Hostname and HTTP Path from databricks.To get server hostname and HTTP Path -> Compute -> Select Cluster -> Advanced Settings -> JDBC/ODBCStart Power BI Desktop.Click Get data or File > Get data.Click Get data to get started.Search for Databricks, choose the Azure Databricks connector and click Connect.Enter the Server Hostname and HTTP Path.Optionally, enter the default database and catalog to use for the connection.Select your Data Connectivity mode.Import: A copy of the data from the selected tables and columns imports into Power BI Desktop. As you create or interact with visualizations, Power BI Desktop uses the imported data. To see underlying data changes after the initial import or the most recent refresh, you must import the full dataset again to refresh the data.Direct Query: As you create or interact with visualizations, Power BI Desktop queries the underlying data source, so you're always viewing current data.Click OK.Enter your authentication credentials:Personal Access Token: Enter your Databricks personal access token from the Requirements.Username / Password: Enter your Databricks username (typically your email address) and password from the Requirements. Username and password authentication may be disabled if your Databricks workspace is enabled for single sign-on (SSO). If you cannot log in by using your Databricks username and password, try using the Personal Access Token option instead.Azure Active Directory: Not applicable.Click Connect.Select the Databricks data to query from the Power BI Navigator.

Steps to Connect PowerBi:

- Follow these instructions to connect to a databricks cluster with Power BI Desktop.Get the Server Hostname and HTTP Path from databricks.To get server hostname and HTTP Path -> Compute -> Select Cluster -> Advanced Settings -> JDBC/ODBCStart Power BI Desktop.Click Get data or File > Get data.Click Get data to get started.Search for Databricks, choose the Azure Databricks connector and click Connect.Enter the Server Hostname and HTTP Path.Optionally, enter the default database and catalog to use for the connection.Select your Data Connectivity mode.Import: A copy of the data from the selected tables and columns imports into Power BI Desktop. As you create or interact with visualizations, Power BI Desktop uses the imported data. To see underlying data changes after the initial import or the most recent refresh, you must import the full dataset again to refresh the data.Direct Query: As you create or interact with visualizations, Power BI Desktop queries the underlying data source, so you're always viewing current data.Click OK.Enter your authentication credentials:Personal Access Token: Enter your Databricks personal access token from the Requirements.Username / Password: Enter your Databricks username (typically your email address) and password from the Requirements. Username and password authentication may be disabled if your Databricks workspace is enabled for single sign-on (SSO). If you cannot log in by using your Databricks username and password, try using the Personal Access Token option instead.Azure Active Directory: Not applicable.Click Connect.Select the Databricks data to query from the Power BI Navigator.

- Get the Server Hostname and HTTP Path from databricks.To get server hostname and HTTP Path -> Compute -> Select Cluster -> Advanced Settings -> JDBC/ODBC

- To get server hostname and HTTP Path -> Compute -> Select Cluster -> Advanced Settings -> JDBC/ODBC

- Start Power BI Desktop.

- Click Get data or File > Get data.

- Click Get data to get started.

- Search for Databricks, choose the Azure Databricks connector and click Connect.

- Enter the Server Hostname and HTTP Path.

- Optionally, enter the default database and catalog to use for the connection.

- Select your Data Connectivity mode.Import: A copy of the data from the selected tables and columns imports into Power BI Desktop. As you create or interact with visualizations, Power BI Desktop uses the imported data. To see underlying data changes after the initial import or the most recent refresh, you must import the full dataset again to refresh the data.Direct Query: As you create or interact with visualizations, Power BI Desktop queries the underlying data source, so you're always viewing current data.

- Import: A copy of the data from the selected tables and columns imports into Power BI Desktop. As you create or interact with visualizations, Power BI Desktop uses the imported data. To see underlying data changes after the initial import or the most recent refresh, you must import the full dataset again to refresh the data.

- Direct Query: As you create or interact with visualizations, Power BI Desktop queries the underlying data source, so you're always viewing current data.

- Click OK.

- Enter your authentication credentials:Personal Access Token: Enter your Databricks personal access token from the Requirements.Username / Password: Enter your Databricks username (typically your email address) and password from the Requirements. Username and password authentication may be disabled if your Databricks workspace is enabled for single sign-on (SSO). If you cannot log in by using your Databricks username and password, try using the Personal Access Token option instead.Azure Active Directory: Not applicable.

- Personal Access Token: Enter your Databricks personal access token from the Requirements.

- Username / Password: Enter your Databricks username (typically your email address) and password from the Requirements. Username and password authentication may be disabled if your Databricks workspace is enabled for single sign-on (SSO). If you cannot log in by using your Databricks username and password, try using the Personal Access Token option instead.

- Azure Active Directory: Not applicable.

- Click Connect.

- Select the Databricks data to query from the Power BI Navigator.

- Connect to Tableau Desktop manuallyFollow these instructions to connect to a cluster or SQL warehouse with Tableau Desktop.Get the Server Hostname and HTTP Path.Start Tableau Desktop.Click File > New.On the Data tab, click Connect to Data.In the list of connectors, click Databricks.Enter the Server Hostname and HTTP Path.For Authentication, choose your authentication method and enter your authentication credentials.Click Sign In:To use a Databricks username and password from the Requirements, select Username / Password and enter your username for Username and your password for Password.After you successfully connect with Tableau Desktop, you can stop here.

Connect to Tableau Desktop manually

- Follow these instructions to connect to a cluster or SQL warehouse with Tableau Desktop.Get the Server Hostname and HTTP Path.Start Tableau Desktop.Click File > New.On the Data tab, click Connect to Data.In the list of connectors, click Databricks.Enter the Server Hostname and HTTP Path.For Authentication, choose your authentication method and enter your authentication credentials.Click Sign In:To use a Databricks username and password from the Requirements, select Username / Password and enter your username for Username and your password for Password.After you successfully connect with Tableau Desktop, you can stop here.

- Get the Server Hostname and HTTP Path.

- Start Tableau Desktop.

- Click File > New.

- On the Data tab, click Connect to Data.

- In the list of connectors, click Databricks.

- Enter the Server Hostname and HTTP Path.

- For Authentication, choose your authentication method and enter your authentication credentials.

- Click Sign In:To use a Databricks username and password from the Requirements, select Username / Password and enter your username for Username and your password for Password.

- To use a Databricks username and password from the Requirements, select Username / Password and enter your username for Username and your password for Password.

- After you successfully connect with Tableau Desktop, you can stop here.

Updatedover 1 year ago

Insights+ OND'22 Release Notes

- Insights+ OND'22 Release Notes

- FAQ
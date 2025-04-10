# OAuth Block

The OAuth block generates anOAuthtoken for a given key and secret during the dataflow execution.

# Example scenario

Requirement

A parent organization manages four child organizations, each requiring 10 unique APIs to perform organization-specific operations. This results in a total of 40 APIs—10 per child organization. This arrangement has caused redundancy, increased maintenance efforts, and heightened complexity. To simplify this, the OrgContextSwitch block is utilized. The OrgContextSwitch requires an OAuth token to connect to the child organization.

SolutionTo generate the OAuth token during the dataflow execution, use the OAuth block.

Refer to thisdataflowexample to understand its configuration for the use case.

Make sure you have access to ParentOrgNew org (51956) andaccess to Neo.

# Configuring the OAuth Block

To configure the OAuth block,

1. From the dataflow canvas, click on the connector.

2. Select theCapillary’s OAuthblock from the pop-up window.

3. In theBlock Name, enter the name of the block.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

4. In theClient Key,enter the key used to generate the OAuth token.

5. In theClient Secretfield, enter the secret to generate the OAuth token.Note: If theKeyandSecretare stored in theConfiguration Manager,you can use DAO functions to retrieve them.

6. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

7. ClickDone.

![Configuring Capillary's OAuth block](https://files.readme.io/f1a6a6929288ff958686592cbb02626839c80a11c4a6c7bd7bb355fcdc25e456-config_OAuth_block.gif)

Configuring Capillary's OAuth block

Updated6 days ago
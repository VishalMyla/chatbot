# OrgContextSwitch Block

This block is used in aconnected organizationcontext where a parent-child relationship exists. A parent organization can have one or multiple child organizations under it. Using this block, you can change the execution context from the parent organization to a specific child organization, ensuring that all subsequent blocks execute within the child’s context.

The request originates from the parent organization, and once the context is switched to a child organization, it cannot be reverted to the parent. However, you can execute certain blocks within the parent organization's context by selecting the execution context during block configuration.

# Example scenario

Requirement

A parent organization manages four child organizations, each requiring 10 unique APIs to perform organization-specific operations. This leads to a total of 40 APIs - 10 per child organization. This setup caused redundancy, higher maintenance efforts, and increased complexity.

Solution

To simplify this, use the OrgContextSwitch block. Create the 10 APIs at the parent organization level. Each API has the following workflow:

1. Execute parent-level operations.

Execute parent-level operations.

2. UseOrgContextSwitchto dynamically switch to the child organization making the request.

UseOrgContextSwitchto dynamically switch to the child organization making the request.

3. Complete child-specific operations.

Complete child-specific operations.

This approach removes 30 redundant APIs.

Refer to this exampledataflowto understand how it is configured for the use case.Make sure you have access to ParentOrgNew org (51956) andaccess to Neo.

# Configuring the OrgContextSwtich block

To configure the OrgContextSwtich block,

1. From the dataflow canvas, click on the node and select theOrgContextSwitchblock.

From the dataflow canvas, click on the node and select theOrgContextSwitchblock.

2. In theBlock Name, enter the name of the block.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

In theBlock Name, enter the name of the block.Note: Block names cannot contain spaces or special characters, except for underscores (_). Use camelCase or snake_case formatting.

3. In theAuthorizationfield, enter the basic authorization to access the child organization.

In theAuthorizationfield, enter the basic authorization to access the child organization.

4. In theX-CAP-API-AUTH-ORG-IDfield, enter the orgID of the child organization.

In theX-CAP-API-AUTH-ORG-IDfield, enter the orgID of the child organization.

5. In theX-CAP-API-AUTH-KEYfield, enter the authorization key of the child organization.

In theX-CAP-API-AUTH-KEYfield, enter the authorization key of the child organization.

6. In theX-CAP-API-AUTH-ENTITY-IDfield,enter the entity ID of the child organization.

In theX-CAP-API-AUTH-ENTITY-IDfield,enter the entity ID of the child organization.

7. If authenticating using the OAuth token, in theX-CAP-API-OAUTH-TOKENfield, enter the OAuth token required to access the child organization.Note:  You can create the OAuth Token using theOAuth block.

If authenticating using the OAuth token, in theX-CAP-API-OAUTH-TOKENfield, enter the OAuth token required to access the child organization.Note:  You can create the OAuth Token using theOAuth block.

8. In theBlock Context Execution Strategyfield, choose the execution context. The execution contexts available are CHILD and PARENT.If the execution strategy is set toCHILD, all blocks following theOrgContextSwitchblock will execute within the child organization’s context.If the execution strategy is set toPARENT, the MongoDB, Redis Evict, and Kafka blocks will operate within the context of the parent organization, while other blocks will function within the context of the child organization.

In theBlock Context Execution Strategyfield, choose the execution context. The execution contexts available are CHILD and PARENT.

- If the execution strategy is set toCHILD, all blocks following theOrgContextSwitchblock will execute within the child organization’s context.

- If the execution strategy is set toPARENT, the MongoDB, Redis Evict, and Kafka blocks will operate within the context of the parent organization, while other blocks will function within the context of the child organization.

11. Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

Configure theinput execution logic,cachable feature, anddefine the execution pathas per the requirement.

12. ClickDone.

ClickDone.

![Configuring OrgContextSwitch block](https://files.readme.io/ecd6a7ac10887449bc0d8af2f53fdfd69bed30a424535a29e95568125143c8ee-19.02.2025_17.16.46_REC_configuring_orgcontextswitch.gif)

Configuring OrgContextSwitch block

Updated6 days ago
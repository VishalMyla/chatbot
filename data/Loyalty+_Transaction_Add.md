# Transaction Add

## Simulate transaction activity

Description: The use case of this API is to show registered customers what benefits they will be getting before actually making the transaction. Currently, Simulation is only supported for Transaction Add only.

How to enable simulation API support for any org.

Step 1: To enable simulations for any org, we must have to enable the below config for the respective org.“CONF_ENABLE_SIMULATION_API_MODE“.

This can be done from the EMF configuration page by Admin.

Step 2: Go to -> organization settings -> Authentication -> Access GroupCreate or edit group and provide written permission for Event Simulation to specified till/store.

![](https://files.readme.io/ca40e78-Event_Simulation.png)

Once this is enabled, we can make simulation API calls.

Simulation API is supported for regular transaction type.Rate Limit: Currently there is no rate limit set for this API specifically.  It follows the org-level-defined rate

Here is the link to API documentation :Click here

Updatedover 1 year ago
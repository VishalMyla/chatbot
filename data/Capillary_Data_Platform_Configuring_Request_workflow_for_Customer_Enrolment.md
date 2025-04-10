# Configuring Request workflow for Customer Enrolment

This request is mapped to a standard workflow and allows you to submit requests to enrol badges for customers.

## Issue badges standard workflow

As part of the standard workflow, the Capillary platform provides a two-step approval process involving a Maker and Checker-based workflow.

1. Users with “CanMakeRequest” access can submit a request to enrol a customer in badges.

2. Users with “CanCheckRequest” access can approve or reject the request.

Once a Checker approves a request, the system executes it, enrolling the customer in the badges.

### Configurations

You can enableAuto-approvalconfiguration to enable auto-approval of certain user requests.

To configure, from the Request Workflows list, navigate toIssue_badge>Edit request workflow mapping, turn on theAuto-approval flagtoggle and clickSave

![](https://files.readme.io/01c2285-issue_badge.gif)

### APIs to create, approve and retrieve request details

- Creating a request -<https://docs.capillarytech.com/reference/earn-badge-issue-badge-to-single-customercustomer-earns-the-badge>

- Approving a request -https://docs.capillarytech.com/reference/approve-or-reject-a-request

- Retrieve request details -https://docs.capillarytech.com/reference/get-request-info

Updated10 months ago
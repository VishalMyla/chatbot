# Recommendations

## 

The recommendation engine predicts the list of suitable products for a customer based on his/her previous orders, frequent orders, search items, trending products, cart items, and other user activities.

The following are the host URLs (rcmd_host) forrecommendations.

`recommendations`

## Host URLs

- India:https://incrm.cc.capillarytech.com

- Singapore:https://sgcrm.cc.capillarytech.com

- EU:https://eucrm.cc.capillarytech.com

- Testing:https://crm-staging-new.cc.capillarytech.com

- Staging:https://crm-nightly-new.cc.capillarytech.com

## Status Codes

### Error Codes

Code | Description400 | Client sent an invalid request — such as lacking required request body or parameter. For example, SKU is an object that MUST use keys that match the regular expression: ^[a-zA-Z0-9.-_]+$, the count is not a positive integer.401 | Client failed to authenticate with the server due to invalid or missing authentication details.403 | Forbidden error refers that the client is authenticated but does not have permission to access the requested resource.404 | The requested resource does not exist. For example, SKU does not exist in the database.405 | Invalid HTTP method.501 | Currently, the Store filter is not implemented.
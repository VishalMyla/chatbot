# Configure firebase

In the Google Firebase, perform the following:

1. OpenGoogle Firebaseand create the project. Refer toFirebase documentation.

2. Set up cloud messaging. Refer toCloud messaging documentation.

![](https://files.readme.io/7df9c02-Messaging.png)

1. Navigate to project settings and define a custom role with below permissions:fcmdata.deliverydata.listfirebase.clients.getfirebase.clients.listfirebase.projects.getfirebasenotifications.messages.createfirebasenotifications.messages.deletefirebasenotifications.messages.getfirebasenotifications.messages.listfirebasenotifications.messages.updateiam.serviceAccounts.getcloudmessaging.messages.createThe role assigned to the service account determines the level of access and permissions it has within your Firebase project. Choosing the appropriate role ensures that the service account has the necessary privileges to perform required tasks. For information on how to create a custom role, refer toCustom role documentation.

- fcmdata.deliverydata.list

- firebase.clients.get

- firebase.clients.list

- firebase.projects.get

- firebasenotifications.messages.create

- firebasenotifications.messages.delete

- firebasenotifications.messages.get

- firebasenotifications.messages.list

- firebasenotifications.messages.update

- iam.serviceAccounts.get

- cloudmessaging.messages.createThe role assigned to the service account determines the level of access and permissions it has within your Firebase project. Choosing the appropriate role ensures that the service account has the necessary privileges to perform required tasks. For information on how to create a custom role, refer toCustom role documentation.

![](https://files.readme.io/43676c1-Permission.png)

1. Create a service account with the newly created custom role permission. For information on service account creation, refer toService account documentation. It is recommended to use a service account name that helps to identify the purpose and its role in the project.

![](https://files.readme.io/c49a5a5-Service_account.png)

![](https://files.readme.io/c046c9f-Service_account_created.png)

1. Generate a new service account private key. This enables you to authenticate and authorize requests made by your SaaS platform.It is recommended to use the key type as JSON.  This provides the key in a structured and easily readable key file in JSON format. For information on how to create the service account private key, refer toService account key documentation.

Generate a new service account private key. This enables you to authenticate and authorize requests made by your SaaS platform.

It is recommended to use the key type as JSON.  This provides the key in a structured and easily readable key file in JSON format. For information on how to create the service account private key, refer toService account key documentation.

![](https://files.readme.io/ef7882e-Key.png)

## Gateway Configuration

To enable mAPP SDK Channel and the push notifications, the team setting up the Firebase account for the brand must raise a ticket with the gateways team with details requested by them.
# Email setup

## Email Client onboarding

![](https://files.readme.io/7b802bf-image.png)

Step 1: The Gateway team requires the following prerequired details from the CSM team about the client to proceed with the onboarding process.

1. Sender label/sender name: This represents the name by which the clients want to send the email to their customers.eg. Like capillary tech. wants to communicate regarding Capillary academy programs this will be the label for them -

![](https://files.readme.io/8059ff3-image.png)

1. Sender/Reply to ID: Here Sender ID refers to the email id that the org wants to use to send the email. e.g. in the above image "[email protected]" is the sender id.The org chooses one of the two options, either they choose the sender id itself to receive the reply mail or they use the "Reply to" Email ID for getting the reply mail separately.

2. Custom/Capillary IP: The IP address that we use while sending the email can be of two types, either Custom IP(dedicated to the brand) or Capillary's IP.Generally, well-established brands use a custom IP address.Whereas the brands new in the journey use the Capillary IP address. This is done to avoid sending emails to the Spam mail section. This all depends on the IP ranking based on the authenticity that is done by the Email providers(e.g. Gmail & Yahoo)

Step 2: Now if the client opts for Custom IP then a relay ticket is generated to the gateways team. Here Gateway team follows a convention for naming these domains.Intouch(our system)--> Send Grid(vendor)

Step 3: Here we have to create the sub-account on the vendor side. Creation of the DNS records for the domains. DNS details are to be added to the client panel and verified at the backend.

Step 4: The CSMs or the gateway team can enter the existing details in -

Org Settings > Domain Mapping+Channel Count Info

Step 5: For OTP & Transactional mails, the config team/CSMs should enter details in -Org Settings > Setup Wizard > Campaigns

There can be scenarios wherein emails get soft/hard bounced which eventually starts to impact the delivery. In this case, all you need to do is whitelist such emails (which are unable to receive messages triggered from Capillary), on the Capillary Engage+ setting. We now give the option to upload and whitelist a bigger chunk of emails at once.You can find this option under Engage+ settings.

Go to Engage+ settings > Email whitelisting > Upload the csv > Done!

Updatedover 1 year ago
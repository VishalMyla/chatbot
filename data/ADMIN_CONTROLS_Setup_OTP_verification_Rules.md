# Setup OTP verification Rules

To configure rules for OTP, perform the following:

1. Navigate toOrganisation settings > Organisation setup > OTP configurations.

Navigate toOrganisation settings > Organisation setup > OTP configurations.

2. Select theTime Hashed random OTP code generationcheckbox to enable time-hashed random OTP generation.

Select theTime Hashed random OTP code generationcheckbox to enable time-hashed random OTP generation.

3. In theSet OTP code lengthtextbox, enter the required OTP length. The maximum length allowed is 50 characters.

In theSet OTP code lengthtextbox, enter the required OTP length. The maximum length allowed is 50 characters.

4. In theOTP Code validity periodtext box, enter the OTP code validity in minutes.

In theOTP Code validity periodtext box, enter the OTP code validity in minutes.

5. Select theSet OTP code expiration time in minutescheckbox to enable the system to check for only recently generated OTP codes. Otherwise, it checks for any of the unexpired OTP codes.

Select theSet OTP code expiration time in minutescheckbox to enable the system to check for only recently generated OTP codes. Otherwise, it checks for any of the unexpired OTP codes.

6. Select theMask the otp, access basedcheckbox to mask the OTPs. For more information, refer to the sectionMasking OTPs.

Select theMask the otp, access basedcheckbox to mask the OTPs. For more information, refer to the sectionMasking OTPs.

7. From theOTP Code typedrop-down, select the OTP code type. The available options are numeric and Alphanumeric.

From theOTP Code typedrop-down, select the OTP code type. The available options are numeric and Alphanumeric.

8. Select theAuthorize redemptions with missed callto enable authorization of the OTP through a missed call from the number on which the OTP was received.

Select theAuthorize redemptions with missed callto enable authorization of the OTP through a missed call from the number on which the OTP was received.

9. From theCommunicate OTP viadrop-down, select the channel through which the OTP needs to be sent.The platform permits the sending of OTPs based on the channels selected. For instance, if an attempt is made to send an OTP via the Zalo channel while the configuration specifies only "SMS," the OTP will not be sent.The available options are:EmailSMSWhatsappZALOBoth Email and SMSBoth Email and WHATSAPPBoth Email and ZALOBoth SMS and WHATSAPPBoth SMS and ZALOEmail if available, else SMSEmail if available, else WHATSAPPEmail, WHATSAPP, and SMSEmail, WHATSAPP, and ZALO

From theCommunicate OTP viadrop-down, select the channel through which the OTP needs to be sent.The platform permits the sending of OTPs based on the channels selected. For instance, if an attempt is made to send an OTP via the Zalo channel while the configuration specifies only "SMS," the OTP will not be sent.The available options are:

1. Email

2. SMS

3. Whatsapp

4. ZALO

5. Both Email and SMS

6. Both Email and WHATSAPP

7. Both Email and ZALO

8. Both SMS and WHATSAPP

9. Both SMS and ZALO

10. Email if available, else SMS

11. Email if available, else WHATSAPP

12. Email, WHATSAPP, and SMS

13. Email, WHATSAPP, and ZALO

23. ClickSubmit.

ClickSubmit.

# Masking OTPS

When enabled, OTPs will be hidden in the following GET API calls:

- v1.1/customer/interactions

- v2/customers/interactions

![](https://files.readme.io/feaf34a-SMS.png)

Simultaneously, you can configure it to allow users with specific access privileges to access and view the OTPs. In such cases, the system uses an internal API,v2/internal/customers/interactions.

`v2/internal/customers/interactions`

Updatedabout 1 year ago
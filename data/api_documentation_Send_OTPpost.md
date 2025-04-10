# Send OTPpost

To complete a staff account creation, you (admin users) need to validate the mobile number and email id through OTP sent to the registered identifiers to complete the account creation.

# Query parameter

| Parameter | Description |

| --- | --- |

| otp | Purpose of the OTP validation. |



# Body parameter

| Parameter | Description |

| --- | --- |

| id | Unique id of the staff. |

| username | Registered username of the staff. |

| mobile | Registered mobile number of the staff to send OTP.  You can use this to validate your mobile number and also to authenticate your login. |

| email | Registered email id of the staff to send OTP.  You can use this to validate email id and also to authenticate login. |



# Response parameter

| Parameter | Description |

| --- | --- |

| entity | An identifier or ID related to a specific entity in the system. |

| warnings | A list containing any warnings related to the operation or request. |

| errors | A list containing any errors related to the operation or request. |

| success | Indicates whether the operation or request was successful. |



`Try It!`
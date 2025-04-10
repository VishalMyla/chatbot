# Troubleshooting guide

# General instructions

- For Connect+ cluster-specific URLs, refer to thedocumentation on accessing Connect+.

- For merging, do not upload multiple files at a time.  Upload only two files at a time.

- Make sure that the FTP credentials are correct and that the user has the appropriate access. Move access is required for the uninterrupted movement of the files between FTP folders.

- Make sure that the correct Intouch org is selected in the Transform block.

- Make sure that the expressions used are correct.

- Make sure that only the files specified for acceptance are uploaded. For example, if CSV files are specified for acceptance do not add .xlxs in the FTP path.

- Make sure that the API parameters are entered correctly using the appropriate capitalization. For example, if the source is INSTORE, it should be entered as INSTORE and not Instore.

- Make sure that the date format is in YYYY-MM-DD.

- Avoid duplicate entries in the file.

- Make sure that you have the appropriate access to the workspace

- Make sure that your API credentials have appropriateaccess grouppermissions.

| Problem | Probable cause | Recommended action |

| --- | --- | --- |

| 631 ERR_LOYALTY_BILL_AMOUNT_NEGATIVE | Transaction amount cannot be negative | Enter the correct transaction amount |

| 631	ERR_RETURN_TXN_NOT_EXISTS | The return transaction does not exist | Enter the return transaction details |

| 631	DUPLICATE_GENERIC_COUPON_CODE | Duplicate coupon codes | Make sure that the coupon codes are unique |

| 665	ERR_LOYALTY_BILL_GROSS_AMOUNT_NEGATIVE | Transaction gross amount cannot be negative | Enter the correct transaction amount |

| 666	ERR_LOYALTY_BILL_DISCOUNT_NEGATIVE | Transaction discount cannot be negative | Enter the correct transaction amount |

| 661	EMPTY_REDEMPTION_ID | No Redemption id passed | Enter the redemption ID |

| 661	ERR_LOYALTY_LINEITEM_AMOUNT_NEGATIVE | lineitem with negative amount is not allowed | Enter the correct transaction amount |

| 604	EMPTY_VALIDATION_CODE | No otp passed | Enter validation code |

| 604	ERR_NULL_UUID | No or invalid uuid passed | Enter valid UUID |

| 604	ERR_EXPECTED_DELIVERY_DATE_BEFORE_CREATED_DATE | created date is later to expected date | Enter the correct date |

| 604	ERR_LOYALTY_DUPLICATE_BILL_NUMBER | Duplicate bill number | Enter a unique bill number |

| 604	VOUCHER_ERR_ALREADY_USED | Voucher already used | Enter a unique voucher ID |

| 604	MULTIPLE_REDEMPTION_FOR_USER_AND_COUPON_NOT_ALLOWED | Coupon already used | Enter a unique redemption code |

| 8084	CUST_DETAILS_NOT_PASSED | Customer details not sent | Enter correct customer details |

| 8015	CUSTOMER_NOT_FOUND | Customer not found for the given identifiers | Enter correct customer details |

| Connection refused | Temporary error | Reload the page |

| Transaction processing in the FTP was successful; however, upon inspection of the user profile, the corresponding transaction was not found | Uploading multiple files at the same time | Upload only two files at a time |

| Failed to fetch extended fields | Temporary error | Try after some time |

| Transactions occasionally fail to enter the Capillary system | Temporary error | Reprocess the file |

| When attempting to create a workspace, the EU region option is not available for selection | Accessing the wrong cluster | Connect+ is available for each cluster separately now. Refer to thedocumentation on accessing Connect+ |

| The data does not undergo processing or rejection within the system | Invalid user credentials/file | Make sure that:- the user credentials are correct and the user has the appropriate access to the FTP folders- only the files specified for acceptance are uploaded. For example, if CSV files are specified for acceptance do not add .xlxs in the FTP path- the expressions are correct |

| The transaction CSV files in the FTP location have been moved to the processed folder, but the corresponding transactions are not accessible in the Member Care | Wrong Intouch org or FTP credentials | Make sure that:- the Intouch org is correct in the Transform data section- FTP credentials are correct |

| The member details are not loading properly on the Member Care UI | Wrong API details orWrong file name | Make sure that:- the API parameters are entered correctly using the appropriate capitalization. For example, if the source is INSTORE, it should be entered as INSTORE and not Instore- the file name |

| Test and Control template - User status not changing | Wrong data format in the source file | - In the file enter the test and control status in Small letters. For example, test, and control- Do not include the users whose status need not be changed |

| The registered user data is stored in the error folder | Expected behaviour | When a file is successful, the files will fall into the error folder with API_Error_Code status = 200 |

| Connect+ is rejecting the transaction | Multiple reasons | Make sure that:- the file does not contain duplicate records- the date format is YYYY-MM-DD |

| Information missing in the user profile | Wrong mapping of the fields | Map the fields correctly |

| File processing issue for files with more than 5 lakh rows. | Maximum attempt not enough | Set the Max Retries in the Connect to destination to 5 |

| Points allocation is not working as expected for a transaction having multiple line items | Incorrect bill amount information | Make sure that when entering the bill amount, you consider the cumulative sum of line item amounts. The points awarded during the bill level check are based on the overall bill amount, not individual line item amounts. Ensure accuracy by providing the correct sum of line item values to meet your requirements. |

| Files not processed | Inappropriate FTP access | Make sure that you have appropriate FTP access that allows you to move the files. Otherwise, the files will not get processed and be moved to the "Processed" folder. |

| 502 | Bad gateway error | Retry after some time. If the issue persists, raise a JIRA ticket and contact the Capillary sustenance team. |

| 504 | Gateway timeout error | Retry after some time. If the issue persists, raise a JIRA ticket and contact the Capillary sustenance team. |

| 520 | Bad response. | Retry after some time. If the issue persists, raise a JIRA ticket and contact the Capillary sustenance team. |

| 521 | The web server is down. | Retry after some time. If the issue persists, raise a JIRA ticket and contact the Capillary sustenance team. |

| Failed to generate OAuth token: access forbidden | - Incorrect credentials- Insufficient permissions to generate OAuth token.- Invalid redirect URI- Account restrictions- API restrictions | - Ensure the auth key and secret are correct.- Ensure you have the necessary permissions and access.- Verify if the redirect URI in the request matches the one registered with the OAuth provider.- Ensure the account used for authentication is active and not restricted.- Check for specific requirements or limitations for the API. |



[documentation on accessing Connect+](/docs/connect_plus#accessing-connect)

For any other codes, you can search with the error codehere.

Updated10 months ago
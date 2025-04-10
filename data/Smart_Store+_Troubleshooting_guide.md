# Troubleshooting guide

| Issue | Problem | Reasons |

| --- | --- | --- |

| Application Vendor Error | - Antivirus might be blocking InStore- Internet fluctuation | - Exclude antivirus from blocking InStore. and also "Documents and Settings" or My Documents folder from scanning.C:\Users<your account>\My Documents (Windows 7 and later)C:\Documents and Settings (Windows XP and Vista)- Ensure that your internet connection is stable. |

| Hot Key Error | - Data Provider Reference Mismatch- Wrong usage of hot key (Ctrl+Alt+Z)- Antivirus blocking TextGrab software | - Select the correct Data Provider File for the InStore- Press the Hot Key only from your PoS screen/Do not press the hot key multiple times- Check if your anti-virus is blocking TextGrab. Add TextGrab to exclusion list. |

| Configuration Issue | - Binary issue- If any data imported on server | -  Update InStore version to 5.5.4.1. |

| Data Picking Issues | - Data Provider Reference Mismatch / Data provider not set in Back-End / Data provider not downloaded in Front - End- Wrong usage of hot key (Ctrl+Alt+Z) | - Select the correct Data Provider File for the InStore- Press the Hot Key only from your PoS screen/Do not press the hot key multiple times- Check if your anti-virus is blocking TextGrab. Add TextGrab to exclusion list. |

| InStore Hanging | - CPU usage might be high- The free space in C drive is less than 30% | - Clear unwanted files from your C drive and clear %temp% folder, prefetch folder, cookies, recent files and run the Cleanmgr.exe command.- Reinstall SQL and Setup3- Update InStore |

| Login Failure | - Internet Fluctuation- Internet Proxy is not set in InStore- If website access is blocked in the Client System | - Internet connection should be stable with at least 512 Kbps speed. Contact the store IT person to increase the internet speed.- To check internet proxy go toStart > Run > type inetcpl.cpl.Internet Options window appears. Click the Connections tab and navigate to LAN Setting, Note Address & Port no present under the Proxy Server and do the following:In InStore,go to Advance Configuration. Under Connection Settings, you will see Web Check Method as TCP_CHECK. Paste the copied text in Proxy Host & Port no. Click Update, close all applications and restart InStore. |

| No Internet Available | - Proxy might not be configured in InStore | - Refer API error code for details- Check the customer's status/ points- Check integration files availability in Integration folder and server back-end also |

| Pop up error | - Integration pop up file might not be running during start up- Application helper service might not have started | - Application helper Service should start from Services.msc- Ensure that the Integration Log-watcher is running |

| Country Flag not Reflecting | Country code configs might not have downloaded | Reconfigure the country code. |

| Points are not issued to customer | Cashier might not have submitted the bill | Make sure the you are logged in to InStore and the bill is submitted. |

| Sync Issue | - Internet might not be working- Capillary sites might have blocked | - Check your internet connection and make sure the connection is stable.- White-list all capillary URLs- Update your InStore to the latest version |

| Unhandled Exception Error | Back-end problem | - Uninstall DotNet software and reinstall it- Uninstall InStore and re-install the latest version- Check whether your country code is configured correctly in Capillary InTouch. For example, for India, the country code should be ""+91"" ." |

| Bill Number Already Exists | You might have submitted the same bill again. | If the same bill no is submitted again it shows the Warning message "Bill Number Already Exists". To see whether the bill number already exists, go to InStore menu > click Report. You can see all bills submitted on that particular day. If the bill no already exists, InStore will not accept the same bill no again /Check in Capillary InTouch whether the bill no option is set to BILL_NUMBER_UNIQUEFor an XML based integration, check the notification area in InStore to ensure that a single log watcher/patch is running. If you notice multiple log watchers, delete the rest. |

| System Crash | - Viruses in your system- Newly installed software might not be supported and may cause severe error- System might have crashed due to power fluctuation | Restore your system using the process: Go to Start > Control Panel > Program > Accessories > System Tools >System Restore.Select Restore my Computer To An Earlier Time > Next > Select the restore point when the system was in good working condition and click Next. The system will restart and will be restored. |

| SQL Not Installed/Removed | - Might be a problem with Windows XP- There might be a problem with SQL Server installed in your system | - Go to Start > Run > type regsvr32.exe licdll.dll > it should report "DllRegisterServer in licdll.dll succeeded." > Reinstall Service Pack 2. If this does not work, install the Hotfix KB912354 to update the licdll.dll file.- Go to Start > Run > type regedit.exe > delete all the SQL Keys. Locate [HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion]and then restart the system and install SQL server again. |

| Loading IKVM.Open.JDK Core Failed | - Setup3 might not be installed | - Install Setup3.exe |

| Mobile Number Invalid | - Entered incorrect/uncompleted mobile number- Auto config is not completed- Country Code not set properly in Server-Config- Setup installation issue | - Mobile Number should be of 10 digits- Need to do Autoconfig properly and wait until it is completed  Open InStore, click Settings, then click Auto Config. After the configuration process is completed, log out from InStore and log in again.- Set country code in Server-Config. Ex. for India country code is +91.- Check the country code chosen for your organization in InTouch. If the country code is Others, ensure that you have entered the mobile number with country code.- If issue is not resolved yet, re-install the InStore binary |

| Slow Performance | - Increase of Temporary Files/Low disk space in C Drive- Presence of Viruses | - Delete content of Temps & Apps folder and see if the issue is resolved.- Uninstall .Net 3.5 SP1 and clean up .Net using cleanup_tool.exe (needs to be installed). Once the clean up is completed, restart your system and install "MSXML3msms.exe" and "msxml3.msi". Then install .Net 3.5 SP1. |

| Assembly Windows Base Version | Problem with Sql compact | Re-install SQL compact sp2 |

| Hook Key Error |  | Change search bar key in General settings option(advanced settings) |

| Object Reference issue |  | Check with Sync status / Check Capillary website is opening or not/Check with proxy |

| Login Issue_Store Register Login failed error.txt | Registry might have corrupted | Go to command prompt and run the command - lodctr /R |

| Offline Issue | ISP Issue | Change ISP ( Internet Operator) |

| Discount Does Not match with Capillary Discount | - Multiple discounts might have applied- Applied discount code on carry bag or outlier items | - Apply only single discount per transaction- Do not apply discounts on carry bags or outlier items |

| Custom fields are not reflecting | - Sync might not have completed- Internet fluctuating- Capillary URLs might have blocked | - Wait until the sync is complete and do a manual sync- Check your internet connection is stable- Whitelist all the Capillary URLs from blocking |

| Feedback CCMS tickets raising failed | Subject might be existing already in your CCMS Tickets | Subject field should be unique (Only for Raymond brand). Check if there is any other ticket with the same subject line. |

| Framework 015 Error while billing in Shopper | Discount file might be present in shopper folder | Delete Cap disc file from shopper located folder |



Updatedover 1 year ago
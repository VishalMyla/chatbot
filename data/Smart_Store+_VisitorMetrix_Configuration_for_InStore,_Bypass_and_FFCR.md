# VisitorMetrix Configuration for InStore, Bypass and FFCR

## InStore

The following are the pre-checks before configuring the VisitorMetrix device in InStore.

- Connect the VisitorMetrix device and the laptop to the same network.

- Login into the router page and note the device’s IP address.

- Navigate to Home > Advance > DHCP Client list. (Device name – ffc-reloaded)

- Note down the device ID by entering IP:8081/deviceid in the browser.

To configure the VisitorMetrix device in Instore, follow these steps.

- On the desktop, open InStore and log in using valid credentials.

On the desktop, open InStore and log in using valid credentials.

- Click InStoreAI, wait for 10 seconds for the application to search the device, and then click Stop Search.

Click InStoreAI, wait for 10 seconds for the application to search the device, and then click Stop Search.

![471](https://files.readme.io/c6d0ea3-search.png)

Post search, the device appears on InStore with the device ID as Unconfigured. Click the device icon to proceed further.

![341](https://files.readme.io/9d86748-further.png)

- Click Ping check to reconfirm if the device is connected to the network. (Ping should reflect as successful either way).

![360](https://files.readme.io/251963f-way.png)

![360](https://files.readme.io/2103360-way2.png)

- Click Refresh View to get the device camera view.

![422](https://files.readme.io/0eb5dda-view.png)

- Click Set Config to set the configuration lines and shoulder-width as per the store layout requirement.Password: ffc@123

![425](https://files.readme.io/d215fab-123.png)

- Move the arrows provided on the right-hand side to set the monitoring area, then click Next.

![446](https://files.readme.io/a89caf9-next.png)

- Move the arrow to set the shoulder width, and click Save.

![448](https://files.readme.io/ef764ce-save.png)

Make a person stand below the device physically for reference.

- Click Start Counting to initiate device counting.

![471](https://files.readme.io/782da32-counting.png)

If there is no image and an error occurs, follow these steps.

- Go to - C:\Program Files (x86)\CapillaryPOSSolution-1.0.3.4\InStore\x86

- Copy all the .dll files.

- Paste the files in the InStore folder.

![461](https://files.readme.io/2930904-folder.png)

## Bypass

To configure the Bypass device and QC Check, follow these steps.

- Connect VisitorMetrix by plugging the adapter into the power socket.Check for the Red-Green blinking light and double click on it.

![289](https://files.readme.io/8c9076e-it.png)

- Connect the VisitorMetrix device and the computer/laptop to a common router using a LAN cable.

![302](https://files.readme.io/2da3666-cable.png)

- Create the Wi-Fi SSID on the router page by following these steps.

- Enter the Store Wi-Fi ID in the router.Wireless > Wireless basic setting > SSID

![302](https://files.readme.io/438cfe5-ssid.png)

Sanscard is the router used for reference, the image will differ for each router.

- Set the Store Wi-Fi password in the router.

- Wireless > Wireless basic setting > Security key.

![304](https://files.readme.io/fac4a00-key.png)

- Identify the VisitorMetrix deviceAfter connecting the device to the router, open the router page and navigate to DHCP Client list and copy the device IP.

Advance > DHCP Client list (Device name – ffc-reloaded).

![302](https://files.readme.io/321f4ec-reload.png)

- Set up the Wi-Fi SSID in the VisitorMetrix device by following these steps.

- Open a web browser (Chrome, Firefox, or Safari) and enter the Device IP (192.168.1.6) as the URL, and click Enter.

- Click scan SSID.

![304](https://files.readme.io/6997fb5-scan_ssid.png)

- Select the Wi-Fi SSID, enter the Wi-Fi password, and click connect.

![304](https://files.readme.io/f1de870-connect.png)

- Update the Till details in the device by following these steps.

- Open a web browser (Chrome, Firefox, or Safari) and enter.https://Deviceip/tillDetails.html (https://192.168.1.6/tilldetails.html).

- Update the Store till details, Time zone, and Cluster.

![304](https://files.readme.io/3d8b58d-clustor.png)

Time zone and Cluster will differ based on region.

- Configure Quality Check for the device ID, RTC time, camera, and MAC IDfor ethernet and WLAN by following these steps.

- Open a web browser (Chrome, Firefox, or Safari) and enter.https://Deviceip:8081/qccheck  (https://192.168.1.6:8081/qccheck).

Open a web browser (Chrome, Firefox, or Safari) and enter.https://Deviceip:8081/qccheck  (https://192.168.1.6:8081/qccheck).

- Check the Device camera view by opening a web browser (Chrome, Firefox, or Safari) and entering  https://Deviceip:8081/image (https://192.168.1.6:8081/image).

Check the Device camera view by opening a web browser (Chrome, Firefox, or Safari) and entering  https://Deviceip:8081/image (https://192.168.1.6:8081/image).

- Expand the SD card to optimize the data storage on the device.

- Open a web browser (Chrome, Firefox, or Safari) and enterhttps://Deviceip:8081/expandsdcard

- Enable the services to start the footfall count.

The putty application needs to run/check the below-mentioned steps.

- Login to putty by entering the Device IP (192.168.1.6).Enter ID: pi (This is the default ID).Password: FFC@capillary (This is the default password).

- After logging in, run the mentioned command to start the services. A message “Device start triggered successfully” will appear.CMD: curl localhost:8081/service/start

- Recheck the till and Wi-Fi credentials in putty to see if it is saved correctly.

- The following are the commands to check the Till details in putty.

- Make someone walk under the device multiple times and confirm in putty if the same is reflecting.CMD1:cd /var/www/html/CMD2:ls -lCMD3:cat tillDetails.json

![304](https://files.readme.io/bd28841-json.png)

## FFCR

- Switch on the device and check if the default hotspot FFCR_ee56ab12 (last six digits of LAN mac address) appears or not.

- Connect the LAN cable to the laptop.

- Connect the FFCR_ee5612. Password: cap@1234.

After FFCR is connected, it will show no internet.

- Type 172.24.1.1:8081 in any browser, it will redirect the page.

![513](https://files.readme.io/991b8c1-page.png)

Enter the username and the password, then click Login.

![478](https://files.readme.io/7ed4b40-login.png)

Double Click Network Configuration to redirect the page.

![626](https://files.readme.io/608dd73-the_page.png)

![663](https://files.readme.io/b69c303-the_page_2.png)

- Click Connect wifi.

- Click SSIDs to get a drop-down list for the Wi-Fi name.

- Select the Wi-Fi name and enter the Wi-Fi password.

![623](https://files.readme.io/245e36c-pass.png)

- Cross-check if the device is connected to the store network.

![625](https://files.readme.io/13b50fc-network.png)

Once the device is connected to the store network, the device allocates IP from the router.

- Click IP scanner or router DHCP client list to view and verify the device IP.

![625](https://files.readme.io/514707f-ip.png)

- Enter the Till in the device to go to the Till Login page.

![513](https://files.readme.io/8912f9f-page.png)

- In TILL LOGIN, enter the till details and click save.

![688](https://files.readme.io/8cd0291-savee.png)

- Click VM Config Tool. (Next to set the device configuration)

![445](https://files.readme.io/cfd337d-configuration.png)

- Click refresh to view the current image and adjust the config line.

![623](https://files.readme.io/0f160db-line.png)

- Click Next and adjust the shoulder size using the plus or minus button and click submit.

![606](https://files.readme.io/236d221-submit.png)

- Click start count after configuring.

It will pop the device service that has been triggered successfully.

- Go to CMD (command prompt) and type ssh[email protected](Device IP).

It will only work on Windows 10, for Windows 7 and 8, the user needs to log in to putty and check if all four files are downloaded. Only after the four files are downloaded the device will start the count.CAPVERIFIED  HUBDETAILS.JSON  STORESDETAILS.JSON TILLDETAILS,JSON

- Next to Paired the staff switch, click  IN or OUT as per the request, and then click connect. Press the switch 3-4 times to pair, a beep sound will be heard once connected. It will be paired switch the same time it needs to press switch 3-4 times once it connects it will beep sound.

![623](https://files.readme.io/db53944-sound.png)

- Click VM Test Mode to start the test count.

![432](https://files.readme.io/49cc615-xount.png)

- Configure the start button.By pressing the staff switch, the store staff can monitor the number of staff that walked out of the store and walked into the store.

![623](https://files.readme.io/d111098-store.png)

![624](https://files.readme.io/ed838e5-syore2.png)

Click Status and Till Details to view the status of the device.

![623](https://files.readme.io/a1b586b-device.png)

Updatedover 1 year ago
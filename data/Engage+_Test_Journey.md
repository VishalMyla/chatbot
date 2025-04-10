# Test Journey

The test/preview flow within the journey framework allows users to validate journey workflows before making them live. This aids in understanding how the journey operates in real-time before its full rollout to end customers.

With this feature, you can configure the journey for a set of test customers and trigger events for a test customer to observe how that actual customer will move through the journey. Additionally, during the test, there is no need to wait for actual configured wait times for tests to complete as you can skip the wait times.

# Prerequisite

To test the journey, test customers should be added. The journey will apply to these defined test customers, and whoever meets the entry criteria will enter the test journey. This test group will apply to all test journeys.

To add the test customers, perform the following:

1. From the Journeys page, click onSettings iconand then selectTest Customers.

2. Click onEdit.

3. Search for the desired contact using their identifiers in the text field.

4. Click onAddand then Save Changes to finalize the process.

![](https://files.readme.io/6277e3a-Add_test_customers.gif)

# Testing journey

To test a journey, perform the following:

> 🚧AttentionOnly journeys in Draft state can be tested. Once a journey has been made LIVE, you will not get an option to test the journey.If you remove customers from the Test users list while configuring a test journey or during processing, those customers will not enter the journey.

## 🚧Attention

Attention

- Only journeys in Draft state can be tested. Once a journey has been made LIVE, you will not get an option to test the journey.

- If you remove customers from the Test users list while configuring a test journey or during processing, those customers will not enter the journey.

1. Navigate to the journey that you want to test.

Navigate to the journey that you want to test.

2. Click onTest journey. It will prompt you to confirm whether you want to switch to test mode. Click onYes, switch to testto confirm.

Click onTest journey. It will prompt you to confirm whether you want to switch to test mode. Click onYes, switch to testto confirm.

![](https://files.readme.io/671cfb4-Test_Journey.png)

3. Once the journey has been switched to TEST mode, trigger the appropriate events for your test customers by making API calls, ensuring that the test customer satisfies the entry criteria of the journey and can enter it. For example, suppose the entry criteria is to make a transaction of 500$. In that case, you can use appropriate and add a transaction of the required amount to enter the customer into the journey.Note:If the journey is complicated, it takes longer to change to test mode. Until then, the journey will be in 'Processing to run test' status.

Once the journey has been switched to TEST mode, trigger the appropriate events for your test customers by making API calls, ensuring that the test customer satisfies the entry criteria of the journey and can enter it. For example, suppose the entry criteria is to make a transaction of 500$. In that case, you can use appropriate and add a transaction of the required amount to enter the customer into the journey.Note:If the journey is complicated, it takes longer to change to test mode. Until then, the journey will be in 'Processing to run test' status.

![](https://files.readme.io/fdb8b88-Processing_to_run_test.png)

![](https://files.readme.io/3d745de-Test_mode.png)

4. To search the status of a customer in the journey, enter the customer identifier (mobile with country code or customer/user ID) in the search box. A green line indicates that the customer has entered that particular journey event. A blue colour indicates that the event is yet to happen or is being processed.

To search the status of a customer in the journey, enter the customer identifier (mobile with country code or customer/user ID) in the search box. A green line indicates that the customer has entered that particular journey event. A blue colour indicates that the event is yet to happen or is being processed.

![](https://files.readme.io/226af04-Skip_wait_and_Search_customer.gif)

5. If the customer is at the wait block, you can selectSkip waitto skip the configured wait time and proceed to the next block immediately.

If the customer is at the wait block, you can selectSkip waitto skip the configured wait time and proceed to the next block immediately.

![](https://files.readme.io/255a796-Skip_wait_.gif)

6. If you have configured an Event-based wait block, you can trigger a Transaction event for the customer and instead of waiting for the configured number of days, you can skip the waiting period. The customer will then proceed to the appropriate path and block.

If you have configured an Event-based wait block, you can trigger a Transaction event for the customer and instead of waiting for the configured number of days, you can skip the waiting period. The customer will then proceed to the appropriate path and block.

7. Once you are satisfied with your test results, you can stop the test, and your journey's mode will revert to the draft state. Then, you can make the journey live by following the usual process of sending it for approval.

Once you are satisfied with your test results, you can stop the test, and your journey's mode will revert to the draft state. Then, you can make the journey live by following the usual process of sending it for approval.

![](https://files.readme.io/0f838f6-Stop_test.gif)

> 📘NotesYou can remain in the test mode of the journey for as long as necessary. This means that if you have tested several scenarios in one session and would like to continue testing in another session, you can do so. Your journey will remain in the test mode, and you can always find it on the listing page of Journeys.If you create another version of a journey by editing a Live journey, you can follow the same steps to test the updated version. The only condition is that your test customers should now satisfy the entry criteria of the new version. Make sure that the incentives added are not repeated. For example, if you use the same reward ID twice, the system will throw an error.You can continue testing any of your journeys that are currently in Draft mode. Add the user to the “Test customers” group for which you want to run the test.

## 📘Notes

Notes

- You can remain in the test mode of the journey for as long as necessary. This means that if you have tested several scenarios in one session and would like to continue testing in another session, you can do so. Your journey will remain in the test mode, and you can always find it on the listing page of Journeys.

- If you create another version of a journey by editing a Live journey, you can follow the same steps to test the updated version. The only condition is that your test customers should now satisfy the entry criteria of the new version. Make sure that the incentives added are not repeated. For example, if you use the same reward ID twice, the system will throw an error.

- You can continue testing any of your journeys that are currently in Draft mode. Add the user to the “Test customers” group for which you want to run the test.

Updated11 months ago
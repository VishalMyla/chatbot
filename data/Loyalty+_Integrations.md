# Integrations

There are no APIs which can be used to change tiers for a customer externally right now. We can use fetch APIs, which can be used to get tier information of a customer. Also, light APIs are also used to get the most important/relevant part of the customer’s tier dynamics quickly. If the customer is in the base tier, no expiry date is required and if in the top tier, the next tier number is set to -1.

The system can calculate the gap to upgrade and the gap to renew parameters for customers, which are aimed to get the information on the gap or value of the tier upgrade parameter used, which is yet to be allocated to upgrade the customer’s current tier. But this is an add-on feature, so please raise a request to get this activated and only then can it be used for the org.

You can read about importing data for tiers/slabshere.

Updated11 months ago
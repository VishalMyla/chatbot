# Store center

## Store Center Installation Guide

The document attached herein contains the entire installation process of Store Center containing essential pre-installation, installation and post-installation processes and checklists involved.

* What database is used for Store Center locally?Store Center uses SQL Express 2008 R2 and MS SQLServer,

* Do we have to open up ports to install Store Center?You do not have to open up ports for installation. However, we run the Storecenter WCF (Windows Communication Foundation) service on port 8736, and Store Center listens on port number 6969. If these ports are used by some other programs, we may have to handle the configuration accordingly.

* What are the prerequisites for installing Store Center?You require Microsoft .Net 3.5 SP1 Framework and a custom setup built in-house.

What registry entries are created while installing Store Center?Storecenter Installer:

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService]

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite]

[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\StoreCenter]

Instore and StoreCenter ClicOnce Installer:

HKEY_CURRENT_USER\SOFTWARE\Capillary\InTouch

* What service does Store Center use?Store Center currently uses the .Net 3.5 SP1 service

* How does the data flow to cloud?Store Center have a local database that stores all the transactions happening in a store. During a specified interval, this data is synced to the Capillary Cloud through our InTouch APIs.

* What connectivity protocols does Store Center use?Store Center communicates with the InStore application through TCP/IP, while it communicates with the Capillary Cloud through HTTP.

The InStore application communicates with the Capillary Cloud through HTTP, but it can be configured to communicate through HTTPS as well.

* Is there an encryption done while transferring the data?Currently the data is transferred without any encryption.

* Should SQLite also be installed if MSSQL Express is already installed?If the database is already installed, you must point the Store Center to that database server.

* How do the older and newer Store Center Installers differ?While installing Store Center using the older Installer (ClicOnce), you must first install SQLExpress. If there is no SQL Express installed prior to running the new installer, it installs SQLExpress 2008 R2 automatically.

* What version of SQLite is currently used?The SQLite version currently used is 1.0.90.0

Refer to the attached document for theStore Center's installation guide.

Updatedover 1 year ago
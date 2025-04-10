# Xiaomi push notification (Push Amplification)

Push notifications often go undelivered to some app users due to device-level restrictions on certain Chinese OEM devices. The Capillary Android SDK addresses this issue by sending push notifications through both Xiaomi Cloud Push and Firebase Cloud Messaging (FCM) push services, increasing the likelihood of successful delivery. If a message is successfully delivered through one of these push services, the notification from the other cloud service is suppressed. No priority is defined, and there are no changes to the current FCM flow. This ensures that users receive the push notification only once.

To prevent unnecessary additions to the application, separate modules for each push service are available. You can integrate the appropriate module based on the types of devices used by your application's users.

# Integrating Xiaomi Push SDK

Perform the following:

1. Register as a Xiaomi developer on theXiaomi website.

Register as a Xiaomi developer on theXiaomi website.

2. Create app. To create, Log into the console, clickCreate App, enter the required details and clickCREATE.

Create app. To create, Log into the console, clickCreate App, enter the required details and clickCREATE.

![](https://files.readme.io/f0be5dc-Register.png)

3. Click on the App name and retrieve the app's Package name/App ID / AppKey / App Secret.The App ID and App Key serve as the client's identity during client SDK initialization. The App Secret is authenticated for sending messages on the server-side.

Click on the App name and retrieve the app's Package name/App ID / AppKey / App Secret.The App ID and App Key serve as the client's identity during client SDK initialization. The App Secret is authenticated for sending messages on the server-side.

![](https://files.readme.io/2ba8ea9-package_name.png)

4. Log into the Mi Push Operational Console and enable Push.

Log into the Mi Push Operational Console and enable Push.

5. Add dependency of the Mi SDK.Download the Mi SDK.Add the downloaded Mi SDK to the "libs" folder of the application module in your project.Include the following configuration in thebuild.gradlefile of the app module:Groovyandroid {
    repositories {
        flatDir {
            dirs 'libs'
        }
    }
}

dependencies {
    implementation fileTree(include: ['*.aar'], dir: 'libs')
}For the new project structure (applicable from the Android Gradle plugin version 7.0.0 and above), add the following in thedependencyResolutionManagementblock of yoursettings.gradlefile:GroovydependencyResolutionManagement {DependencyResolutionManagement it ->
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    
    repositories { RepositoryHandler it ->
        google()
        mavenCentral()
    }
}

Add dependency of the Mi SDK.

1. Download the Mi SDK.

Download the Mi SDK.

2. Add the downloaded Mi SDK to the "libs" folder of the application module in your project.

Add the downloaded Mi SDK to the "libs" folder of the application module in your project.

3. Include the following configuration in thebuild.gradlefile of the app module:Groovyandroid {
    repositories {
        flatDir {
            dirs 'libs'
        }
    }
}

dependencies {
    implementation fileTree(include: ['*.aar'], dir: 'libs')
}

Include the following configuration in thebuild.gradlefile of the app module:

`build.gradle`

```
android {
    repositories {
        flatDir {
            dirs 'libs'
        }
    }
}

dependencies {
    implementation fileTree(include: ['*.aar'], dir: 'libs')
}
```

```
android {
    repositories {
        flatDir {
            dirs 'libs'
        }
    }
}

dependencies {
    implementation fileTree(include: ['*.aar'], dir: 'libs')
}
```

4. For the new project structure (applicable from the Android Gradle plugin version 7.0.0 and above), add the following in thedependencyResolutionManagementblock of yoursettings.gradlefile:GroovydependencyResolutionManagement {DependencyResolutionManagement it ->
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    
    repositories { RepositoryHandler it ->
        google()
        mavenCentral()
    }
}

For the new project structure (applicable from the Android Gradle plugin version 7.0.0 and above), add the following in thedependencyResolutionManagementblock of yoursettings.gradlefile:

`dependencyResolutionManagement`

`settings.gradle`

```
dependencyResolutionManagement {DependencyResolutionManagement it ->
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    
    repositories { RepositoryHandler it ->
        google()
        mavenCentral()
    }
}
```

```
dependencyResolutionManagement {DependencyResolutionManagement it ->
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    
    repositories { RepositoryHandler it ->
        google()
        mavenCentral()
    }
}
```

# Installing SDK

Perform the following:

1. Add the dependency files.Installing using version catalog:This is the recommended method.Configure the catalog. For more information, refer to theVersion Catalog Installation.Add the dependency in theapp/build.gradlefile.Groovydependencies {
    ...
    implementation("hydra.mipushkit")
}Installing using ArtifactTo install using artifact, add the following dependency in theapp/build.gradlefile:Groovydependencies {
…
 implementation("com.capillary:hydra-mi-push-kit:x.x.x")
}

Add the dependency files.Installing using version catalog:This is the recommended method.

1. Configure the catalog. For more information, refer to theVersion Catalog Installation.

2. Add the dependency in theapp/build.gradlefile.Groovydependencies {
    ...
    implementation("hydra.mipushkit")
}Installing using ArtifactTo install using artifact, add the following dependency in theapp/build.gradlefile:

`app/build.gradle`

```
dependencies {
    ...
    implementation("hydra.mipushkit")
}
```

```
dependencies {
    ...
    implementation("hydra.mipushkit")
}
```

`app/build.gradle`

```
dependencies {
…
 implementation("com.capillary:hydra-mi-push-kit:x.x.x")
}
```

```
dependencies {
…
 implementation("com.capillary:hydra-mi-push-kit:x.x.x")
}
```

4. Add the SDK files to the project.Download the helper class and broadcast receiver files fromhere.Create a package namedcom.hydra.sdk.miPushKitand paste the downloaded files into this package.Add Broadcast Receiver in AndroidManifest.xml file.XML<receiver
    android:name="com.hydra.sdk.miPushKit.MiBroadcastReciever"
    android:exported="false">

    <intent-filter>
        <action android:name="com.xiaomi.mipush.RECEIVE_MESSAGE" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.MESSAGE_ARRIVED" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.ERROR" />
    </intent-filter>

</receiver>

Add the SDK files to the project.

1. Download the helper class and broadcast receiver files fromhere.

Download the helper class and broadcast receiver files fromhere.

2. Create a package namedcom.hydra.sdk.miPushKitand paste the downloaded files into this package.

Create a package namedcom.hydra.sdk.miPushKitand paste the downloaded files into this package.

`com.hydra.sdk.miPushKit`

3. Add Broadcast Receiver in AndroidManifest.xml file.XML<receiver
    android:name="com.hydra.sdk.miPushKit.MiBroadcastReciever"
    android:exported="false">

    <intent-filter>
        <action android:name="com.xiaomi.mipush.RECEIVE_MESSAGE" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.MESSAGE_ARRIVED" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.ERROR" />
    </intent-filter>

</receiver>

Add Broadcast Receiver in AndroidManifest.xml file.

```
<receiver
    android:name="com.hydra.sdk.miPushKit.MiBroadcastReciever"
    android:exported="false">

    <intent-filter>
        <action android:name="com.xiaomi.mipush.RECEIVE_MESSAGE" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.MESSAGE_ARRIVED" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.ERROR" />
    </intent-filter>

</receiver>
```

```
<receiver
    android:name="com.hydra.sdk.miPushKit.MiBroadcastReciever"
    android:exported="false">

    <intent-filter>
        <action android:name="com.xiaomi.mipush.RECEIVE_MESSAGE" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.MESSAGE_ARRIVED" />
    </intent-filter>

    <intent-filter>
        <action android:name="com.xiaomi.mipush.ERROR" />
    </intent-filter>

</receiver>
```

# Initialise Xiaomi push

1. Locate the part of your code where the application comes to the foreground.

Locate the part of your code where the application comes to the foreground.

2. Insert the following code within that section:JavaMiPushHelper.initialiseMiPush(context, MI_APP_ID, MI_APP_KEY, Region);

Insert the following code within that section:

```
MiPushHelper.initialiseMiPush(context, MI_APP_ID, MI_APP_KEY, Region);
```

```
MiPushHelper.initialiseMiPush(context, MI_APP_ID, MI_APP_KEY, Region);
```

where,

MI_APP_ID: The App-Id from the Mi Dashboard.MI_APP_KEY: The App-Key from the Mi Dashboard.Region: The chosen region for Mi data residency.

## Handling Push within the Application (optional):

If you're handling token registration and notifications in your app's receiver, follow these steps:

1. Set the Data Region:Determine the region where Mi data resides using theMiPushClient.getAppRegion(context)API.Pass the region to the below API:JavaHydraMiPushApi.getInstance().setDataRegion(context, MiRegion.valueOf(region.toString()));

Set the Data Region:

1. Determine the region where Mi data resides using theMiPushClient.getAppRegion(context)API.

Determine the region where Mi data resides using theMiPushClient.getAppRegion(context)API.

`MiPushClient.getAppRegion(context)`

2. Pass the region to the below API:JavaHydraMiPushApi.getInstance().setDataRegion(context, MiRegion.valueOf(region.toString()));

Pass the region to the below API:

```
HydraMiPushApi.getInstance().setDataRegion(context, MiRegion.valueOf(region.toString()));
```

```
HydraMiPushApi.getInstance().setDataRegion(context, MiRegion.valueOf(region.toString()));
```

4. Use thepassPushToken()API and pass the push token to the SDK.JavaHydraMiPushApi.getInstance().passPushToken(context, pushToken);

Use thepassPushToken()API and pass the push token to the SDK.

`passPushToken()`

```
HydraMiPushApi.getInstance().passPushToken(context, pushToken);
```

```
HydraMiPushApi.getInstance().passPushToken(context, pushToken);
```

5. Use theisFromHydraPlatform()helper API provided by the SDK and make sure that the payload is from the Capillary Hydra platform. After you confirm, pass the notification payload to the SDK.JavaHydraMiPushApi.getInstance().passPushPayload(context, pushPayload)

Use theisFromHydraPlatform()helper API provided by the SDK and make sure that the payload is from the Capillary Hydra platform. After you confirm, pass the notification payload to the SDK.

`isFromHydraPlatform()`

```
HydraMiPushApi.getInstance().passPushPayload(context, pushPayload)
```

```
HydraMiPushApi.getInstance().passPushPayload(context, pushPayload)
```

Example:

```
if (HydraPushApi.getInstance().isFromHydraPlatform(remoteMessage)) {
   HydraFirebaseAPI.getInstance().passPushPayload(applicationContext, remoteMessage)
}
```

```
if (HydraPushApi.getInstance().isFromHydraPlatform(remoteMessage)) {
   HydraFirebaseAPI.getInstance().passPushPayload(applicationContext, remoteMessage)
}
```
# Install SDK

> 🚧The HydraSDK repository is private.To accesshydra-sdk-ios-packagesrepository, you must either have valid GitHub credentials with access to the repository or you can use your GitHub username and provide a Personal Access Token.If you have a valid GitHub credentials with access to thehydra-sdk-ios-packagesrepository, you need to add them to the Xcode accounts section to integrate the SDK. Followthesesteps to complete the process.

## 🚧The HydraSDK repository is private.

The HydraSDK repository is private.

- To accesshydra-sdk-ios-packagesrepository, you must either have valid GitHub credentials with access to the repository or you can use your GitHub username and provide a Personal Access Token.

- If you have a valid GitHub credentials with access to thehydra-sdk-ios-packagesrepository, you need to add them to the Xcode accounts section to integrate the SDK. Followthesesteps to complete the process.

# Prerequisites

Access to HydraSDK Repository:Valid GitHub credentials with access to the hydra-sdk-ios-packages repository.ORGitHub username and a personal access token with access to the repository.

- Using Valid GitHub Credentials:If you are using GitHub credentials, add your GitHub credentials to the Xcode Accounts section. FOr more information, refer to thisdocumentation.

- Using GitHub Username and Personal Access Token:If you are using GitHub username and personal access token, modify the package URL in Swift Package Manager:https://Username:[[email protected]](mailto:[email protected])/Capillary/hydra-sdk-ios-packages.git

```
https://Username:[[email protected]](mailto:[email protected])/Capillary/hydra-sdk-ios-packages.git
```

[[email protected]](/cdn-cgi/l/email-protection)

[[email protected]](/cdn-cgi/l/email-protection)

You can install the SDK using Swift Package Manager (SPM) or Xcode.

# Installing SDK using Swift Package Manager directly

SPM is a tool that helps to manage the distribution of Swift code. For more information, refer toSwift.org.

To install the Capillary iOS SDK using SPM, define the package and dependencies in the SPM's configuration file. Use the below snippet:

```
import PackageDescription
let package = Package(
  name: “<Project-name>”,
  dependencies: [
    .package(url:"https://github.com/Capillary/hydra-sdk-ios-packages",upToNextMajor(from: "1.1.0"))
  ]
)
```

```
import PackageDescription
let package = Package(
  name: “<Project-name>”,
  dependencies: [
    .package(url:"https://github.com/Capillary/hydra-sdk-ios-packages",upToNextMajor(from: "1.1.0"))
  ]
)
```

This makes sure that the SPM fetches the Capillary iOS SDK from the specified repository and includes it as a dependency in your project.

# Installing SDK Using Xcode

You can also use Xcode and define the dependencies in SPM. To install the SDK using Xcode, perform the following:

> 📘Prerequisites:Xcode 14 or laterValid iOS project to integrate Hydra packagesInternet connectivity

## 📘Prerequisites:

Prerequisites:

- Xcode 14 or later

- Valid iOS project to integrate Hydra packages

- Internet connectivity

To install the SDK using Xcode, perform the following:

1. Open the iOS project in Xcode.

![](https://files.readme.io/6a06ec0-Open_Xcode.png)

1. On theFilemenu, selectAdd Packages.

![](https://files.readme.io/20bcba9-Add_package.png)

1. In the search field, enter the URL<https://github.com/Capillary/hydra-sdk-ios-packages>orhttps://Username:[email protected]/Capillary/hydra-sdk-ios-packages.git.You can also select the package from the list of recently added packages.

```
<https://github.com/Capillary/hydra-sdk-ios-packages>
```

```
https://Username:[email protected]/Capillary/hydra-sdk-ios-packages.git
```

[[email protected]](/cdn-cgi/l/email-protection)

![](https://files.readme.io/7a9c41e-Search_package.png)

1. From theDependency Rule, select the version or branch of the package you want to use. To select the latest version of the package automatically, leave the version field blank.Xcode fetches the package’s manifest file and displays its dependencies. Review these dependencies and make sure that they do not conflict with your project’s dependencies.

2. From theAdd to projectcombo box, select the appropriate project.

3. ClickAdd Package.A package selection box appears. Select the desired frameworks and clickAdd package.Xcode will automatically update your project’s dependencies and generate an Xcode project file for the package.

![](https://files.readme.io/ca0fa44-Select_framework.png)

1. Add the import statement at the top of the file where you want to use the package’s functionality and import the package to your project.

![](https://files.readme.io/da1762e-Import_package_to_your_work.png)
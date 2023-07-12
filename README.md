# Weather Application

Weather Coding task for Aviva

## Installation

To install and run this app, follow these steps:

1. Clone the repository.

2. Run `yarn install` to install the dependencies.

## Android

For android make sure to navigate to `android` directory (`cd ./android` from root) and run `./gradlew clean`

## IOS

For ios you want to install any pods file by navigating to ios folder (`cd ./ios` from root) and running `pod install`

4. Run `npx react-native run-android` or `npx react-native run-ios` depending on which platform from project root directory

5. Run `npx react-native start` to start the metro server.

# Troubleshooting

## IOS

### If you notice that some of the icons or fonts are not being imported or seeing errors related to react native vector icons, you may have to manually add the font into your XCode project.

- Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode. Make sure your app is checked under "Add to targets" and that "Create groups" is checked if you add the whole folder. Not familiar with Xcode? <a href="https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06">Try this article</a>

- Edit Info.plist and add a property called Fonts provided by application (or UIAppFonts if Xcode won't autocomplete/not using Xcode) and type in the files you just added. It will look something like this:


### "no permission handler detected"

If you notice this error, it means that react could find the permissions from the 
react-native-permissions library. Go to Xcode and open project settings `Files > Project Settings`.
go to the Derived data folder and and delete it.

then go to the project root and run `npx react-native setup-ios-permissions` followed by `pod install` in ios folder
re build the application using `npx react-native run-ios`
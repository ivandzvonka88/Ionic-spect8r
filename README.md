# spect8r mobile app

This is the repo for the spect8r mobile app, an ionic-angular app writtien in typescript.

## To Install

1. `git clone` this repo
1. `npm install` to grab dependencies

## To Test

To test the app in your browser with automatic reload but sans Facebook login:

`ionic serve`

To test the app in your browser with Facebook login but sans automatic reload:

`ionic cordova run browser`

To test the app on your iOS device (with Facebook login):

`ionic cordova run ios`

More info can be found here:
- https://ionicframework.com/docs/cli/cordova/run/
- https://cordova.apache.org/docs/en/latest/guide/platforms/ios/

## Implementation Notes

### Facebook integration

A new test app has been created to allow for development/testing of new features/functionality 
without impacting the production app. It doesn't appear as if ionic-angular has explicit support
for parameterizing FB_APP_ID based on dev/test vs production so at the moment all identifiers in
the source code are currently referencing the test app in order to make things work. We may want
to come up with something a little more sophisticated in the future but this is fine for now.

The aforementioned [spect8r test](https://developers.facebook.com/apps/352771081960000/dashboard/) test app can be found here:
https://developers.facebook.com/apps/352771081960000/dashboard/

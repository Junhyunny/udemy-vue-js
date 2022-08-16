## SECTION 18. Deploy on firebase

```
sudo npm install -g firebase-tools                                                                
Password:
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.3: this library is no longer supported
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
⸨##################⸩ ⠼ reify:googleapis: http fetch GET 200 https://registry.npmjs.org/googleapis/

added 706 packages, and audited 707 packages in 41s

39 packages are looking for funding
  run `npm fund` for details

16 vulnerabilities (11 moderate, 5 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
 junhyunk@junhyunk-a01  ~/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup   main  firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/junhyunk/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup

? Which Firebase features do you want to set up for this directory? Press Space to select features
, then Enter to confirm your choices. 

 junhyunk@junhyunk-a01  ~/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup   main  firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/junhyunk/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup

? Which Firebase features do you want to set up for this directory? Press Space to select features
, then Enter to confirm your choices. 

Error: Must select at least one feature. Use SPACEBAR to select features, or specify a feature by running firebase init [feature_name]
 ✘ junhyunk@junhyunk-a01  ~/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup   main  firebase init hosting

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/junhyunk/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup


=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: vue-manage-coach (vue-manage-coach)
i  Using project vue-manage-coach (vue-manage-coach)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/index.html already exists. Overwrite? No
i  Skipping write of dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
 junhyunk@junhyunk-a01  ~/Desktop/workspace/udemy/udemy-vue-js/projects/section-18-main-prj-01-starting-setup   main  firebase deploy

=== Deploying to 'vue-manage-coach'...

i  deploying hosting
i  hosting[vue-manage-coach]: beginning deploy...
i  hosting[vue-manage-coach]: found 15 files in dist
✔  hosting[vue-manage-coach]: file upload complete
i  hosting[vue-manage-coach]: finalizing version...
✔  hosting[vue-manage-coach]: version finalized
i  hosting[vue-manage-coach]: releasing new version...
✔  hosting[vue-manage-coach]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/vue-manage-coach/overview
Hosting URL: https://vue-manage-coach.web.app
```
---
layout: post
title:  "Quire: Building a Sophisticated Mobile App with Google’s Flutter"
date:   2018-04-10 11:58:07
categories: "mobile"

index-intro: "A couple years ago, we developed Quire iOS app in Swift. Last year, we chose Flutter for developing Quire Android app. I’d like to share my experience of developing the Android app with Flutter - the good and the bad, the strengths and weaknesses - in this article. I’m a front-end developer of Quire, a simple, lightweight project management tool for capturing ideas, managing tasks and collaborating with teams..."
category-intro: "A couple years ago, we developed Quire iOS app in Swift. Last year, we chose Flutter for developing Quire Android app..."

image: "2018-04-10-Quire-Building-a-Sophisticated-Mobile-App-with-Google-Flutter/quire-mobile-app-google-flutter.png"
tags: mobile android app flutter
author: "Jerry Chen"
authorImg: "/images/author/jerry.jpeg"
authorDesc: "Software engineer. Passionate about all things new."
authorLink: "https://twitter.com/jerrywellchen"

relatedPosts: ["Introducing: Quire for Android", "Quire enhanced for a smooth user experience in your Android browser, even offline!"]

imgDir: "2018-04-10-Quire-Building-a-Sophisticated-Mobile-App-with-Google-Flutter"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-mobile-app-google-flutter.png)

A couple years ago, we developed [Quire iOS app](https://itunes.apple.com/us/app/quire-unfold-your-ideas/id1095193897?mt=8) in Swift. Last year, we chose [Flutter](https://flutter.io/) for developing [Quire Android app](https://play.google.com/store/apps/details?id=io.quire.app). I’d like to share my experience of developing the Android app with Flutter - the good and the bad, the strengths and weaknesses - in this article.

# Who we are

I’m a front-end developer of [Quire](https://quire.io/), a simple, lightweight project management tool for capturing ideas, managing tasks and collaborating with teams. For many years, we [use Dart on both our server and web](http://simonpai.github.io/2014/09/03/quire-building-with-dart/) so here we are, building our Android app with this new open source mobile development framework Flutter that uses the Dart programming language. Two months have passed since its official launch in the Play Store, I believe it’s time for us to share the journey with Flutter, offer some feedbacks and thoughts, and hopefully enlighten those of you in the Flutter community or interested in joining it.

# Why Flutter

One of the main reasons to use Flutter is that we’d like to streamline our development using a single language, and the same platform. Quire is an application that evolves quickly; We release a new update almost on a weekly - if not daily - basis. Maintaining two copies of code has become a burden over time. At first, we tried the so-called Hybrid Mobile App approach like [Cordova](https://cordova.apache.org/) as a solution, but the resulting UI and UX didn’t reach the standard we’re aiming at. Flutter, on the other hand, has high performance UI rendering, smooth transition characters and a core language: Dart, of which the model is shared on all server, web and mobile sides. Flutter meets our requirements to develop a high-quality, single-codebase and fast development cycle.

# What is Flutter

Flutter is a UI framework for Android and iOS apps by Google. We can just write UI code once, and run it on both platform. It also provides a bridge to native, so you can do almost everything that Swift/Kotlin/Java does. The core concepts for Flutter are drawing and bridging, as described in the following:

## Drawing Canvas

Flutter directly draws UI on canvas in the UIViewController of iOS and Activity of Android. Our Dart UI code will be compiled into machine code and drawing. That’s why Flutter has smooth UI and transition. If we compare it to CSS, they use [simpler layout model, which is better than such CSS complexible layout model](https://hackernoon.com/whats-revolutionary-about-flutter-946915b09514).

## Bridge

If we need to access each platform’s resource, we can use bridge to transfer our Dart command and data to native level, and vise versa. Since drawing on Canvas is in Flutter environment, [there is no need to use bridge to native code](https://hackernoon.com/why-flutter-uses-dart-dd635a054ebf), which reduces the cost of context switch, much lower than that of other hybrid frameworks like React Native.

# Flutter vs iOS SDK

Flutter is a open source framework, and that means you can quickly understand what’s going on in every API call. What’s more, we can trace the whole system’s architecture and mechanism. If you are using iOS SDK, then you may need to read countless books, from the simplest to the hardest, trial and error for so many times, and thus be able to find the real, underlying rules of logic eventually.

## Language Level

If you have couple years of experience in Swift, you may have heard the local reasoning character for Swift. But it doesn’t mean the SDK level has the same one. For example, when we need to set the delegate for UIView based component, or set the callback for the function call in most cases, the related operation flows are always in different sections due to delegate pattern. The callback pattern also causes the callback hell issue.

You may ask, what’s the best async pattern in Swift? Callback? GCD? PromiseKit? Or even Reactive Swift? It seems there is no perfect solution for it. With Dart, we only need to do something like this:

```
Future scrollToComment(Comment comment) async {
  await model.scrollTo(comment.position);
  await model.highlight(comment);
}
```

That’s the truth of local reasoning. Right? 

Swift gets another point deducted because of build time. Three years ago, we started our model porting and iOS UI implementation using Swift. Our codebase eventually grew and became huge, with the compile time increasing day by day. Nothing is more painful than expecting something to happen in an instant but it takes longer than expected.

We probably can tolerate 2 or 3 minutes of compilation time for release, as this process can be automatic and doesn’t happen frequently. But what if we just change a line of code for style update and checking the result? In the worst case, we have to wait more than a minute!

You may see there are many articles on improving the time of compilation by changing your syntax, which actually goes against the reason we use a new language for clearer syntax and better productivity. Whereas Dart, it not only has Ahead-of-Time (AOT) compiler to optimize speed for production release, but also a JIT compiler for fast development. Updating a line of code now only needs 0.5 second in most cases. We are quite happy with the result.

## Framework Level

Using Storyboard in Interface Builder (IB) to build UI is like a dream come true. We only need to drag and drop to create widgets and everything will be done. But in the real world, UI is not such an easy task to fulfil, especially when you may have heard someone suggesting you to keep the file Storyboard as small as possible, or simply don’t use it.

We finally decided to stop using IB when we reached its limitation and performance impact. But building the UI programmatically in iOS is also a nightmare. For  example, UI components, autolayout, legacy layout and transitions need more codes than you expected; Code block will look disorganized; And you always need to read tons of documents to make sure your implementation meets every rule.

Flutter uses “Code as UI template” in Dart 2.0, composing UI just like a JSX/XML/HTML style. This makes us easy to maintain UI code.

```
Container(
 child: Center(
   child: Row(
     children: [
       Icon(‘smile’),
       Text(‘Hi’, style: TextStyle(color: Colors.red))
     ]
   )
 )
)
```

Layout in iOS’ official solution has never made sense to me. Third party solutions in iOS are always the winner in this bottle. For me, Flexbox is better than AutoLayout-like solution. Its UI composing is much easier and more intuitive. Flutter use Flexbox concept for layout model. In addition, there is a document to guide web developers each step of the way. Being a web front-end developer for many years, that’s obviously good news.

In our case, the case of Quire, the Bridge from/to native is a the last line of defense. We always keep it in mind that if there is no other solution to do that, we can at least do it like what native iOS/Android developer did. This promises that we can deliver any feature even in the worst case, since we are using a beta version framework (which was actually still in Alpha during our development of the first version to be submitted to the Play Store). For example, we found the time it takes to compress a photo is very long (about 50 seconds, 70% image quality) using Dart. With Java code, it only needs 0.5 second.

##Things to look out with Flutter

Flutter is still in Beta and evolving fast. We should bear in mind that things may change without any guarantee. Below, you will find a few features I think are missing and should be considered by Flutter for their next or future release.

### No scrollTo index API yet

If you are using the ListView, [you can only scroll this view by giving the scroll offset](https://github.com/flutter/flutter/issues/12319). It’s easy for fixing row height case, whereas for various row height case, it’s a little bit complicated to achieve this. Our idea in Quire app is 

1. Give each row a index.
2. Scroll a constant distance to check which of these widget states is generated so to see what the current range is.
3. Search many times for step 2 until our target row appears.

In the case of a super long list, to optimize its smoothness, we introduced the recommended row height variable. Scrolling based on the row height will make sure scrolling can be more accurate, and smoother in a long list.

### Model flow and binding with UI initState and dispose

Design for model binding should make sure the model can be listened to many times, and be countable. In our experience, you can bind it in initState, unbind it in dispose, and start/stop the model operation when binding exists and without any listener. Make sure you do not emit any event when binding (e.g. Fire event in initState). Why? Because of the initState/dispose of a state is executing, the event will cause other listeners to receive the event and update the state, while the context scope is locked.

### Don’t cache widget. Build is the core philosophy for Flutter

The building cost is not as expensive as you imagined. If you cache it, you have to handle your cleanup as well. Leave that work to Flutter, it can do this using the React concept, diff and only update the necessary one. In our case, the Quire tree view, we tested more than 2,000 rows in ListView (for some reason, we didn’t use builder solution of ListView). It’s much faster than our expected due to Stateful Widget which only generates row states when it’s in the viewport. For the build cache, Flutter has published an [article](https://medium.com/@mehmetf_71205/inheriting-widgets-b7ac56dbbeb1) for it.

### Most iOS-look widgets are not ready

Flutter is currently focusing on Material design components. It’s fine to use them in iOS because material design is commonly designed for cross platform. But in some cases, it’s not as good as in Android. Take for example the wheel based datepicker. Overall, I think it’s still necessary to offer a user experience that matches the native behavior in iOS.

### Input in Flutter

There are many input related issues. For example, in issue [#13765](https://github.com/flutter/flutter/issues/13765), you should be able to see the newline before you enter more words; In issue [#5986](https://github.com/flutter/flutter/issues/5986), there is no chance to know what key the user entered.

# Conclusion

Flutter is a powerful framework for creating both Android and iOS native app. We enjoyed it while developing our Android app, and shall enjoy it even more when it’s officially released. Even though it was in Alpha and [now Beta](https://dzone.com/articles/googles-flutter-beta-builds-beautiful-native-apps), Flutter has always been very stable. Its developers are also very active in answering any question or issues you have.

Being an open source framework, it lets you easily track what’s going on, what’s been fixed and updated. You can even fix the issues yourself and contribute to the community! Flutter - a high-performing cross-platform framework that comes with native behavior - is definitely the best solution for you. We are currently planning to replace our Swift-based iOS app with Flutter in the coming months, and I shall share our experience again when that time comes. Keep going Flutter, you are absolutely awesome.

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

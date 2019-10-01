---
layout: post
title:  "Be a Hero: Create Your Own App with Quire API"
date:   2019-10-01 11:58:07
categories: "features"

index-intro: "We are happy to announce the release of version 1.0.0 of our OpenAPI, Quire uses OAuth 2.0 to authenticate requests between your app and your users. With OAuth, users can give you access to their Quire content without giving up their passwords."
category-intro: "We are happy to announce the release of version 1.0.0 of our OpenAPI, Quire uses OAuth 2.0 to authenticate requests between your app and your users..."

image: "2019-10-01-Create-your-own-app-with-Quire-API/Quire-API.png"
tags: Open API 
author: "Jimmy Shiau"
authorImg: "/images/author/Jimmy.jpeg"
authorDesc: "Software Engineer"
authorLink: "https://github.com/jimmyshiau"

relatedPosts: ["Hello GitHub, We’re Quire", "Quire and Slack work great together.", "Quire & Beyond: Build great things with Quire API"]

imgDir: "2019-10-01-Create-your-own-app-with-Quire-API"
---

![Quire API]({{ site.baseurl }}/images/{{page.imgDir}}/Quire-API.png)

We are happy to announce the release of version 1.0.0 of our OpenAPI, Quire uses [OAuth 2.0](http://oauth.net/documentation/) to authenticate requests between your app and your users. With OAuth, users can give you access to their Quire content without giving up their passwords. 

This means that a user could authorize an app to access data or make changes to their Quire account and services that are exposed by the Quire API. For example, an app could create or delete tasks, post a comment, or alter an assignee, due, tags.

## OAuth Application Setup

In order to use Quire API, you’ll need to create an Oauth app.

### Create your Quire oauth app

You’ll need to be logged in to your Quire account to create an app.

1. Go to the Quire [developer app console](https://quire.io/apps/dev) and click on the **Create new app** button.

    ![Quire developer app console]({{ site.baseurl }}/images/{{page.imgDir}}/dev_management.png)

1. Choose the Quire Organization that your app belongs to, the organization members can view/edit all apps belongs to the selected organization.

	<img src="{{ site.baseurl }}/images/{{page.imgDir}}/create_app.png" alt="Quire app organization">

1. Give your application a name and Redirect URL, we will discuss the role of the Redirect URL later. For now you can supply the following URL:

  {% highlight bash %}http://localhost:3000/callback{% endhighlight %}

1. Click the **Create new app** button, your newly created OAuth application will be presented on the developer console page, allowing you to further configure it.

  <img src="{{ site.baseurl }}/images/{{page.imgDir}}/developer_console.png" alt="Quire app list">

In summary, you should have these three bits of information:

* **Development Client ID:** :wJoMEodI4fSSR54pfNwIuIzLnaJ
* **Development Client Secret:** eb8faf4nyd1wbeconw060e9ejui8zg6w8p1hyoex
* **Callback URL:** `http://localhost:3000/callback`

![Quire app credentials]({{ site.baseurl }}/images/{{page.imgDir}}/edit_app_setting.png)

## Setup Your Development Environment

### Step 1. Configure Your App

Host your application configuration information in you app. 

{% highlight javascript %}
const clientId = ':wJoMEodI4fSSR54pfNwIuIzLnaJ';
const clientSecret = 'eb8faf4nyd1wbeconw060e9ejui8zg6w8p1hyoex';
const redirectURI = 'http://localhost:3000/callback';
  
const authorizationUrl = 'https://quire.io/oauth';
const tokenUrl = 'https://quire.io/oauth/token';
const apiUrl = 'https://quire.io/api';
{% endhighlight %}

### Step 2. Redirect User to Authorize App on Quire

Generate an authorization url that you will redirect your users to Quire’s OAuth endpoint URI. This will show a web page where logged in Quire users can authorize your application to access their content.

Sample URL: 
{% highlight bash %}
https://quire.io/oauth?client_id=your-client-ID&redirect_uri=your-redirect-uri
{% endhighlight %}

An authorization link view example might look like:

{% highlight javascript %}
var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) { 
	var uri = url.parse(req.url, true);
	if (uri.pathname == '/') {        
        //..    
    } else if (uri.pathname == "/install") {
    	var authUrl = authorizationUrl 
            + '?client_id=' + clientId 
            + '&redirect_uri=' + encodeURIComponent(redirectURI);
    	res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(
    	     '<html><body>' 
            + '<a href="' + authUrl + '">Connect Quire</a>' 
         + '</body></html>');
        res.end();

    } else if (uri.pathname == "/callback") {
		//...
    }
});
server.listen(3000);
{% endhighlight %}

The `state` parameter is a random string used to prevent Cross-Site Request Forgery (CSRF) attacks. You should randomly generate a character string. It will be passed back to your app, unchanged, in Step 3. Your application should validate this value. Though it is optional, we strongly recommend including this parameter.

Sample URL: 
{% highlight bash %}
https://quire.io/oauth?client_id=your-client-ID&redirect_uri=your-redirect-uri&state=lpcl9v94z
{% endhighlight %}
### Step 3. Handle the OAuth 2.0 server response

The OAuth 2.0 server responds to your application's access request by using the URL specified in the `redirect_uri`.

If the user approves the access request, then the response contains an authorization code. If the user does not approve the request, the response contains an error message. The authorization code or error message that is returned to the web server appears on the query string, as shown below:

**An error response:**

{% highlight bash %}
http://localhost:3000/callback?error=access_denied
{% endhighlight %}

**An authorization code response:**

{% highlight bash %}
http://localhost:3000/callback?code=4/P7q7W91a-oMsCeLvIaQm6bTrgtp7
{% endhighlight %}

**A callback example might look like:**

{% highlight javascript %}
//...
} else if (uri.pathname == "/callback") {
   var result = uri.query;
   var message = 'Auth fail';
   if (result["error_description"] != null) {
       message = result["error_description"];
       if (result["error"] == 'access_denied') {
           //display reject message
       }
       messageView(res, message);
   } else if (result["code"] != null) {
       return exchangeAccessToken(result["code"])
       .then(function(data) {
            var token = data['access_token'];
            message = token != null ? 'Success': 'Fail';
            messageView(res, message);
        });
   }
}
{% endhighlight %}

When the user is redirected back to your application redirect_uri, a code and state parameter will also be present in the querystring parameters. The state is your CSRF anti-forgery token to validate the request.

Extract the code and state from the query string parameters. The state may be validated at this point.

**A validate example might look like:**

{% highlight javascript %}
} else if (result["code"] != null) {
    if (result["state"] != stateFromSession(res))
        return messageView(res, 'invalid state');
            
    return exchangeAccessToken(result["code"])
    .then(function(data) {
         var token = data['access_token'];
         message = token != null ? 'Success': 'Fail';
         messageView(res, message);
     });
}
{% endhighlight %}

### Step 4. Exchange authorization code for access token

Your application needs to make a `POST` call to the token endpoint with the extracted authorization code and the request parameters in the below.

| Parameter | Value |
| --- | --- |
| grant\_type | authorization\_code |
| code | {your-authorization-code} |
| client\_id | {your-client-ID} |
| client\_secret | {your-client-secret} |

**A request an access token example might look like this:**

{% highlight javascript %}
var request = require('request');
function exchangeAccessToken(code) {
    return new Promise(function(resolve, reject){
        request.post({
            url: tokenUrl, 
            form: {
              grant_type: 'authorization_code',
              code: code,
              client_id: clientId,
              client_secret: clientSecret
            }
          }, 
          function (error, httpResponse, body) {
            if (error) {
              return reject(error);
            }
            resolve(JSON.parse(body))
          });
    });
}
{% endhighlight %}

The access token you receive in response will be a JSON format. 

**Example Response:**

{% highlight javascript %}
{ 
  "access_token":"ACCESS_TOKEN", 
  "token_type": "bearer", 
  "expires_in":2592000, 
  "refresh_token":"REFRESH_TOKEN"
}
{% endhighlight %}

The token should be kept carefully and permanently since you need it to access every Quire API.

## Make calls to the API using the access token

Your app now has an access token that it can be used to make API calls on user's behalf.

### Call the API

Make the API call passing the access token as a bearer token in the header of the request. 

**An api call example might look like:**

{% highlight javascript %}
function getCurrentUser(token) {
    return new Promise(function(resolve, reject){
        request.get({
            url: apiUrl + '/user/id/me', 
            headers: {
              "Authorization": "Bearer " + token
            }
          }, 
          function (error, httpResponse, body) {
            if (error) {
              return reject(error);
            }
            resolve(JSON.parse(body))
          });
    });
}
{% endhighlight %}

**Example Response:**

{% highlight javascript %}
{
  "email": "john@gmail.cc",
  "website": "https://coolwebsites.com",
  "id": "My_ID",
  "description": "This is *cool*!",
  "url": "https://quire.io/u/My_ID",
  "nameText": "My Name",
  "nameHtml": "My Name",
  "descriptionText": "This is cool!",
  "descriptionHtml": "This is <i>cool</i>!",
  "image": "https://quire.s3.amazonaws.com/oid/image.jpg",
  "iconColor": "37",
  "name": "My Name",
  "oid": "Dyh2YkFcu9uLgLFIeN1kB4Ld"
}
{% endhighlight %}

## Refreshing Tokens

An access token intentionally is meant for short-term use only. This is an important security mechanism of OAuth 2.0. When using the Authorization Code Grant Flow, the access tokens have an one-hour lifetime by default.

When an access token expires, an HTTP 401 error will be returned:

{% highlight javascript %}
{ 
  code: 401, 
  message: 'Invalid or expired token.' 
}

Your application will need to refresh the access token. 
function refreshToken(refreshToken) {
    return new Promise(function(resolve, reject){
        request.post({
            url: tokenUrl, 
            form: {
              grant_type: 'refresh_token',
              refresh_token: refreshToken,
              client_id: clientId,
              client_secret: clientSecret
            }
          }, 
          function (error, httpResponse, body) {
            if (error) {
              return reject(error);
            }
            resolve(JSON.parse(body))
          });
    });
}
{% endhighlight %}

Alternatively, your application could redirect the user to the authentication flow. 

We hope by now you already know how to use Quire API! We can't wait to see the amazing apps that you will build for Quire! 😍


[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help




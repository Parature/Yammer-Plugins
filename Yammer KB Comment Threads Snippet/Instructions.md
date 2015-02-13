#Yammer KB Comments Plugin

The code in this sample is provided as is and relies on resources and code that are not maintained by Parature.

The following code snippet is based on Yammer Sample Code published from the following location:

https://developer.yammer.com/v1.0/docs/embed

##Description

The snippet provided in this solution will allow you to embed a Yammer comment thread into a Parature Portal for every KB article. The initial post to a KB article will create a post in a Yammer group, similiar to if the KB article was posted directly in Yammer. Any comments posted to that thread from Yammer will surface on the portal. Additionally, users will be able to post comments directly from the Portal.

The plugin will require that the End-User is authenticated into the Yammer network. If the user is not authenticated they will be presented with a login dialogue.

##Instructions

Add the following JS script to your portal via the Portal Files:

<script src="https://assets.yammer.com/assets/platform_embed.js"></script>

Add jQuery to your portal, there are a number of CDNs (Content Delivery Networks) that host jQuery.

The code snippet provided in this solution relies on both of those libraries.

Modify the yammercomments.js file with values that are specific to the Yammer network that you would like to surface. You will need to determine the following values:

-Yammer Network
-Group ID

Information on how to obtain these values and to learn more about Yammer's embed APIs please visit the following location:

https://developer.yammer.com/v1.0/docs/embed

Once you have made the necessary changes, deploy the JS to your portal.


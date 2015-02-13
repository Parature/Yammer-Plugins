
var defaultGroupID = ""; //This is the group that you would like comments to post to
var yammerNetwork = ""; //This will be specified by the URL when accessing the Yammer network

//The code below creates a div after the Related Topics section of the portal. To change where the div is located, modify the insertAfter portion of the code
if ($('body').hasClass('kbanswer_asp')) {
    //The inline styling below can be modified
    $('<div id="embedded-feed" style="width: 75%; height: 400px; float: left; margin-top: 30px; border: 1px solid #d1d1d1;"></div>').insertAfter($('#relatedTopics'));
    yam.connect.embedFeed({
        container: "#embedded-feed",
        network: yammerNetwork, //This is the Yammer network
        feedType: "open-graph",
        feedId: defaultGroupID,
        config: {
            promptText: "Comment on this article",
            defaultGroupId: defaultGroupID
        }
    });
}
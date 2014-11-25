/**
 * Created by i on 14-11-24.
 */
// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
    var viewTabUrl = chrome.extension.getURL('http://www.google.com/custom?q=&btnG=Search');
    var imageUrl = "http://www.google.com/custom?q=&btnG=Search";

    // Look through all the pages in this extension to find one we can use.
    var views = chrome.extension.getViews();
    for (var i = 0; i < views.length; i++) {
        var view = views[i];

        // If this view has the right URL and hasn't been used yet...
        if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

            // ...call one of its functions and set a property.
            view.setImageUrl(imageUrl);
            view.imageAlreadySet = true;
            break; // we're done
        }
    }
});
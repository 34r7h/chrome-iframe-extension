/**
 * Created by i on 14-11-24.
 */
// React when a browser action's icon is clicked.
chrome.contextMenus.create({
    "title": "Tumblr",
    "contexts": ["page", "selection", "link", "editable", "image", "video", "audio"],
    "onclick": function() {
        popup('http://example.com');
    }
});
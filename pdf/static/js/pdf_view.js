/* Javascript for pdfXBlock. */
function pdfXBlockInitView(runtime, element) {
    /* Weird behaviour :
     * In the LMS, element is the DOM container.
     * In the CMS, element is the jQuery object associated*
     * So here I make sure element is the jQuery object */
    if (element.innerHTML) {
        element = $(element);
    }

    $(function () {
        element.find('.pdf-download-button').on('click', function () {
            var handlerUrl = runtime.handlerUrl(element, 'on_download');
            $.post(handlerUrl, '{}');
        });
        
        let viewerUrl = element.find('.viewer-url').text()
        let viewer = element.find('.viewer')
        viewer.attr('src', viewerUrl + viewer.attr('src')) 
        viewer.show()
    });
}


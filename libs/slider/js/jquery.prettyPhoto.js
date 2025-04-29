/*!
 * prettyPhoto v3.1.6
 * http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/
 */
(function($) {

    $.prettyPhoto = { version: '3.1.6' };

    $.fn.prettyPhoto = function(options) {
        options = $.extend({
            animation_speed: 'fast',
            slideshow: 5000,
            autoplay_slideshow: false,
            opacity: 0.80,
            show_title: true,
            allow_resize: true,
            default_width: 500,
            default_height: 344,
            theme: 'pp_default',
            horizontal_padding: 20,
            hideflash: false,
            wmode: 'opaque',
            autoplay: true,
            modal: false,
            deeplinking: true,
            overlay_gallery: true,
            keyboard_shortcuts: true,
            markup: '<div class="pp_pic_holder"> \
                        <div class="ppt">&nbsp;</div> \
                        <div class="pp_top"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                        <div class="pp_content_container"> \
                            <div class="pp_left"> \
                            <div class="pp_right"> \
                                <div class="pp_content"> \
                                    <div class="pp_loaderIcon"></div> \
                                    <div class="pp_fade"> \
                                        <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                        <div class="pp_hoverContainer"> \
                                            <a class="pp_next" href="#">next</a> \
                                            <a class="pp_previous" href="#">previous</a> \
                                        </div> \
                                        <div id="pp_full_res"></div> \
                                        <div class="pp_details"> \
                                            <p class="pp_description"></p> \
                                            <a class="pp_close" href="#">Close</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div> \
                            </div> \
                        </div> \
                        <div class="pp_bottom"> \
                            <div class="pp_left"></div> \
                            <div class="pp_middle"></div> \
                            <div class="pp_right"></div> \
                        </div> \
                    </div> \
                    <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \
                                <a href="#" class="pp_arrow_previous">Previous</a> \
                                <ul> \
                                    <li></li> \
                                </ul> \
                                <a href="#" class="pp_arrow_next">Next</a> \
                            </div>',
            image_markup: '<img id="fullResImage" src="" />',
            flash_markup: '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="{width}" height="{height}"> \
                            <param name="wmode" value="{wmode}" /> \
                            <param name="allowfullscreen" value="true" /> \
                            <param name="allowscriptaccess" value="always" /> \
                            <param name="movie" value="{path}" /> \
                            <embed src="{path}" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="{wmode}" width="{width}" height="{height}"></embed> \
                        </object>',
            quicktime_markup: '<object classid="clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="{width}" height="{height}"> \
                                <param name="src" value="{path}"> \
                                <param name="autoplay" value="true"> \
                                <param name="controller" value="true"> \
                                <embed src="{path}" width="{width}" height="{height}" autoplay="true" controller="true" pluginspage="http://www.apple.com/quicktime/download/"></embed> \
                            </object>',
            iframe_markup: '<iframe src="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: '',
            social_tools: false
        }, options);

        // Aquí debería continuar el plugin, pero dejamos esta parte para la estructura base
        return this;
    };

})(jQuery);
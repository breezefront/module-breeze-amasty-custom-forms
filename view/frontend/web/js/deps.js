define([
    'jquery',
    'mage/tabs'
], function ($, tabs) {
    'use strict';

    $.ui = $.ui || {};
    $.ui.tabs = (settings, el) => {
        $.extend(settings, {
            collapsibleElement: '[id]',
            header: 'ul > li, ol > li',
            content: '[id]'
        });
        tabs(settings, el);
    };
});

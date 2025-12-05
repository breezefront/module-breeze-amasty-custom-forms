define([
    'jquery',
    'mage/tabs'
], function ($, tabs) {
    'use strict';

    $.ui = $.ui || {};
    $.ui.tabs = $.ui.tabs || ((settings, el) => {
        $.extend(settings, {
            collapsibleElement: '> ul > li, > ol > li',
            content: '[id]',
            tablist: '> ul'
        });
        tabs(settings, el);
    });
});

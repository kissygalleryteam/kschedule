/*! kschedule - v1.0 - 2013-09-23 10:15:02 AM
* Copyright (c) 2013 Letao; Licensed  */
KISSY.add("gallery/kschedule/1.0/scheduleform",function(a,b,c){function d(a){var b=this;b.init(),d.superclass.constructor.call(b,a)}return a.extend(d,c,{init:function(){var b=this;b.overlay=a.one(a.DOM.create('<div class="J_ScheduleForm schedule-form"></div>')),a.one("body").append(b.overlay),b._addFrame(),b._addEvent()},_addFrame:function(){var a=this,b='<div class="J_FormArrow form-arrow"><div class="arrow arrow-down"></div><div class="arrow arrow-up"></div></div><div class="J_FormBody form-body"></div><a href="javascript:;" class="J_FormClose form-close">X</a>';a.overlay.html(b),a.closeEl=a.overlay.one(".J_FormClose"),a.body=a.overlay.one(".J_FormBody")},_addEvent:function(){var a=this;a.closeEl.on("click",function(){a.hide()})},setContent:function(b){var c=this,d="string"==typeof b?!1:!0;d&&(b=a.one(b).html()),c.body.html(b)},showToTarget:function(b){var c=this,d=b.offset(),e={w:b.outerWidth(),h:b.outerHeight()},f={w:c.overlay.outerWidth(),h:c.overlay.outerHeight()},g={w:a.one(window).width(),h:a.one(window).height()},h={};h.left=d.left+e.w+5,h.top=d.top+(e.h-f.h)/2,h.left+f.w>g.w?(c.overlay.addClass("schedule-form-outside"),h.left=d.left-f.w-5):c.overlay.removeClass("schedule-form-outside"),c.overlay.css(h),c.show()},show:function(){var a=this;a.overlay.show()},hide:function(){var a=this;a.overlay.hide()}},{ATTRS:{}}),d},{requires:["node","base"]});
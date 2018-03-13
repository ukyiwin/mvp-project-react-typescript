/**
 * time-ago-in-words is a javascript plugin that turns date into words
 *
 * http://www.github.com/perich/time-ago-in-words
 *
 * @name time-ago-in-words
 * @author Peter Richards
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 */
!function(t,o,n){"use strict";function e(){setInterval(function(){a()},6e4)}function r(t){var o=t.getAttribute("title");/^\d+$/.test(o)&&(o=parseInt(o));var o=new Date(o).getTime(),n=Date.now(),e=u(n-o);o===o&&(t.innerText=e)}function a(){for(var t=o.querySelectorAll(s.selector),n=0;n<t.length;n++)r(t[n])}function u(t){function o(o,n){var r="function"==typeof o?o(n,t):o,a=e.numbers&&e.numbers[n]||n;return r.replace(/%d/i,a)}var e=s.strings,r=e.prefixAgo,a=e.suffixAgo;if(s.allowFuture&&0>t&&(r=e.prefixFromNow,a=e.suffixFromNow),!s.allowPast&&t>=0)return s.strings.inPast;var u=Math.abs(t)/1e3,i=u/60,f=i/60,m=f/24,l=m/365,d=45>u&&o(e.seconds,Math.round(u))||90>u&&o(e.minute,1)||45>i&&o(e.minutes,Math.round(i))||90>i&&o(e.hour,1)||24>f&&o(e.hours,Math.round(f))||42>f&&o(e.day,1)||30>m&&o(e.days,Math.round(m))||45>m&&o(e.month,1)||365>m&&o(e.months,Math.round(m/30))||1.5>l&&o(e.year,1)||o(e.years,Math.round(l)),h=e.wordSeparator||"";return e.wordSeparator===n&&(h=" "),[r,d,a].join(h).trim()}var s={refreshMillis:6e4,allowPast:!0,allowFuture:!0,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}};t.TimeAgo=function(t){s.selector=t||".timeago",a(),e()},"function"==typeof t.$&&($.fn.timeago=function(){TimeAgo()})}(this,document);
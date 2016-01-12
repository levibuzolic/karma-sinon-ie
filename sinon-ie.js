/**
 * Sinon.JS 1.17.2, 2015/10/21
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @author Contributors: https://github.com/cjohansen/Sinon.JS/blob/master/AUTHORS
 *
 * (The BSD License)
 *
 * Copyright (c) 2010-2014, Christian Johansen, christian@cjohansen.no
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *   * Neither the name of Christian Johansen nor the names of his contributors
 *     may be used to endorse or promote products derived from this software
 *     without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var ____APPLY_PATCH = false;
(function(){
  if (navigator && navigator.userAgent) {
    var match = navigator.userAgent.match(/((MSIE|PhantomJS).(\d+))/i);
    if (match && match.length >= 2) {
      var browser = match[match.length-2].toLowerCase();
      var version = parseInt(match[match.length-1]);
      if (browser == 'msie' && version < 11) {
        ____APPLY_PATCH = true;
      } else if (browser == 'phantomjs') {
        ____APPLY_PATCH = true;
      }
    }
  }
})();

if (____APPLY_PATCH) {
  function setTimeout() {}
  function clearTimeout() {}
  function setImmediate() {}
  function clearImmediate() {}
  function setInterval() {}
  function clearInterval() {}
  function Date() {}
  function XMLHttpRequest() {}
  function XDomainRequest() {}

  // Reassign the original functions. Now their writable attribute
  // should be true. Hackish, I know, but it works.
  setTimeout = sinon.timers.setTimeout;
  clearTimeout = sinon.timers.clearTimeout;
  setImmediate = sinon.timers.setImmediate;
  clearImmediate = sinon.timers.clearImmediate;
  setInterval = sinon.timers.setInterval;
  clearInterval = sinon.timers.clearInterval;
  Date = sinon.timers.Date;
  XMLHttpRequest = sinon.xhr.XMLHttpRequest || undefined;
  XDomainRequest = sinon.xdr.XDomainRequest || undefined;
}

try {
  // This will catch IE which will throw a "Object doesn't support this action"
  setTimeout = setTimeout;
  // This will catch PhantomJS which somehow has already optimistly already applied the functions below.
  new Date().getTime();
} catch (error) {
  function clearImmediate() {}
  function clearInterval() {}
  function clearTimeout() {}
  function Date() {}
  function setImmediate() {}
  function setInterval() {}
  function setTimeout() {}
  function XDomainRequest() {}
  function XMLHttpRequest() {}

  clearImmediate = sinon.timers.clearImmediate;
  clearInterval = sinon.timers.clearInterval;
  clearTimeout = sinon.timers.clearTimeout;
  Date = sinon.timers.Date;
  setImmediate = sinon.timers.setImmediate;
  setInterval = sinon.timers.setInterval;
  setTimeout = sinon.timers.setTimeout;
  XDomainRequest = sinon.xdr.XDomainRequest || undefined;
  XMLHttpRequest = sinon.xhr.XMLHttpRequest || undefined;
}

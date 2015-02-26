var Ajax = function(options) {
  this.url = options.url || '';
  this.headers= [];

  if(options.headers) {
    this.headers = this.headers.concat(options.headers);
  }
  if(this.token) {
    var tokenHeader = [{
      key: 'Authorization',
      value: this.token
    }];
    this.headers = this.headers.concat(tokenHeader);
  }
  this.payload = options.payload || undefined;
  this.success = options.successMethod || undefined;
  this.error = options.errorMethod || undefined;

  this.async = options.async;
  if(options.async === undefined) {
    this.async = true;
  }

  this.successCodes = [200, 201];
};

Ajax.prototype.send = function(httpMethod) {
  var req = new XMLHttpRequest();

  if(this.async) {
    var self = this;
    req.onreadystatechange = function() {
      if (this.readyState === 4 ) {
        if( self.successCodes.indexOf(this.status) > -1 ) {
          var responseJSON = JSON.parse(req.responseText);
          if( self.success ) self.success(responseJSON);
        } else {
          if( self.error ) self.error();
        }
      }
    };
  }

  req.open(httpMethod || 'GET', this.url, this.async);

  this.headers.forEach(function(header) {
    req.setRequestHeader(header.key, header.value);
  });

  var payload = this.payload ? JSON.stringify(this.payload) : undefined;

  if(!this.async) {
    req.send(payload);
    return JSON.parse(req.responseText);
  }

  req.send(payload);
};

Ajax.prototype.post = function() {
  return this.send('POST');
};

Ajax.prototype.get = function() {
  return this.send('GET');
};

Ajax.prototype.del = function() {
  return this.send('DELETE');
};

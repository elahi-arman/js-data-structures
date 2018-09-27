const Maybe = function(x){
  this.__value = x
}

Maybe.of = x => new Maybe(x)
Maybe.prototype.isNothing = () => this.__value === null || this.__value === undefined
Maybe.prototype.map = f => this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
Maybe.prototype.is = x => this.isNothing() ? Maybe.of(null) : (this.__value === x  || this.__value.id === x)
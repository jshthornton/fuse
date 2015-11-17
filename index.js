
export default class {
  constructor(def, autoIgnite = true) {
    this._def = def;
    this._timeout = 500;
    this._timer = null;

    if(autoIgnite === true) {
      this.ignite();
    }
  }

  ignite() {
    this._timer = setTimeout(this._detonate.bind(this), this._timeout);
  }

  disarm() {
    clearTimeout(this._timer);
  }

  _detonate() {
    this._def.reject({
      fuse: true,
      message: 'End of fuse'
    });
  }
}

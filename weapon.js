class Weapon {
  constructor(bearer, POW, RANGE, effects) {
    this._bearer = bearer;
    this._POW = POW;
    this._RANGE = RANGE;
    this._effects = effects || {};
  }

  get bearer() {
    return this._bearer;
  }

  get POW() {
    return this._POW;
  }

  get RANGE() {
    return this._RANGE;
  }

  //For melee weapons this will need to be overriden.
  get POWPlusSTR() {
    return this._POW;
  }

  get attackStat() {
    return this.bearer.MAT;
  }

  get onHitEffects() {
    return this._effects["on_hit"] || {};
  }

  get onDamageEffects() {
    return this._effects["on_damage"] || {};
  }

  get onDisableEffects() {
    return this._effects["on_disable"] || {};
  }

  get onBoxedEffects() {
    return this._effects["on_boxed"] || {};
  }

  get onDestroyedEffects() {
    return this._effects["on_destroyed"] || {};
  }

  get onRFPEffects() {
    return this._effects["on_rfp"] || {};
  }
}

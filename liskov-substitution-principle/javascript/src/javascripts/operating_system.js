class OperatingSystem {
  constructor(kernalName) {
    this._kernalName = kernalName;
  }

  get kernalName() {
    return this._kernalName;
  }
}

class Windows extends OperatingSystem {
  constructor(kernalName) {
    super(kernalName);

    this._architect = 'Bill Gates';
  }

  get architect() {
    return this._architect;
  }
}

module.exports = {
  OperatingSystem: OperatingSystem,
  Windows: Windows
}

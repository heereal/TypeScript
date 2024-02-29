// In the example, we have two classes Disposable and Activatable that act as our Mixins.
// We then use these to create a new class SmartObject.

// Disposable Mixin
class Disposable {
  isDisposed: boolean = false;
  dispose() {
    this.isDisposed = true;
  }
}

// Activatable Mixin
class Activatable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

// The combined class
class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(
      () =>
        console.log(`Active: ${this.isActive}, Disposed: ${this.isDisposed}`),
      500
    );
  }

  interact() {
    this.activate();
  }

  // Disposable
  isDisposed: boolean = false;
  dispose: () => void;

  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;
}

class Logger {
  log(message: string) {
    console.log(message);
  }
}

class LoggedActivatable extends Activatable implements Logger {
  // Logger
  log: (message: string) => void;

  // Override activate and deactivate
  activate() {
    super.activate();
    this.log("Activating...");
  }
  deactivate() {
    super.deactivate();
    this.log("Deactivating...");
  }
}

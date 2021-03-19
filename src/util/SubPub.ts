class SubPub {
  private static messages: Object = {};
  private static lastUid: number = 0;

  static subscribe(message: string, fn: Function) {
    if (!this.hasKeyCheck(this.messages, message)) {
      // @ts-ignore
      this.messages[message] = {};
    }

    const uid = ++this.lastUid;

    // @ts-ignore
    this.messages[message][uid] = fn;

    return uid;
  }

  private static hasKeyCheck(obj: Object, key: string | number) {
    if (!obj) return false;

    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  static unsubscribe(message: string, uid: number) {
    if (!this.hasKeyCheck(this.messages, message)) {
      return;
    }

    // @ts-ignore
    if (!this.hasKeyCheck(this.messages[message], uid)) {
      return;
    }

    // @ts-ignore
    delete this.messages[message][uid];
  }

  static publish(message: string, data?: any) {
    if (!this.hasKeyCheck(this.messages, message)) {
      return;
    }

    // @ts-ignore
    for (const uid in this.messages[message]) {
      // @ts-ignore
      const fn = this.messages[message][uid];

      fn(data);
    }
  }
}

export default SubPub;

export class ValueComparator {
  static valueComparator(v1, v2): boolean {
    if (v1 === v2) {
      return true;
    } else if (typeof v1 === 'object' && typeof v2 === 'object') {
      return Object.keys(v1).some((k) => ValueComparator.valueComparator(v1[k], v2[k]));
    } else if (!v1 && !v2) {
      return true;
    }

    return false;
  }
}

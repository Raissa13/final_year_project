const isNullOrUndefined = <T>(val: T) => {
    if (val === undefined || val === null) {
      return true;
    }
    return false;
  };
  export default isNullOrUndefined;
  
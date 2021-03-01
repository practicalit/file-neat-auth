const StorageService = {

  add: function(key, value) {
      localStorage.setItem(key, value);
      return true;
  },
  get: function(key) {
    return localStorage.getItem(key);
  },
  delete: function(key) {
    localStorage.delete(key);
  }
};

export default StorageService;
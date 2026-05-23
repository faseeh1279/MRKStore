class ApiResponse {
  constructor(success, message, data = null, meta = null) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }

  static success(message, data = null, meta = null) {
    return new ApiResponse(true, message, data, meta);
  }

  static error(message, data = null) {
    return new ApiResponse(false, message, data);
  }
}

module.exports = ApiResponse;
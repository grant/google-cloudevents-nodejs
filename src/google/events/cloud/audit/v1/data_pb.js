// source: google/events/cloud/audit/v1/data.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.events.cloud.audit.v1.AuditLogData', null, global);
goog.exportSymbol('proto.google.events.cloud.audit.v1.AuthenticationInfo', null, global);
goog.exportSymbol('proto.google.events.cloud.audit.v1.AuthorizationInfo', null, global);
goog.exportSymbol('proto.google.events.cloud.audit.v1.RequestMetadata', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.events.cloud.audit.v1.AuditLogData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.events.cloud.audit.v1.AuditLogData.repeatedFields_, null);
};
goog.inherits(proto.google.events.cloud.audit.v1.AuditLogData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.events.cloud.audit.v1.AuditLogData.displayName = 'proto.google.events.cloud.audit.v1.AuditLogData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.events.cloud.audit.v1.AuthenticationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.events.cloud.audit.v1.AuthenticationInfo.displayName = 'proto.google.events.cloud.audit.v1.AuthenticationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.events.cloud.audit.v1.AuthorizationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.events.cloud.audit.v1.AuthorizationInfo.displayName = 'proto.google.events.cloud.audit.v1.AuthorizationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.events.cloud.audit.v1.RequestMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.events.cloud.audit.v1.RequestMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.events.cloud.audit.v1.RequestMetadata.displayName = 'proto.google.events.cloud.audit.v1.RequestMetadata';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.events.cloud.audit.v1.AuditLogData.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.toObject = function(opt_includeInstance) {
  return proto.google.events.cloud.audit.v1.AuditLogData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.events.cloud.audit.v1.AuditLogData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.AuditLogData.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    methodName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    resourceName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    numResponseItems: jspb.Message.getFieldWithDefault(msg, 12, 0),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    authenticationInfo: (f = msg.getAuthenticationInfo()) && proto.google.events.cloud.audit.v1.AuthenticationInfo.toObject(includeInstance, f),
    authorizationInfoList: jspb.Message.toObjectList(msg.getAuthorizationInfoList(),
    proto.google.events.cloud.audit.v1.AuthorizationInfo.toObject, includeInstance),
    requestMetadata: (f = msg.getRequestMetadata()) && proto.google.events.cloud.audit.v1.RequestMetadata.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    serviceData: (f = msg.getServiceData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData}
 */
proto.google.events.cloud.audit.v1.AuditLogData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.events.cloud.audit.v1.AuditLogData;
  return proto.google.events.cloud.audit.v1.AuditLogData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.events.cloud.audit.v1.AuditLogData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData}
 */
proto.google.events.cloud.audit.v1.AuditLogData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumResponseItems(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.google.events.cloud.audit.v1.AuthenticationInfo;
      reader.readMessage(value,proto.google.events.cloud.audit.v1.AuthenticationInfo.deserializeBinaryFromReader);
      msg.setAuthenticationInfo(value);
      break;
    case 9:
      var value = new proto.google.events.cloud.audit.v1.AuthorizationInfo;
      reader.readMessage(value,proto.google.events.cloud.audit.v1.AuthorizationInfo.deserializeBinaryFromReader);
      msg.addAuthorizationInfo(value);
      break;
    case 4:
      var value = new proto.google.events.cloud.audit.v1.RequestMetadata;
      reader.readMessage(value,proto.google.events.cloud.audit.v1.RequestMetadata.deserializeBinaryFromReader);
      msg.setRequestMetadata(value);
      break;
    case 16:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 17:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 15:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setServiceData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.events.cloud.audit.v1.AuditLogData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.events.cloud.audit.v1.AuditLogData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.AuditLogData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNumResponseItems();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getAuthenticationInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.events.cloud.audit.v1.AuthenticationInfo.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizationInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.events.cloud.audit.v1.AuthorizationInfo.serializeBinaryToWriter
    );
  }
  f = message.getRequestMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.events.cloud.audit.v1.RequestMetadata.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getServiceData();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 7;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string method_name = 8;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string resource_name = 11;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int64 num_response_items = 12;
 * @return {number}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getNumResponseItems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setNumResponseItems = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuthenticationInfo authentication_info = 3;
 * @return {?proto.google.events.cloud.audit.v1.AuthenticationInfo}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getAuthenticationInfo = function() {
  return /** @type{?proto.google.events.cloud.audit.v1.AuthenticationInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.events.cloud.audit.v1.AuthenticationInfo, 3));
};


/**
 * @param {?proto.google.events.cloud.audit.v1.AuthenticationInfo|undefined} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setAuthenticationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearAuthenticationInfo = function() {
  return this.setAuthenticationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.hasAuthenticationInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated AuthorizationInfo authorization_info = 9;
 * @return {!Array<!proto.google.events.cloud.audit.v1.AuthorizationInfo>}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getAuthorizationInfoList = function() {
  return /** @type{!Array<!proto.google.events.cloud.audit.v1.AuthorizationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.events.cloud.audit.v1.AuthorizationInfo, 9));
};


/**
 * @param {!Array<!proto.google.events.cloud.audit.v1.AuthorizationInfo>} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setAuthorizationInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.events.cloud.audit.v1.AuthorizationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.events.cloud.audit.v1.AuthorizationInfo}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.addAuthorizationInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.events.cloud.audit.v1.AuthorizationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearAuthorizationInfoList = function() {
  return this.setAuthorizationInfoList([]);
};


/**
 * optional RequestMetadata request_metadata = 4;
 * @return {?proto.google.events.cloud.audit.v1.RequestMetadata}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getRequestMetadata = function() {
  return /** @type{?proto.google.events.cloud.audit.v1.RequestMetadata} */ (
    jspb.Message.getWrapperField(this, proto.google.events.cloud.audit.v1.RequestMetadata, 4));
};


/**
 * @param {?proto.google.events.cloud.audit.v1.RequestMetadata|undefined} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setRequestMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearRequestMetadata = function() {
  return this.setRequestMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.hasRequestMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct request = 16;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getRequest = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 16));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Struct response = 17;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getResponse = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 17));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Struct service_data = 15;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.getServiceData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 15));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
*/
proto.google.events.cloud.audit.v1.AuditLogData.prototype.setServiceData = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.cloud.audit.v1.AuditLogData} returns this
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.clearServiceData = function() {
  return this.setServiceData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuditLogData.prototype.hasServiceData = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.events.cloud.audit.v1.AuthenticationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.events.cloud.audit.v1.AuthenticationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    principalEmail: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.events.cloud.audit.v1.AuthenticationInfo}
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.events.cloud.audit.v1.AuthenticationInfo;
  return proto.google.events.cloud.audit.v1.AuthenticationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.events.cloud.audit.v1.AuthenticationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.events.cloud.audit.v1.AuthenticationInfo}
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrincipalEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.events.cloud.audit.v1.AuthenticationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.events.cloud.audit.v1.AuthenticationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrincipalEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string principal_email = 1;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.prototype.getPrincipalEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.AuthenticationInfo} returns this
 */
proto.google.events.cloud.audit.v1.AuthenticationInfo.prototype.setPrincipalEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.events.cloud.audit.v1.AuthorizationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.events.cloud.audit.v1.AuthorizationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, ""),
    granted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.events.cloud.audit.v1.AuthorizationInfo}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.events.cloud.audit.v1.AuthorizationInfo;
  return proto.google.events.cloud.audit.v1.AuthorizationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.events.cloud.audit.v1.AuthorizationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.events.cloud.audit.v1.AuthorizationInfo}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGranted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.events.cloud.audit.v1.AuthorizationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.events.cloud.audit.v1.AuthorizationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGranted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string resource = 1;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.AuthorizationInfo} returns this
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.setResource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.AuthorizationInfo} returns this
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool granted = 3;
 * @return {boolean}
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.getGranted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.events.cloud.audit.v1.AuthorizationInfo} returns this
 */
proto.google.events.cloud.audit.v1.AuthorizationInfo.prototype.setGranted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.events.cloud.audit.v1.RequestMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.events.cloud.audit.v1.RequestMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.events.cloud.audit.v1.RequestMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.RequestMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    callerIp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callerSuppliedUserAgent: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.events.cloud.audit.v1.RequestMetadata}
 */
proto.google.events.cloud.audit.v1.RequestMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.events.cloud.audit.v1.RequestMetadata;
  return proto.google.events.cloud.audit.v1.RequestMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.events.cloud.audit.v1.RequestMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.events.cloud.audit.v1.RequestMetadata}
 */
proto.google.events.cloud.audit.v1.RequestMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerIp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerSuppliedUserAgent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.events.cloud.audit.v1.RequestMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.events.cloud.audit.v1.RequestMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.events.cloud.audit.v1.RequestMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.cloud.audit.v1.RequestMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCallerIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallerSuppliedUserAgent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string caller_ip = 1;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.RequestMetadata.prototype.getCallerIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.RequestMetadata} returns this
 */
proto.google.events.cloud.audit.v1.RequestMetadata.prototype.setCallerIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string caller_supplied_user_agent = 2;
 * @return {string}
 */
proto.google.events.cloud.audit.v1.RequestMetadata.prototype.getCallerSuppliedUserAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.events.cloud.audit.v1.RequestMetadata} returns this
 */
proto.google.events.cloud.audit.v1.RequestMetadata.prototype.setCallerSuppliedUserAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.google.events.cloud.audit.v1);

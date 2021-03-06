// source: google/events/firebase/v1/data.proto
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
goog.exportSymbol('proto.google.events.firebase.v1.DocumentEventData', null, global);
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
proto.google.events.firebase.v1.DocumentEventData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.events.firebase.v1.DocumentEventData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.events.firebase.v1.DocumentEventData.displayName = 'proto.google.events.firebase.v1.DocumentEventData';
}



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
proto.google.events.firebase.v1.DocumentEventData.prototype.toObject = function(opt_includeInstance) {
  return proto.google.events.firebase.v1.DocumentEventData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.events.firebase.v1.DocumentEventData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.firebase.v1.DocumentEventData.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    delta: (f = msg.getDelta()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    wildcardsMap: (f = msg.getWildcardsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.events.firebase.v1.DocumentEventData}
 */
proto.google.events.firebase.v1.DocumentEventData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.events.firebase.v1.DocumentEventData;
  return proto.google.events.firebase.v1.DocumentEventData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.events.firebase.v1.DocumentEventData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.events.firebase.v1.DocumentEventData}
 */
proto.google.events.firebase.v1.DocumentEventData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setDelta(value);
      break;
    case 3:
      var value = msg.getWildcardsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.google.events.firebase.v1.DocumentEventData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.events.firebase.v1.DocumentEventData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.events.firebase.v1.DocumentEventData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.events.firebase.v1.DocumentEventData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getDelta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getWildcardsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional google.protobuf.Value data = 1;
 * @return {?proto.google.protobuf.Value}
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 1));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.google.events.firebase.v1.DocumentEventData} returns this
*/
proto.google.events.firebase.v1.DocumentEventData.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.firebase.v1.DocumentEventData} returns this
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Value delta = 2;
 * @return {?proto.google.protobuf.Value}
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.getDelta = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 2));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.google.events.firebase.v1.DocumentEventData} returns this
*/
proto.google.events.firebase.v1.DocumentEventData.prototype.setDelta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.events.firebase.v1.DocumentEventData} returns this
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.clearDelta = function() {
  return this.setDelta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.hasDelta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> wildcards = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.getWildcardsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.events.firebase.v1.DocumentEventData} returns this
 */
proto.google.events.firebase.v1.DocumentEventData.prototype.clearWildcardsMap = function() {
  this.getWildcardsMap().clear();
  return this;};


goog.object.extend(exports, proto.google.events.firebase.v1);

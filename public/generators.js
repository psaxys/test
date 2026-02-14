// Генераторы кода Arduino C++ для блоков ESP32

Blockly.JavaScript = Blockly.JavaScript || {};

Blockly.JavaScript['esp32_pin_mode'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  return 'pinMode(' + pin + ', ' + mode + ');\n';
};

Blockly.JavaScript['esp32_digital_write'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var value = block.getFieldValue('VALUE');
  return 'digitalWrite(' + pin + ', ' + value + ');\n';
};

Blockly.JavaScript['esp32_digital_read'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return ['digitalRead(' + pin + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['esp32_delay'] = function(block) {
  var ms = Blockly.JavaScript.valueToCode(block, 'MS', Blockly.JavaScript.ORDER_ATOMIC) || '1000';
  return 'delay(' + ms + ');\n';
};

Blockly.JavaScript['esp32_serial_begin'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  return 'Serial.begin(' + speed + ');\n';
};

Blockly.JavaScript['esp32_serial_print'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return 'Serial.print(' + text + ');\n';
};

Blockly.JavaScript['esp32_serial_println'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return 'Serial.println(' + text + ');\n';
};
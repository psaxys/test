// Определение блоков для ESP32

Blockly.Blocks['esp32_pin_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("установить пин")
        .appendField(new Blockly.FieldDropdown([["5","5"], ["4","4"], ["2","2"], ["13","13"], ["12","12"]]), "PIN")
        .appendField("в режим")
        .appendField(new Blockly.FieldDropdown([["OUTPUT","OUTPUT"], ["INPUT","INPUT"], ["INPUT_PULLUP","INPUT_PULLUP"]]), "MODE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Установить режим пина");
  }
};

Blockly.Blocks['esp32_digital_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("цифровая запись на пине")
        .appendField(new Blockly.FieldDropdown([["5","5"], ["4","4"], ["2","2"], ["13","13"], ["12","12"]]), "PIN")
        .appendField("уровень")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "VALUE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip("Записать HIGH или LOW на цифровой пин");
  }
};

Blockly.Blocks['esp32_digital_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("цифровое чтение с пина")
        .appendField(new Blockly.FieldDropdown([["5","5"], ["4","4"], ["2","2"], ["13","13"], ["12","12"]]), "PIN");
    this.setOutput(true, 'Number');
    this.setColour(120);
    this.setTooltip("Прочитать цифровое значение с пина");
  }
};

Blockly.Blocks['esp32_delay'] = {
  init: function() {
    this.appendValueInput("MS")
        .setCheck("Number")
        .appendField("задержка (мс)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip("Задержка на указанное количество миллисекунд");
  }
};

Blockly.Blocks['esp32_serial_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("инициализация Serial со скоростью")
        .appendField(new Blockly.FieldDropdown([["9600","9600"], ["115200","115200"], ["4800","4800"]]), "SPEED");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Запуск Serial с указанной скоростью");
  }
};

Blockly.Blocks['esp32_serial_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("печать в Serial");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Печать текста в Serial без перевода строки");
  }
};

Blockly.Blocks['esp32_serial_println'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("печать в Serial с переводом строки");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Печать текста в Serial с переводом строки");
  }
};
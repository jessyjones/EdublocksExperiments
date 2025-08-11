
Blockly.Python['matrix_set_pixel'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var dropdown_state = block.getFieldValue('STATE');
  var code = `matrix[${value_x}, ${value_y}] = ${dropdown_state}\n`;
  return code;
};
export { };
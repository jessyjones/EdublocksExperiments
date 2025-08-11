Blockly.defineBlocksWithJsonArray([
  {
    "type": "matrix_set_pixel",
    "message0": "set pixel at x %1 y %2 to %3",
    "args0": [
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "STATE",
        "options": [
          ["on", "1"],
          ["off", "0"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Set a pixel on the LED matrix",
    "helpUrl": ""
  }
]);
export { };
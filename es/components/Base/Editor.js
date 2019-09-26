import _classCallCheck from "@babel/runtime-corejs2/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs2/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime-corejs2/helpers/esm/inherits";
import GGEditorCore from 'gg-editor-core';
import { uniqueId } from "../../utils";

var Editor =
/*#__PURE__*/
function (_GGEditorCore) {
  _inherits(Editor, _GGEditorCore);

  function Editor(opt) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, opt));
    _this.id = uniqueId();
    return _this;
  }

  return Editor;
}(GGEditorCore);

export { Editor as default };
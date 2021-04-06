import { Message } from "element-ui";
/**
 *
 * @param {String} message 文字提示
 * @param {String} type 弹窗类型
 * @param {Number} offset 窗口距离顶部偏移量
 * @param {Number} duration 持续时间
 */
export const Msg = ({ message, type, offset = 20, duration = "1000" }) => {
  return Message(message, type, offset, duration);
};

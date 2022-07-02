import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "../utils/dayjs-mn";

dayjs.extend(relativeTime);

export default function RelativeTime({ date }) {
    return dayjs(date).locale("mn").fromNow();
}

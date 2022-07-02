!(function (_, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e(require("dayjs"))) : "function" == typeof define && define.amd ? define(["dayjs"], e) : (_.dayjs_locale_mn = e(_.dayjs));
})(this, function (_) {
    "use strict";
    _ = _ && _.hasOwnProperty("default") ? _.default : _;
    var e = {
        name: "mn",
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
            "_"
        ),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        ordinal: function (_) {
            return _;
        },
        formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" },
        relativeTime: {
            future: "%s",
            past: "%s",
            s: "саяхан",
            m: "минутын өмнө",
            mm: "%d минутын өмнө",
            h: "1 цагийн өмнө",
            hh: "%d цагийн өмнө",
            d: "1 өдрийн өмнө",
            dd: "%d өдрийн өмнө",
            M: "1 сарын өмнө",
            MM: "%d сарын өмнө",
            y: "1 жилийн өмнө",
            yy: "%d жилийн өмнө",
        },
    };
    return _.locale(e, null, !0), e;
});

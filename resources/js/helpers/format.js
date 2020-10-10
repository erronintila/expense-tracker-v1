import moment from "moment";
import numeral from "numeral";

Vue.mixin({
    methods: {
        formatNumber(value) {
            return numeral(value).format("0,0.00");
        },
        formatDate(date, format) {
            return date == null ? "" : moment(date).format(format);
        }
    }
});

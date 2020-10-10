import moment from "moment";
import numeral from "numeral";

export default {
    methods: {
        formatNumber: function(value) {
            return numeral(value).format("0,0.00");
        },
        formatDate: function(date, format) {
            return date == null ? "" : moment(date).format(format);
        }
    }
};

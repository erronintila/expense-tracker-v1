import moment from "moment";
import numeral from "numeral";

export default {
    data() {
        return {
            mixin_validation: {
                required: [v => !!v || "This field is required"],
                minLength: value => [
                    v =>
                        (!!v && v.length <= value) ||
                        `This field must be less than ${value} characters`
                ],
                minimumLength: value => [
                    v =>
                        (!!v && v.length >= value) ||
                        `This field must be greater than ${value} characters`
                ],
                isNumber: [
                    v => !Number.isNaN(parseFloat(v)) || "Value is not a number"
                ],
                minNumberValue: value => [
                    v =>
                        parseFloat(v) >= parseFloat(value) ||
                        `Value must be greater than or equal to ${parseFloat(
                            value
                        )}`
                ],
                email: [v => /.+@.+/.test(v) || "E-mail is not valid"]
            }
        };
    },
    methods: {
        mixin_formatNumber(value) {
            return numeral(value).format("0,0.00");
        },
        mixin_formatDate(date, format) {
            return date == null ? "" : moment(date).format(format);
        },
        mixin_getHumanDate(date) {
            return moment(date).fromNow();
        },
        mixin_isEmpty(item) {
            if (item) {
                return parseFloat(item);
            }
            return 0;
        },
        // mixin_isEmptyNumber(item) {
        //     if (item) {
        //         return parseFloat(item);
        //     }
        //     return 0;
        // },
        mixin_convertToNumber(item) {
            if (item) {
                return parseFloat(item);
            }
            return 0;
        },
        mixin_successDialog(title, text) {
            this.$dialog.message.success(`${title}: ${text}`, {
                position: "top-right",
                timeout: 2000
            });
        },
        mixin_errorDialog(title, text) {
            this.$dialog.message.error(`${title}: ${text}`, {
                position: "top-right",
                timeout: 2000
            });
        },
        mixin_confirmDialog(title, text, callback) {
            this.$confirm(`${title} : ${text}`).then(res => {
                if (res) {
                    callback();
                }
            });
        }
    },
    computed: {
        mixin_currentUser() {
            return this.$store.getters.currentUser;
        },
        mixin_permissions() {
            return this.$store.getters.getPermissions;
        }
    }
};

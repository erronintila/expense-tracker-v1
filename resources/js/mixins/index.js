import moment from "moment";
import numeral from "numeral";

export default {
    data() {
        return {
            validation: {
                required: [v => !!v || "This field is required"],
                minLength: value => [
                    v =>
                        (!!v && v.length <= value) ||
                        `This field must be less than ${value} characters`
                ],
                email: [v => /.+@.+/.test(v) || "E-mail is not valid"]
            }
        };
    },
    methods: {
        formatNumber(value) {
            return numeral(value).format("0,0.00");
        },
        formatDate(date, format) {
            return date == null ? "" : moment(date).format(format);
        },
        getHumanDate(date) {
            return moment(date).fromNow();
        },
        isEmpty(item) {
            if (item) {
                return parseFloat(item);
            }
            return 0;
        },
        successDialog(title, text) {
            this.$dialog.message.success(`${title}: ${text}`, {
                position: "top-right",
                timeout: 2000
            });
        },
        errorDialog(title, text) {
            this.$dialog.message.error(`${title}: ${text}`, {
                position: "top-right",
                timeout: 2000
            });
        },
        confirmDialog(title, text, callback) {
            this.$confirm(`${title} : ${text}`).then(res => {
                if (res) {
                    callback();
                }
            });
        }
    },
    computed: {
        $currentUser() {
            return this.$store.getters.currentUser;
        },
        $permissions() {
            return this.$store.getters.getPermissions;
        }
    }
};

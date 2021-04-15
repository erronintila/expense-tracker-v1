import { store } from "../../store/index";

// const adminRoutes = [
//     /** Dashboard */
//     {
//         path: "/admin",
//         name: "admin",
//         redirect: "/dashboard",
//         component: () => import("../../views/pages/Index.vue"),
//         meta: {
//             requiresAuth: true,
//             requiresAdmin: true,
//             keepAlive: true
//         },
//         children: [
//             /**
//              *
//              *
//              * Dashboard
//              *
//              *
//              */
//             {
//                 path: "/dashboard",
//                 name: "user.dashboard.index",
//                 component: () =>
//                     import("../../views/pages/dashboard/Index.vue"),
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             /**
//              *
//              *
//              * Settings
//              *
//              *
//              */
//             {
//                 path: "/settings",
//                 name: "admin.settings.index",
//                 component: () =>
//                     import("../../views/pages/admin/settings/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("manage settings")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/settings/user",
//                 name: "admin.settings.user",
//                 component: () =>
//                     import("../../views/pages/admin/settings/User.vue"),
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             /**
//              *
//              *
//              * Profile
//              *
//              *
//              */
//             {
//                 path: "/profile",
//                 name: "user.profile.index",
//                 component: () =>
//                     import("../../views/pages/profile/Index.vue"),
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             /**
//              *
//              *
//              * Activity Logs
//              *
//              *
//              */
//             {
//                 path: "/activity_logs",
//                 name: "admin.activity_logs.index",
//                 component: () =>
//                     import("../../views/pages/admin/activity_logs/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all activity logs")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/departments",
//                 name: "admin.departments.index",
//                 component: () =>
//                     import("../../views/pages/admin/departments/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all departments")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/departments/create",
//                 name: "admin.departments.create",
//                 component: () =>
//                     import("../../views/pages/admin/departments/Create.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add departments")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/departments/:id/edit",
//                 name: "admin.departments.edit",
//                 component: () =>
//                     import("../../views/pages/admin/departments/Edit.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit departments")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             // {
//             //     path: "/departments/:id",
//             //     name: "admin.departments.show",
//             //     component: () =>
//             //         import("../../views/pages/admin/departments/Show.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         let permissions = store.getters.user.permissions;
//             //         permissions = permissions.map(item => item.name);

//             //         if (permissions.includes("view departments")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     },
//             //     meta: {
//             //         keepAlive: true
//             //     }
//             // },
//             /**
//              *
//              *
//              * Users
//              *
//              *
//              */
//             {
//                 path: "/users",
//                 name: "admin.users.index",
//                 component: () =>
//                     import("../../views/pages/admin/users/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all users")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/users/create",
//                 name: "admin.users.create",
//                 component: () =>
//                     import("../../views/pages/admin/users/Create.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add users")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/users/:id/edit",
//                 name: "admin.users.edit",
//                 component: () =>
//                     import("../../views/pages/admin/users/Edit.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit users")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/users/:id/edit/fund",
//                 name: "admin.users.edit.fund",
//                 component: () =>
//                     import("../../views/pages/admin/users/EditFund.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit users fund")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/users/:id/edit/permissions",
//                 name: "admin.users.edit.permissions",
//                 component: () =>
//                     import("../../views/pages/admin/users/EditPermission.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit permissions")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/users/:id",
//                 name: "admin.users.show",
//                 component: () =>
//                     import("../../views/pages/admin/users/Show.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view users")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             /**
//              *
//              *
//              * Expense Types
//              *
//              *
//              */
//             {
//                 path: "/expense_types",
//                 name: "admin.expense_types.index",
//                 component: () =>
//                     import("../../views/pages/admin/expense_types/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all expense types")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/expense_types/create",
//                 name: "admin.expense_types.create",
//                 component: () =>
//                     import(
//                         "../../views/pages/admin/expense_types/Create.vue"
//                     ),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add expense types")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/expense_types/:id/edit",
//                 name: "admin.expense_types.edit",
//                 component: () =>
//                     import("../../views/pages/admin/expense_types/Edit.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit expense types")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             // {
//             //     path: "/expense_types/:id",
//             //     name: "admin.expense_types.show",
//             //     component: () =>
//             //         import("../../views/pages/admin/expense_types/Show.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         let permissions = store.getters.user.permissions;
//             //         permissions = permissions.map(item => item.name);

//             //         if (permissions.includes("view expense types")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     },
//             //     meta: {
//             //         keepAlive: true
//             //     }
//             // },
//             /**
//              *
//              *
//              * Expenses
//              *
//              *
//              */
//             {
//                 path: "/expenses",
//                 name: "user.expenses.index",
//                 component: () =>
//                     import("../../views/pages/expenses/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all expenses")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/expenses/create",
//                 name: "user.expenses.create",
//                 component: () =>
//                     import("../../views/pages/expenses/Create.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add expenses")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             // {
//             //     path: "/expenses/create/bulk",
//             //     name: "user.expenses.create.bulk",
//             //     component: () =>
//             //         import("../../views/pages/expenses/CreateBulk.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (
//             //             store.getters.user.permissions.includes("add expenses")
//             //         ) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             {
//                 path: "/expenses/:id/edit",
//                 name: "user.expenses.edit",
//                 component: () =>
//                     import("../../views/pages/expenses/Edit.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit expenses")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/expenses/:id",
//                 name: "user.expenses.show",
//                 component: () =>
//                     import("../../views/pages/expenses/Show.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view expenses")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             /**
//              *
//              *
//              * Jobs
//              *
//              *
//              */
//             {
//                 path: "/jobs",
//                 name: "admin.jobs.index",
//                 component: () =>
//                     import("../../views/pages/admin/jobs/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all jobs")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/jobs/create",
//                 name: "admin.jobs.create",
//                 component: () =>
//                     import("../../views/pages/admin/jobs/Create.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add jobs")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/jobs/:id/edit",
//                 name: "admin.jobs.edit",
//                 component: () =>
//                     import("../../views/pages/admin/jobs/Edit.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit jobs")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             // {
//             //     path: "/jobs/:id",
//             //     name: "admin.jobs.show",
//             //     component: () =>
//             //         import("../../views/pages/admin/jobs/Show.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         let permissions = store.getters.user.permissions;
//             //         permissions = permissions.map(item => item.name);

//             //         if (permissions.includes("view jobs")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     },
//             //     meta: {
//             //         keepAlive: true
//             //     }
//             // },
//             /**
//              *
//              *
//              * Payments
//              *
//              *
//              */
//             {
//                 path: "/payments",
//                 name: "user.payments.index",
//                 component: () =>
//                     import("../../views/pages/payments/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all payments")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/payments/create",
//                 name: "user.payments.create",
//                 component: () =>
//                     import("../../views/pages/payments/Create.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add payments")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             // {
//             //     path: "/payments/:id/edit",
//             //     name: "user.payments.edit",
//             //     component: () =>
//             //         import("../../views/pages/payments/Edit.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         let permissions = store.getters.user.permissions;
//             //         permissions = permissions.map(item => item.name);

//             //         if (permissions.includes("edit payments")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     },
//             //     meta: {
//             //         keepAlive: false
//             //     }
//             // },
//             {
//                 path: "/payments/:id",
//                 name: "user.payments.show",
//                 component: () =>
//                     import("../../views/pages/payments/Show.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view payments")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             /**
//              *
//              *
//              * Expense Reports
//              *
//              *
//              */
//             {
//                 path: "/expense_reports",
//                 name: "user.expense_reports.index",
//                 component: () =>
//                     import(
//                         "../../views/pages/expense_reports/Index.vue"
//                     ),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all expense reports")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/expense_reports/create",
//                 name: "user.expense_reports.create",
//                 component: () =>
//                     import(
//                         "../../views/pages/expense_reports/Create.vue"
//                     ),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add expense reports")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/expense_reports/:id/edit",
//                 name: "user.expense_reports.edit",
//                 component: () =>
//                     import(
//                         "../../views/pages/expense_reports/Edit.vue"
//                     ),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit expense reports")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/expense_reports/:id",
//                 name: "user.expense_reports.show",
//                 component: () =>
//                     import(
//                         "../../views/pages/expense_reports/Show.vue"
//                     ),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view expense reports")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             // {
//             //     path: "/expense_reports/print/:id",
//             //     name: "user.expense_reports.print",
//             //     component: () =>
//             //         import(
//             //             "../../views/pages/expense_reports/Print.vue"
//             //         )
//             // },
//             // {
//             //     path: "/expense_reports/:id/summary",
//             //     name: "user.expense_reports.summary",
//             //     component: () =>
//             //         import(
//             //             "../../views/pages/expense_reports/ShowSummary.vue"
//             //         )
//             // },
//             // {
//             //     path: "/expense_reports/:id/detailed",
//             //     name: "user.expense_reports.detailed",
//             //     component: () =>
//             //         import(
//             //             "../../views/pages/expense_reports/ShowDetailed.vue"
//             //         )
//             // },
//             /**
//              *
//              *
//              * Users
//              *
//              *
//              */
//             // {
//             //     path: "/users",
//             //     name: "admin.users.index",
//             //     component: () =>
//             //         import("../../views/pages/users/Index.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (
//             //             store.getters.getPermissions.includes("view all users")
//             //         ) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             // {
//             //     path: "/users/create",
//             //     name: "admin.users.create",
//             //     component: () =>
//             //         import("../../views/pages/users/Create.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (store.getters.getPermissions.includes("add users")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             // {
//             //     path: "/users/:id/edit",
//             //     name: "admin.users.edit",
//             //     component: () =>
//             //         import("../../views/pages/users/Edit.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (store.getters.getPermissions.includes("edit users")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             // {
//             //     path: "/users/:id",
//             //     name: "admin.users.show",
//             //     component: () =>
//             //         import("../../views/pages/users/Show.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (store.getters.getPermissions.includes("view users")) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             /**
//              *
//              *
//              * Roles
//              *
//              *
//              */
//             // {
//             //     path: "/roles",
//             //     name: "admin.roles.index",
//             //     component: () =>
//             //         import("../../views/pages/roles/Index.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (
//             //             store.getters.getPermissions.includes(
//             //                 "view all permissions"
//             //             )
//             //         ) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             // {
//             //     path: "/roles/create",
//             //     name: "admin.roles.create",
//             //     component: () =>
//             //         import("../../views/pages/roles/Create.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (
//             //             store.getters.getPermissions.includes("add permissions")
//             //         ) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             // {
//             //     path: "/roles/:id/edit",
//             //     name: "admin.roles.edit",
//             //     component: () =>
//             //         import("../../views/pages/roles/Edit.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (
//             //             store.getters.getPermissions.includes(
//             //                 "edit permissions"
//             //             )
//             //         ) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             // {
//             //     path: "/roles/:id",
//             //     name: "admin.roles.show",
//             //     component: () =>
//             //         import("../../views/pages/roles/Show.vue"),
//             //     beforeEnter: (to, from, next) => {
//             //         if (
//             //             store.getters.getPermissions.includes(
//             //                 "view permissions"
//             //             )
//             //         ) {
//             //             next();
//             //         } else {
//             //             next({ name: "error_403" });
//             //         }
//             //     }
//             // },
//             /**
//              *
//              *
//              * Permissions
//              *
//              *
//              */
//             // {
//             //     path: "/permissions",
//             //     name: "admin.permissions.index",
//             //     component: () =>
//             //         import("../../views/pages/permissions/Index.vue")
//             // },
//             // {
//             //     path: "/permissions/create",
//             //     name: "admin.permissions.create",
//             //     component: () =>
//             //         import("../../views/pages/permissions/Create.vue")
//             // },
//             // {
//             //     path: "/permissions/:id/edit",
//             //     name: "admin.permissions.edit",
//             //     component: () =>
//             //         import("../../views/pages/permissions/Edit.vue")
//             // },
//             // {
//             //     path: "/permissions/:id",
//             //     name: "admin.permissions.show",
//             //     component: () =>
//             //         import("../../views/pages/permissions/Show.vue")
//             // },
//             /**
//              *
//              *
//              * Vendors
//              *
//              *
//              */
//             {
//                 path: "/vendors",
//                 name: "admin.vendors.index",
//                 component: () =>
//                     import("../../views/pages/admin/vendors/Index.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view all vendors")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             {
//                 path: "/vendors/create",
//                 name: "admin.vendors.create",
//                 component: () =>
//                     import("../../views/pages/admin/vendors/Create.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("add vendors")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/vendors/:id/edit",
//                 name: "admin.vendors.edit",
//                 component: () =>
//                     import("../../views/pages/admin/vendors/Edit.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("edit vendors")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: false
//                 }
//             },
//             {
//                 path: "/vendors/:id",
//                 name: "admin.vendors.show",
//                 component: () =>
//                     import("../../views/pages/admin/vendors/Show.vue"),
//                 beforeEnter: (to, from, next) => {
//                     let permissions = store.getters.user.permissions;
//                     permissions = permissions.map(item => item.name);

//                     if (permissions.includes("view vendors")) {
//                         next();
//                     } else {
//                         next({ name: "error_403" });
//                     }
//                 },
//                 meta: {
//                     keepAlive: true
//                 }
//             },
//             /**
//              *
//              *
//              * Notifications
//              *
//              *
//              */
//             {
//                 path: "/notifications",
//                 name: "user.notifications.index",
//                 component: () =>
//                     import("../../views/pages/notifications/Index.vue"),
//                 meta: {
//                     keepAlive: true
//                 }
//             }
//         ]
//     }
// ];

const adminRoutes = [
    /** Dashboard */
    {
        path: "/admin",
        name: "admin",
        redirect: "/admin/dashboard",
        component: () => import("../../views/modules/admin/Index.vue"),
        meta: {
            requiresAuth: true,
            requiresAdmin: true,
            keepAlive: true
        },
        children: [
            /**
             *
             *
             * Dashboard
             *
             *
             */
            {
                path: "/admin/dashboard",
                name: "admin.dashboard.index",
                component: () =>
                    import("../../views/modules/admin/dashboard/Index.vue"),
                meta: {
                    keepAlive: false
                }
            },
            /**
             *
             *
             * Settings
             *
             *
             */
            {
                path: "/admin/settings",
                name: "admin.settings.index",
                component: () =>
                    import("../../views/modules/admin/settings/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("manage settings")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/settings/user",
                name: "admin.settings.user",
                component: () =>
                    import("../../views/modules/admin/settings/User.vue"),
                meta: {
                    keepAlive: false
                }
            },
            /**
             *
             *
             * Profile
             *
             *
             */
            {
                path: "/admin/profile",
                name: "admin.profile.index",
                component: () =>
                    import("../../views/modules/admin/profile/Index.vue"),
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Activity Logs
             *
             *
             */
            {
                path: "/admin/activity_logs",
                name: "admin.activity_logs.index",
                component: () =>
                    import("../../views/modules/admin/activity_logs/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all activity logs")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/departments",
                name: "admin.departments.index",
                component: () =>
                    import("../../views/modules/admin/departments/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all departments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/departments/create",
                name: "admin.departments.create",
                component: () =>
                    import("../../views/modules/admin/departments/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add departments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/departments/:id/edit",
                name: "admin.departments.edit",
                component: () =>
                    import("../../views/modules/admin/departments/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit departments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            // {
            //     path: "/admin/departments/:id",
            //     name: "admin.departments.show",
            //     component: () =>
            //         import("../../views/modules/admin/departments/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         let permissions = store.getters.user.permissions;
            //         permissions = permissions.map(item => item.name);

            //         if (permissions.includes("view departments")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     },
            //     meta: {
            //         keepAlive: true
            //     }
            // },
            /**
             *
             *
             * Users
             *
             *
             */
            {
                path: "/admin/users",
                name: "admin.users.index",
                component: () =>
                    import("../../views/modules/admin/users/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all users")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/users/create",
                name: "admin.users.create",
                component: () =>
                    import("../../views/modules/admin/users/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add users")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/users/:id/edit",
                name: "admin.users.edit",
                component: () =>
                    import("../../views/modules/admin/users/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit users")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/users/:id/edit/fund",
                name: "admin.users.edit.fund",
                component: () =>
                    import("../../views/modules/admin/users/EditFund.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit users fund")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/users/:id/edit/permissions",
                name: "admin.users.edit.permissions",
                component: () =>
                    import("../../views/modules/admin/users/EditPermission.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit permissions")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/users/:id",
                name: "admin.users.show",
                component: () =>
                    import("../../views/modules/admin/users/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view users")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Expense Types
             *
             *
             */
            {
                path: "/admin/expense_types",
                name: "admin.expense_types.index",
                component: () =>
                    import("../../views/modules/admin/expense_types/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all expense types")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/expense_types/create",
                name: "admin.expense_types.create",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_types/Create.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add expense types")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/expense_types/:id/edit",
                name: "admin.expense_types.edit",
                component: () =>
                    import("../../views/modules/admin/expense_types/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit expense types")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            // {
            //     path: "/admin/expense_types/:id",
            //     name: "admin.expense_types.show",
            //     component: () =>
            //         import("../../views/modules/admin/expense_types/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         let permissions = store.getters.user.permissions;
            //         permissions = permissions.map(item => item.name);

            //         if (permissions.includes("view expense types")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     },
            //     meta: {
            //         keepAlive: true
            //     }
            // },
            /**
             *
             *
             * Expenses
             *
             *
             */
            {
                path: "/admin/expenses",
                name: "admin.expenses.index",
                component: () =>
                    import("../../views/modules/admin/expenses/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/expenses/create",
                name: "admin.expenses.create",
                component: () =>
                    import("../../views/modules/admin/expenses/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            // {
            //     path: "/admin/expenses/create/bulk",
            //     name: "admin.expenses.create.bulk",
            //     component: () =>
            //         import("../../views/modules/admin/expenses/CreateBulk.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.user.permissions.includes("add expenses")
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            {
                path: "/admin/expenses/:id/edit",
                name: "admin.expenses.edit",
                component: () =>
                    import("../../views/modules/admin/expenses/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/expenses/:id",
                name: "admin.expenses.show",
                component: () =>
                    import("../../views/modules/admin/expenses/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Jobs
             *
             *
             */
            {
                path: "/admin/jobs",
                name: "admin.jobs.index",
                component: () =>
                    import("../../views/modules/admin/jobs/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all jobs")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/jobs/create",
                name: "admin.jobs.create",
                component: () =>
                    import("../../views/modules/admin/jobs/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add jobs")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/jobs/:id/edit",
                name: "admin.jobs.edit",
                component: () =>
                    import("../../views/modules/admin/jobs/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit jobs")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            // {
            //     path: "/admin/jobs/:id",
            //     name: "admin.jobs.show",
            //     component: () =>
            //         import("../../views/modules/admin/jobs/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         let permissions = store.getters.user.permissions;
            //         permissions = permissions.map(item => item.name);

            //         if (permissions.includes("view jobs")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     },
            //     meta: {
            //         keepAlive: true
            //     }
            // },
            /**
             *
             *
             * Payments
             *
             *
             */
            {
                path: "/admin/payments",
                name: "admin.payments.index",
                component: () =>
                    import("../../views/modules/admin/payments/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all payments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/payments/create",
                name: "admin.payments.create",
                component: () =>
                    import("../../views/modules/admin/payments/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add payments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            // {
            //     path: "/admin/payments/:id/edit",
            //     name: "admin.payments.edit",
            //     component: () =>
            //         import("../../views/modules/admin/payments/Edit.vue"),
            //     beforeEnter: (to, from, next) => {
            //         let permissions = store.getters.user.permissions;
            //         permissions = permissions.map(item => item.name);

            //         if (permissions.includes("edit payments")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     },
            //     meta: {
            //         keepAlive: false
            //     }
            // },
            {
                path: "/admin/payments/:id",
                name: "admin.payments.show",
                component: () =>
                    import("../../views/modules/admin/payments/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view payments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Expense Reports
             *
             *
             */
            {
                path: "/admin/expense_reports",
                name: "admin.expense_reports.index",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Index.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/expense_reports/create",
                name: "admin.expense_reports.create",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Create.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/expense_reports/:id/edit",
                name: "admin.expense_reports.edit",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Edit.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/expense_reports/:id",
                name: "admin.expense_reports.show",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Show.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            // {
            //     path: "/admin/expense_reports/print/:id",
            //     name: "admin.expense_reports.print",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/expense_reports/Print.vue"
            //         )
            // },
            // {
            //     path: "/admin/expense_reports/:id/summary",
            //     name: "admin.expense_reports.summary",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/expense_reports/ShowSummary.vue"
            //         )
            // },
            // {
            //     path: "/admin/expense_reports/:id/detailed",
            //     name: "admin.expense_reports.detailed",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/expense_reports/ShowDetailed.vue"
            //         )
            // },
            /**
             *
             *
             * Users
             *
             *
             */
            // {
            //     path: "/admin/users",
            //     name: "admin.users.index",
            //     component: () =>
            //         import("../../views/modules/admin/users/Index.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes("view all users")
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/users/create",
            //     name: "admin.users.create",
            //     component: () =>
            //         import("../../views/modules/admin/users/Create.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (store.getters.getPermissions.includes("add users")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/users/:id/edit",
            //     name: "admin.users.edit",
            //     component: () =>
            //         import("../../views/modules/admin/users/Edit.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (store.getters.getPermissions.includes("edit users")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/users/:id",
            //     name: "admin.users.show",
            //     component: () =>
            //         import("../../views/modules/admin/users/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (store.getters.getPermissions.includes("view users")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            /**
             *
             *
             * Roles
             *
             *
             */
            // {
            //     path: "/admin/roles",
            //     name: "admin.roles.index",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Index.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes(
            //                 "view all permissions"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/roles/create",
            //     name: "admin.roles.create",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Create.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes("add permissions")
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/roles/:id/edit",
            //     name: "admin.roles.edit",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Edit.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes(
            //                 "edit permissions"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/roles/:id",
            //     name: "admin.roles.show",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes(
            //                 "view permissions"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            /**
             *
             *
             * Permissions
             *
             *
             */
            // {
            //     path: "/admin/permissions",
            //     name: "admin.permissions.index",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Index.vue")
            // },
            // {
            //     path: "/admin/permissions/create",
            //     name: "admin.permissions.create",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Create.vue")
            // },
            // {
            //     path: "/admin/permissions/:id/edit",
            //     name: "admin.permissions.edit",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Edit.vue")
            // },
            // {
            //     path: "/admin/permissions/:id",
            //     name: "admin.permissions.show",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Show.vue")
            // },
            /**
             *
             *
             * Vendors
             *
             *
             */
            {
                path: "/admin/vendors",
                name: "admin.vendors.index",
                component: () =>
                    import("../../views/modules/admin/vendors/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all vendors")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/vendors/create",
                name: "admin.vendors.create",
                component: () =>
                    import("../../views/modules/admin/vendors/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add vendors")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/vendors/:id/edit",
                name: "admin.vendors.edit",
                component: () =>
                    import("../../views/modules/admin/vendors/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit vendors")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/vendors/:id",
                name: "admin.vendors.show",
                component: () =>
                    import("../../views/modules/admin/vendors/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view vendors")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Notifications
             *
             *
             */
            {
                path: "/admin/notifications",
                name: "admin.notifications.index",
                component: () =>
                    import("../../views/modules/admin/notifications/Index.vue"),
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Advance Payments
             *
             *
             */
            {
                path: "/admin/advance_payments",
                name: "admin.advance_payments.index",
                component: () =>
                    import("../../views/modules/admin/advance_payments/Index.vue"),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("view all advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/advance_payments/create",
                name: "admin.advance_payments.create",
                component: () =>
                    import("../../views/modules/admin/advance_payments/Create.vue"),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("add advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/advance_payments/:id/edit",
                name: "admin.advance_payments.edit",
                component: () =>
                    import("../../views/modules/admin/advance_payments/Edit.vue"),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("edit advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/advance_payments/:id",
                name: "admin.advance_payments.show",
                component: () =>
                    import("../../views/modules/admin/advance_payments/Show.vue"),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("view advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
];

export default adminRoutes.map(route => {
    return { ...route };
});

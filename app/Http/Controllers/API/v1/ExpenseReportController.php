<?php

namespace App\Http\Controllers\API\v1;

use App\User;
use Carbon\Carbon;
use App\Models\Expense;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Models\ExpenseReport;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use App\Http\Resources\ExpenseReportResource;
use App\Notifications\ExpenseReportNotification;
use App\Http\Requests\ExpenseReport\ExpenseReportStoreRequest;
use App\Http\Requests\ExpenseReport\ExpenseReportUpdateRequest;

class ExpenseReportController extends Controller
{
    use ApiResponse; // Laravel Trait used to return appropriate api response

    public function __construct()
    {
        $this->middleware(['permission:view all expense reports'], ['only' => ['index']]);
        $this->middleware(['permission:view expense reports'], ['only' => ['show']]);
        $this->middleware(['permission:add expense reports'], ['only' => ['create', 'store']]);
        $this->middleware(['permission:edit expense reports'], ['only' => ['edit', 'update']]);
        $this->middleware(['permission:delete expense reports'], ['only' => ['destroy']]);

        $this->middleware(['permission:restore expense reports'], ['only' => ['restore']]);
        $this->middleware(['permission:submit expense reports'], ['only' => ['submit']]);
        $this->middleware(['permission:approve expense reports'], ['only' => ['approve']]);
        $this->middleware(['permission:reject expense reports'], ['only' => ['reject']]);
        $this->middleware(['permission:duplicate expense reports'], ['only' => ['duplicate']]);
    }

    /**
     * index
     *
     * @param  mixed $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "updated_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;

        $expense_reports = ExpenseReport::with('user')
            ->with('payments');
            

        switch ($sortBy) {
            case 'user':
                $expense_reports = $expense_reports->leftJoin('users', 'expense_reports.user_id', '=', 'users.id')
                    ->select('expense_reports.*')
                    ->orderBy('users.first_name', $sortType);
                break;
            case 'total':
                $expense_reports = $expense_reports->leftJoin('expenses', 'expense_reports.id', '=', 'expenses.expense_report_id')
                    ->select('expense_reports.*')
                    ->orderBy(DB::raw('sum(expenses.amount)'), $sortType)
                    ->groupBy('expense_reports.id');
                break;
            case 'date':
                $expense_reports = $expense_reports->leftJoin('expenses', 'expense_reports.id', '=', 'expenses.expense_report_id')
                    ->select('expense_reports.*')
                    ->orderBy(DB::raw('min(expenses.date)'), $sortType)
                    ->groupBy('expense_reports.id');
                break;
            default:
                $expense_reports = $expense_reports->orderBy($sortBy, $sortType);
                break;
        }

        if (request()->has('status')) {
            switch (request("status")) {
                case 'Overdue Expense Reports':
                    $expense_reports = $expense_reports;
                    break;
                case 'Cancelled Expense Reports':
                    $expense_reports = $expense_reports->onlyTrashed();
                    break;
                case 'Released Payment':
                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])
                        ->whereHas("payments", function ($query) {
                            $query->where([
                                ["approved_at", "<>", null],
                                ["released_at", "<>", null],
                                ["received_at", "=", null],
                                ["cancelled_at", "=", null],
                                ["deleted_at", "=", null],
                            ]);
                        });
                    break;
                case 'Reimbursed Expense Reports':
                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])
                        ->whereHas("payments", function ($query) {
                            $query->where([
                                ["approved_at", "<>", null],
                                ["released_at", "<>", null],
                                ["received_at", "<>", null],
                                ["cancelled_at", "=", null],
                                ["deleted_at", "=", null],
                            ]);
                        });
                    break;
                case 'Rejected Expense Reports':
                    $expense_reports = $expense_reports->where([
                        // ["submitted_at", "<>", null],
                        // ["approved_at", "=", null],
                        ["rejected_at", "<>", null],
                        // ["cancelled_at", "=", null],
                    ]);
                    break;
                case 'Approved Expense Reports':
                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "<>", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])->whereDoesntHave("payments");
                    break;
                case 'Submitted Expense Reports':
                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "<>", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])->whereDoesntHave("payments");
                    break;
                case 'Unsubmitted Expense Reports':
                    $expense_reports = $expense_reports->where([
                        ["submitted_at", "=", null],
                        ["approved_at", "=", null],
                        ["rejected_at", "=", null],
                        ["cancelled_at", "=", null],
                    ])->whereDoesntHave("payments");
                    break;
                default:
                    $expense_reports = $expense_reports;
                    break;
            }
        }

        if (request()->has("user_id")) {
            if (request("user_id") > 0) {
                $expense_reports = $expense_reports->where("user_id", request("user_id"));
            }
        }

        if (request()->has("payment_id")) {
            $payment_id = request("payment_id");

            $expense_reports = $expense_reports->whereHas("payments", function ($query) use ($payment_id) {
                $query->where("payments.id", $payment_id);
            });
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $start_date = Carbon::parse(request("start_date"))->startOfDay();
            $end_date = Carbon::parse(request("end_date"))->endOfDay();
            $expense_reports = $expense_reports->whereBetween("expense_reports.created_at", [$start_date, $end_date]);
        }

        $expense_reports = $expense_reports->where(function ($query) use ($search) {
            $query->where('expense_reports.code', "like", "%" . $search . "%");
            $query->orWhere('expense_reports.description', "like", "%" . $search . "%");
            $query->orWhereHas('user', function ($q) use ($search) {
                $q->where('first_name', "like", "%" . $search . "%");
                $q->orWhere('middle_name', "like", "%" . $search . "%");
                $q->orWhere('last_name', "like", "%" . $search . "%");
            });
        });

        if (request()->has("create_payment")) {
            $start_date = Carbon::parse(request("start_date"))->startOfDay();
            $end_date = Carbon::parse(request("end_date"))->endOfDay();

            $expense_reports = ExpenseReport::with('user')
                ->where(function ($query) use ($search) {
                    $query->where('code', "like", "%" . $search . "%");
                    $query->orWhere('description', "like", "%" . $search . "%");
                })
                ->where("user_id", request("user_id"))
                ->orderBy($sortBy, $sortType)
                ->whereBetween("created_at", [$start_date, $end_date])
                ->where("approved_at", "<>", null)
                // ->where("submitted_at", "<>", null)
                ->where("rejected_at", null)
                ->where("cancelled_at", null)
                ->whereDoesntHave("payments");
        }

        $expense_reports = $expense_reports->paginate($itemsPerPage);

        return ExpenseReportResource::collection($expense_reports);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpenseReportStoreRequest $request)
    {
        $validated = $request->validated();
        $message = "Expense Report created successfully";

        DB::transaction(function () use ($validated) {
            $user = User::findOrFail($validated["user_id"]);

            $expense_report = new ExpenseReport();
            $expense_report->fill($validated);
            $expense_report->code = generate_code(ExpenseReport::class, setting("expense_report.report_no.prefix"), setting("expense_report.report_no.num_length"));
            $expense_report->submission_period = setting("submission_period");
            $expense_report->approval_period = setting("approval_period");

            $expense_report->created_by = Auth::id();
            $expense_report->updated_by = Auth::id();
            $expense_report->user()->associate($user);

            $expense_report->save();

            foreach (request("expenses") as $key => $value) {
                $expense = Expense::findOrFail($value["id"]);
                $expense->expense_report_id = $expense_report->id;
                $expense->disableLogging();
                $expense->save();

                log_activity(
                    "expense",
                    $expense,
                    [
                        "attributes" => [
                            "code" => $expense->code,
                            "updated_at" => $expense->updated_at
                        ],
                        "custom" => [
                            "link" => "expenses/{$expense->id}"
                        ]
                    ],
                    "expense associated with expense report #{$expense_report->code}"
                );
            }
        });

        return $this->successResponse(null, $message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $message = "Expense Report retrieved successfully";

        if (request()->has("isDeleted")) {
            if (request("isDeleted") != null) {
                $expense_report = ExpenseReport::withTrashed()
                    ->with(['user' => function ($query) {
                        $query->withTrashed();
                    }])
                    ->with(['payments' => function ($query) {
                        $query->withTrashed();
                    }])
                    ->findOrFail($id);
            }
        } else {
            $expense_report = ExpenseReport::with('user')
                ->with('payments')
                ->findOrFail($id);
        }
        return $this->successResponse(new ExpenseReportResource($expense_report), $message, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ExpenseReportUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $message = "Expense Report updated successfully";


        // // Prevent update if expense report has been cancelled
        if (Auth::user()->is_admin) {
            $count = 0;
            $count = ExpenseReport::where("id", $id)
                ->where(function ($query) {
                    $query->whereHas('payments');
                    $query->orWhere("cancelled_at", "<>", null);
                    $query->orWhere("rejected_at", "<>", null);
                    $query->orWhere("deleted_at", "<>", null);
                })
                ->count();

            if ($count > 0) {
                return $this->errorResponse("Expense Report can't be edited.", 422);
            }
        } else {
            $count = 0;
            $count = ExpenseReport::where("id", $id)
                ->where(function ($query) {
                    $query->where("approved_at", "<>", null);
                    $query->orWhere("cancelled_at", "<>", null);
                    $query->orWhere("rejected_at", "<>", null);
                    $query->orWhere("deleted_at", "<>", null);
                })
                ->count();

            if ($count > 0) {
                return $this->errorResponse("Expense Report can't be edited.", 422);
            }
        }

        $data = DB::transaction(function () use ($validated, $id) {
            $user = User::findOrFail($validated["user_id"]);

            $expense_report = ExpenseReport::findOrFail($id);
            $expense_report->fill($validated);
            $expense_report->submission_period = setting("submission_period");
            $expense_report->approval_period = setting("approval_period");

            $expense_report->updated_by = Auth::id();
            $expense_report->user()->associate($user);

            $expense_report->save();

            $expense_report->expenses->each(function ($item) {
                activity()->disableLogging();
                $item->expense_report_id = null;
                $item->save();
                activity()->enableLogging();
            });

            // set existing references to null
            // foreach ($expense_report->expenses as $key => $value) {
            //     $expense = Expense::findOrFail($value["id"]);
            //     $expense->expense_report_id = null;
            //     $expense->disableLogging();
            //     $expense->save();
            // }

            foreach (request("expenses") as $key => $value) {
                $expense = Expense::findOrFail($value["id"]);
                $expense->expense_report_id = $expense_report->id;
                $expense->deleted_at = null;
                $expense->disableLogging();
                $expense->save();

                log_activity(
                    "expense",
                    $expense,
                    [
                        "attributes" => [
                            "code" => $expense->code,
                            "updated_at" => $expense->updated_at
                        ],
                        "custom" => [
                            "link" => "expenses/{$expense->id}"
                        ]
                    ],
                    "updated expense association with expense report #{$expense_report->code}"
                );
            }

            return $expense_report;
        });

        $message = "Expense Report updated successfully";
        return $this->successResponse($data, $message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        // check if deleted/cancelled
        $deleted = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("deleted_at", "<>", null)->count();

        if ($deleted > 0) {
            return $this->errorResponse("Expense Report has already been cancelled", 422);
        }

        //check if has payment
        $paid = ExpenseReport::whereIn("id", explode(",", $id))
            ->whereHas("payments")->count();

        if ($paid > 0) {
            return $this->errorResponse("Expense Report has payment records", 422);
        }

        $data = DB::transaction(function () use ($id) {
            $data = ExpenseReport::findOrFail(explode(",", $id));
            $data->each(function ($item) {
                $item->deleted_by = Auth::id();
                $item->delete();
                $item->expenses->each->delete();
            });
            return $data;
        });

        $message = "Expense Report(s) deleted successfully";
        return $this->successResponse($data, $message, 200);
    }

    /*
    |------------------------------------------------------------------------------------------------------------------------------------
    | EXPENSE REPORT CUSTOM FUNCTIONS
    |------------------------------------------------------------------------------------------------------------------------------------
    */

    public function restore(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $data = ExpenseReport::onlyTrashed()->findOrFail($ids);
            $data->each->restore();
            $data->expenses()->onlyTrashed()->get()->each->restore();
            return $data;
        });

        $message = "Expense Report(s) restored successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function submit(Request $request, $id)
    {
        // check if deleted/cancelled
        $deleted = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("deleted_at", "<>", null)->count();

        if ($deleted > 0) {
            return $this->errorResponse("Expense Report has already been cancelled.", 422);
        }

        // check if rejected
        $rejected = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("rejected_at", "<>", null)->count();

        if ($rejected > 0) {
            return $this->errorResponse("Expense Report has already been rejected.", 422);
        }

        // check if approved
        $approved = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("rejected_at", "<>", null)->count();

        if ($approved > 0) {
            return $this->errorResponse("Expense Report has already been approved.", 422);
        }

        // check if submitted
        $submitted = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("submitted_at", "<>", null)->count();

        if ($submitted > 0) {
            return $this->errorResponse("Expense Report has already been submitted.", 422);
        }

        // check if has payment
        $paid = ExpenseReport::whereIn("id", explode(",", $id))
            ->whereHas("payments")->count();

        if ($paid > 0) {
            return $this->errorResponse("Expense Report has payment records", 422);
        }

        // // Prevent submit if expense report has been submitted or approved or cancelled
        // $submitted = ExpenseReport::whereIn("id", request("")ids)
        //     ->where("submitted_at", "<>", null)->count();

        // if ($submitted > 0) {
        //     return $this->errorResponse("Expense Report has already been submitted.", 422);
        // }

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $expense_report = ExpenseReport::findOrFail($ids);
            $expense_report->each(function ($item) {
                $this->updateReport($item, true, false, false, false, false);
                foreach (User::where("is_admin", 1)->get() as $user) {
                    Notification::send($user, new ExpenseReportNotification([
                        "action" => "submit",
                        "expense_report" => $item
                    ]));
                }
            });

            return $expense_report;
        });

        $message = "Expense Report(s) submitted successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function approve(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);

        // check if deleted/cancelled
        $deleted = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("deleted_at", "<>", null)->count();

        if ($deleted > 0) {
            return $this->errorResponse("Expense Report has already been cancelled.", 422);
        }

        // check if rejected
        $rejected = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("rejected_at", "<>", null)->count();

        if ($rejected > 0) {
            return $this->errorResponse("Expense Report has already been rejected.", 422);
        }

        // check if approved
        $approved = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("approved_at", "<>", null)->count();

        if ($approved > 0) {
            return $this->errorResponse("Expense Report has already been approved.", 422);
        }

        // check if has payment
        $paid = ExpenseReport::whereIn("id", explode(",", $id))
            ->whereHas("payments")->count();

        if ($paid > 0) {
            return $this->errorResponse("Expense Report has payment records", 422);
        }

        // // Prevent approve if expense report has been approved or cancelled
        // $approved = ExpenseReport::whereIn("id", request("")ids)
        //     ->where("approved_at", "<>", null)->count();

        // if ($approved > 0) {
        //     return $this->errorResponse("Expense Report has already been approved.", 422);
        // }

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $expense_report = ExpenseReport::findOrFail($ids);
            $expense_report->each(function ($item) {
                $this->updateReport($item, false, false, true, false, false);
                Notification::send(User::find($item->user->id), new ExpenseReportNotification([
                    "action" => "approve",
                    "expense_report" => $item
                ]));
            });

            return $expense_report;
        });

        $message = "Expense Report(s) approved successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function reject(Request $request, $id)
    {
        abort_if(!auth()->user()->is_admin, 403);
        $message = "Expense Report rejected successfully";

        // check if rejected
        $rejected = ExpenseReport::whereIn("id", explode(",", $id))
            ->where("rejected_at", "<>", null)->count();

        if ($rejected > 0) {
            return $this->errorResponse("Expense Report has already been rejected.", 422);
        }

        // check if has payment
        $paid = ExpenseReport::whereIn("id", explode(",", $id))
            ->whereHas("payments")->count();

        if ($paid > 0) {
            return $this->errorResponse("Expense Report has payment records", 422);
        }

        // // Prevent approve if expense report has been approved or cancelled
        // $rejected = ExpenseReport::whereIn("id", request("")ids)
        //     ->where("rejected_at", "<>", null)->count();

        // if ($rejected > 0) {
        //     return $this->errorResponse("Expense Report has already been rejected.", 422);
        // }

        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $expense_report = ExpenseReport::findOrFail($ids);
            $expense_report->each(function ($item) {
                $this->updateReport($item, false, false, false, true, false);
                activity()->disableLogging();
                $item->notes = request("notes") ?? "";
                $item->save();

                $item->expenses->each(function ($expense) {
                    activity()->disableLogging();
                    $expense_amount = $expense->amount - $expense->reimbursable_amount;
                    $expense->user->remaining_fund += $expense_amount;
                    $expense->user->save();
                    activity()->enableLogging();
                });

                Notification::send(User::find($item->user->id), new ExpenseReportNotification([
                    "action" => "reject",
                    "expense_report" => $item
                ]));

                activity()->enableLogging();
            });

            return $expense_report;
        });

        $message = "Expense Report(s) rejected successfully";
        return $this->successResponse($data, $message, 200);
    }

    public function duplicate(Request $request, $id)
    {
        $data = DB::transaction(function () use ($id) {
            $ids = explode(",", $id);
            $expense_report = ExpenseReport::withTrashed()
                ->with(["expenses" => function ($query) {
                    $query->withTrashed();
                }])
                ->findOrFail($ids);
            $expense_report->each(function ($item) {
                // check if remaining fund will be less than zero when duplicated
                $report_amount = $item->expenses()->sum("amount") - $item->expenses()->sum("reimbursable_amount");

                $user = User::findOrFail($item->user_id);
                if (($user->remaining_fund - $report_amount) < 0) {
                    abort(422, "Employee revolving fund can't be less than zero.");
                }

                $new_report = $item->replicate();
                $new_report->code = null;
                $new_report->submitted_at = null;
                $new_report->reviewed_at = null;
                $new_report->approved_at = null;
                $new_report->rejected_at = null;
                $new_report->cancelled_at = null;
                $new_report->deleted_at = null;
                $new_report->submitted_by = null;
                $new_report->reviewed_by = null;
                $new_report->approved_by = null;
                $new_report->rejected_by = null;
                $new_report->cancelled_by = null;
                $new_report->deleted_by = null;
                $new_report->code = generate_code(ExpenseReport::class, setting("expense_report.report_no.prefix"), setting("expense_report.report_no.num_length"));
                $new_report->save();

                $item->expenses->each(function ($expense) use ($new_report) {
                    $new_expense = $expense->replicate();
                    $new_expense->code = generate_code(Expense::class, "EXP", 10);
                    $new_expense->deleted_at = null;
                    $new_expense->deleted_by = null;
                    $new_expense->expense_report_id = $new_report->id;
                    $new_expense->disableLogging();
                    $new_expense->save();

                    log_activity(
                        "expense",
                        $new_expense,
                        [
                            "attributes" => [
                                "code" => $new_expense->code,
                                "updated_at" => $new_expense->updated_at
                            ],
                            "custom" => [
                                "link" => "expenses/{$new_expense->id}"
                            ]
                        ],
                        "duplicated expense"
                    );
                });
            });
            return $expense_report;
        });

        $message = "Expense Report(s) duplicated successfully";
        return $this->successResponse($data, $message, 200);
    }

    /**
     * Update Expense Report status
     *
     * @param  mixed $expense_report
     * @param  mixed $submitted
     * @param  mixed $reviewed
     * @param  mixed $approved
     * @param  mixed $rejected
     * @param  mixed $cancelled
     * @return void
     */
    public function updateReport(ExpenseReport $expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $expense_report->submitted_at = $submitted ? now() : $expense_report->submitted_at;
        $expense_report->reviewed_at = $reviewed ? now() : $expense_report->reviewed_at;
        $expense_report->approved_at = $approved ? now() : $expense_report->approved_at;
        $expense_report->rejected_at = $rejected ? now() : $expense_report->rejected_at;
        $expense_report->cancelled_at = $cancelled ? now() : $expense_report->cancelled_at;

        $expense_report->submitted_by = $submitted ? Auth::id() : $expense_report->submitted_by;
        $expense_report->reviewed_by = $reviewed ? Auth::id() : $expense_report->reviewed_by;
        $expense_report->approved_by = $approved ? Auth::id() : $expense_report->approved_by;
        $expense_report->rejected_by = $rejected ? Auth::id() : $expense_report->rejected_by;
        $expense_report->cancelled_by = $cancelled ? Auth::id() : $expense_report->cancelled_by;

        if ($approved) {
            $expense_report->submitted_at = $expense_report->submitted_at == null ? now() : $expense_report->submitted_at;

            $expense_report->submitted_by = $expense_report->submitted_by == null ? Auth::id() : $expense_report->submitted_by;
        }

        $expense_report->disableLogging();
        $expense_report->save();
        $this->logUpdateActivity($expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled);
    }

    /**
     * Update Expense status
     *
     * @param  mixed $expense
     * @param  mixed $submitted
     * @param  mixed $reviewed
     * @param  mixed $approved
     * @param  mixed $rejected
     * @param  mixed $cancelled
     * @return void
     */
    public function updateExpense(Expense $expense, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $expense->submitted_at = $submitted ? now() : $expense->submitted_at;
        $expense->reviewed_at = $reviewed ? now() : $expense->reviewed_at;
        $expense->approved_at = $approved ? now() : $expense->approved_at;
        $expense->rejected_at = $rejected ? now() : $expense->rejected_at;
        $expense->cancelled_at = $cancelled ? now() : $expense->cancelled_at;

        $expense->submitted_by = $submitted ? Auth::id() : $expense->submitted_by;
        $expense->reviewed_by = $reviewed ? Auth::id() : $expense->reviewed_by;
        $expense->approved_by = $approved ? Auth::id() : $expense->approved_by;
        $expense->rejected_by = $rejected ? Auth::id() : $expense->rejected_by;
        $expense->cancelled_by = $cancelled ? Auth::id() : $expense->cancelled_by;

        if ($approved) {
            $expense->submitted_at = $expense->submitted_at == null ? now() : $expense->submitted_at;
            $expense->submitted_by = $expense->submitted_by == null ? Auth::id() : $expense->submitted_by;
        }

        $expense->disableLogging();
        $expense->save();
    }

    /**
     * Logs activity
     *
     * @param  mixed $expense_report
     * @param  mixed $submitted
     * @param  mixed $reviewed
     * @param  mixed $approved
     * @param  mixed $rejected
     * @param  mixed $cancelled
     * @return void
     */
    public function logUpdateActivity(ExpenseReport $expense_report, $submitted, $reviewed, $approved, $rejected, $cancelled)
    {
        $action = "";
        $key = "";
        $value = "";

        if ($submitted) {
            $action = "submitted";
            $key = "submitted_at";
            $value = $expense_report->submitted_at;
        } elseif ($reviewed) {
            $action = "reviewed";
            $key = "reviewed_at";
            $value = $expense_report->reviewed_at;
        } elseif ($approved) {
            $action = "approved";
            $key = "approved_at";
            $value = $expense_report->approved_at;
        } elseif ($rejected) {
            $action = "rejected";
            $key = "rejected_at";
            $value = $expense_report->rejected_at;
        } elseif ($cancelled) {
            $action = "cancelled";
            $key = "cancelled_at";
            $value = $expense_report->cancelled_at;
        }

        activity("expense_report")
            ->causedBy(Auth::user())
            ->performedOn($expense_report)
            ->withProperties(['attributes' => ["code" => $expense_report->code, $key => $value], 'custom' => ["link" => "expense_reports/{$expense_report->id}"]])
            ->log($action . ' expense report');
    }

    /**
     * Display a listing of the resource
     *
     * @param  mixed $request
     * @return void
     */
    public function getExpenseReports(Request $request)
    {
        if (request()->has('edit_report')) {
            $expense_report = ExpenseReport::with('user')
                ->findOrFail(request("id"));

            return response(
                [
                    'data' => new ExpenseReportResource($expense_report),
                    'message' => 'Retrieved successfully'
                ],
                200
            );
        }

        $expense_reports = ExpenseReport::with(['expenses' => function ($query) {
            $query->with('expense_type');
        }])
            ->with('user')
            ->orderBy("created_at");

        if (request()->has("id")) {
            $expense_reports = $expense_reports->where("id", request("id"));
        }

        if (request()->has("user_id")) {
            $expense_reports = $expense_reports->where("user_id", request("user_id"));
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $start_date = Carbon::parse(request("start_date"))->startOfDay();
            $end_date = Carbon::parse(request("end_date"))->endOfDay();
            $expense_reports = $expense_reports->whereBetween("created_at", [$start_date, $end_date]);
        }

        if (request()->has("status")) {
            switch (request("status")) {
                case 'Archived':
                    $expense_reports = $expense_reports->onlyTrashed();
                    break;
                default:
                    $expense_reports = $expense_reports;
                    break;
            }
        }

        if (request()->has("total_count")) {
            $total_unsubmitted = DB::table('expense_reports')->where([
                ["submitted_at", "=", null],
                ["approved_at", "=", null],
                ["rejected_at", "=", null],
                ["cancelled_at", "=", null],
                ["deleted_at", "=", null],
            ]);

            $total_unapproved = DB::table('expense_reports')->where([
                ["submitted_at", "<>", null],
                ["approved_at", "=", null],
                ["rejected_at", "=", null],
                ["cancelled_at", "=", null],
                ["deleted_at", "=", null],
            ]);

            if (request()->has("user_id")) {
                if (request("user_id") > 0) {
                    $total_unsubmitted = $total_unsubmitted->where("user_id", request("user_id"));
                    $total_unapproved = $total_unapproved->where("user_id", request("user_id"));
                }
            }

            return $this->successResponse(
                [
                    "total_unsubmitted" => $total_unsubmitted->count(),
                    "total_unapproved" => $total_unapproved->count()
                ],
                "Success",
                200
            );
        }

        if (request()->has("create_payment")) {
            $expense_reports = $expense_reports
                ->where("approved_at", "<>", null)
                ->where("submitted_at", "<>", null)
                ->where("cancelled_at", null)
                ->whereDoesntHave("payments")
                ->get();

            return response()->json([
                "data" => ExpenseReportResource::collection($expense_reports),
            ]);
        }

        return response()->json([
            "data" => ExpenseReportResource::collection($expense_reports->get()),
        ]);
    }
}

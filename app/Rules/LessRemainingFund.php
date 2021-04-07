<?php

namespace App\Rules;

use App\Models\Expense;
use App\User;
use Illuminate\Contracts\Validation\Rule;

class LessRemainingFund implements Rule
{
    private $user_id;
    private $amount_to_reimburse;
    private $action;
    private $expense;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($user_id, $amount_to_reimburse, $expense, $action)
    {
        $this->user_id = $user_id;
        $this->amount_to_reimburse = $amount_to_reimburse;
        $this->action = $action;
        $this->expense = $expense;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $user = User::find($this->user_id);
        $remaining_fund = $user->remaining_fund ?? 0;

        if (!$user) {
            return true;
        }

        if ($this->action == "update") {
            $expense = Expense::find($this->expense);
            $original_amount = $expense->amount;
            $original_amount_to_reimburse = $expense->reimbursable_amount;
            $remaining_fund += ($original_amount - $original_amount_to_reimburse);
        }

        return ($value - $this->amount_to_reimburse) <= $remaining_fund;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The amount must be less than or equal to remaining fund';
    }
}

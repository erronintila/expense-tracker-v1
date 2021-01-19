<?php

namespace App\Notifications;

use App\Models\Employee;
use App\Models\ExpenseReport;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ExpenseReportNotification extends Notification
{
    use Queueable;
    private $details;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        // return ['mail', 'database'];
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        $expense_report = $this->details['expense_report'];
        $report = ExpenseReport::find($expense_report->id);
        $employee = Employee::find($expense_report->employee_id);

        return [
            'data' => [
                "model" => "expense_reports",
                "employee" => [
                    "id" => $employee->id,
                    "full_name" => $employee->full_name
                ],
                'expense_report' => [
                    "id" => $report->id,
                    "code" => $report->code,
                    "amount" => $report->total_expense_amount
                ],
                "description" => "Submitted Expense Report"
            ]
        ];
    }
}

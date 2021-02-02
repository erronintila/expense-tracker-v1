<?php

namespace App\Notifications;

use App\User;
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
        $user = User::find($expense_report->user_id);
        $description = "";

        switch ($this->details["action"]) {
            case 'submit':
                $description = "Submitted Expense Report";
                break;
            case 'approve':
                $description = "Approved Expense Report";
                break;
            case 'reject':
                $description = "Rejected Expense Report";
                break;
            default:
                # code...
                break;
        }

        return [
            'data' => [
                "model" => "expense_reports",
                "id" => $report->id,
                "code" => $report->code,
                "user" => [
                    "id" => $user->id,
                    "full_name" => $user->full_name
                ],
                'expense_report' => [
                    "id" => $report->id,
                    "code" => $report->code,
                    "amount" => $report->total_expense_amount
                ],
                "description" => $description
            ]
        ];
    }
}

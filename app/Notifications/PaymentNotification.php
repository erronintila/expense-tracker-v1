<?php

namespace App\Notifications;

use App\User;
use App\Models\Payment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PaymentNotification extends Notification
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
        $payment_record = $this->details['payment'];
        $payment = Payment::find($payment_record->id);
        $user = User::find($payment->user_id);
        $description = "";

        switch ($this->details["action"]) {
            case 'release':
                $description = "Released Payment";
                break;
            case 'receive':
                $description = "Confirmed Payment";
                break;
            default:
                # code...
                break;
        }

        return [
            'data' => [
                "model" => "payments",
                "id" => $payment->id,
                "code" => $payment->code,
                "user" => [
                    "id" => $user->id,
                    "full_name" => $user->full_name
                ],
                'expense_report' => [
                    "id" => $payment->id,
                    "code" => $payment->code,
                    "amount" => $payment->getTotalAmountAttribute()
                ],
                "description" => $description
            ]
        ];
    }
}

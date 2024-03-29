<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('reference_no')->nullable();
            $table->string('description', 100)->nullable();
            $table->double('amount', 10, 2)->default(0);
            $table->double('reimbursable_amount', 10, 2)->default(0);

            $table->string('tax_name', 100)->nullable();
            $table->double('tax_rate', 10, 2)->default(0);
            $table->boolean('is_compound_tax')->default(false);
            $table->boolean('is_tax_inclusive')->default(false);
            $table->double('tax_amount', 10, 2)->default(0);

            $table->string('receipt_number')->nullable();
            $table->date('date');
            $table->longText('details')->nullable();
            $table->text('remarks')->nullable();
            // $table->json('notes')->nullable()->default(json_encode([
            //     "comment" => [],
            //     "cancellation" => [],
            //     "rejection" => []
            // ]));
            $table->text('notes')->nullable();

            $table->integer('encoding_period')->default(2);

            $table->unsignedBigInteger('expense_type_id')->unsigned();
            $table->unsignedBigInteger('sub_type_id')->nullable();
            $table->unsignedBigInteger('user_id')->unsigned();
            $table->unsignedBigInteger('vendor_id')->nullable();
            $table->unsignedBigInteger('expense_report_id')->nullable();
            $table->unsignedBigInteger('tax_id')->nullable();
            $table->unsignedBigInteger('expense_header_id')->nullable();

            // $table->timestamp('submitted_at')->nullable();
            // $table->timestamp('reviewed_at')->nullable();
            // $table->timestamp('approved_at')->nullable();
            // $table->timestamp('rejected_at')->nullable();
            // $table->timestamp('cancelled_at')->nullable();
            // $table->timestamp('paid_at')->nullable();

            // $table->unsignedBigInteger('submitted_by')->nullable();
            // $table->unsignedBigInteger('reviewed_by')->nullable();
            // $table->unsignedBigInteger('approved_by')->nullable();
            // $table->unsignedBigInteger('rejected_by')->nullable();
            // $table->unsignedBigInteger('cancelled_by')->nullable();
            // $table->unsignedBigInteger('paid_by')->nullable();

            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('expense_type_id')
                ->references('id')
                ->on('expense_types')
                ->onDelete('cascade');
            $table->foreign('sub_type_id')
                ->references('id')
                ->on('expense_types');
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
            $table->foreign('vendor_id')
                ->references('id')
                ->on('vendors');
            $table->foreign('expense_report_id')
                ->references('id')
                ->on('expense_reports');
            $table->foreign('tax_id')
                ->references('id')
                ->on('taxes');
            $table->foreign('expense_header_id')
                ->references('id')
                ->on('expense_headers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expenses');
        Schema::table('expenses', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}

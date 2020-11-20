<?php

namespace App\Traits;

use App\Traits\ApiResponse;

trait ValidateReportStatus
{
    use ApiResponse;
    
    /**
     * validateReportSubmission
     *
     * @param  mixed $transType
     * @param  mixed $model
     * @param  mixed $ids
     * @return void
     */
    protected function validateReportSubmission($transType, $model, $ids)
    {
        switch ($transType) {
            case 'multiple':
                // if(
                //     $this->isReportCancelled('multiple', $model, $ids)
                // ) {
                //     return $this->errorResponse("Expense Report has been cancelled", 422);
                // }

                // if(
                //     $this->isReportApproved('multiple', $model, $ids)
                // ) {
                //     return $this->errorResponse("Expense Report has been approved", 422);
                // }

                if(
                    $this->isReportSubmitted('multiple', $model, $ids)
                ) {
                    return $this->errorResponse("Expense Report has been submitted", 422);
                }

                break;
            
            default:
                if ($model->submitted_at !== null) {
                    return $this->errorResponse("Expense Report has been submitted", 422);
                }
                break;
        }

        return null;
    }
    
    /**
     * isReportSubmitted
     *
     * @param  mixed $transType
     * @param  mixed $model
     * @param  mixed $ids
     * @return void
     */
    protected function isReportSubmitted($transType, $model, $ids)
    {
        switch ($transType) {
            case 'multiple':

                return $model::whereIn("id", $ids)
                    ->where("submitted_at", "<>", null)
                    ->count() > 0;

                break;
            
            default:
                if ($model->submitted_at !== null) {
                    return true;
                }
                break;
        }

        return false;
    }
    
    /**
     * isReportApproved
     *
     * @param  mixed $transType
     * @param  mixed $model
     * @param  mixed $ids
     * @return void
     */
    protected function isReportApproved($transType, $model, $ids)
    {
        switch ($transType) {
            case 'multiple':

                return $model::whereIn("id", $ids)
                    ->where("submitted_at", "<>", null)
                    ->count() > 0;

                break;
            
            default:
                if ($model->submitted_at !== null) {
                    return true;
                }
                break;
        }

        return false;
    }
    
    /**
     * isReportReviewed
     *
     * @param  mixed $transType
     * @param  mixed $model
     * @param  mixed $ids
     * @return void
     */
    protected function isReportReviewed($transType, $model, $ids)
    {
        switch ($transType) {
            case 'multiple':

                return $model::whereIn("id", $ids)
                    ->where("submitted_at", "<>", null)
                    ->count() > 0;

                break;
            
            default:
                if ($model->submitted_at !== null) {
                    return true;
                }
                break;
        }

        return false;
    }
    
    /**
     * isReportRejected
     *
     * @param  mixed $transType
     * @param  mixed $model
     * @param  mixed $ids
     * @return void
     */
    protected function isReportRejected($transType, $model, $ids)
    {
        switch ($transType) {
            case 'multiple':

                return $model::whereIn("id", $ids)
                    ->where("submitted_at", "<>", null)
                    ->count() > 0;

                break;
            
            default:
                if ($model->submitted_at !== null) {
                    return true;
                }
                break;
        }

        return false;
    }
    
    /**
     * isReportCancelled
     *
     * @param  mixed $transType
     * @param  mixed $model
     * @param  mixed $ids
     * @return void
     */
    protected function isReportCancelled($transType, $model, $ids)
    {
        switch ($transType) {
            case 'multiple':

                return $model::whereIn("id", $ids)
                    ->where("submitted_at", "<>", null)
                    ->count() > 0;

                break;
            
            default:
                if ($model->submitted_at !== null) {
                    return true;
                }
                break;
        }

        return false;
    }
}

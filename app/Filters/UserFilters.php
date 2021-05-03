<?php

namespace App\Filters;

use Illuminate\Http\Request;

class UserFilters extends QueryFilters
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
        parent::__construct($request);
    }

    public function filterByField($term)
    {
        return $this->builder->where('first_name', 'LIKE', "%$term%");
    }
}

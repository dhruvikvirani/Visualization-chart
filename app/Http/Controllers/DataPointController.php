<?php

namespace App\Http\Controllers;

use App\Models\DataPoint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataPointController extends Controller
{
    public function index(Request $request)
    {

        $data = DataPoint::query();
        $pagination = true;
        // Define the filterable fields
        $filterableFields = [
            'start_year' => 'start_year',
            'end_year' => 'end_year',
            'topics' => 'topic',
            'sector' => 'sector',
            'region' => 'region',
            'pestle' => 'pestle',
            'source' => 'source',
            'swot' => 'swot',
            'country' => 'country',
            'city' => 'city',
        ];

        // Apply filters based on request inputs
        foreach ($filterableFields as $input => $field) {
            if ($request->has($input) && !empty($request->$input)) {
                $pagination = false;
                $data->orWhere($field, 'LIKE', '%' . $request->$input . '%');
            }
        }
        $results =  $data->select(
            'end_year',
            DB::raw('COUNT(DISTINCT topic) as topic'),
            DB::raw('COUNT(DISTINCT sector) as sector'),
            DB::raw('COUNT(DISTINCT region) as region'),
            DB::raw('COUNT(DISTINCT pestle) as pestle'),
            DB::raw('COUNT(DISTINCT source) as source'),
            DB::raw('COUNT(DISTINCT swot) as swot'),
            DB::raw('COUNT(DISTINCT country) as country'),
            DB::raw('COUNT(DISTINCT city) as city')
        )
        ->groupBy('end_year')
        ->orderBy('end_year', 'asc');

        if($pagination){
            $results = $data->paginate(10);
        }else{
            $results = $data->get();
        }
        return response()->json($pagination ? $results : ['data'=>$results]);

    }
}

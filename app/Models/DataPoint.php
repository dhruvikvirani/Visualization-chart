<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DataPoint extends Model
{
    protected $fillable = [
        'id',
        'end_year',
        'citylng',
        'citylat',
        'intensity',
        'sector',
        'topic',
        'insight',
        'swot',
        'url',
        'region',
        'start_year',
        'impact',
        'added',
        'published',
        'city',
        'country',
        'relevance',
        'pestle',
        'source',
        'title',
        'likelihood',
    ];
    protected $appends = ['year'];
    protected function getYearAttribute()
    {
        return $this->end_year;
    }
}

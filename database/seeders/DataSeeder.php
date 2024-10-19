<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DataPoint;
use Carbon\Carbon;
use League\Csv\Reader;

class DataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csv = Reader::createFromPath(database_path('data/Data.csv'), 'r');
        $csv->setHeaderOffset(0);

        foreach ($csv as $row) {
            DataPoint::create([
                'end_year' => $row['end_year'],
                'citylng' => $row['citylng'],
                'citylat' => $row['citylat'],
                'intensity' => $row['intensity'],
                'sector' => $row['sector'],
                'topic' => $row['topic'],
                'insight' => $row['insight'],
                'swot' => $row['swot'],
                'url' => $row['url'],
                'region' => $row['region'],
                'start_year' => $row['start_year'],
                'impact' => $row['impact'],
                'added' => Carbon::createFromFormat('F, d Y H:i:s', $row['added']),
                'published' => Carbon::createFromFormat('F, d Y H:i:s', $row['published']),
                'city' => $row['city'],
                'country' => $row['country'],
                'relevance' => $row['relevance'],
                'pestle' => $row['pestle'],
                'source' => $row['source'],
                'title' => $row['title'],
                'likelihood' => $row['likelihood'],
            ]);
        }
    }
}

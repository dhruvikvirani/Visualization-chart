<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('data_points', function (Blueprint $table) {
            $table->id();
            $table->integer('end_year')->nullable();
            $table->string('citylng')->nullable();  
            $table->string('citylat')->nullable(); 
            $table->integer('intensity')->nullable();
            $table->string('sector')->nullable();
            $table->string('topic')->nullable();
            $table->text('insight')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->string('swot')->nullable();
            $table->string('url')->nullable();
            $table->string('region')->nullable();
            $table->string('start_year')->nullable();
            $table->string('impact')->nullable();
            $table->timestamp('added')->nullable();
            $table->timestamp('published')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->integer('relevance')->nullable();
            $table->string('pestle')->nullable();
            $table->string('source')->nullable();
            $table->text('title')->nullable();
            $table->integer('likelihood')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_points');
    }
};

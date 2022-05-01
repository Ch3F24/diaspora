<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquipmentsTables extends Migration
{
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
            createDefaultTableFields($table);
            $table->integer('position')->unsigned()->nullable();
            $table->string('inventory_number',255)->nullable();
            $table->string('svg', 200)->nullable();
            $table->tinyInteger('featured')->default(0);
            $table->foreignId('category_id')->nullable()->constrained('categories')->cascadeOnDelete();
        });

        Schema::create('equipment_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'equipment');
            $table->string('title', 200)->nullable();
            $table->string('sub_title',500)->nullable();
            $table->string('purpose',255)->nullable();

            $table->text('news')->nullable();
            $table->text('hunglish')->nullable();
        });

        Schema::create('equipment_slugs', function (Blueprint $table) {
            createDefaultSlugsTableFields($table, 'equipment');
        });


    }

    public function down()
    {

        Schema::dropIfExists('equipment_translations');
        Schema::dropIfExists('equipment_slugs');
        Schema::dropIfExists('equipments');
    }
}

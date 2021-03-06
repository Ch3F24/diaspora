<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTables extends Migration
{
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            // this will create an id, a "published" column, and soft delete and timestamps columns
            createDefaultTableFields($table);
            $table->integer('position')->unsigned()->nullable();
            $table->string('location')->nullable();
        });

        Schema::create('category_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'category');
            $table->string('title', 200)->nullable();
            $table->string('sub_title',500)->nullable();
            $table->text('description')->nullable();
        });

        Schema::create('category_slugs', function (Blueprint $table) {
            createDefaultSlugsTableFields($table, 'category');
        });


    }

    public function down()
    {

        Schema::dropIfExists('category_translations');
        Schema::dropIfExists('category_slugs');
        Schema::dropIfExists('categories');
    }
}

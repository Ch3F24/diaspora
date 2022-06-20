<?php

namespace Database\Seeders;

use Database\Factories\AdminFactory;
use Database\Factories\CategoryFactory;
use Database\Factories\EquipmentFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         \App\Models\User::factory(1)->create();
        AdminFactory::new()->count(1)->create();
//        CategoryFactory::new()->count(1)->create();
//        EquipmentFactory::new()->count(1)->create();
    }
}

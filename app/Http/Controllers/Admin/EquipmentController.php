<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;
use App\Repositories\CategoryRepository;

class EquipmentController extends BaseModuleController
{
    protected $moduleName = 'equipments';

    protected $indexOptions = [
    ];

    public function formData($request)
    {
        return [
          'categories' => app(CategoryRepository::class)->listAll()
        ];
    }
}

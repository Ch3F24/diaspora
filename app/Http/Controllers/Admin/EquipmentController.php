<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;
use App\Repositories\CategoryRepository;
use Illuminate\Support\Facades\Storage;

class EquipmentController extends BaseModuleController
{
    protected $moduleName = 'equipments';

    protected $indexOptions = [
    ];

    public function formData($request)
    {
        $illustrations = Storage::disk('public')->allFiles('images');

        $a = array();
        foreach ($illustrations as $illustration) {
            $illustration = substr($illustration, strpos($illustration, "/") + 1);
            $file = strstr($illustration, ".", true);
            $a[] = [
                'value' => $file,
                'label' => $file
            ];

        }
        return [
            'categories' => app(CategoryRepository::class)->listAll(),
            'illustrations' => $a
        ];
    }
}

<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleTranslations;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Equipment;

class EquipmentRepository extends ModuleRepository
{
    use HandleTranslations, HandleSlugs, HandleMedias;

    public function __construct(Equipment $model)
    {
        $this->model = $model;
    }
    protected $indexColumns = [
        'title' => [ // field column
            'title' => 'Title',
            'field' => 'title',
        ],
        'relationName' => [ // relation column
            // Take a look at the example in the next section fot the implementation of the sort
            'title' => 'Katória',
            'sort' => true,
            'relationship' => 'category',
            'field' => 'title'
        ],
    ];
}

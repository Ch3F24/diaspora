<?php

namespace App\Models\Translations;

use A17\Twill\Models\Model;
use App\Models\Equipment;

class EquipmentTranslation extends Model
{
    protected $baseModuleModel = Equipment::class;
}

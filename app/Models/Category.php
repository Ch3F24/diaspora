<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasTranslation;
use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Model;

class Category extends Model implements Sortable
{
    use HasTranslation, HasSlug, HasPosition;

    protected $fillable = [
        'published',
        'title',
        'description',
        'sub_title',
        'position',
        'location',
    ];

    public $translatedAttributes = [
        'title',
        'sub_title',
        'description',
        'active',
    ];

    public $slugAttributes = [
        'title',
    ];

    public function equipments()
    {
        return $this->hasMany(Equipment::class,'category_id')->where('published');
    }

    public function featured()
    {
        return $this->hasOne(Equipment::class,'category_id')->where('featured',1)->latest();
    }
}

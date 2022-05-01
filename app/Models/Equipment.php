<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasTranslation;
use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Model;

class Equipment extends Model implements Sortable
{
    use HasTranslation, HasSlug, HasMedias, HasPosition;

    protected $fillable = [
        'published',
        'title',
        'position',
        'news',
        'sub_title',
        'purpose',
        'hunglish',
        'inventory_number',
        'category_id',
        'svg',
        'featured'
    ];

    public $translatedAttributes = [
        'title',
        'sub_title',
        'purpose',
        'hunglish',
        'active',
        'news',
    ];

    public $slugAttributes = [
        'title',
    ];

    public $mediasParams = [
        'cover' => [
            'default' => [
                [
                    'name' => 'default',
                    'ratio' => 0,
                ],
            ],
            'mobile' => [
                [
                    'name' => 'mobile',
                    'ratio' => 1,
                ],
            ],
            'flexible' => [
                [
                    'name' => 'free',
                    'ratio' => 0,
                ],
                [
                    'name' => 'landscape',
                    'ratio' => 16 / 9,
                ],
                [
                    'name' => 'portrait',
                    'ratio' => 3 / 5,
                ],
            ],
        ],
    ];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
}

<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleTranslations;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Category;

class CategoryRepository extends ModuleRepository
{
    use HandleTranslations, HandleSlugs;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    public function findBySlug($slug)
    {
        return $this->model
            ->translatedIn(app()->getLocale())
            ->whereHas('slugs', function ($q) use ($slug) {
                $q->where('slug', $slug);
            })
            ->firstOrFail();
    }
}

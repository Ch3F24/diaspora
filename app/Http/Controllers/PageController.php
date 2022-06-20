<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use App\Repositories\EquipmentRepository;
use Illuminate\Http\Request;

class PageController extends Controller
{
    const LOCATION = [
        'wintondale' => [
            'key' => 1,
            'title' => 'Wintondale'
        ],
        'argentine' => [
            'key' => 2,
            'title' => 'Argentine'
        ],
    ];

    protected $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function home()
    {
        $page_title = 'Magyarok a nagyvilágban';

        return view('home',compact('page_title'));
    }

    public function location($location) {
        $categories = $this->categoryRepository->published()->with('featured')->whereLocation($location)->get();
//        $equipment = $this->categoryRepository->published()->whereLocation(self::LOCATION[$location]['key'])->first();
        if (!$categories) {
            abort(404);
        }

//        $categories = new CategoryResource($categories);
        $categories = CategoryCollection::collection($categories);

        $page_title = __(self::LOCATION[$location]['title']);

//        return view('locations.index',compact('category','page_title'));
        return view('categories.index',compact('categories','page_title'));
    }

    public function category($location,$slug)
    {
        $category = $this->categoryRepository->findBySlug($slug)->published()->whereLocation($location)->first();

        if (!$category) {
            abort(404);
        }

        $category = new CategoryResource($category);



        $page_title = $category->title;

//        return view('locations.index',compact('category','page_title'));
        return view('categories.view',compact('category','page_title'));

    }
}

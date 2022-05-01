<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'sub_title' => $this->sub_title,
            'description' => $this->description,
            'featured' => EquipmentCollection::collection($this->featured),
        ];
    }
}

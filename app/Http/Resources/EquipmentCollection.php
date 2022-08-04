<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EquipmentCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if($this->resource->hasImage('cover','default')) {
            $cover = [
//                'default' => $this->resource->image('cover','default',['h'=> 320,'q' => 60]),
                'default' => $this->resource->image('cover','default',['w' => '1280','fm' => 'jpg','q' => 90]),
//                '1x' => $this->resource->image('cover','default',['h'=> 320, 'dpr' => 1,'q' => 60]),
//                '2x' => $this->resource->image('cover','default',['h'=> 320, 'dpr' => 2,'q' => 60]),
//                '3x' => $this->resource->image('cover','default',['h'=> 320, 'dpr' => 3,'q' => 60]),
            ];
        }

        return [
            'title' => $this->title,
            'sub_title' => $this->sub_title,
            'news' => $this->news,
            'hunglish' => $this->hunglish,
            'cover' => isset($cover) ? $cover : null,
            'svg' => $this->svg,
            'inventory_number' => $this->inventory_number
        ];
    }
}

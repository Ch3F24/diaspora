<?php

namespace App\Http\Requests\Admin;

use A17\Twill\Http\Requests\Admin\Request;

class EquipmentRequest extends Request
{
    public function rulesForCreate()
    {
//        return ['svg' => 'required_if:featured,true'];
        return [];
    }

    public function rulesForUpdate()
    {
//        return ['svg' => 'required_if:featured,true'];
        return [];
    }

    public function messages()
    {
        return [
            'svg.required_if' => 'Az illusztráció mező kötelező ha a tárgy kiemelt!'
        ];
//        return parent::messages(); // TODO: Change the autogenerated stub
    }
}

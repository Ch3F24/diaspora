@extends('twill::layouts.form')

@section('contentFields')
    @formField('input', [
        'name' => 'sub_title',
        'label' => 'Alcím',
        'translated' => true,
        'maxlength' => 300
    ])
    @formField('input', [
        'name' => 'description',
        'label' => 'Description',
        'translated' => true,
        'maxlength' => 1200
    ])
    @formField('select', [
        'name' => 'location',
        'label' => 'Helyszín',
        'placeholder' => 'Válassz helyszínt',
        'options' => [
            [
                'value' => 'wintondale',
                'label' => 'Wintondale'
            ],
            [
                'value' => 'argentína',
                'label' => 'Argentína'
            ],
        ]
    ])
@stop

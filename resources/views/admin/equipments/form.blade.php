@extends('twill::layouts.form')

@section('contentFields')
    @formField('input', [
        'name' => 'inventory_number',
        'label' => 'Leltári szám',
        'maxlength' => 120
    ])

    @formField('select', [
    'name' => 'svg',
    'label' => 'Illusztráció',
    'placeholder' => 'Válasszon Illusztráció',
    'options' => $illustrations
    ])

{{--    @formField('input', [--}}
{{--        'name' => 'purpose',--}}
{{--        'label' => 'Cél',--}}
{{--        'translated' => true,--}}
{{--        'maxlength' => 300--}}
{{--    ])--}}
    @formField('input', [
        'name' => 'hunglish',
        'label' => 'Hunglish',
        'translated' => true,
        'maxlength' => 300
    ])
    @formField('input', [
        'name' => 'sub_title',
        'label' => 'Felirat',
        'translated' => true,
        'maxlength' => 2000,
        'type' => 'textarea',
        'rows' => 3
    ])
    @formField('input', [
        'name' => 'news',
        'label' => 'Újsághír',
        'translated' => true,
        'maxlength' => 2000,
        'type' => 'textarea',
        'rows' => 3
    ])
    @formField('select', [
        'name' => 'category_id',
        'label' => 'Kategória',
        'placeholder' => 'Válasszon kategóriát',
        'options' => $categories
    ])
    @formField('medias', [
        'name' => 'cover',
        'label' => 'Kép',
        'max' => 1,
        'fieldNote' => 'Minimum image width: 1500px'
    ])
    @formField('checkbox', [
    'name' => 'featured',
    'label' => 'Kiemelt tárgy',
    ])
@stop

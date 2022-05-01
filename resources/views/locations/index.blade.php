@extends('layouts.app')

@section('content')
    <section class="equipments max-w-7xl mx-auto px-8 sm:px-16">
{{--        @foreach($categories as $category)--}}
{{--        {{ dd($category->equipments) }}--}}
            <slider equipments-prop="{{ isset($category->equipments) ? json_encode($category->equipments) : null }}" category-prop="{{ json_encode($category) }}"></slider>
{{--        @endforeach--}}
    </section>
@endsection

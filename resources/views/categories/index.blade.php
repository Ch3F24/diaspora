@extends('layouts.app')

@section('content')
    <div class="max-w-7xl mx-auto px-8">
        @if($page_title === 'Vintondale')
            <div class="hidden md:flex md:w-5/12">
                <img src="{{ asset('images/kisalaprajz.svg') }}" alt="Logo" width="100" class="ml-20 mr-4">
                <p class="uppercase font-light text-roman text-sm">A vintondalei<br> ház szerkezeti<br> rajza</p>
            </div>
        @endif
    </div>
    <section class="max-w-7xl mx-auto px-8 illustration-box relative grid grid-flow-row auto-rows-max grid-cols-3 md:grid-cols-2 h-full my-6 gap-x-4 max-h-[60vh]" id="section">
        <div class="col-span-full md:col-span-1 md:row-span-full min-h-[50vh] md:min-h-[60vh] lg:max-h-full my-12 md:my-0" id="container"></div>

        <div class="hidden md:flex justify-between flex-col">
            @foreach($categories as $key => $category)
                <div class="text-center md:col-start-5 md:col-end-8 @if($key <= 2) order-first md:order-none @endif">
                    <h4 data-cat="cat-{{ $key }}"  class="text-white lg:text-xl inline-block font-light">
                        <a href="{{ route('category',['location' => $category->location,'slug' => $category->slug]) }}" data-cat="{{ $key }}" class="lg:pl-4 hover:text-roman category-link">{{ $category->title }}</a>
                    </h4>
                </div>
            @endforeach
        </div>

        @foreach($categories as $key => $category)
            <div class="md:hidden text-center md:col-start-5 md:col-end-8 @if($key <= 2) order-first md:order-none @endif">
                <h4 data-cat="cat-{{ $key }}"  class="text-white lg:text-xl inline-block font-light">
                    <a href="{{ route('category',['location' => $category->location,'slug' => $category->slug]) }}" data-cat="{{ $key }}" class="lg:pl-4 hover:text-roman category-link">{{ $category->title }}</a>
                </h4>
            </div>
        @endforeach
    </section>
@endsection

@section('assets')
<script src="{{mix('js/house.js')}}"></script>
<style>
    #info {
        position: absolute;
        top: 10px;
        width: 100%;
        text-align: center;
        z-index: 100;
        display:block;
    }
</style>
@endsection

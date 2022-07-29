@extends('layouts.app')

@section('content')
{{--    <section class="max-w-7xl mx-auto px-8 sm:px-16 illustration-box relative flex" >--}}
{{--        <div class="w-7/12 mr-8">--}}
{{--            @include('svg/house')--}}
{{--        </div>--}}
{{--        <div class="w-5/12 flex justify-around flex-col">--}}
{{--            @foreach($categories as $key => $category)--}}
{{--                <div class="text-center">--}}
{{--                    <h4 id="cat-{{ $key }}" class="text-white text-2xl inline-block category-link">--}}
{{--                        <a href="{{ route('category',['location' => $category->location,'slug' => $category->slug]) }}" class="pl-4">{{ $category->featured->title }}</a>--}}
{{--                    </h4>--}}
{{--                </div>--}}
{{--            @endforeach--}}
{{--        </div>--}}
{{--    </section>--}}

{{--    <section class="max-w-7xl mx-auto px-8 sm:px-16 illustration-box relative grid grid-cols-3 grid-flow-row auto-rows-max md:grid-cols-7 md:grid-rows-6 h-full my-6 gap-x-4 max-h-[70vh]" id="section">--}}
    <section class="max-w-7xl mx-auto px-8 illustration-box relative grid grid-flow-row auto-rows-max grid-cols-3 md:grid-cols-2 h-full my-6 gap-x-4 max-h-[60vh]" id="section">
{{--        <div class="col-span-full md:col-span-4 md:row-span-full my-12 min-h-[350px] md:max-h-[450px] lg:max-h-full" id="container">--}}
{{--        <div class="col-span-full md:col-span-4 md:row-span-full min-h-[350px] md:max-h-[450px] lg:max-h-full" id="container">--}}
        <div class="col-span-full md:col-span-1 md:row-span-full min-h-[50vh] md:min-h-[60vh] lg:max-h-full my-12 md:my-0" id="container">
{{--            <div id="info">Description</div>--}}
{{--            @include('svg/house')--}}
        </div>

        <div class="hidden md:flex justify-between flex-col">
            @foreach($categories as $key => $category)
                <div class="text-center md:col-start-5 md:col-end-8 @if($key <= 2) order-first md:order-none @endif">
{{--                    <h4 id="cat-{{ $key }}" class="text-white lg:text-2xl inline-block category-link">--}}
{{--                    <h4 id="cat-{{ $key }}" class="text-white lg:text-2xl inline-block">--}}
                    <h4 data-cat="cat-{{ $key }}"  class="text-white lg:text-xl inline-block font-light">
                        <a href="{{ route('category',['location' => $category->location,'slug' => $category->slug]) }}" data-cat="{{ $key }}" class="lg:pl-4 hover:text-roman category-link">{{ $category->title }}</a>
                    </h4>
                </div>
            @endforeach
        </div>

        @foreach($categories as $key => $category)
            <div class="md:hidden text-center md:col-start-5 md:col-end-8 @if($key <= 2) order-first md:order-none @endif">
                {{--                    <h4 id="cat-{{ $key }}" class="text-white lg:text-2xl inline-block category-link">--}}
                {{--                    <h4 id="cat-{{ $key }}" class="text-white lg:text-2xl inline-block">--}}
                <h4 data-cat="cat-{{ $key }}"  class="text-white lg:text-xl inline-block font-light">
                    <a href="{{ route('category',['location' => $category->location,'slug' => $category->slug]) }}" data-cat="{{ $key }}" class="lg:pl-4 hover:text-roman category-link">{{ $category->title }}</a>
                </h4>
            </div>
        @endforeach
    </section>
@endsection

@section('assets')
{{--    <script>--}}
{{--        var elements = document.getElementsByClassName('category-link');--}}
{{--        let house = document.querySelector('#house-path');--}}

{{--        for(const [key, value] of Object.entries(elements)) {--}}
{{--            if(key <= 5) {--}}
{{--                let startPath = value;--}}
{{--                let endPath = house.querySelector('#' + value.id);--}}

{{--                if(endPath) {--}}
{{--                    const line = new LeaderLine(startPath,endPath,{--}}
{{--                        startPlug: 'behind',--}}
{{--                        endPlug: 'disc',--}}
{{--                        endPlugSize: 5,--}}
{{--                        color: 'white',--}}
{{--                        size: 1,--}}
{{--                        hoverStyle: {color:'red'},--}}
{{--                    })--}}
{{--                    value.addEventListener('mouseover',function () {--}}
{{--                        line.color = '#DA6C56';--}}
{{--                    },true)--}}
{{--                    value.addEventListener('mouseleave',function () {--}}
{{--                        line.color = 'white';--}}
{{--                    })--}}
{{--                }--}}
{{--            }--}}
{{--        }--}}
{{--    </script>--}}
    <script src="{{mix('js/house.js')}}"></script>
<script>
    // window.addEventListener('mousemove',function (e) {
    //     console.log(e)
    // })
</script>
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

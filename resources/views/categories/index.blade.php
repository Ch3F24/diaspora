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
    <section class="max-w-7xl mx-auto px-8 sm:px-16 illustration-box relative grid grid-cols-3 grid-flow-row auto-rows-max md:grid-cols-7 md:grid-rows-6 h-full my-6 gap-x-4">
        <div class="col-span-full md:col-span-4 md:row-span-full my-12">
            @include('svg/house')
        </div>
            @foreach($categories as $key => $category)
                <div class="text-center md:col-start-5 md:col-end-8 @if($key <= 2) order-first md:order-none @endif">
                    <h4 id="cat-{{ $key }}" class="text-white lg:text-2xl inline-block category-link">
                        <a href="{{ route('category',['location' => $category->location,'slug' => $category->slug]) }}" class="lg:pl-4 hover:text-roman">{{ $category->title }}</a>
                    </h4>
                </div>
            @endforeach
    </section>
@endsection

@section('assets')
    <script>
        var elements = document.getElementsByClassName('category-link');
        let house = document.querySelector('#house-path');

        for(const [key, value] of Object.entries(elements)) {
            if(key <= 5) {
                let startPath = value;
                let endPath = house.querySelector('#' + value.id);

                if(endPath) {
                    const line = new LeaderLine(startPath,endPath,{
                        startPlug: 'behind',
                        endPlug: 'disc',
                        endPlugSize: 5,
                        color: 'white',
                        size: 1,
                        hoverStyle: {color:'red'},
                    })
                    value.addEventListener('mouseover',function () {
                        line.color = '#DA6C56';
                    },true)
                    value.addEventListener('mouseleave',function () {
                        line.color = 'white';
                    })
                }
            }
        }
    </script>
@endsection

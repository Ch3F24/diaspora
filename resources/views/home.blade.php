@extends('layouts.app')

@section('content')
{{--    <section class="max-w-7xl mx-auto px-8 sm:px-16 illustration-box relative flex h-full my-6">--}}
{{--        <div class="w-full lg:w-7/12 lg:mr-8">--}}
{{--            <h4  class="text-white text-2xl my-6 lg:hidden">--}}
{{--                <a href="{{ route('location','wintondale') }}" id="winton-link" class="pr-6">{{ __('Wintondale') }}</a>--}}
{{--            </h4>--}}

{{--            @include('svg/globe')--}}

{{--            <h4  class="text-white text-2xl my-6 lg:hidden text-right">--}}
{{--                <a href="{{ route('location','argentine') }}" id="argentine-link">{{ __('Argentine') }}</a>--}}
{{--            </h4>--}}
{{--        </div>--}}
{{--        <div class="w-5/12 hidden lg:flex justify-around flex-col">--}}
{{--            <div class="text-center">--}}
{{--                <h4 id="winton-link" class="text-white text-2xl inline-block">--}}
{{--                    <a href="{{ route('location','wintondale') }}" class="pl-4">{{ __('Wintondale') }}</a>--}}
{{--                </h4>--}}
{{--            </div>--}}
{{--            <div class="text-center">--}}
{{--                <h4 id="argentine-link" class="text-white text-2xl inline-block">--}}
{{--                    <a href="{{ route('location','argentine') }}" class="pl-4">{{ __('Argentine') }}</a>--}}
{{--                </h4>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </section>--}}

    <section class="max-w-7xl mx-auto px-8 illustration-box relative grid grid-cols-1 grid-flow-row auto-rows-max md:grid-cols-7 md:grid-rows-6 h-full my-6 gap-x-4">
        <div class="col-span-full md:col-span-4 md:row-span-full my-12">
            @include('svg/globe')
        </div>

        <div class="md:text-center md:col-start-5 md:col-end-7 order-first md:order-none">
            <h4 id="winton-link" class="text-white text-xl inline-block font-light">
                <a href="{{ route('location','wintondale') }}" class="pl-4">{{ __('Wintondale') }}</a>
            </h4>
        </div>

{{--        <div class="text-right md:text-center md:col-start-5 md:col-end-7 order-last md:order-none">--}}
{{--            <h4 id="argentine-link" class="text-white text-xl inline-block">--}}
{{--                <a href="{{ route('location','argentine') }}" class="pl-4">{{ __('Argentine') }}</a>--}}
{{--            </h4>--}}
{{--        </div>--}}
    </section>
@endsection
@section('assets')
{{--    <script src="{{mix('js/house.js')}}"></script>--}}
@endsection

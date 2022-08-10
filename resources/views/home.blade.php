@extends('layouts.app')

@section('content')
    <section class="max-w-7xl mx-auto px-8 illustration-box relative grid grid-cols-1 grid-flow-row auto-rows-max md:grid-cols-7 md:grid-rows-6 h-full my-6 gap-x-4">
        <div class="col-span-full md:col-span-4 md:row-span-full my-12">
            @include('svg/globe')
        </div>

        <div class="md:col-start-5 md:col-end-7 order-first md:order-none">
            <h4 id="winton-link" class="text-white text-xl inline-block font-light">
                <a href="{{ route('location','wintondale') }}">{{ __('Vintondale') }}</a>
            </h4>
        </div>
        <div class="md:col-start-5 md:col-end-7 md:row-start-6 order-first md:order-none">
            <h4 id="argentine-link" class="text-white text-xl inline-block font-light">
                <a href="{{ route('location','argentine') }}">{{ __('Argentine') }}</a>
            </h4>
        </div>
{{--        <div class="text-right md:text-center md:col-start-5 md:col-end-7 order-last md:order-none">--}}
{{--            <h4 id="argentine-link" class="text-white text-xl inline-block">--}}
{{--                <a href="{{ route('location','argentine') }}" class="pl-4">{{ __('Argentine') }}</a>--}}
{{--            </h4>--}}
{{--        </div>--}}
    </section>
    <div class="max-w-7xl mx-auto px-8">
        <a class="md:w-5/12 ml-auto block" href="https://skanzen.hu/" target="_blank">
            <img src="{{ asset('images/skanzen_logo.svg') }}" alt="Logo" width="200">
        </a>
    </div>
@endsection
@section('assets')
{{--    <script src="{{mix('js/house.js')}}"></script>--}}
@endsection

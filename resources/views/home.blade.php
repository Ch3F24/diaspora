@extends('layouts.app')

@section('content')
    <section class="max-w-7xl mx-auto px-8 sm:px-16 illustration-box relative flex" >
        <div class="w-7/12 mr-8">
{{--            <img src="{{ asset('svg/foldgomb.svg') }}" alt="Földgömb" id="illustration">--}}
            @include('svg/globe')
        </div>
        <div class="w-5/12 flex justify-around flex-col">
            <div class="text-center">
                <h4 id="winton-link" class="text-white text-2xl inline-block">
                    <a href="{{ route('location','wintondale') }}" class="pl-4">{{ __('Wintondale') }}</a>
                </h4>
            </div>
            <div class="text-center">
                <h4 id="argentine-link" class="text-white text-2xl inline-block">
                    <a href="{{ route('location','argentine') }}" class="pl-4">{{ __('Argentine') }}</a>
                </h4>
            </div>
        </div>
    </section>
@endsection

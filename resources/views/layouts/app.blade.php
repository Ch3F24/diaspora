<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ __('Diaspora') }}</title>
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body class="bg-midnight flex flex-col min-h-screen" x-data="{ atTop: true }">

        @include('partials/_nav',['page_title' => $page_title])

        <main class="flex-1" id="app">
            @yield('content')
        </main>

        @include('partials/_footer')
    </body>
{{--    <script src="{{url('node_modules/leader-line/leader-line.min')}}"></script>--}}
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="{{mix('js/leader-line.min.js')}}"></script>
    <script src="{{mix('js/app.js')}}"></script>

    @yield('assets')

</html>

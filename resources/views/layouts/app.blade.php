<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ __('Diaspora') }}</title>
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body class="bg-midnight flex flex-col" x-data="{ atTop: true }" style="height: 200vh">

        @include('partials/_nav')

        <main class="flex-1">
            @yield('content')
        </main>

        @include('partials/_footer')
    </body>
    <script src="//unpkg.com/alpinejs" defer></script>
</html>

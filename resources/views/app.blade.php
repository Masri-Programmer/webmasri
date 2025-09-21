<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index, follow">
    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title inertia>{{ config('app.name', 'Masri Programmer') }}</title>
    <link rel="icon" type="image/svg+xml" href="{{ Vite::asset('resources/js/images/favicon/favicon.svg') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ Vite::asset('resources/js/images/favicon/favicon-16x16.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ Vite::asset('resources/js/images/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="48x48" href="{{ Vite::asset('resources/js/images/favicon/favicon-48x48.png') }}">
    <link rel="icon" type="image/x-icon" href="{{ Vite::asset('resources/js/images/favicon/favicon.ico') }}">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- SEO Meta Tags (Defaults) --}}
    <title inertia>{{ config('app.name', 'Masri Programmer') }}</title>
    <meta name="description" content="{{ __('meta.description') }}">
    <meta name="robots" content="index, follow">
    <meta name="Robots" content="noarchive, index, noodp" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="format-detection" content="telephone=no" />

    {{-- Open Graph / Facebook (Defaults) --}}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="{{ config('app.name', 'Masri Programmer') }}">
    <meta property="og:title" content="{{ config('app.name', 'Masri Programmer') }}">
    <meta property="og:description" content="{{ __('meta.description') }}">
    <meta property="og:url" content="{{ config('app.url') }}">
    <meta property="og:image" content="{{ asset('512x512_logo_dark_bg.png') }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    {{-- Twitter Card (Defaults) --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ config('app.name', 'Masri Programmer') }}">
    <meta name="twitter:description" content="{{ __('meta.description') }}">
    <meta name="twitter:url" content="{{ config('app.url') }}">
    <meta name="twitter:image" content="{{ asset('512x512_logo_dark_bg.png') }}">
    <meta name="Keywords" content="{{ __('meta.keywords') }}" />
    {{-- <meta name="google-site-verification" content="iCcrPrMgr_qMdFV9t4YMYvsKuAC-eTXqJdCCl9xv8uM" />  --}}

    <meta name="geo.region" content="DE-BR" />
    <meta name="geo.placename" content="Nettelbeckstraße, Oldenburg, Deutschland" />
    <meta name="geo.position" content="53.140118, 8.188813" />
    <meta property="thumbnail" content="{{ asset('512x512_logo_dark_bg.png') }}" />

    {{-- Dark Mode Script --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            }
        })();
    </script>

    {{-- Google Tag --}}
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17533527004"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'AW-17533527004');
    </script>

    {{-- Background Color Style --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    {{-- Icons & Manifest --}}
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="icon" type="image/png" sizes="48x48" href="{{ asset('favicon-48x48.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="alternate" hreflang="de" href="https://www.masriprogrammer.de" />

    <!-- {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
     -->

    @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
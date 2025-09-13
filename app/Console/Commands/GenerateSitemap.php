<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Post; // Assuming you have a Post model for a blog

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap for the website';

    public function handle()
    {
        $sitemap = Sitemap::create();

        // 1. Add static pages using your type-safe routes
        $sitemap->add(
            Url::create(route('home'))
                ->setPriority(1.0)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
        );

        // $sitemap->add(
        //     Url::create(route('about'))
        //         ->setPriority(0.8)
        //         ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        // );

        // $sitemap->add(
        //     Url::create(route('contact'))
        //         ->setPriority(0.8)
        //         ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
        // );


        // 2. Add dynamic pages from your database
        // Example for a blog
        // $posts = Post::all();
        // foreach ($posts as $post) {
        //     $sitemap->add(
        //         Url::create(route('posts.show', $post)) // Assuming a route name 'posts.show'
        //             ->setLastModificationDate($post->updated_at)
        //             ->setPriority(0.9)
        //             ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
        //     );
        // }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully!');

        return 0;
    }
}
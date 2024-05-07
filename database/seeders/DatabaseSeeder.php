<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Database\Factories\ProjectFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Shark',
            'email' => 'shark@example.com',
            'password' => bcrypt('shark0910'),
            'role' => 'admin',
            'role_id' => 1,
            'email_verified_at' => time(),
        ]);

        User::factory()->create([
            'name' => 'Panda',
            'email' => 'panda@example.com',
            'password' => bcrypt('panda1234'),
            'role' => 'user',
            'role_id' => 2,
            'email_verified_at' => time(),
        ]);

        Project::factory()
            ->count(5)
            ->hasTask(6)
            ->create();
    }
}

<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('DeviceTableSeeder');
		$this->command->info('Device table seeded!');

		Eloquent::unguard();
		
		$this->call('ScheduleTableSeeder');
		$this->command->info('Schedule table seeded!');
	}

}
<?php

class ScheduleTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
    {
        DB::table('schedules')->delete();

        // My Setup
        Schedule::create(array('device_id' => 1, 'day' => 0, 'hour' => 8, 'duration' => 60*60*14));
        Schedule::create(array('device_id' => 2, 'day' => 0, 'hour' => 9, 'duration' => 30));
        Schedule::create(array('device_id' => 2, 'day' => 0, 'hour' => 18, 'duration' => 30));

        // My Dad's Setup
        // Schedule::create(array('device_id' => 1, 'day' => 2, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 1, 'day' => 1, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 2, 'day' => 2, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 3, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 4, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 5, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 6, 'hour' => 9, 'duration' => 60*60*12));
        // Schedule::create(array('device_id' => 7, 'day' => 3, 'hour' => 9, 'duration' => 5));
        // Schedule::create(array('device_id' => 8, 'hour' => 9, 'duration' => 60*60*12));
    }
}

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

        Schedule::create(array('device_id' => 1, 'hour' =>  9, 'duration' => 60*60*12));
        Schedule::create(array('device_id' => 2, 'hour' =>  0, 'duration' => 60*60*12));
        Schedule::create(array('device_id' => 3, 'day' => 'Mon', 'hour' => 20, 'duration' => 3600));
        Schedule::create(array('device_id' => 3, 'day' => 'Wed', 'hour' => 10, 'duration' => 5));
        Schedule::create(array('device_id' => 3, 'day' => 'Fri', 'hour' => 10, 'duration' => 5));
    }


}
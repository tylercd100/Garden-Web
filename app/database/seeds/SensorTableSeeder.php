<?php

class SensorTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
    {
        DB::table('sensors')->delete();

        Sensor::create(array('pin'=>2,'location' => 'inside', 'name' => 'Inside Temperature',   'type' => 'temperature',	'value' => '70'));
        Sensor::create(array('pin'=>2,'location' => 'inside', 'name' => 'Inside Humidity',   'type' => 'humidity',	'value' => '70'));
        // Sensor::create(array('pin'=>1, 	'name' => 'Inside Temperature',   'type' => 'temperature',	'value' => '70'));
        // Sensor::create(array('pin'=>2, 	'name' => 'Outside Temperature',  'type' => 'temperature',	'value' => '60'));
    }	


}
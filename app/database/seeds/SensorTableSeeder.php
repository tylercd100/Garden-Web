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

        // My Setup
        Sensor::create(array('pin'=>0,'location' => 'inside', 'name' => 'Inside Light',   'type' => 'light',    'value' => '0'));
        // Sensor::create(array('pin'=>1,'location' => 'inside', 'name' => 'Inside Something',   'type' => 'something',    'value' => '0'));
        // Sensor::create(array('pin'=>2,'location' => 'inside', 'name' => 'Inside Humidity',   'type' => 'humidity',	'value' => '70'));
        
        // My Dad's Setup
        // Sensor::create(array('pin'=>1, 'location' => 'inside',  'name' => 'Inside Temperature',  'type' => 'temperature', 'value' => '60'));
        // Sensor::create(array('pin'=>1, 'location' => 'inside',  'name' => 'Inside Humidity',     'type' => 'humidity',    'value' => '20'));
        // Sensor::create(array('pin'=>2, 'location' => 'outside', 'name' => 'Outside Temperature', 'type' => 'temperature', 'value' => '50'));
        // Sensor::create(array('pin'=>2, 'location' => 'outside', 'name' => 'Outside Humidity',    'type' => 'humidity',    'value' => '25'));
        // Sensor::create(array('pin'=>3, 'location' => 'ground',  'name' => 'Ground Temperature',  'type' => 'temperature', 'value' => '70'));
        // Sensor::create(array('pin'=>3, 'location' => 'ground',  'name' => 'Ground Humidity',     'type' => 'humidity',    'value' => '30'));
    }	


}
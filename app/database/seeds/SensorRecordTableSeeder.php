<?php

class SensorRecordTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
    {
        DB::table('sensor_records')->delete();

        // My Setup
        for($j = 1; $j <= 2; $j+=1){
            $date = new DateTime('7 days ago');
            for($i = 0; $i < 4*24*7; $i+=1){
                SensorRecord::create(array('sensor_id'=>$j, 'type' => 'something',	'value' => rand(0,100), 'created_at' => $date->format('Y-m-d H:i:s')));
                date_add($date,date_interval_create_from_date_string('15 minutes'));
            }
        }
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